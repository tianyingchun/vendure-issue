"use strict";var __decorate=this&&this.__decorate||function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__param=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SupplierStockEntityResolver=void 0;const graphql_1=require("@nestjs/graphql"),core_1=require("@vendure/core"),supplier_stock_entity_1=require("../../../entities/supplier-stock.entity"),generated_admin_types_1=require("../../../generated-admin-types"),supplier_stock_history_service_1=require("../../services/supplier-stock-history.service");let SupplierStockEntityResolver=class SupplierStockEntityResolver{constructor(e,t){this.supplierStockHistoryService=e,this.productVariantService=t}async productVariant(e,t){return(0,core_1.assertFound)(this.productVariantService.findOne(t,e.productVariantId))}async stockHistory(e,t,r){const{items:i,totalItems:o}=await this.supplierStockHistoryService.findAll(t,{...r,sort:{createdAt:generated_admin_types_1.SortOrder.DESC,...r.sort},filter:{...r.filter,supplierStockId:{eq:String(e.id)}}},["administrator"]);return{items:i,totalItems:o}}};__decorate([(0,graphql_1.ResolveField)(),__param(0,(0,graphql_1.Parent)()),__param(1,(0,core_1.Ctx)()),__metadata("design:type",Function),__metadata("design:paramtypes",[supplier_stock_entity_1.SupplierStock,core_1.RequestContext]),__metadata("design:returntype",Promise)],SupplierStockEntityResolver.prototype,"productVariant",null),__decorate([(0,graphql_1.ResolveField)(),__param(0,(0,graphql_1.Parent)()),__param(1,(0,core_1.Ctx)()),__param(2,(0,graphql_1.Args)()),__metadata("design:type",Function),__metadata("design:paramtypes",[supplier_stock_entity_1.SupplierStock,core_1.RequestContext,Object]),__metadata("design:returntype",Promise)],SupplierStockEntityResolver.prototype,"stockHistory",null),SupplierStockEntityResolver=__decorate([(0,graphql_1.Resolver)("SupplierStock"),__metadata("design:paramtypes",[supplier_stock_history_service_1.SupplierStockHistoryService,core_1.ProductVariantService])],SupplierStockEntityResolver),exports.SupplierStockEntityResolver=SupplierStockEntityResolver;