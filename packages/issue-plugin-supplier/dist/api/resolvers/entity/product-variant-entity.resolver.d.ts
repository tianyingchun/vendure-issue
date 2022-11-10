import { ProductVariant, RequestContext } from '@vendure/core';
import type { Supplier } from '../../../entities/supplier.entity';
import { SupplierStockService } from '../../services/supplier-stock.service';
export declare class ProductVariantEntityResolver {
    private readonly supplierStockService;
    constructor(supplierStockService: SupplierStockService);
    supplier(productVariant: ProductVariant, ctx: RequestContext): Promise<Supplier | undefined>;
}
