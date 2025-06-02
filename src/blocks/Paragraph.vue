<template>
    <p class="paragraph">{{ text }}</p>
</template>

<script setup lang="ts">
import type { ParagraphProps } from '../types/blocks/Paragraph';
defineProps<ParagraphProps>();
</script>