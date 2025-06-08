<template>
    <p class="paragraph" v-html="sanitize(text)" />
</template>

<script setup lang="ts">
import type { ParagraphProps } from '../types/blocks/Paragraph';

import { useSanitizer } from '../composables/useSanitizer';

defineProps<ParagraphProps>();

const { sanitize } = useSanitizer();
</script>