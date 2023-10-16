import { Inject, Injectable } from '@nestjs/common';
import type {
  ID,
  ListQueryOptions,
  PaginatedList,
  Translated,
} from '@vendure/core';
import {
  assertFound,
  ListQueryBuilder,
  Logger,
  RequestContext,
  TransactionalConnection,
  TranslatableSaver,
  translateDeep,
  CollectionService,
  LanguageCode,
} from '@vendure/core';
import { In } from 'typeorm';
import { PLUGIN_INIT_OPTIONS, loggerCtx } from '../constants.js';
import { CampaignTranslation } from '../entities/campaign-translation.entity.js';
import { Campaign } from '../entities/campaign.entity.js';
import type {
  CreateCampaignInput,
  DeletionResponse,
  UpdateCampaignInput,
} from '../generated-admin-types.js';
import { DeletionResult } from '../generated-admin-types.js';
import { PluginInitOptions } from '../types.js';
import { defaultCampaignData } from './default-campaigns/index.js';

@Injectable()
export class CampaignService {
  constructor(
    private readonly connection: TransactionalConnection,
    private readonly listQueryBuilder: ListQueryBuilder,
    private readonly collectionService: CollectionService,
    private readonly translatableSaver: TranslatableSaver,
    @Inject(PLUGIN_INIT_OPTIONS) private options: PluginInitOptions
  ) {}

  async initCampaigns() {
    if (this.options.autoDataInit) {
      Logger.debug('initCampaigns...', loggerCtx);
      await this.makeSureDefaultCampaigns();
      await this.makeSureDefaultCollections();
    }
  }

  findAll(
    ctx: RequestContext,
    options?: ListQueryOptions<Campaign>
  ): Promise<PaginatedList<Translated<Campaign>>> {
    return this.listQueryBuilder
      .build(Campaign, options, { relations: ['promotion'], ctx })
      .getManyAndCount()
      .then(([campaignItems, totalItems]) => {
        const items = campaignItems.map((campaignItem) =>
          translateDeep(campaignItem, ctx.languageCode, ['promotion'])
        );
        return {
          items,
          totalItems,
        };
      });
  }

  findOne(
    ctx: RequestContext,
    id: ID
  ): Promise<Translated<Campaign> | undefined | null> {
    return this.connection
      .getRepository(ctx, Campaign)
      .findOne({ where: { id }, relations: ['promotion'] })
      .then((campaignItem) => {
        return (
          campaignItem &&
          translateDeep(campaignItem, ctx.languageCode, ['promotion'])
        );
      });
  }

  findOneByCode(
    ctx: RequestContext,
    code: string
  ): Promise<Translated<Campaign> | undefined | null> {
    return this.connection
      .getRepository(ctx, Campaign)
      .findOne({ where: { code }, relations: ['promotion'] })
      .then((campaignItem) => {
        return (
          campaignItem &&
          translateDeep(campaignItem, ctx.languageCode, ['promotion'])
        );
      });
  }

  async create(
    ctx: RequestContext,
    input: CreateCampaignInput
  ): Promise<Translated<Campaign>> {
    const campaignItem = await this.translatableSaver.create({
      ctx,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      input: input as any,
      entityType: Campaign,
      translationType: CampaignTranslation,
    });
    return assertFound(this.findOne(ctx, campaignItem.id));
  }

  async update(
    ctx: RequestContext,
    input: UpdateCampaignInput
  ): Promise<Translated<Campaign>> {
    const campaignItem = await this.translatableSaver.update({
      ctx,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      input: input as any,
      entityType: Campaign,
      translationType: CampaignTranslation,
    });
    return assertFound(this.findOne(ctx, campaignItem.id));
  }

  async delete(ctx: RequestContext, ids: ID[]): Promise<DeletionResponse> {
    const items = await this.connection.getRepository(ctx, Campaign).find({
      where: {
        id: In(ids),
      },
    });
    await this.connection
      .getRepository(ctx, Campaign)
      .delete(items.map((s) => String(s.id)));

    return {
      result: DeletionResult.DELETED,
      message: '',
    };
  }

  private async makeSureDefaultCampaigns() {
    const ctx = RequestContext.empty();
    const { items } = await this.findAll(ctx);
    for (const campaignItem of defaultCampaignData()) {
      const hasOne = items.find((s) => s.code === campaignItem.code);
      if (!hasOne) {
        await this.create(ctx, campaignItem);
      } else {
        await this.update(ctx, {
          ...campaignItem,
          id: hasOne.id,
        });
      }
    }
  }

  private async makeSureDefaultCollections() {
    const ctx = RequestContext.empty();
    const { totalItems } = await this.collectionService.findAll(ctx);
    if (totalItems > 0) {
      return;
    }
    const parent = await this.collectionService.create(ctx, {
      filters: [],
      translations: [
        {
          name: 'parent collection',
          slug: 'parent-collection',
          description: 'parent collection description',
          languageCode: LanguageCode.en,
          customFields: {},
        },
      ],
    });
    await this.collectionService.create(ctx, {
      filters: [],
      parentId: parent.id,
      translations: [
        {
          name: 'children collection',
          slug: 'children-collection',
          description: 'children collection description',
          languageCode: LanguageCode.en,
          customFields: {},
        },
      ],
    });
  }
}
