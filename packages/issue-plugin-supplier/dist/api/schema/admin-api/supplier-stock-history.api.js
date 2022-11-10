"use strict";var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.supplierStockHistoryApi=void 0;const graphql_tag_1=__importDefault(require("graphql-tag"));exports.supplierStockHistoryApi=graphql_tag_1.default`
  extend type Query {
    "Query all supplier history list"
    supplierStockHistories(
      options: SupplierStockHistoryListOptions
    ): SupplierStockHistoryList!

    "Query detail of supplier history entity"
    supplierStockHistory(id: ID!): SupplierStockHistory
  }

  extend type Mutation {
    "Create a new SupplierStockHistory"
    createSupplierStockHistory(
      input: CreateSupplierStockHistoryInput!
    ): SupplierStockHistory!

    "Update an existing SupplierStockHistory"
    updateSupplierStockHistory(
      input: UpdateSupplierStockHistoryInput!
    ): SupplierStockHistory!

    "Delete an existing SupplierStockHistory"
    deleteSupplierStockHistory(id: ID!): DeletionResponse!
  }

  input SupplierStockHistoryListOptions

  input CreateSupplierStockHistoryInput {
    stockAdjustType: SupplierStockAdjustType!
    data: JSON
    uniqueKey: String
    supplierStockId: ID!
  }

  input UpdateSupplierStockHistoryInput {
    id: ID!
    stockAdjustType: SupplierStockAdjustType
    data: JSON
    uniqueKey: String
    supplierStockId: ID
  }
`;