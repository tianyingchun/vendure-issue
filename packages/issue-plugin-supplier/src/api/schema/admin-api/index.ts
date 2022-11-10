import gql from 'graphql-tag';
import {
  supplierStockType,
  supplierStockInTransitType,
  supplierStockCommonType,
  supplierType,
} from '../common';
import { supplierStockInTransitApi } from './supplier-stock-intransit.api';
import { supplierStockApi } from './supplier-stock.api';

export const adminApiExtensions = gql`
  ${supplierType}
  ${supplierStockType}
  ${supplierStockInTransitType}
  ${supplierStockCommonType}

  ${supplierStockApi}
  ${supplierStockInTransitApi}
`;
