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
import { GraphiqlPlugin } from '@vendure/graphiql-plugin';
import { configureAliOssAssetStorage } from './ali-oss/configure-ali-oss-asset-storage.js';
import type { AliOssConfig } from './ali-oss/types.js';

const aliOssConfig: AliOssConfig = {
  secure: true,
  expiresInSeconds: 60 * 30,
  bucket: process.env.OSS_BUCKET!,
  endpoint: process.env.OSS_END_POINT,
  accessKeyId: process.env.OSS_ACCESS_KEY_ID!,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET!,
};

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
      // COMMENT this line npx vite works fine, if we have `storageStrategyFactory` the npx vite will hunning
      storageStrategyFactory: configureAliOssAssetStorage(aliOssConfig),
    }),
    MyPlugin.init({}),
    GraphiqlPlugin.init({}),
    DefaultJobQueuePlugin.init({}),
    DefaultSchedulerPlugin.init({}),
  ],
};
