"use strict";var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.supplierStockType=void 0;const graphql_tag_1=__importDefault(require("graphql-tag"));exports.supplierStockType=graphql_tag_1.default`
  type SupplierStock implements Node {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    stockOnHand: Int!
    virtualStock: Int!
    inTransitsStock: Int!
    stockArea: String
    productVariant: ProductVariant!
    productVariantId: ID!
    product: Product!
    productId: ID!
    supplierId: ID
    supplier: Supplier
    comment: String
    enabled: Boolean!
    link: String
    tags: [String!]
    stocksInTransits: [SupplierStockInTransit!]!
    stockHistory(
      options: SupplierStockHistoryListOptions
    ): SupplierStockHistoryList!
  }

  type SupplierStockList implements PaginatedList {
    items: [SupplierStock!]!
    totalItems: Int!
  }
`;