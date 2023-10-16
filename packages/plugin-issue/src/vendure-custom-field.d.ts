// Note: we are using deep a import here, rather than importing from `@vendure/core` due to
// a possible bug in TypeScript (https://github.com/microsoft/TypeScript/issues/46617) which
// causes issues when multiple plugins extend the same custom fields interface.
import { CustomCollectionFields } from '@vendure/core/dist/entity/custom-entity-fields.js';

/**
 * https://www.vendure.io/docs/developer-guide/customizing-models/
 * https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
 * https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
 */
declare module '@vendure/core/dist/entity/custom-entity-fields.js' {
  interface CustomCollectionFields {
    /**
     * 当前分类是否显示头部活动的配置.
     */
    campaign: Campaign;
  }
}
