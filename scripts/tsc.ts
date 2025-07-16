#!/usr/bin/env node

import { execSync } from 'child_process';
import minimist from 'minimist';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { minify } from './minify.js';

const getDirname = (url: string, ...paths: string[]) => {
  return join(dirname(fileURLToPath(url)), ...paths);
};

interface TscOptions {
  includes?: string[];
  watch?: boolean;
  clean?: boolean;
  minify?: boolean;
}

class TypeScriptCompiler {
  private projectRoot: string;
  private defaultOptions: TscOptions;

  constructor(projectRoot: string = process.cwd()) {
    this.projectRoot = projectRoot;
    this.defaultOptions = {
      includes: ['src/**/*'],
      watch: false,
      clean: true,
      minify: true,
    };
  }

  /**
   * Compile TypeScript with custom configuration
   */
  async compile(options: TscOptions = {}): Promise<void> {
    const mergedOptions = { ...this.defaultOptions, ...options };

    if (mergedOptions.clean) {
      this.cleanOutputDirectory('dist');
    }

    const configPath = await this.createTemporaryConfig(mergedOptions);

    try {
      const tscArgs = this.buildTscArguments(configPath, mergedOptions);
      console.log(
        `🔨 Compiling TypeScript with includes: ${mergedOptions.includes?.join(', ')}`
      );

      execSync(`npx tsc ${tscArgs.join(' ')}`, {
        stdio: 'inherit',
        cwd: this.projectRoot,
      });

      console.log('✅ TypeScript compilation completed successfully!');

      // Minify output files if requested
      if (mergedOptions.minify) {
        console.log('🔨 Minifying compiled files...');
        minify('dist');
        console.log('✅ Minification completed successfully!');
      }
    } catch (error) {
      console.error('❌ TypeScript compilation failed:', error);
      throw error;
    } finally {
      // Clean up temporary config file
      if (existsSync(configPath)) {
        execSync(`rm ${configPath}`);
      }
    }
  }

  /**
   * Create a temporary tsconfig.json for compilation
   */
  private async createTemporaryConfig(options: TscOptions): Promise<string> {
    const baseConfig = JSON.parse(
      // tsconfig.base.json use __dirname to get the project root
      readFileSync(getDirname(import.meta.url, '../tsconfig.base.json'), 'utf8')
    );

    const tempConfig = {
      ...baseConfig,
      compilerOptions: {
        ...baseConfig.compilerOptions,
        incremental: false,
        moduleResolution: 'nodenext',
        verbatimModuleSyntax: false,
        declaration: true,
        sourceMap: false,
        noEmit: false,
        rootDir: './src',
        outDir: './dist',
        baseUrl: './',
        paths: {},
      },
      include: options.includes,
      exclude: [
        '**/node_modules',
        '**/dist',
        '**/build',
        '**/.*/',
        '**/dashboard/*',
      ],
    };

    const tempConfigPath = join(this.projectRoot, 'tsconfig.temp.json');
    writeFileSync(tempConfigPath, JSON.stringify(tempConfig, null, 2));

    return tempConfigPath;
  }

  /**
   * Build tsc command line arguments
   */
  private buildTscArguments(configPath: string, options: TscOptions): string[] {
    const args = [`--project ${configPath}`];

    if (options.watch) {
      args.push('--watch');
    }

    return args;
  }

  /**
   * Clean output directory
   */
  private cleanOutputDirectory(outDir: string): void {
    const fullOutDir = join(this.projectRoot, outDir);
    if (existsSync(fullOutDir)) {
      console.log(
        `🧹 Cleaning output directory: ${basename(this.projectRoot)}/${outDir}`
      );
      execSync(`rm -rf ${fullOutDir}`);
    }
  }
}

// CLI interface
async function main() {
  const argv = minimist(process.argv.slice(2), {
    string: ['includes'],
    boolean: ['watch', 'clean', 'minify', 'help'],
    alias: {
      i: 'includes',
      w: 'watch',
      h: 'help',
    },
    default: {
      clean: true,
      minify: true,
    },
  });

  // Show help if requested
  if (argv.help) {
    showHelp();
    return;
  }

  // Parse options
  const options: TscOptions = {};

  if (argv.includes) {
    options.includes = (
      Array.isArray(argv.includes) ? argv.includes : argv.includes.split(',')
    ).map((include) => include.trim());
  }

  if (argv.watch) {
    options.watch = true;
  }

  if (argv.clean !== undefined) {
    options.clean = argv.clean;
  }

  if (argv.minify !== undefined) {
    options.minify = argv.minify;
  }

  const compiler = new TypeScriptCompiler();

  try {
    await compiler.compile(options);
  } catch (error) {
    console.error('Compilation failed:', error);
    process.exit(1);
  }
}

function showHelp() {
  console.log(`
TypeScript Compiler Script

Usage: node scripts/tsc.ts [options]

Options:
  -i, --includes <files>    Include patterns (comma-separated) (default: src/**/*)
  -w, --watch               Watch mode
  --minify                  Minify output files after compilation
  --clean                   Clean output directory before compilation (default: true)
  --no-clean                Don't clean output directory before compilation
  -h, --help                Show this help

Examples:
  # Basic compilation with defaults
  node scripts/tsc.ts

  # Compile with custom includes
  node scripts/tsc.ts --includes "src/**/*,index.ts,lib/**/*"

  # Watch mode compilation
  node scripts/tsc.ts --watch --includes "src/**/*"

  # Clean build with minification
  node scripts/tsc.ts --clean --minify --includes "src/**/*,tests/**/*"

  # Build without cleaning but with minification
  node scripts/tsc.ts --no-clean --minify

  # Minify only (after compilation)
  node scripts/tsc.ts --minify
`);
}

// Run the script if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { type TscOptions, TypeScriptCompiler };
