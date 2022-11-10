"use strict";var __importDefault=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.adminApiExtensions=void 0;const graphql_tag_1=__importDefault(require("graphql-tag")),common_1=require("../common"),supplier_stock_history_api_1=require("./supplier-stock-history.api"),supplier_stock_intransit_api_1=require("./supplier-stock-intransit.api"),supplier_stock_api_1=require("./supplier-stock.api"),supplier_api_1=require("./supplier.api");exports.adminApiExtensions=graphql_tag_1.default`
  ${common_1.supplierType}
  ${common_1.supplierStockType}
  ${common_1.supplierStockHistoryType}
  ${common_1.supplierStockInTransitType}
  ${common_1.supplierStockCommonType}

  ${supplier_api_1.supplierApi}
  ${supplier_stock_api_1.supplierStockApi}
  ${supplier_stock_history_api_1.supplierStockHistoryApi}
  ${supplier_stock_intransit_api_1.supplierStockInTransitApi}
`;