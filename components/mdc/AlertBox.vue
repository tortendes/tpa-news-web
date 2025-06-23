<script setup lang="ts">
const props = defineProps<{ 
    title: string,
    variant: 'info' | 'warn' | 'error' | 'default'
}>()

</script>

<template>
    <div class="border-[1px]">
        <div v-if="props.variant === 'info'" class="px-2 py-1 flex gap-1 items-center bg-blue-500 text-white">
            <UIcon name="lucide:info" class="size-16" />
            <span class="font-mono font-medium">{{ props.title }}</span>
        </div>
        <div v-else-if="props.variant === 'warn'" class="px-2 py-1 flex gap-1 items-center bg-yellow-400 text-white">
            <UIcon name="lucide:triangle-alert" class="size-16" />
            <span class="font-mono font-medium">{{ props.title }}</span>
        </div>
        <div v-else-if="props.variant === 'error'" class="px-2 py-1 flex gap-1 items-center bg-red-500 text-white">
            <UIcon name="lucide:circle-alert" class="size-16" />
            <span class="font-mono font-medium">{{ props.title }}</span>
        </div>
        <div v-else class="px-2 py-1 flex gap-1 items-center bg-gray-600 text-white">
            <span class="font-mono font-medium">{{ props.title }}</span>
        </div>
        <div class="px-2 py-0.5">
            <slot />
        </div>
    </div>
</template>