"use strict";var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.supplierStockHistoryType=void 0;const graphql_tag_1=__importDefault(require("graphql-tag"));exports.supplierStockHistoryType=graphql_tag_1.default`
  type SupplierStockHistory implements Node {
    id: ID!
    createdAt: DateTime!
    supplierStock: SupplierStock!
    supplierStockId: ID!
    administrator: Administrator
    administratorId: ID
    stockAdjustType: SupplierStockAdjustType!
    data: JSON
  }

  type SupplierStockHistoryList implements PaginatedList {
    items: [SupplierStockHistory!]!
    totalItems: Int!
  }
`;