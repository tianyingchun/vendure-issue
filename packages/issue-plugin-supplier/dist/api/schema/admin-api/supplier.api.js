"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.supplierApi=void 0;const graphql_tag_1=__importDefault(require("graphql-tag"));exports.supplierApi=graphql_tag_1.default`
  extend type ProductVariant {
    "产品供应商信息"
    supplier: Supplier
  }

  extend type Query {
    "Query all supplier list"
    suppliers(options: SupplierListOptions): SupplierList!

    "Query detail of supplier entity"
    supplier(id: ID!): Supplier
  }

  extend type Mutation {
    "Create a new Supplier"
    createSupplier(input: CreateSupplierInput!): Supplier!

    "Update an existing Supplier"
    updateSupplier(input: UpdateSupplierInput!): Supplier!

    "Delete an existing Supplier"
    deleteSupplier(id: ID!): DeletionResponse!
  }

  input SupplierListOptions

  input CreateSupplierInput {
    supplierName: String!
    supplierNo: String!
    supplierType: String
    comment: String
  }

  input UpdateSupplierInput {
    id: ID!
    supplierName: String
    supplierNo: String
    supplierType: String
    comment: String
  }
`;