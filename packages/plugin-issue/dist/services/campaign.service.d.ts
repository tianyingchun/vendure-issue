import type { ID, ListQueryOptions, PaginatedList, Translated } from '@vendure/core';
import { ListQueryBuilder, RequestContext, TransactionalConnection, TranslatableSaver, CollectionService } from '@vendure/core';
import { Campaign } from '../entities/campaign.entity.js';
import type { CreateCampaignInput, DeletionResponse, UpdateCampaignInput } from '../generated-admin-types.js';
import { PluginInitOptions } from '../types.js';
export declare class CampaignService {
    private readonly connection;
    private readonly listQueryBuilder;
    private readonly collectionService;
    private readonly translatableSaver;
    private options;
    constructor(connection: TransactionalConnection, listQueryBuilder: ListQueryBuilder, collectionService: CollectionService, translatableSaver: TranslatableSaver, options: PluginInitOptions);
    initCampaigns(): Promise<void>;
    findAll(ctx: RequestContext, options?: ListQueryOptions<Campaign>): Promise<PaginatedList<Translated<Campaign>>>;
    findOne(ctx: RequestContext, id: ID): Promise<Translated<Campaign> | undefined | null>;
    findOneByCode(ctx: RequestContext, code: string): Promise<Translated<Campaign> | undefined | null>;
    create(ctx: RequestContext, input: CreateCampaignInput): Promise<Translated<Campaign>>;
    update(ctx: RequestContext, input: UpdateCampaignInput): Promise<Translated<Campaign>>;
    delete(ctx: RequestContext, ids: ID[]): Promise<DeletionResponse>;
    private makeSureDefaultCampaigns;
    private makeSureDefaultCollections;
}
