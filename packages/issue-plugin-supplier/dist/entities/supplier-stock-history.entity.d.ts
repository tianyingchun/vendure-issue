import { Administrator, DeepPartial, ID, VendureEntity } from '@vendure/core';
import { SupplierStockAdjustType } from '../generated-admin-types';
import { SupplierStock } from './supplier-stock.entity';
/**
 * @description This entity represents a supplier stock history
 *
 * @docsCategory entities
 */
export declare class SupplierStockHistory extends VendureEntity {
    constructor(input?: DeepPartial<SupplierStockHistory>);
    /**
     * 用来存储唯一KEY, 避免JOB超时重复插入数据, 比如扣减库存, JOB 多次执行只处理一次.
     */
    uniqueKey?: string;
    supplierStock: SupplierStock;
    supplierStockId: ID;
    administrator?: Administrator;
    administratorId?: ID;
    /**
     * 当前日志的调整的库存类型
     */
    readonly stockAdjustType: SupplierStockAdjustType;
    data: unknown;
}
