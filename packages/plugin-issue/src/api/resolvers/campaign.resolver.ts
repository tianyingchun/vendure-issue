import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import type { Translated } from '@vendure/core';
import { Ctx, RequestContext } from '@vendure/core';
import type { Campaign } from '../../entities/campaign.entity.js';
import {
  type DeletionResponse,
  DeletionResult,
  MutationUpdateCampaignArgs,
  MutationCreateCampaignArgs,
  MutationDeleteCampaignArgs,
  QueryCampaignArgs,
  QueryCampaignsArgs,
} from '../../generated-admin-types.js';
import { CampaignService } from '../../services/campaign.service.js';

@Resolver()
export class CampaignAdminResolver {
  constructor(private readonly campaignService: CampaignService) {}

  @Query()
  campaign(
    @Ctx() ctx: RequestContext,
    @Args() args: QueryCampaignArgs
  ): Promise<Translated<Campaign> | undefined | null> {
    return this.campaignService.findOne(ctx, args.id);
  }

  @Query()
  campaigns(@Ctx() ctx: RequestContext, @Args() args: QueryCampaignsArgs) {
    return this.campaignService.findAll(ctx, args.options);
  }

  @Mutation()
  async createCampaign(
    @Ctx() ctx: RequestContext,
    @Args() args: MutationCreateCampaignArgs
  ) {
    return this.campaignService.create(ctx, args.input);
  }

  @Mutation()
  async updateCampaign(
    @Ctx() ctx: RequestContext,
    @Args() args: MutationUpdateCampaignArgs
  ) {
    return this.campaignService.update(ctx, args.input);
  }

  @Mutation()
  async deleteCampaign(
    @Ctx() ctx: RequestContext,
    @Args() args: MutationDeleteCampaignArgs
  ): Promise<DeletionResponse> {
    const item = await this.campaignService.findOne(ctx, args.id);
    if (item) {
      await this.campaignService.update(ctx, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(item as any),
        enabled: false,
      });
    }
    return {
      result: item ? DeletionResult.DELETED : DeletionResult.NOT_DELETED,
      message: '',
    };
  }
}
