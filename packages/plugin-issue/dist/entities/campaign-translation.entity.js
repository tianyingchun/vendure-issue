var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LanguageCode, VendureEntity } from '@vendure/core';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Campaign } from './campaign.entity.js';
/**
 * @description This entity represents a front end campaign
 *
 * @docsCategory entities
 */
let CampaignTranslation = class CampaignTranslation extends VendureEntity {
    constructor(input) {
        super(input);
    }
};
__decorate([
    Column('varchar'),
    __metadata("design:type", String)
], CampaignTranslation.prototype, "languageCode", void 0);
__decorate([
    Column('varchar'),
    __metadata("design:type", String)
], CampaignTranslation.prototype, "name", void 0);
__decorate([
    ManyToOne(() => Campaign, (base) => base.translations, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Object)
], CampaignTranslation.prototype, "base", void 0);
CampaignTranslation = __decorate([
    Entity('campaign_translation'),
    __metadata("design:paramtypes", [Object])
], CampaignTranslation);
export { CampaignTranslation };
