<script setup lang="ts">
const props = defineProps<{ username: string }>()

interface Response {
    code: string,
    message: string;
    data: {
        player: Player
    },
    success: boolean;
}

interface Player {
    username: string;
    id: string;
    raw_id: string;
}

const { data: player } = await $fetch<Response>(`https://playerdb.co/api/player/minecraft/${props.username}`)
</script>

<template>
    <div class="inline-flex items-center justify-center gap-0.5">
        <NuxtImg :src="`https://crafatar.com/renders/head/${player.player.id}?size=48&overlay=true`" class="w-auto h-4" />
        <slot />
    </div>
</template>