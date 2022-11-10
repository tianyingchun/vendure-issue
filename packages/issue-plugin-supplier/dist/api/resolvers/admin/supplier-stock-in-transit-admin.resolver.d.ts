import { RequestContext } from '@vendure/core';
import type { SupplierStockInTransit } from '../../../entities/supplier-stock-in-transit.entity';
import { MutationBatchCreateStockFormArgs, MutationCreateSupplierStockInTransitArgs, MutationDeleteSupplierStockInTransitsArgs, MutationFinishInTransitStocksArgs, MutationUpdateSupplierStockInTransitArgs, QuerySupplierStockInTransitArgs, QuerySupplierStockInTransitsArgs } from '../../../generated-admin-types';
import { SupplierStockInTransitService } from '../../services/supplier-stock-in-transit.service';
export declare class SupplierStockInTransitAdminResolver {
    private readonly supplierStockInTransitService;
    constructor(supplierStockInTransitService: SupplierStockInTransitService);
    supplierStockInTransit(ctx: RequestContext, args: QuerySupplierStockInTransitArgs): Promise<SupplierStockInTransit | undefined>;
    supplierStockInTransits(ctx: RequestContext, args: QuerySupplierStockInTransitsArgs): Promise<import("@vendure/core").PaginatedList<SupplierStockInTransit>>;
    finishInTransitStocks(ctx: RequestContext, args: MutationFinishInTransitStocksArgs): Promise<number>;
    batchCreateStockForm(ctx: RequestContext, args: MutationBatchCreateStockFormArgs): Promise<boolean>;
    createSupplierStockInTransit(ctx: RequestContext, args: MutationCreateSupplierStockInTransitArgs): Promise<SupplierStockInTransit>;
    updateSupplierStockInTransit(ctx: RequestContext, args: MutationUpdateSupplierStockInTransitArgs): Promise<SupplierStockInTransit>;
    deleteSupplierStockInTransits(ctx: RequestContext, args: MutationDeleteSupplierStockInTransitsArgs): Promise<import("../../../generated-admin-types").DeletionResponse>;
}
