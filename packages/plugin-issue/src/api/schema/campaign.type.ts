import { gql } from 'graphql-tag';

export const campaignType = gql`
  type Campaign implements Node {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String
    code: String!
    promotion: Promotion
    promotionId: ID
    languageCode: LanguageCode!
    translations: [CampaignTranslation!]!
  }

  type CampaignTranslation implements Node {
    id: ID!
    "当前语言"
    languageCode: LanguageCode!
    "当前选项的名称"
    name: String!
  }

  type CampaignList implements PaginatedList {
    items: [Campaign!]!
    totalItems: Int!
  }
`;
