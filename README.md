# vendure-issue

vendure-issue

## Installation

- `yarn install`
- `yarn serve`

## Preparing sample data maybe not required for this case

http://localhost:3001/admin-api

```gql
mutation {
  initializeDemo
}
```

## Issue reproduce steps

http://localhost:3001/admin-api

```gql
{
  supplierStockInTransits(options: { skip: 0, take: 100 }) {
    items {
      id
      supplierStock {
        id
        productVariant {
          id
        }
      }
    }
  }
}
```

### See errors

```text
[ExceptionsHandler] Not unique table/alias: 'SuStInTr__suSt__prVaFiFrAs'
@semic/dev-server: QueryFailedError: Not unique table/alias: 'SuStInTr__suSt__prVaFiFrAs'
@semic/dev-server:     at QueryFailedError.TypeORMError [as constructor]
```

## Analysis of above problems

1. `/custom-fields/product-variant-custom-fields.ts` custom fields definitions as below with `eager: true`

```ts
{
    type: 'relation',
    name: 'tryonFrameAsset',
    nullable: true,
    entity: Asset,
    eager: true,
    public: true,
  },
  {
    type: 'relation',
    name: 'tryonTempleAsset',
    nullable: true,
    entity: Asset,
    eager: true,
    public: true,
  },
  ...
```

2. In `supplier-stock-in-transit.service.ts` we attach nested relations `supplierStock.productVariant`

```ts

  findAll(
    ctx: RequestContext,
    options?: ListQueryOptions<SupplierStockInTransit>
  ): Promise<PaginatedList<SupplierStockInTransit>> {
    return this.listQueryBuilder
      .build(SupplierStockInTransit, options, {
        ctx,
        relations: ['supplierStock', 'supplierStock.productVariant'],
      })
      .getManyAndCount()
      .then(([items, totalItems]) => {
        return {
          items,
          totalItems,
        };
      });
  }
```

## This issue may cause of custom Fields with nested `relation` with `eager: true`
