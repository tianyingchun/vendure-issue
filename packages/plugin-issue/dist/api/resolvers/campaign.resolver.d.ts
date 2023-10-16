import type { Translated } from '@vendure/core';
import { RequestContext } from '@vendure/core';
import type { Campaign } from '../../entities/campaign.entity.js';
import { type DeletionResponse, MutationUpdateCampaignArgs, MutationCreateCampaignArgs, MutationDeleteCampaignArgs, QueryCampaignArgs, QueryCampaignsArgs } from '../../generated-admin-types.js';
import { CampaignService } from '../../services/campaign.service.js';
export declare class CampaignAdminResolver {
    private readonly campaignService;
    constructor(campaignService: CampaignService);
    campaign(ctx: RequestContext, args: QueryCampaignArgs): Promise<Translated<Campaign> | undefined | null>;
    campaigns(ctx: RequestContext, args: QueryCampaignsArgs): Promise<import("@vendure/core").PaginatedList<Translated<Campaign>>>;
    createCampaign(ctx: RequestContext, args: MutationCreateCampaignArgs): Promise<Translated<Campaign>>;
    updateCampaign(ctx: RequestContext, args: MutationUpdateCampaignArgs): Promise<Translated<Campaign>>;
    deleteCampaign(ctx: RequestContext, args: MutationDeleteCampaignArgs): Promise<DeletionResponse>;
}
