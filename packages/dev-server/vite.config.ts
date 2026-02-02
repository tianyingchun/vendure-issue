import { basename, join } from 'node:path';
import { defineConfig } from 'vite';
import { vendureDashboardPlugin } from '@vendure/dashboard/vite';
import { getDirname } from './src/get-dirname.js';

export default defineConfig({
  build: {
    outDir: getDirname(import.meta.url, 'dist/dashboard'),
  },
  plugins: [
    vendureDashboardPlugin({
      module: 'esm',
      tempCompilationDir: getDirname(import.meta.url, './.cache'),
      // The vendureDashboardPlugin will scan your configuration in order
      // to find any plugins which have dashboard extensions, as well as
      // to introspect the GraphQL schema based on any API extensions
      // and custom fields that are configured.
      vendureConfigPath: getDirname(import.meta.url, './src/config.ts'),
      pathAdapter: {
        getCompiledConfigPath: ({ outputPath, configFileName }) => {
          const pluginFolder = basename(getDirname(import.meta.url));
          const configPath = join(
            outputPath,
            pluginFolder,
            'src',
            configFileName
          );
          return configPath;
        },
        transformTsConfigPathMappings: ({ phase, patterns }) => {
         if (phase === 'loading') {
            return patterns.map((s) => s.replace('../', '../../'));
          }
          return patterns;
        },
      },
      pluginPackageScanner: {
        nodeModulesRoot: getDirname(import.meta.url, '../../node_modules'),
      },
      // Points to the location of your Vendure server.
      api: { host: 'http://localhost', port: 3001 },
      // When you start the Vite server, your Admin API schema will
      // be introspected and the types will be generated in this location.
      // These types can be used in your dashboard extensions to provide
      // type safety when writing queries and mutations.
      gqlOutputPath: './src/gql',
    }),
  ],
  resolve: {
    alias: {
      // This allows all plugins to reference a shared set of
      // GraphQL types.
      '@/gql': getDirname(import.meta.url, './src/gql/graphql.ts'),
    },
  },
});
