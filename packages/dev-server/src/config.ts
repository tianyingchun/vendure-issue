/* eslint-disable @typescript-eslint/naming-convention */
import { IssueSupplierPlugin } from '@issue/plugin-supplier';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import type { VendureConfig } from '@vendure/core';
import { DefaultLogger, LogLevel } from '@vendure/core';

export const config: VendureConfig = {
  apiOptions: {
    port: 3001,
    shopListQueryLimit: 100000,
    adminListQueryLimit: 100000,
    adminApiPlayground: {
      settings: {
        'request.credentials': 'include',
      },
    },
    adminApiDebug: true,
    shopApiPlayground: {
      settings: {
        'request.credentials': 'include',
      },
    },
    shopApiDebug: true,
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
    type: 'mysql',
    port: 3306,
    timezone: 'Z',
    database: 'vendure-issue',
    host: '127.0.0.1',
    username: 'root',
    password: 'root',
    entityPrefix: 'vendure_issue_',
    synchronize: true,
    charset: 'utf8mb4',
  },
  logger: new DefaultLogger({
    level: LogLevel.Debug,
  }),
  plugins: [
    AdminUiPlugin.init({
      port: 3002,
      route: 'oldAdmin',
    }),
    IssueSupplierPlugin.init({}),
  ],
};
