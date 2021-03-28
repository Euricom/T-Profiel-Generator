import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';
import path from 'path';

export default defineConfig({
  plugins: [vue(), ViteComponents()],
  alias: {
    '/@': path.resolve(__dirname, './src'),
  },
});
