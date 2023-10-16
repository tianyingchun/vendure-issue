import type { ID, LocaleString, Translation } from '@vendure/core';
import { DeepPartial, Promotion, VendureEntity } from '@vendure/core';
/**
 * @description This entity represents a front end campaign
 *
 * @docsCategory entities
 */
export declare class Campaign extends VendureEntity {
    constructor(input?: DeepPartial<Campaign>);
    code: string;
    name: LocaleString;
    promotion: Promotion | null;
    promotionId: ID | null;
    translations: Array<Translation<Campaign>>;
}
