import { join } from 'path';
import { MyPlugin } from '@hyperse/my-plugin';
import { AssetServerPlugin } from '@vendure/asset-server-plugin';
import type { VendureConfig } from '@vendure/core';
import {
  DefaultJobQueuePlugin,
  DefaultLogger,
  DefaultSchedulerPlugin,
  LogLevel,
} from '@vendure/core';
import { DashboardPlugin } from '@vendure/dashboard/plugin';
import { GraphiqlPlugin } from '@vendure/graphiql-plugin';
import { getDirname } from './get-dirname.js';

export const vendureConfig: VendureConfig = {
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
    database: join(process.cwd(), 'dev-server', 'vendure-issue.db'),
  },
  logger: new DefaultLogger({
    level: LogLevel.Debug,
  }),
  plugins: [
    AssetServerPlugin.init({
      route: 'assets',
      presets: [],
      previewMaxHeight: 1200,
      previewMaxWidth: 1200,
      assetUploadDir: join(process.cwd(), 'static', 'assets'),
    }),
    DashboardPlugin.init({
      route: 'dashboard',
      appDir: getDirname(import.meta.url, '../dist/dashboard'),
    }),
    MyPlugin.init({}),
    GraphiqlPlugin.init({}),
    DefaultJobQueuePlugin.init({}),
    DefaultSchedulerPlugin.init({}),
  ],
};
