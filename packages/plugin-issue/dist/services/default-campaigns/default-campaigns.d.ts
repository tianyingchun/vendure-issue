import type { CreateCampaignInput } from '../../generated-admin-types.js';
/**
 * 前端固定配置活动, 用户可以在前端直接通过API领取. 不能删除
 */
export declare const defaultCampaigns: () => CreateCampaignInput[];
