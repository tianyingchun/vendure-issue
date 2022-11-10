import type { PaginatedList } from '@vendure/core';
import { OrderService, RelationPaths, RequestContext } from '@vendure/core';
import { SupplierStock } from '../../../entities/supplier-stock.entity';
import { MutationAdjustStockArgs, MutationCreateSupplierStockArgs, MutationDeleteSupplierStockArgs, MutationSyncProductVariantsStockArgs, MutationUpdateSupplierStockArgs, QueryQueryInsufficientOnSaleStockArgs, QueryQueryOnSaleStockedSkusArgs, QuerySupplierStockArgs, QuerySupplierStocksArgs } from '../../../generated-admin-types';
import { SupplierStockService } from '../../services/supplier-stock.service';
export declare class SupplierStockAdminResolver {
    private readonly supplierStockService;
    private readonly orderService;
    constructor(supplierStockService: SupplierStockService, orderService: OrderService);
    supplierStock(ctx: RequestContext, args: QuerySupplierStockArgs): Promise<SupplierStock | undefined>;
    queryOnSaleStockedSkus(ctx: RequestContext, args: QueryQueryOnSaleStockedSkusArgs, relations: RelationPaths<SupplierStock>): Promise<PaginatedList<SupplierStock>>;
    queryInsufficientOnSaleStock(ctx: RequestContext, args: QueryQueryInsufficientOnSaleStockArgs, relations: RelationPaths<SupplierStock>): Promise<PaginatedList<SupplierStock>>;
    supplierStocks(ctx: RequestContext, args: QuerySupplierStocksArgs, relations: RelationPaths<SupplierStock>): Promise<PaginatedList<SupplierStock>>;
    allSupplierStockTags(ctx: RequestContext): Promise<string[]>;
    createSupplierStock(ctx: RequestContext, args: MutationCreateSupplierStockArgs): Promise<SupplierStock>;
    updateSupplierStock(ctx: RequestContext, args: MutationUpdateSupplierStockArgs): Promise<SupplierStock>;
    deleteSupplierStock(ctx: RequestContext, args: MutationDeleteSupplierStockArgs): Promise<import("../../../generated-admin-types").DeletionResponse>;
    adjustStock(ctx: RequestContext, args: MutationAdjustStockArgs): Promise<boolean>;
    syncProductVariantsStock(ctx: RequestContext, args: MutationSyncProductVariantsStockArgs): Promise<boolean>;
}
