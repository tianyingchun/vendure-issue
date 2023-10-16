import type { CreateCampaignInput } from '../../generated-admin-types.js';
import { CampaignType, LanguageCode } from '../../generated-admin-types.js';

export const defaultCampaigns = () =>
  [
    {
      code: 'discount',
      campaignType: CampaignType.DirectDiscount,
      needClaimCoupon: false,
      enabled: true,
      translations: [
        {
          languageCode: LanguageCode.en,
          name: 'Clearance Up to 70% Off frames',
          shortDesc: 'Clearance Up to 70% Off frames',
        },
        {
          languageCode: LanguageCode.de,
          name: 'Clearance Up to 70% Off frames of de',
          shortDesc: 'Clearance Up to 70% Off frames of de',
        },
      ],
    },
  ] as CreateCampaignInput[];
