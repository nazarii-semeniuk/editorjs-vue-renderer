<template>
    <div class="sum">Result: {{ result }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    numbers: Array<number>;
}>();

const result = computed(() => {
    return props.numbers.reduce((acc, num) => {
        return acc + num;
    }, 0);
});
</script>
