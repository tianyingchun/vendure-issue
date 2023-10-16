## The usage of issue https://github.com/vendure-ecommerce/vendure/issues/2453

1. goto `plugin-issue`
2. npm run build
3. goto `dev-server`
4. yarn serve
5. http://localhost:3001/admin/catalog/collections

6. open `http://localhost:3001/admin-api`
7. execute query using below

```gql
{
  collection(id: 2) {
    id
    createdAt
    updatedAt
    name
    slug
    position
    isPrivate
    customFields {
      collectionType
      isFeatured
      invisible
      metaTitle
      metaDescription
      collectionKeys
      campaign {
        id
        name
        languageCode
        translations {
          id
        }
      }
    }
  }
}
```
