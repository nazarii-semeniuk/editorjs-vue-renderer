<template>
    <img :src="file.url" :alt="caption" class="image" :class="classes" />
</template>

<script setup lang="ts">
import type { ImageProps } from '../types/blocks/Image';
import { computed } from 'vue';

const props = defineProps<ImageProps>();

const classes = computed(() => {
    return {
        'image--with-border': props.withBorder,
        'image--with-background': props.withBackground,
        'image--stretched': props.stretched
    };
});
</script>