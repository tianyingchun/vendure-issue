import type { ID, ListQueryOptions, PaginatedList, RequestContext } from '@vendure/core';
import { ListQueryBuilder, TransactionalConnection } from '@vendure/core';
import { Supplier } from '../../entities/supplier.entity';
import type { CreateSupplierInput, DeletionResponse, UpdateSupplierInput } from '../../generated-admin-types';
export declare class SupplierService {
    private readonly connection;
    private readonly listQueryBuilder;
    constructor(connection: TransactionalConnection, listQueryBuilder: ListQueryBuilder);
    findAll(ctx: RequestContext, options?: ListQueryOptions<Supplier>): Promise<PaginatedList<Supplier>>;
    findOne(ctx: RequestContext, id: ID): Promise<Supplier | undefined>;
    create(ctx: RequestContext, input: CreateSupplierInput): Promise<Supplier | undefined>;
    update(ctx: RequestContext, input: UpdateSupplierInput): Promise<Supplier | undefined>;
    delete(ctx: RequestContext, id: ID): Promise<DeletionResponse>;
}
