<template>
    <component :is="tag" :id="generateId()" class="header" v-html="sanitize(text)" />
</template>

<script setup lang="ts">
import type { HeaderProps } from '../types/blocks/Header';
import { computed } from 'vue';

import { useSanitizer } from '../composables/useSanitizer';

const props = defineProps<HeaderProps>();

const { sanitize } = useSanitizer();

const tag = computed(() => {
    return `h${props.level}`;
});

function generateId() {
    const slug = sanitize(props.text)
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
