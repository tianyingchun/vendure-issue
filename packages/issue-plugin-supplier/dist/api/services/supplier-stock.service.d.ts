import type { ID, ListQueryOptions, PaginatedList, ProductVariant, RelationPaths } from '@vendure/core';
import { RequestContext, ListQueryBuilder, TransactionalConnection, ProductVariantService, OrderService, JobQueueService, EventBus } from '@vendure/core';
import { SupplierStock } from '../../entities/supplier-stock.entity';
import type { AdjustSupplierStockInput, CreateSupplierStockInput, DeletionResponse, InsufficientOnSaleStockInput, OnSaleStockedSkusInput, StockExtrasQueryInput, UpdateSupplierStockInput } from '../../generated-admin-types';
import { SupplierStockAdjustType } from '../../generated-admin-types';
import { SupplierStockHistoryService } from './supplier-stock-history.service';
export declare class SupplierStockService {
    private readonly connection;
    private readonly listQueryBuilder;
    private readonly productVariantService;
    private readonly supplierStockHistoryService;
    private readonly orderService;
    private readonly jobService;
    private readonly eventBus;
    private jobQueue;
    private retries;
    constructor(connection: TransactionalConnection, listQueryBuilder: ListQueryBuilder, productVariantService: ProductVariantService, supplierStockHistoryService: SupplierStockHistoryService, orderService: OrderService, jobService: JobQueueService, eventBus: EventBus);
    findAll(ctx: RequestContext, options?: ListQueryOptions<SupplierStock>, relations?: RelationPaths<SupplierStock>): Promise<PaginatedList<SupplierStock>>;
    /**
     * 采购页面, 列出 `可售库存 (在途库存+虚拟库存) < 0` 的数据 并分组显示
     * @param ctx
     */
    findInsufficientOnSaleStock(ctx: any, options: InsufficientOnSaleStockInput, relations?: RelationPaths<SupplierStock>): Promise<PaginatedList<SupplierStock>>;
    /**
     * 库存页面, 列出 `可售库存 (在途库存+虚拟库存) > 0` 的数据 + 特定tag 模糊匹配的数据, 并分组显示
     * @param ctx
     */
    findOnSaleStockedSkus(ctx: any, options: OnSaleStockedSkusInput, relations?: RelationPaths<SupplierStock>): Promise<PaginatedList<SupplierStock>>;
    /**
     * 按照产品为维度进行分页聚合数据
     * @returns
     */
    private findAllGroupByProduct;
    private batchAutoAdjustStock;
    executeAdjustStockQuantity(ctx: RequestContext, stockItem: SupplierStock, adjustQuantity: number, adjustStockType: SupplierStockAdjustType): Promise<SupplierStock>;
    /**
     * 人工调整虚拟库存, 增加多少库存, 或者减少多少库存.
     */
    adjustStockManually(ctx: RequestContext, input: AdjustSupplierStockInput): Promise<void>;
    findOrderVariantIds(ctx: RequestContext, orderQuery?: StockExtrasQueryInput): Promise<ProductVariant[] | null>;
    findOne(ctx: RequestContext, id: ID, relations?: RelationPaths<SupplierStock>): Promise<SupplierStock | undefined>;
    /**
     * 聚合列出当前所有的静态标签列表
     */
    findAllSupplierStockTags(ctx: RequestContext): Promise<string[]>;
    findAllByVariantId(ctx: RequestContext, variantId: ID, relations?: RelationPaths<SupplierStock>): Promise<SupplierStock[]>;
    create(ctx: RequestContext, input: CreateSupplierStockInput): Promise<SupplierStock>;
    update(ctx: RequestContext, input: UpdateSupplierStockInput): Promise<SupplierStock>;
    syncProductVariantsStock(ctx: RequestContext, productVariantIds?: ID[]): Promise<void>;
    /**
     * Batch create defualt product variant stock if not existed.
     * @param ctx
     * @param index
     * @param take
     */
    private syncAllProductVariantsToStock;
    private batchCreateDefaultProductVariantStock;
    delete(ctx: RequestContext, id: ID): Promise<DeletionResponse>;
    onModuleInit(): Promise<void>;
    /**
     * Listen for OrderPlacedEvents. When an event occures, place generate-invoice job in queue
     */
    onApplicationBootstrap(): void;
    private createAdjustVirtualStockJobTask;
    private createAdjustRealStockJobTask;
}
