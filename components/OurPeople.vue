<script setup lang="ts">
const props = defineProps<{ username: string; }>()
</script>

<template>
    <div class="flex gap-1 items-start">
        <NuxtImg :src="`https://mc-heads.net/avatar/${username}/80`" class="aspect-square max-h-fit" />
        <div>
            <p class="font-bold">{{ username }}</p>
            <p class="text-sm">
                <slot />
            </p>
        </div>
    </div>
</template>