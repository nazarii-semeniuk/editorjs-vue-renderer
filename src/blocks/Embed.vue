<template>
    <div v-if="service === 'youtube'" class="youtube-embed">
        <iframe loading="lazy" :src="embed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    </div>
    <div v-else class="fallback-embed">
        <p>Unfortunately, the {{ service }} service is not supported</p>
    </div>
</template>

<script setup lang="ts">
import type { EmbedProps } from '../types/blocks/Embed';
defineProps<EmbedProps>();
</script>