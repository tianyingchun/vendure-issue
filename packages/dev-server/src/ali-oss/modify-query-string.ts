import { baseURL, normalizeUrl } from './normalize-url.js';

export const modifyQueryString = (
  url: string,
  key: string,
  value: string | number
) => {
  if (!url) {
    return '';
  }
  if (!key) {
    return url;
  }
  const myUri = new URL(url, baseURL);
  myUri.searchParams.set(key, value.toString());
  return normalizeUrl(myUri.href, url);
};
