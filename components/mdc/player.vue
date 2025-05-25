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

const { data: player, status } = await useLazyFetch<Response>(`https://playerdb.co/api/player/minecraft/${props.username}`)
</script>

<template>
    <div class="inline-flex items-center justify-center gap-1">
        <NuxtImg v-if="status == 'success' && player" :src="`https://crafatar.com/avatars/${player.data.player.id}?size=48&overlay=true`" class="w-auto h-4" />
        <NuxtImg v-else-if="status == 'pending'" src="https://images.minecraft-heads.com/render3d/head/32/3286f5a31d2d4fc6090236e6f26a84d9.webp" class="w-auto h-4" />
        <NuxtImg v-else src="https://images.minecraft-heads.com/render3d/head/32/325f5f7aedf3030e704e157eb1fa437f.webp" class="w-auto h-4" />
        <div class="">
            <slot />
        </div>
    </div>
</template>