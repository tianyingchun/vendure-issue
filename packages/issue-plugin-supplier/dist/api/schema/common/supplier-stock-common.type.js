"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.supplierStockCommonType=void 0;const graphql_tag_1=__importDefault(require("graphql-tag"));exports.supplierStockCommonType=graphql_tag_1.default`
  enum SupplierStockAdjustType {
    "真实库存"
    STOCK_REAL
    "虚拟库存"
    STOCK_VIRTUAL
    "虚拟库存+真实库存"
    STOCK_BOTH
    "在途中..."
    STOCK_IN_TRANSIT
    "在途中转换到入库"
    STOCK_TRANSIT_TO_STOCK
    "未配置"
    NONE
  }
`;