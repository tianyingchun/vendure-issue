import fs from 'fs';
import { join } from 'path';
import {
  generateMigration,
  revertLastMigration,
  runMigrations,
} from '@vendure/core';
import { program } from 'commander';
import { config } from './config';

program
  .command('generate <name>')
  .description('Generate a new migration file with the given name')
  .action((name) => {
    void generateMigration(config, { name, outputDir: './migrations' });
  });

program
  .command('run')
  .description('Run all pending migrations')
  .action(() => {
    void runMigrations(config);
  });

program
  .command('revert')
  .description('Revert the last applied migration')
  .action(() => {
    void revertLastMigration(config);
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
