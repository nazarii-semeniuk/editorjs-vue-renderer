<template>
    <div class="quote">
        <blockquote>
            {{ text }}
        </blockquote>
        <div class="quote__caption" v-if="caption">
            {{ caption }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { QuoteProps } from '../types/blocks/Quote';
defineProps<QuoteProps>();
</script>