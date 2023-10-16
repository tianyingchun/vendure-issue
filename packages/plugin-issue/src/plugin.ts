import {
  ConfigService,
  PluginCommonModule,
  VendurePlugin,
} from '@vendure/core';
import { CampaignAdminResolver } from './api/resolvers/campaign.resolver.js';
import { adminApiExtensions } from './api/schema/index.js';
import { PLUGIN_INIT_OPTIONS } from './constants.js';
import { CampaignTranslation } from './entities/campaign-translation.entity.js';
import { Campaign } from './entities/campaign.entity.js';
import { collectionCustomFields } from './entities/custom-fields-collection.entity.js';
import { CampaignService } from './services/campaign.service.js';
import type { PluginInitOptions } from './types.js';

const services = [CampaignService];

@VendurePlugin({
  imports: [PluginCommonModule],
  entities: [Campaign, CampaignTranslation],
  adminApiExtensions: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    schema: adminApiExtensions,
    // resolvers: [CampaignAdminResolver],
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
})
export class PluginIssue {
  constructor(private configService: ConfigService) {
    //
  }
  static options: PluginInitOptions = {
    autoDataInit: false,
  };

  /**
   * The static `init()` method is a convention used by Vendure plugins which allows options
   * to be configured by the user.
   */
  static init(options: Partial<PluginInitOptions>) {
    this.options = { ...PluginIssue.options, ...options };
    return PluginIssue;
  }
}
