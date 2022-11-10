import type { ID, ListQueryOptions, PaginatedList, RelationPaths, RequestContext } from '@vendure/core';
import { ListQueryBuilder, TransactionalConnection, AdministratorService } from '@vendure/core';
import { SupplierStockHistory } from '../../entities/supplier-stock-history.entity';
import type { CreateSupplierStockHistoryInput, DeletionResponse, UpdateSupplierStockHistoryInput } from '../../generated-admin-types';
export declare class SupplierStockHistoryService {
    private readonly connection;
    private readonly listQueryBuilder;
    private readonly administratorService;
    constructor(connection: TransactionalConnection, listQueryBuilder: ListQueryBuilder, administratorService: AdministratorService);
    findAll(ctx: RequestContext, options?: ListQueryOptions<SupplierStockHistory>, relations?: RelationPaths<SupplierStockHistory>): Promise<PaginatedList<SupplierStockHistory>>;
    findOneByUniqueKey(ctx: RequestContext, uniqueKey: string, relations?: RelationPaths<SupplierStockHistory>): Promise<SupplierStockHistory | undefined>;
    findOne(ctx: RequestContext, id: ID, relations?: RelationPaths<SupplierStockHistory>): Promise<SupplierStockHistory | undefined>;
    create(ctx: RequestContext, input: CreateSupplierStockHistoryInput): Promise<SupplierStockHistory | undefined>;
    update(ctx: RequestContext, input: UpdateSupplierStockHistoryInput): Promise<SupplierStockHistory | undefined>;
    delete(ctx: RequestContext, id: ID): Promise<DeletionResponse>;
}
