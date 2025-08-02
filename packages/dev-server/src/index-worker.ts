import { bootstrapWorker } from '@vendure/core';
import { vendureConfig } from './config.js';

bootstrapWorker(vendureConfig)
  .then((worker) => worker.startJobQueue())
  .catch((err) => {
    console.log(err);
  });
