<template>
    <div class="editorjs-renderer">
        <template v-for="block in editorjsBlocks" :key="block.id">
            <component v-if="blocks[block.type]" :is="blocks[block.type]" v-bind="sanitizeProps(block.data, block.type)"></component>
            <p v-else-if="showUnsupported">
                Unsupported block type: {{ block.type }}. <br />
                You can create a custom blocks types and pass it to the `customBlocks` prop.
            </p>
        </template>
    </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import { defineAsyncComponent } from 'vue';
import type { BlockType, BlockData, EditorjsBlocks } from './types/blocks';

const props = withDefaults(
    defineProps<{
        editorjsBlocks: EditorjsBlocks;
        customBlocks?: Record<string, Component>;
        showUnsupported?: boolean;
    }>(),
    {
        customBlocks: () => ({}),
        showUnsupported: true,
    }
);

const blocks: Record<string, Component> = {
    paragraph: defineAsyncComponent(() => import('./blocks/Paragraph.vue')),
    header: defineAsyncComponent(() => import('./blocks/Header.vue')),
    image: defineAsyncComponent(() => import('./blocks/Image.vue')),
    list: defineAsyncComponent(() => import('./blocks/List.vue')),
    embed: defineAsyncComponent(() => import('./blocks/Embed.vue')),
    quote: defineAsyncComponent(() => import('./blocks/Quote.vue')),
    table: defineAsyncComponent(() => import('./blocks/Table.vue')),
    ...props.customBlocks,
};

function sanitizeProps(blockData: BlockData[keyof BlockData], blockType: BlockType) {
    const sanitiedData = { ...blockData };

    if ('style' in sanitiedData) {
        sanitiedData.listStyle = sanitiedData.style;
        delete sanitiedData.style;
    }

    return sanitiedData;
}
</script>
