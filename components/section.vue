<script setup lang="ts">
import type { Article } from '~/types/Article';

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
                }
            }
        }
    })
)
</script>

<template>
    <div class="border-b-2 border-black mb-2">
        <h1 class="text-3xl font-display font-extrabold" v-if="sectionInfo.title">{{ sectionInfo.title }}</h1>
    </div>
    <div class="flex items-center overflow-x-scroll gap-4 py-2">
        <article v-for="item in articles" v-if="articleStatus == 'success' && articles && articles.length > 0" class="w-64">
            <NuxtLink :href="`/articles/${item.slug}`">
                <NuxtImg :src="item.coverImage" provider="directus" class="aspect-16/9 rounded-md h-auto w-auto object-cover" />
                <h1 class="text-lg font-display font-bold line-clamp-1">{{ item.title }}</h1>
                <p class="line-clamp-3">{{ item.description }}</p>
            </NuxtLink>
        </article>
        <div class="flex items-center justify-center w-full gap-2" v-else>
            <div>
                <h1 class="text-display font-bold">Oops! No articles yet</h1>
                <p>We currently do not have articles for this section. Watch out for new ones in a bit!</p>
            </div>
            <img src="~/assets/img/allay.webp" class="max-w-32">
        </div>
    </div>
</template>