var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Ctx, RequestContext } from '@vendure/core';
import { DeletionResult, } from '../../generated-admin-types.js';
import { CampaignService } from '../../services/campaign.service.js';
let CampaignAdminResolver = class CampaignAdminResolver {
    constructor(campaignService) {
        this.campaignService = campaignService;
    }
    campaign(ctx, args) {
        return this.campaignService.findOne(ctx, args.id);
    }
    campaigns(ctx, args) {
        return this.campaignService.findAll(ctx, args.options);
    }
    async createCampaign(ctx, args) {
        return this.campaignService.create(ctx, args.input);
    }
    async updateCampaign(ctx, args) {
        return this.campaignService.update(ctx, args.input);
    }
    async deleteCampaign(ctx, args) {
        const item = await this.campaignService.findOne(ctx, args.id);
        if (item) {
            await this.campaignService.update(ctx, {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ...item,
                enabled: false,
            });
        }
        return {
            result: item ? DeletionResult.DELETED : DeletionResult.NOT_DELETED,
            message: '',
        };
    }
};
__decorate([
    Query(),
    __param(0, Ctx()),
    __param(1, Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestContext, Object]),
    __metadata("design:returntype", Promise)
], CampaignAdminResolver.prototype, "campaign", null);
__decorate([
    Query(),
    __param(0, Ctx()),
    __param(1, Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestContext, Object]),
    __metadata("design:returntype", void 0)
], CampaignAdminResolver.prototype, "campaigns", null);
__decorate([
    Mutation(),
    __param(0, Ctx()),
    __param(1, Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestContext, Object]),
    __metadata("design:returntype", Promise)
], CampaignAdminResolver.prototype, "createCampaign", null);
__decorate([
    Mutation(),
    __param(0, Ctx()),
    __param(1, Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestContext, Object]),
    __metadata("design:returntype", Promise)
], CampaignAdminResolver.prototype, "updateCampaign", null);
__decorate([
    Mutation(),
    __param(0, Ctx()),
    __param(1, Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestContext, Object]),
    __metadata("design:returntype", Promise)
], CampaignAdminResolver.prototype, "deleteCampaign", null);
CampaignAdminResolver = __decorate([
    Resolver(),
    __metadata("design:paramtypes", [CampaignService])
], CampaignAdminResolver);
export { CampaignAdminResolver };
