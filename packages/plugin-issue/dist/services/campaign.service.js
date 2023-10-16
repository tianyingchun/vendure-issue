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
import { Inject, Injectable } from '@nestjs/common';
import { assertFound, ListQueryBuilder, Logger, RequestContext, TransactionalConnection, TranslatableSaver, translateDeep, CollectionService, LanguageCode, } from '@vendure/core';
import { In } from 'typeorm';
import { PLUGIN_INIT_OPTIONS, loggerCtx } from '../constants.js';
import { CampaignTranslation } from '../entities/campaign-translation.entity.js';
import { Campaign } from '../entities/campaign.entity.js';
import { DeletionResult } from '../generated-admin-types.js';
import { defaultCampaignData } from './default-campaigns/index.js';
let CampaignService = class CampaignService {
    constructor(connection, listQueryBuilder, collectionService, translatableSaver, options) {
        this.connection = connection;
        this.listQueryBuilder = listQueryBuilder;
        this.collectionService = collectionService;
        this.translatableSaver = translatableSaver;
        this.options = options;
    }
    async initCampaigns() {
        if (this.options.autoDataInit) {
            Logger.debug('initCampaigns...', loggerCtx);
            const item = await this.makeSureDefaultCampaigns();
            await this.makeSureDefaultCollections(item);
        }
    }
    findAll(ctx, options) {
        return this.listQueryBuilder
            .build(Campaign, options, { relations: ['promotion'], ctx })
            .getManyAndCount()
            .then(([campaignItems, totalItems]) => {
            const items = campaignItems.map((campaignItem) => translateDeep(campaignItem, ctx.languageCode, ['promotion']));
            return {
                items,
                totalItems,
            };
        });
    }
    findOne(ctx, id) {
        return this.connection
            .getRepository(ctx, Campaign)
            .findOne({ where: { id }, relations: ['promotion'] })
            .then((campaignItem) => {
            return (campaignItem &&
                translateDeep(campaignItem, ctx.languageCode, ['promotion']));
        });
    }
    findOneByCode(ctx, code) {
        return this.connection
            .getRepository(ctx, Campaign)
            .findOne({ where: { code }, relations: ['promotion'] })
            .then((campaignItem) => {
            return (campaignItem &&
                translateDeep(campaignItem, ctx.languageCode, ['promotion']));
        });
    }
    async create(ctx, input) {
        const campaignItem = await this.translatableSaver.create({
            ctx,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            input: input,
            entityType: Campaign,
            translationType: CampaignTranslation,
        });
        return assertFound(this.findOne(ctx, campaignItem.id));
    }
    async update(ctx, input) {
        const campaignItem = await this.translatableSaver.update({
            ctx,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            input: input,
            entityType: Campaign,
            translationType: CampaignTranslation,
        });
        return assertFound(this.findOne(ctx, campaignItem.id));
    }
    async delete(ctx, ids) {
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
    async makeSureDefaultCampaigns() {
        const ctx = RequestContext.empty();
        const { items } = await this.findAll(ctx);
        let item;
        for (const campaignItem of defaultCampaignData()) {
            const hasOne = items.find((s) => s.code === campaignItem.code);
            if (!hasOne) {
                item = await this.create(ctx, campaignItem);
            }
            else {
                item = await this.update(ctx, {
                    ...campaignItem,
                    id: hasOne.id,
                });
            }
        }
        return item;
    }
    async makeSureDefaultCollections(campaign) {
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
            parentId: parent?.id,
            customFields: {
                campaignId: campaign?.id,
            },
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
};
CampaignService = __decorate([
    Injectable(),
    __param(4, Inject(PLUGIN_INIT_OPTIONS)),
    __metadata("design:paramtypes", [TransactionalConnection,
        ListQueryBuilder,
        CollectionService,
        TranslatableSaver, Object])
], CampaignService);
export { CampaignService };
