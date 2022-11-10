import { RequestContext } from '@vendure/core';
import type { Supplier } from '../../../entities/supplier.entity';
import { MutationCreateSupplierArgs, MutationDeleteSupplierArgs, MutationUpdateSupplierArgs, QuerySupplierArgs, QuerySuppliersArgs } from '../../../generated-admin-types';
import { SupplierService } from '../../services/supplier.service';
export declare class SupplierAdminResolver {
    private readonly supplierService;
    constructor(supplierService: SupplierService);
    supplier(ctx: RequestContext, args: QuerySupplierArgs): Promise<Supplier | undefined>;
    suppliers(ctx: RequestContext, args: QuerySuppliersArgs): Promise<import("@vendure/core").PaginatedList<Supplier>>;
    createSupplier(ctx: RequestContext, args: MutationCreateSupplierArgs): Promise<Supplier | undefined>;
    updateSupplier(ctx: RequestContext, args: MutationUpdateSupplierArgs): Promise<Supplier | undefined>;
    deleteSupplier(ctx: RequestContext, args: MutationDeleteSupplierArgs): Promise<import("../../../generated-admin-types").DeletionResponse>;
}
