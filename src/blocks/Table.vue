<template>
    <table class="table">
        <thead v-if="withHeadings">
            <tr>
                <th v-for="(row, index) in content[0]" :key="index">
                    {{ row }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in content.slice(withHeadings ? 1 : 0)" :key="index">
                <td v-for="(cell, cellIndex) in row" :key="cellIndex" v-html="sanitize(cell)">
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import type { TableProps } from '../types/blocks/Table';

import { useSanitizer } from '../composables/useSanitizer';

defineProps<TableProps>();

const { sanitize } = useSanitizer();
</script>