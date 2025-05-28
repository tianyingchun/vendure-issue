import type { VendureConfig } from '@vendure/core';
import {
  DefaultJobQueuePlugin,
  DefaultLogger,
  DefaultSchedulerPlugin,
  LogLevel,
} from '@vendure/core';
import { GraphiqlPlugin } from '@vendure/graphiql-plugin';
import { MyPlugin } from '@vendure/my-plugin';
import { getDirname } from './get-dir-name.js';
export const config: VendureConfig = {
  apiOptions: {
    port: 3001,
  },
  paymentOptions: {
    paymentMethodHandlers: [],
  },
  authOptions: {
    disableAuth: false,
    tokenMethod: ['cookie', 'bearer'],
    authTokenHeaderKey: 'auth-token',
    // keep 1 month
    sessionCacheTTL: 60 * 60 * 24 * 30,
    superadminCredentials: {
      identifier: 'superadmin',
      password: 'superadmin',
    },
  },
  dbConnectionOptions: {
    type: 'sqlite',
    entityPrefix: 'vendure_issue_',
    synchronize: true,
    database: getDirname(import.meta.url, 'vendure-issue.db'),
  },
  logger: new DefaultLogger({
    level: LogLevel.Debug,
  }),
  plugins: [
    MyPlugin.init({}),
    GraphiqlPlugin.init({}),
    DefaultJobQueuePlugin.init({}),
    DefaultSchedulerPlugin.init({}),
  ],
};
