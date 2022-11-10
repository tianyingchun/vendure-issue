"use strict";var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.supplierStockInTransitApi=void 0;const graphql_tag_1=__importDefault(require("graphql-tag"));exports.supplierStockInTransitApi=graphql_tag_1.default`
  extend type Query {
    "Query all SupplierStockInTransit list"
    supplierStockInTransits(
      options: SupplierStockInTransitListOptions
    ): SupplierStockInTransitList!

    "Query detail of SupplierStockInTransit entity"
    supplierStockInTransit(id: ID!): SupplierStockInTransit
  }

  extend type Mutation {
    "在途库存的商品已经入库"
    finishInTransitStocks(input: FinishInTransitStocksInput!): Int!

    "批量创建采购库存表单, 服务器短执行批量处理入库"
    batchCreateStockForm(
      inputs: [CreateSupplierStockInTransitInput!]!
    ): Boolean!

    "Create a new SupplierStockInTransit"
    createSupplierStockInTransit(
      input: CreateSupplierStockInTransitInput!
    ): SupplierStockInTransit!

    "Update an existing SupplierStockInTransit"
    updateSupplierStockInTransit(
      input: UpdateSupplierStockInTransitInput!
    ): SupplierStockInTransit!

    "Delete an existing SupplierStockInTransit"
    deleteSupplierStockInTransits(ids: [ID!]!): DeletionResponse!
  }

  input SupplierStockInTransitListOptions

  input FinishInTransitStocksInput {
    inTransitIds: [ID!]!
  }

  input CreateSupplierStockInTransitInput {
    quantity: Int!
    channelName: String
    channelOrderNo: String!
    supplierStockId: ID!
  }

  input UpdateSupplierStockInTransitInput {
    id: ID!
    quantity: Int
    channelName: String
    channelOrderNo: String
    supplierStockId: ID
  }
`;