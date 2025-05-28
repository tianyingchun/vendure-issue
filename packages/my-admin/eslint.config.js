import { base, defineConfig } from '@hyperse/eslint-config-hyperse';

export default defineConfig(
  [
    ...base,
    {
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  ['**/templates/**/*.js', '**/__data__/**/*']
);
