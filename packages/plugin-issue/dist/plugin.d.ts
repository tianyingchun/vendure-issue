import { CampaignService } from './services/campaign.service.js';
import type { PluginInitOptions } from './types.js';
export declare class PluginIssue {
    private campaignService;
    static options: PluginInitOptions;
    constructor(campaignService: CampaignService);
    /**
     * The static `init()` method is a convention used by Vendure plugins which allows options
     * to be configured by the user.
     */
    static init(options: Partial<PluginInitOptions>): typeof PluginIssue;
    onApplicationBootstrap(): Promise<void>;
}
