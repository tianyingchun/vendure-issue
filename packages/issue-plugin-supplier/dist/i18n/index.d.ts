import { i18nResources } from './resouces';
/**
 * Get i18nService resource define for vendure framework
 * @param lang
 * @returns
 */
export declare const getResource: (lang: keyof typeof i18nResources) => import("./i18n-types").I18nResources;
