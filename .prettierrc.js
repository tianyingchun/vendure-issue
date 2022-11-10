// @ts-check

/**
 * @type {import('prettier').Config}
 */

// @ts-ignore
const { getPrettierConfig } = require('@armit/eslint-config-bases/helpers');

const { overrides = [], ...prettierConfig } = getPrettierConfig();

module.exports = {
  ...prettierConfig,
  overrides: [
    ...overrides,
    ...[
      {
        files: '*.md',
        options: {
          singleQuote: false,
          quoteProps: 'preserve',
        },
      },
    ],
  ],
};
