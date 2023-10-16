import { gql } from 'graphql-tag';
import { campaignAdminApi } from './campaign.api.js';
import { campaignType } from './campaign.type.js';

export const adminApiExtensions = gql`
  ${campaignType}
  ${campaignAdminApi}
`;
