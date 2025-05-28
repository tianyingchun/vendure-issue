/**
 * The plugin can be configured using the following options:
 */

export type PluginInitOptions = object;

declare module '@vendure/core/dist/entity/custom-entity-fields.js' {
  interface CustomCustomerGroupFields {
    isPublic: boolean;
  }
}
