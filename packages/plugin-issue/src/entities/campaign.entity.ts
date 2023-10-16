import type { ID, LocaleString, Translation } from '@vendure/core';
import { DeepPartial, Promotion, VendureEntity } from '@vendure/core';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { CampaignTranslation } from './campaign-translation.entity.js';

/**
 * @description This entity represents a front end campaign
 *
 * @docsCategory entities
 */
@Entity('campaign')
export class Campaign extends VendureEntity {
  constructor(input?: DeepPartial<Campaign>) {
    super(input);
  }

  @Column({ unique: true })
  code: string;

  /**
   * 活动名称, 用来记录当前是什么活动, 通常是后台使用; 每个一个名字是一个具体的活动内容 如买2送一,买3送一
   * Glasses 5USD, 6USD, Buy One Get One Free, ....
   */
  name: LocaleString;

  /**
   * 当前活动可以关联一个`Promotion`记录,如果他需要使用对应的优惠券.
   */
  @ManyToOne(() => Promotion, { onDelete: 'SET NULL' })
  promotion: Promotion | null;

  @Column('int', { nullable: true })
  promotionId: ID | null;

  /**
   * 多国语言翻译.
   */
  @OneToMany(() => CampaignTranslation, (translation) => translation.base, {
    eager: true,
  })
  translations: Array<Translation<Campaign>>;
}
