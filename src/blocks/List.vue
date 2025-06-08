<template>
    <component :is="listStyle === 'ordered' ? 'ol' : 'ul'" class="list">
        <li v-for="(item, index) in items" :key="index" v-html="sanitize(item)" />
    </component>
</template>

<script setup lang="ts">
import type { ListProps } from '../types/blocks/List';

import { useSanitizer } from '../composables/useSanitizer';

defineProps<ListProps>();

const { sanitize } = useSanitizer();
</script>
