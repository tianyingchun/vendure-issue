import { LanguageCode } from '@vendure/core';
import { Campaign } from './campaign.entity.js';
/**
 * `Collection` basic custom fields for `campaign`
 */
export const collectionCustomFields = [
    {
        type: 'relation',
        name: 'campaign',
        nullable: true,
        entity: Campaign,
        eager: true,
        public: true,
        label: [
            {
                languageCode: LanguageCode.en,
                value: 'Campaign',
            },
        ],
        description: [
            {
                languageCode: LanguageCode.en,
                value: 'Campaign of this collection page',
            },
        ],
    },
];
