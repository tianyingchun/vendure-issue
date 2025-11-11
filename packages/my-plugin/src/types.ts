/**
 * The plugin can be configured using the following options:
 */

export type PluginInitOptions = {
  projectDir: string;
};

declare module '@vendure/core/dist/entity/custom-entity-fields.js' {
  interface CustomCustomerGroupFields {
    isPublic: boolean;
  }
}
