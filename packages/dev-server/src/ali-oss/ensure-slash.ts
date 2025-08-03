/**
 * make sure the endfix slash as expect.
 * @param str path fragment
 * @param options.slashEndfix flag to indicates if we need keep last slash `/` default false
 * @param options.slashPrefix flag to indicates if we need keep prefix slash `/`, default `undefined`
 */
export const ensureSlash = (
  str: string,
  options: { slashEndfix?: boolean; slashPrefix?: boolean } = {
    slashEndfix: false,
  }
): string => {
  str = str.replace(/\/$/, '');
  if (typeof options.slashPrefix !== 'undefined') {
    str = str.replace(/^\//, '');
  }
  str = options.slashEndfix ? str + '/' : str;
  str = options.slashPrefix ? '/' + str : str;
  return str;
};
