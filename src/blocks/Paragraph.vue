<template>
    <p class="paragraph" v-html="text" />
</template>

<script setup lang="ts">
import type { ParagraphProps } from '../types/blocks/Paragraph';
defineProps<ParagraphProps>();
</script>