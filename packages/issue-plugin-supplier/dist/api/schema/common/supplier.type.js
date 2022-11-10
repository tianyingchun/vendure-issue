"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.supplierType=void 0;const graphql_tag_1=__importDefault(require("graphql-tag"));exports.supplierType=graphql_tag_1.default`
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