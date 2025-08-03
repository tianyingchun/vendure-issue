import { join } from 'node:path';

/**
 * Normalize file name prefix.
 * @param fileName The file name.
 * @param prefix The prefix.
 * @returns The normalized file name without prefix `/`.
 */
export const normalizeFileNamePrefix = (
  fileName: string,
  prefix: string = ''
) => {
  // clean prefix if have.
  const cleanPrefix = fileName.replace(
    new RegExp(`^(/${prefix}|${prefix})/`),
    ''
  );
  return join(prefix.replace(/^\//, ''), cleanPrefix);
};
