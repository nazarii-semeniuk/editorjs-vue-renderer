<template>
    <div class="app">
        <h1>App</h1>
        <EditorjsRenderer :editorjs-blocks :custom-blocks />
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import EditorjsRenderer from '@/EditorjsRenderer.vue';

import editorjsBlocks from './editorjsBlocks';

const customBlocks = {
    sum: defineAsyncComponent(() => import('./customBlocks/Sum.vue')),
};
</script>