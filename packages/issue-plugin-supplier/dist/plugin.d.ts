import type { OnApplicationBootstrap } from '@nestjs/common';
import { I18nService } from '@vendure/core';
import type { PluginInitOptions } from './types';
/**
 * A Vendure plugin to give glass product extension
 *
 * @example
 * ```TypeScript
 * export const config: VendureConfig = {
 *   //...
 *   plugins: [
 *     SemicSupplierPlugin.init({
 *
 *     }),
 *   ]
 * }
 * ```
 */
export declare class SemicSupplierPlugin implements OnApplicationBootstrap {
    private i18nService;
    static options: PluginInitOptions;
    constructor(i18nService: I18nService);
    /**
     * The static `init()` method is a convention used by Vendure plugins which allows options
     * to be configured by the user.
     */
    static init(options: Partial<PluginInitOptions>): typeof SemicSupplierPlugin;
    onApplicationBootstrap(): void;
}
