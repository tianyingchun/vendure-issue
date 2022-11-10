"use strict";var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.supplierStockApi=void 0;const graphql_tag_1=__importDefault(require("graphql-tag"));exports.supplierStockApi=graphql_tag_1.default`
  extend type Query {
    "Query all supplierStock list"
    supplierStocks(
      options: SupplierStockListOptions
      extrasQuery: StockExtrasQueryInput
    ): SupplierStockList!

    "库存页面, 列出 可售库存 (在途库存+虚拟库存) > 0 的数据 + 特定tag 模糊匹配的数据, 并分组显示"
    queryOnSaleStockedSkus(input: OnSaleStockedSkusInput!): SupplierStockList!

    "采购页面, 列出 可售库存 (在途库存+虚拟库存) < 0 的数据 并分组显示"
    queryInsufficientOnSaleStock(
      input: InsufficientOnSaleStockInput!
    ): SupplierStockList!

    "Query detail of supplierStock entity"
    supplierStock(id: ID!): SupplierStock

    "Query all supplier static tags"
    allSupplierStockTags: [String!]!
  }

  extend type Mutation {
    "Create a new SupplierStock"
    createSupplierStock(input: CreateSupplierStockInput!): SupplierStock!

    "Update an existing SupplierStock"
    updateSupplierStock(input: UpdateSupplierStockInput!): SupplierStock!

    "Delete an existing SupplierStock"
    deleteSupplierStock(id: ID!): DeletionResponse!

    "调整库存, 真实库存、虚拟库存(+ / -)"
    adjustStock(input: AdjustSupplierStockInput!): Boolean

    "Sync product variants to stock"
    syncProductVariantsStock(productVariantIds: [ID!]): Boolean
  }

  input SupplierStockListOptions

  input OnSaleStockedSkusInput {
    take: Int!
    skip: Int!
    "允许查询标签为:库存款的自定义标签查询"
    tags: [String!]
  }

  input InsufficientOnSaleStockInput {
    take: Int!
    skip: Int!
  }

  input AdjustSupplierStockInput {
    stockId: ID!
    adjustType: SupplierStockAdjustType!
    quantity: Int!
    reason: String!
  }

  input StockExtrasQueryInput {
    orderCode: String
    orderState: String
    orderPlacedStartAt: DateTime
    orderPlacedEndAt: DateTime
  }

  input CreateSupplierStockInput {
    stockOnHand: Int!
    virtualStock: Int!
    inTransitsStock: Int
    stockArea: String
    comment: String
    enabled: Boolean
    link: String
    tags: [String!]
    productVariantId: String!
    productId: String
    supplierId: ID
  }

  input UpdateSupplierStockInput {
    id: ID!
    stockOnHand: Int
    virtualStock: Int
    inTransitsStock: Int
    stockArea: String
    comment: String
    enabled: Boolean
    link: String
    tags: [String!]
    productVariantId: String
    productId: String
    supplierId: ID
  }
`;