<template>
    <h1 class="text-4xl font-bold font-display">
        <a
            v-if="generate"
            :href="`#${props.id}`"
        >
            <slot />
        </a>
        <slot v-else />
    </h1>
</template>

<script setup lang="ts">
const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h1)))
</script>