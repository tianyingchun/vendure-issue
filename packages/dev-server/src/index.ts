import { bootstrap, JobQueueService } from '@vendure/core';
import { config } from './config';
import { populateData } from './populate';

/**
 * This bootstraps the dev server, used for testing Vendure during development.
 */
bootstrap(config)
  .then((app) => {
    if (process.env.RUN_JOB_QUEUE !== 'false') {
      void app.get(JobQueueService).start();
    }
    if (process.env.POPULATE === 'true') {
      populateData(app)
        .then(() => {
          console.log(`populate data ok`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
