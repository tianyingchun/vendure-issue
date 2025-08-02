import { program } from 'commander';
import fs from 'fs';
import { join } from 'path';
import {
  generateMigration,
  revertLastMigration,
  runMigrations,
} from '@vendure/core';
import { vendureConfig } from './config.js';

program
  .command('generate <name>')
  .description('Generate a new migration file with the given name')
  .action((name) => {
    void generateMigration(vendureConfig, { name, outputDir: './migrations' });
  });

program
  .command('run')
  .description('Run all pending migrations')
  .action(() => {
    void runMigrations(vendureConfig);
  });

program
  .command('revert')
  .description('Revert the last applied migration')
  .action(() => {
    void revertLastMigration(vendureConfig);
  });

function exec() {
  fs.rmSync(join(__dirname, '../migrations'), {
    recursive: true,
    force: true,
  });
  const argv = process.argv;
  program.parse(argv);
}

exec();
