import { ConfigService } from '@vendure/core';
import type { PluginInitOptions } from './types.js';
export declare class PluginIssue {
    private configService;
    constructor(configService: ConfigService);
    static options: PluginInitOptions;
    /**
     * The static `init()` method is a convention used by Vendure plugins which allows options
     * to be configured by the user.
     */
    static init(options: Partial<PluginInitOptions>): typeof PluginIssue;
}
