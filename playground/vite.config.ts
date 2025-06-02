import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    root: path.resolve('./playground'),
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
});
