import { CampaignType, LanguageCode } from '../../generated-admin-types.js';
/**
 * 前端固定配置活动, 用户可以在前端直接通过API领取. 不能删除
 */
export const defaultCampaigns = () => [
    {
        code: 'discount',
        campaignType: CampaignType.DirectDiscount,
        needClaimCoupon: false,
        enabled: true,
        translations: [
            {
                languageCode: LanguageCode.en,
                lgImage: 'https://file.kzfoo.com/common/banner/clearance.jpeg',
                xsImage: 'https://file.kzfoo.com/common/banner/clearance-mobile.jpeg',
                applyForBeforeData: {
                    title: 'Clearance Up to 70% Off frames',
                    subTitle: [
                        'No code required, Offer can not be combined with other discounts',
                    ],
                    policyText: '30-day Return & Exchange | 3-month Warranty',
                    ruleText: ['Offer can not be combined with other discounts'],
                },
                name: 'Clearance Up to 70% Off frames',
                shortDesc: 'Clearance Up to 70% Off frames',
            },
            {
                languageCode: LanguageCode.de,
                lgImage: 'https://file.kzfoo.com/common/banner/clearance.jpeg',
                xsImage: 'https://file.kzfoo.com/common/banner/clearance-mobile.jpeg',
                applyForBeforeData: {
                    title: 'Clearance Up to 70% Off frames',
                    subTitle: [
                        'No code required, Offer can not be combined with other discounts',
                    ],
                    policyText: '30-day Return & Exchange | 3-month Warranty',
                    ruleText: ['Offer can not be combined with other discounts'],
                },
                name: 'Clearance Up to 70% Off frames',
                shortDesc: 'Clearance Up to 70% Off frames',
            },
        ],
    },
];
