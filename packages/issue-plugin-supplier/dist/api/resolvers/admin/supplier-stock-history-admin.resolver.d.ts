import { RelationPaths, RequestContext } from '@vendure/core';
import { SupplierStockHistory } from '../../../entities/supplier-stock-history.entity';
import { MutationCreateSupplierStockHistoryArgs, MutationDeleteSupplierStockHistoryArgs, MutationUpdateSupplierStockHistoryArgs, QuerySupplierStockHistoryArgs, QuerySupplierStocksArgs } from '../../../generated-admin-types';
import { SupplierStockHistoryService } from '../../services/supplier-stock-history.service';
export declare class SupplierStockHistoryAdminResolver {
    private readonly supplierStockHistoryService;
    constructor(supplierStockHistoryService: SupplierStockHistoryService);
    supplierStockHistory(ctx: RequestContext, args: QuerySupplierStockHistoryArgs): Promise<SupplierStockHistory | undefined>;
    supplierStockHistories(ctx: RequestContext, args: QuerySupplierStocksArgs, relations: RelationPaths<SupplierStockHistory>): Promise<import("@vendure/core").PaginatedList<SupplierStockHistory>>;
    createSupplierStockHistory(ctx: RequestContext, args: MutationCreateSupplierStockHistoryArgs): Promise<SupplierStockHistory | undefined>;
    updateSupplierStockHistory(ctx: RequestContext, args: MutationUpdateSupplierStockHistoryArgs): Promise<SupplierStockHistory | undefined>;
    deleteSupplierStockHistory(ctx: RequestContext, args: MutationDeleteSupplierStockHistoryArgs): Promise<import("../../../generated-admin-types").DeletionResponse>;
}
