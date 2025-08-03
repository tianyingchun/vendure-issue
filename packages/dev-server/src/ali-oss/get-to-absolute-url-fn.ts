import { type Request } from 'express';
import { type AssetServerOptions } from '@vendure/asset-server-plugin';
import { getAssetUrlPrefixFn } from './get-asset-url-prefix-fn.js';
import { urlJoin } from './url-join.js';

export const getToAbsoluteUrlFn = (
  options: Pick<AssetServerOptions, 'assetUrlPrefix' | 'route'>
) => {
  const prefixFn = getAssetUrlPrefixFn(options);
  const toAbsoluteUrlFn = (request: Request, identifier: string): string => {
    if (!identifier) {
      return '';
    }
    const prefix = prefixFn(request, identifier);
    return identifier.startsWith(prefix)
      ? identifier
      : urlJoin(prefix, [identifier]);
  };
  return toAbsoluteUrlFn;
};
