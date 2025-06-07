<template>
    <component :is="tag" :id="generateId()" class="header" v-html="text" />
</template>

<script setup lang="ts">
import type { HeaderProps } from '../types/blocks/Header';
import { computed } from 'vue';

const props = defineProps<HeaderProps>();

const tag = computed(() => {
    return `h${props.level}`;
});

function generateId() {
    const slug = props.text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/--+/g, '-')
        .replace(/^-|-$/g, '');

    if (slug) {
        return slug;
    } else {
        return `header-${Math.random().toString(36).substring(2, 9)}`;
    }
}
</script>
