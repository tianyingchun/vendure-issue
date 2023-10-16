var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Promotion, VendureEntity } from '@vendure/core';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { CampaignTranslation } from './campaign-translation.entity.js';
/**
 * @description This entity represents a front end campaign
 *
 * @docsCategory entities
 */
let Campaign = class Campaign extends VendureEntity {
    constructor(input) {
        super(input);
    }
};
__decorate([
    Column({ unique: true }),
    __metadata("design:type", String)
], Campaign.prototype, "code", void 0);
__decorate([
    ManyToOne(() => Promotion, { onDelete: 'SET NULL' }),
    __metadata("design:type", Object)
], Campaign.prototype, "promotion", void 0);
__decorate([
    Column('int', { nullable: true }),
    __metadata("design:type", Object)
], Campaign.prototype, "promotionId", void 0);
__decorate([
    OneToMany(() => CampaignTranslation, (translation) => translation.base, {
        eager: true,
    }),
    __metadata("design:type", Array)
], Campaign.prototype, "translations", void 0);
Campaign = __decorate([
    Entity('campaign'),
    __metadata("design:paramtypes", [Object])
], Campaign);
export { Campaign };
