var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PluginIssue_1;
import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { CampaignAdminResolver } from './api/resolvers/campaign.resolver.js';
import { adminApiExtensions, shopApiExtensions } from './api/schema/index.js';
import { PLUGIN_INIT_OPTIONS } from './constants.js';
import { CampaignTranslation } from './entities/campaign-translation.entity.js';
import { Campaign } from './entities/campaign.entity.js';
import { collectionCustomFields } from './entities/custom-fields-collection.entity.js';
import { CampaignService } from './services/campaign.service.js';
const services = [CampaignService];
let PluginIssue = PluginIssue_1 = class PluginIssue {
    constructor(campaignService) {
        this.campaignService = campaignService;
    }
    /**
     * The static `init()` method is a convention used by Vendure plugins which allows options
     * to be configured by the user.
     */
    static init(options) {
        this.options = { ...PluginIssue_1.options, ...options };
        return PluginIssue_1;
    }
    async onApplicationBootstrap() {
        await this.campaignService.initCampaigns();
    }
};
PluginIssue.options = {
    autoDataInit: false,
};
PluginIssue = PluginIssue_1 = __decorate([
    VendurePlugin({
        imports: [PluginCommonModule],
        entities: [Campaign, CampaignTranslation],
        adminApiExtensions: {
            schema: adminApiExtensions,
            resolvers: [CampaignAdminResolver],
        },
        shopApiExtensions: {
            schema: shopApiExtensions,
        },
        compatibility: '>=2.0.0',
        providers: [
            ...services,
            // By definiting the `PLUGIN_INIT_OPTIONS` symbol as a provider, we can then inject the
            // user-defined options into other classes, such as the {@link ExampleService}.
            {
                provide: PLUGIN_INIT_OPTIONS,
                useFactory: () => PluginIssue.options,
            },
        ],
        configuration: (config) => {
            config.customFields.Collection.push(...collectionCustomFields);
            return config;
        },
    }),
    __metadata("design:paramtypes", [CampaignService])
], PluginIssue);
export { PluginIssue };
