import type { PaginatedList, ProductVariant, Translated } from '@vendure/core';
import { RequestContext, ProductVariantService } from '@vendure/core';
import type { SupplierStockHistory } from '../../../entities/supplier-stock-history.entity';
import { SupplierStock } from '../../../entities/supplier-stock.entity';
import { SupplierStockHistoryListOptions } from '../../../generated-admin-types';
import { SupplierStockHistoryService } from '../../services/supplier-stock-history.service';
export declare class SupplierStockEntityResolver {
    private readonly supplierStockHistoryService;
    private readonly productVariantService;
    constructor(supplierStockHistoryService: SupplierStockHistoryService, productVariantService: ProductVariantService);
    productVariant(supplierStock: SupplierStock, ctx: RequestContext): Promise<Translated<ProductVariant>>;
    stockHistory(supplierStock: SupplierStock, ctx: RequestContext, args: SupplierStockHistoryListOptions): Promise<PaginatedList<SupplierStockHistory>>;
}
