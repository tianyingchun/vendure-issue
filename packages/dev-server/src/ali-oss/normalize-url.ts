export const baseURL = 'http://urlschema.org/';

export const normalizeUrl = (newUrl: string, oriUrl: string) => {
  const replacePattern = oriUrl.startsWith('/') ? '/' : '';
  return newUrl ? newUrl.replace(new RegExp(baseURL), replacePattern) : '';
};
