import gql from 'graphql-tag';

export const supplierType = gql`
  type Supplier implements Node {
    id: ID!
    supplierName: String!
    supplierNo: String!
    supplierType: String
    comment: String
  }

  type SupplierList implements PaginatedList {
    items: [Supplier!]!
    totalItems: Int!
  }
`;
