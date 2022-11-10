import { DeepPartial, VendureEntity } from '@vendure/core';
/**
 * @description This entity represents a supplier information
 *
 * @docsCategory entities
 */
export declare class Supplier extends VendureEntity {
    constructor(input?: DeepPartial<Supplier>);
    /**
     * 当前产品的供应商渠道, 因为同一个品牌可能来自多个代理渠道/供应商渠道.
     * `兴亮`,`视力`, 供应链可能不会直接暴露在外面.
     */
    supplierName: string;
    /**
     * 供应商编号: E110A 供应商是渠道a, 通常为可展示的代号.
     */
    supplierNo: string;
    /**
     * 供应商类型, 镜架供应商(frame)/镜片供应商(lens).
     */
    supplierType?: string;
    /**
     * 其他供应商备注.
     */
    comment?: string;
}
