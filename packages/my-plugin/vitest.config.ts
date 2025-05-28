import { swcUnpluginTs } from 'swc-unplugin-ts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths(), swcUnpluginTs.vite({})],
  test: {
    globals: true,
    testTimeout: 5000 * 1000,
    exclude: [...configDefaults.exclude],
    include: ['**/?(*.){test,spec}.?(c|m)[jt]s?(x)'],
  },
});
