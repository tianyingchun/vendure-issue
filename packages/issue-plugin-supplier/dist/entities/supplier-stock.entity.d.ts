import { DeepPartial, ID, Product, ProductVariant, VendureEntity } from '@vendure/core';
import { SupplierStockInTransit } from './supplier-stock-in-transit.entity';
import { Supplier } from './supplier.entity';
/**
 * @description This entity represents a supplier virtual stock
 *
 * @docsCategory entities
 */
export declare class SupplierStock extends VendureEntity {
    constructor(input?: DeepPartial<SupplierStock>);
    /**
     * 真实仓库库存, 只有已经发出去了, 才会扣减.
     */
    stockOnHand: number;
    /**
     * 虚拟库存, 当支付成功就立即扣减, 可以以此来感知当天的采购诉求
     * FIXME: 当出现退换货, 或者其他因素需要自己补足
     */
    virtualStock: number;
    /**
     * 当添加一个在途库存, 此处针对在途重新做一次聚合.
     */
    inTransitsStock: number;
    /**
     * 比如我有一个库房，E110A的位置是A310, E130B的位置在B132
     */
    stockArea: string;
    /**
     * 当前有多少个库存在进货途中.
     */
    stocksInTransits: SupplierStockInTransit[];
    /**
     * 当有多个库存存储的时候, enabled 的库存优先.
     */
    enabled: boolean;
    /**
     * 当前备货的链接地址, 点了直接跳转1688
     */
    link?: string;
    /**
     * 定义一系列表示库存SKU的静态标签.
     */
    tags?: string[];
    /**
     * 当前库存的备注
     */
    comment?: string;
    productVariant: ProductVariant;
    productVariantId: ID;
    product: Product;
    productId: ID;
    supplier: Supplier;
    supplierId?: ID;
}
