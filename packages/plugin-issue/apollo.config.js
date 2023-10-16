// https://github.com/apollographql/apollo/blob/main/docs/source/devtools/apollo-config.md
// https://apollographql.github.io/apollo-workbench-vscode/
module.exports = {
  client: {
    service: {
      name: 'plugin-supplier',
      // url: 'https://demo.vendure.io/shop-api', // defaults to http://localhost:4000
      url: 'http://localhost:3001/shop-api', // Don't use local server because shop-api has loaded all plugin graphql types maybe
      // localSchemaFile: './packages/semic-admin-ui/schema-admin.json',
    },
    includes: ['**/schema/**/*.ts'],
    excludes: [
      '**/admin-api/**/*',
      '**/schema/*/index.ts',
      '**/node_modules/**/*',
      '**/__tests___/**/*',
    ],
  },
};
