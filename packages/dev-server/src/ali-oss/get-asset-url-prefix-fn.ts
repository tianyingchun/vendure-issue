import type { Request } from 'express';
import type { AssetServerOptions } from '@vendure/asset-server-plugin';
import { REQUEST_CONTEXT_KEY } from '@vendure/core/dist/common/constants.js';

export function getAssetUrlPrefixFn(
  options: Pick<AssetServerOptions, 'assetUrlPrefix' | 'route'>
) {
  const { assetUrlPrefix, route } = options;
  if (!assetUrlPrefix) {
    return (request: Request) =>
      `${request.protocol}://${request.get('host') as string}/${route}/`;
  }

  if (typeof assetUrlPrefix === 'string') {
    return () => assetUrlPrefix;
  }

  if (typeof assetUrlPrefix === 'function') {
    return (request: Request, identifier: string) => {
      const ctx = (request as any)[REQUEST_CONTEXT_KEY];
      return assetUrlPrefix(ctx, identifier);
    };
  }
  throw new Error(
    `The assetUrlPrefix option was of an unexpected type: ${JSON.stringify(
      assetUrlPrefix
    )}`
  );
}
