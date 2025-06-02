import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [vue(), dts()],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'EditorjsVueRenderer',
            fileName: 'editorjs-vue-renderer',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
    },
});
