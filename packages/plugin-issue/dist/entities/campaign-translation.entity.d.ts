import type { Translation } from '@vendure/core';
import { DeepPartial, LanguageCode, VendureEntity } from '@vendure/core';
import { Relation } from 'typeorm';
import { Campaign } from './campaign.entity.js';
/**
 * @description This entity represents a front end campaign
 *
 * @docsCategory entities
 */
export declare class CampaignTranslation extends VendureEntity implements Translation<Campaign> {
    constructor(input?: DeepPartial<Translation<Campaign>>);
    languageCode: LanguageCode;
    name: string;
    base: Relation<Campaign>;
}
