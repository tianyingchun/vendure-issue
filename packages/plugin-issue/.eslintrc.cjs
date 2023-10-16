/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/belgattitude/nextjs-monorepo-example/blob/main/docs/about-linters.md
 */

// Workaround for https://github.com/eslint/eslint/issues/3458 (re-export of @rushstack/eslint-patch)
require('@armit/eslint-config-bases/patch/modern-module-resolution');

const {
  getDefaultIgnorePatterns,
} = require('@armit/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [
    ...getDefaultIgnorePatterns(),
    '**/generated-admin-types.ts',
    '**/generated-shop-types.ts',
    '**/generated-graphql-errors.ts',
    '**/schema-admin.json',
    '**/schema-shop.json',
  ],
  extends: [
    '@armit/eslint-config-bases/typescript',
    '@armit/eslint-config-bases/sonar',
    // Apply prettier and disable incompatible rules
    '@armit/eslint-config-bases/prettier',
  ],
  rules: {
    // optional overrides per project
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  overrides: [
    // optional overrides per project file match
    {
      files: ['codegen.json'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
};
