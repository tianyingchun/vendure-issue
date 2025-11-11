import { gql } from 'graphql-tag';
import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { PLUGIN_INIT_OPTIONS } from './constants.js';
import { getDirname } from './get-dirname.js';
import { PublicCustomerGroupsResolver } from './public-customer-groups.resolver.js';
import type { PluginInitOptions } from './types.js';

const services = [];

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    resolvers: [PublicCustomerGroupsResolver],
    schema: gql`
      extend type Customer {
        customerGroups: [CustomerGroup!]!
      }
    `,
  },
  providers: [
    ...services,

    // By definiting the `PLUGIN_INIT_OPTIONS` symbol as a provider, we can then inject the
    // user-defined options into other classes, such as the {@link ExampleService}.
    {
      provide: PLUGIN_INIT_OPTIONS,
      useFactory: () => MyPlugin.options,
    },
  ],
  configuration: (config) => {
    config.customFields.CustomerGroup.push({
      name: 'isPublic',
      type: 'boolean',
      public: false,
    });
    return config;
  },
  dashboard: './dashboard/index.tsx',
})
export class MyPlugin {
  static options: PluginInitOptions = {
    projectDir: getDirname(import.meta.url, '../templates'),
  };

  /**
   * The static `init()` method is a convention used by Vendure plugins which allows options
   * to be configured by the user.
   */
  static init(options: Partial<PluginInitOptions>) {
    this.options = { ...MyPlugin.options, ...options };
    return MyPlugin;
  }
}
