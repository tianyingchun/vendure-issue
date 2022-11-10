"use strict";var __decorate=this&&this.__decorate||function(e,t,r,i){var o,p=arguments.length,s=p<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(p<3?o(s):p>3?o(t,r,s):o(t,r))||s);return p>3&&s&&Object.defineProperty(t,r,s),s},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__param=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SupplierStockHistoryAdminResolver=void 0;const graphql_1=require("@nestjs/graphql"),core_1=require("@vendure/core"),supplier_stock_history_entity_1=require("../../../entities/supplier-stock-history.entity"),supplier_1=require("../../../permission/supplier"),supplier_stock_history_service_1=require("../../services/supplier-stock-history.service");let SupplierStockHistoryAdminResolver=class SupplierStockHistoryAdminResolver{constructor(e){this.supplierStockHistoryService=e}supplierStockHistory(e,t){return this.supplierStockHistoryService.findOne(e,t.id)}supplierStockHistories(e,t,r){return this.supplierStockHistoryService.findAll(e,t.options,r)}async createSupplierStockHistory(e,t){return this.supplierStockHistoryService.create(e,t.input)}async updateSupplierStockHistory(e,t){return this.supplierStockHistoryService.update(e,t.input)}async deleteSupplierStockHistory(e,t){return this.supplierStockHistoryService.delete(e,t.id)}};__decorate([(0,core_1.Allow)(supplier_1.supplierPermission.Read),(0,graphql_1.Query)(),__param(0,(0,core_1.Ctx)()),__param(1,(0,graphql_1.Args)()),__metadata("design:type",Function),__metadata("design:paramtypes",[core_1.RequestContext,Object]),__metadata("design:returntype",Promise)],SupplierStockHistoryAdminResolver.prototype,"supplierStockHistory",null),__decorate([(0,core_1.Allow)(supplier_1.supplierPermission.Read),(0,graphql_1.Query)(),__param(0,(0,core_1.Ctx)()),__param(1,(0,graphql_1.Args)()),__param(2,(0,core_1.Relations)({entity:supplier_stock_history_entity_1.SupplierStockHistory})),__metadata("design:type",Function),__metadata("design:paramtypes",[core_1.RequestContext,Object,Array]),__metadata("design:returntype",void 0)],SupplierStockHistoryAdminResolver.prototype,"supplierStockHistories",null),__decorate([(0,core_1.Allow)(supplier_1.supplierPermission.Create),(0,graphql_1.Mutation)(),__param(0,(0,core_1.Ctx)()),__param(1,(0,graphql_1.Args)()),__metadata("design:type",Function),__metadata("design:paramtypes",[core_1.RequestContext,Object]),__metadata("design:returntype",Promise)],SupplierStockHistoryAdminResolver.prototype,"createSupplierStockHistory",null),__decorate([(0,core_1.Allow)(supplier_1.supplierPermission.Update),(0,graphql_1.Mutation)(),__param(0,(0,core_1.Ctx)()),__param(1,(0,graphql_1.Args)()),__metadata("design:type",Function),__metadata("design:paramtypes",[core_1.RequestContext,Object]),__metadata("design:returntype",Promise)],SupplierStockHistoryAdminResolver.prototype,"updateSupplierStockHistory",null),__decorate([(0,core_1.Allow)(supplier_1.supplierPermission.Delete),(0,graphql_1.Mutation)(),__param(0,(0,core_1.Ctx)()),__param(1,(0,graphql_1.Args)()),__metadata("design:type",Function),__metadata("design:paramtypes",[core_1.RequestContext,Object]),__metadata("design:returntype",Promise)],SupplierStockHistoryAdminResolver.prototype,"deleteSupplierStockHistory",null),SupplierStockHistoryAdminResolver=__decorate([(0,graphql_1.Resolver)(),__metadata("design:paramtypes",[supplier_stock_history_service_1.SupplierStockHistoryService])],SupplierStockHistoryAdminResolver),exports.SupplierStockHistoryAdminResolver=SupplierStockHistoryAdminResolver;