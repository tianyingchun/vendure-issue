import { bootstrapWorker } from '@vendure/core';
import { config } from './config.js';

bootstrapWorker(config)
  .then((worker) => worker.startJobQueue())
  .catch((err) => {
    console.log(err);
  });
