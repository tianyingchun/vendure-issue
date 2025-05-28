import { bootstrap, JobQueueService } from '@vendure/core';
import { config } from './config.js';

/**
 * This bootstraps the dev server, used for testing Vendure during development.
 */
bootstrap(config)
  .then((app) => {
    if (process.env.RUN_JOB_QUEUE !== 'false') {
      void app.get(JobQueueService).start();
    }
    if (process.env.POPULATE === 'true') {
      console.log(`populate data ok`);
    }
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
