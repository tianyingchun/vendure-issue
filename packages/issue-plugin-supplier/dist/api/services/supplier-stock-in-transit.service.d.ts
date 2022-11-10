import type { ID, ListQueryOptions, PaginatedList, RequestContext } from '@vendure/core';
import { TransactionalConnection, ListQueryBuilder } from '@vendure/core';
import { SupplierStockInTransit } from '../../entities/supplier-stock-in-transit.entity';
import type { CreateSupplierStockInTransitInput, DeletionResponse, FinishInTransitStocksInput, UpdateSupplierStockInTransitInput } from '../../generated-admin-types';
import { SupplierStockHistoryService } from './supplier-stock-history.service';
import { SupplierStockService } from './supplier-stock.service';
export declare class SupplierStockInTransitService {
    private readonly connection;
    private readonly listQueryBuilder;
    private readonly supplierStockService;
    private readonly supplierStockHistoryService;
    constructor(connection: TransactionalConnection, listQueryBuilder: ListQueryBuilder, supplierStockService: SupplierStockService, supplierStockHistoryService: SupplierStockHistoryService);
    findAll(ctx: RequestContext, options?: ListQueryOptions<SupplierStockInTransit>): Promise<PaginatedList<SupplierStockInTransit>>;
    findOne(ctx: RequestContext, id: ID): Promise<SupplierStockInTransit | undefined>;
    /**
     * 重新扫描同步在途库存.
     * @param ctx
     * @param stockItem
     */
    private syncInTransitStocks;
    /**
     * 在途订单已送达.
     * @param ctx
     */
    finishInTransitStocks(ctx: RequestContext, input: FinishInTransitStocksInput): Promise<number>;
    /**
     * 将指定在途的库存转换到入库状态
     * @param newCtx
     * @param item 当前在途库存项
     */
    private transitionInTransitItemToStock;
    /**
     * 批量录入在途订单
     * @param ctx
     */
    batchCreateStockInTransitRecords(ctx: RequestContext, inputs: Array<CreateSupplierStockInTransitInput>): Promise<void>;
    private createSingleStockInTransitRecord;
    /**
     * 获取当前SKU所有在途库存记录的SKU数量之和, 添加在途库存需要同步当前SKU所有的在途数量之和到stock表, 当在途变成入库, 需要删除在途库存记录, 再次同步
     * @param ctx
     * @param supplierStockId
     * @returns
     */
    private calculateInTransitStocks;
    create(ctx: RequestContext, input: CreateSupplierStockInTransitInput): Promise<SupplierStockInTransit>;
    update(ctx: RequestContext, input: UpdateSupplierStockInTransitInput): Promise<SupplierStockInTransit>;
    delete(ctx: RequestContext, ids: ID[]): Promise<DeletionResponse>;
}
