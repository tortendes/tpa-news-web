<template>
    <section v-for="item in fetchLive" class="flex gap-2">
        <NuxtLink :href="`/articles/live/${item.id}`">
            <p class="font-display font-semibold">{{ item.short_title }}</p>
        </NuxtLink>
    </section>
</template>

<script setup lang="ts">
import type { Live } from '~/types/Article';
const { getItems } = useDirectusItems()

const { data: fetchLive } = await useAsyncData<Live[]>(
    'live',
    async () => await getItems<Live>({
        collection: "live_article",
        params: {
            filter: {
                status: 'published'
            },
            limit: 3,
            sort: '-date_created'
        }
    })
)
</script>
