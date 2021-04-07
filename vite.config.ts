import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';

export default defineConfig({
  plugins: [vue(), ViteComponents()],
  resolve: {
    alias: [{ find: '@/', replacement: `${__dirname}/src/` }],
  },
});
