import { gql } from 'graphql-tag';
export const campaignAdminApi = gql `
  extend type Query {
    "Query detail of campaign entity"
    campaign(id: ID!): Campaign
    "Query all campaign list"
    campaigns(options: CampaignListOptions): CampaignList!
  }

  extend type Mutation {
    "Create a new Campaign"
    createCampaign(input: CreateCampaignInput!): Campaign!

    "Update an existing Campaign"
    updateCampaign(input: UpdateCampaignInput!): Campaign!

    "Delete an existing Campaign"
    deleteCampaign(id: ID!): DeletionResponse!
  }

  input CampaignListOptions

  input CampaignTranslationInput {
    id: ID
    languageCode: LanguageCode!
    name: String!
  }

  input CreateCampaignInput {
    code: String!
    promotionId: Int
    translations: [CampaignTranslationInput!]!
  }

  input UpdateCampaignInput {
    id: ID!
    code: String
    promotionId: Int
    translations: [CampaignTranslationInput!]
  }
`;
