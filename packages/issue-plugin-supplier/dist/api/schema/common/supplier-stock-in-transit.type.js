"use strict";var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.supplierStockInTransitType=void 0;const graphql_tag_1=__importDefault(require("graphql-tag"));exports.supplierStockInTransitType=graphql_tag_1.default`
  type SupplierStockInTransit implements Node {
    id: ID!
    quantity: Int!
    channelName: String
    channelOrderNo: String!
    supplierStock: SupplierStock!
    supplierStockId: ID!
  }

  type SupplierStockInTransitList implements PaginatedList {
    items: [SupplierStockInTransit!]!
    totalItems: Int!
  }
`;