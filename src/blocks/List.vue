<template>
    <component :is="listStyle === 'ordered' ? 'ol' : 'ul'" class="list">
        <li v-for="(item, index) in items" :key="index" v-html="item" />
    </component>
</template>

<script setup lang="ts">
import type { ListProps } from '../types/blocks/List';
defineProps<ListProps>();
</script>
