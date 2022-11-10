import { DeepPartial, VendureEntity } from '@vendure/core';
import { Column, Entity } from 'typeorm';

/**
 * @description This entity represents a supplier information
 *
 * @docsCategory entities
 */
@Entity('supplier')
export class Supplier extends VendureEntity {
  constructor(input?: DeepPartial<Supplier>) {
    super(input);
  }

  @Column()
  supplierName: string;

  @Column({ unique: true })
  supplierNo: string;

  @Column({ nullable: true })
  supplierType?: string;

  @Column({ type: 'tinytext', nullable: true })
  comment?: string;
}
