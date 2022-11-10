import { DeepPartial, ID, VendureEntity } from '@vendure/core';
import { SupplierStock } from './supplier-stock.entity';
/**
 * @description This entity represents a SupplierInTransit information
 *
 * @docsCategory entities
 */
export declare class SupplierStockInTransit extends VendureEntity {
    constructor(input?: DeepPartial<SupplierStockInTransit>);
    /**
     * 渠道名称, 1688, 淘宝等渠道.
     */
    channelName?: string;
    /**
     * 渠道进货的订单号
     */
    channelOrderNo: string;
    /**
     * 当前在途中的数量
     */
    quantity: number;
    supplierStock: SupplierStock;
    supplierStockId: ID;
}
