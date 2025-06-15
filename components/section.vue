<script setup lang="ts">
import type { Article } from '~/types/Article';
import Author from './author.vue';

const props = defineProps<{ uuid: string }>();
const { getItems, getItemById } = useDirectusItems();

const { data: sectionInfo } = await useAsyncData<any>(props.uuid, async () => 
    await getItemById<any>({
        collection: "sections",
        id: props.uuid,
        params: {
            fields: [
                "title"
            ]
        }
    })
)

const { data: articles, status: articleStatus } = await useAsyncData<Article[]>(`articles-${props.uuid}`, async () => 
    await getItems<Article>({
        collection: "article",
        params: {
            filter: {
                section: {
                    _eq: props.uuid,
                },
            },
            fields: [
                'title',
                'description',
                'coverImage',
                'authors.author_id.*',
                'slug'
            ]
        }
    })
)
</script>

<template>
    <div class="border-b-2 border-black mb-2">
        <h1 v-if="sectionInfo.title" class="text-3xl font-display font-extrabold">{{ sectionInfo.title }}</h1>
    </div>
    <div v-if="articleStatus == 'success' && articles && articles.length > 0" class="flex items-start overflow-x-scroll gap-4 py-2">
        <article v-for="(item, index) in articles" :key="index" class="min-w-64 flex flex-col gap-0.5 items-start">
            <NuxtLink :href="`/articles/${item.slug}`">
                <NuxtImg :src="item.coverImage" provider="directus" class="aspect-16/9 object-cover rounded-md md-32 md:h-64" width="1280" height="720" />
                <div>
                    <h1 class="text-lg font-display font-bold line-clamp-1">{{ item.title }}</h1>
                    <div class="text-gray-600">
                        <Author :authors="item.authors" />
                    </div>
                    <p class="line-clamp-3">{{ item.description }}</p>
                </div>
            </NuxtLink>
        </article>
    </div>
    <div v-else class="flex items-center justify-center w-full gap-2">
        <div>
            <h1 class="text-display font-bold">Oops! No articles yet</h1>
            <p>We currently do not have articles for this section. Watch out for new ones in a bit!</p>
        </div>
        <img src="~/assets/img/allay.webp" class="max-w-32">
    </div>
</template>