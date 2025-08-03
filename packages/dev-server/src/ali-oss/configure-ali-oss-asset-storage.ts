import type { AssetServerOptions } from '@vendure/asset-server-plugin';
import { AliOssAssetStorageStrategy } from './ali-oss-asset-storage-strategy.js';
import { getToAbsoluteUrlFn } from './get-to-absolute-url-fn.js';
import { type AliOssConfig } from './types.js';

/**
 * @example
 * ```ts
 * plugins: [
 * AssetServerPlugin.init({
 *    route: 'assets',
 *    assetUploadDir: join(packageDir, './static/assets'),
 *    storageStrategyFactory: configureAliOssAssetStorage({
 *      expiresInSeconds: 60 * 30,
 *      secure: true,
 *      bucket: process.env.OSS_BUCKET,
 *      endpoint: process.env.OSS_END_POINT,
 *      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
 *      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
 *    }),
 *  }),
 * }),
 * ```
 */
export function configureAliOssAssetStorage(ossConfig: AliOssConfig) {
  return (options: Pick<AssetServerOptions, 'assetUrlPrefix' | 'route'>) => {
    const toAbsoluteUrlFn = getToAbsoluteUrlFn(options);
    return new AliOssAssetStorageStrategy({
      ...ossConfig,
      prefix: options.route.replace(/^\//, ''),
      toAbsoluteUrl: toAbsoluteUrlFn,
    });
  };
}
