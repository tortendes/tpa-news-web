<script setup lang="ts">
import type { Article, LiveReport } from '~/types/Article';
type ModifiedLiveReport = LiveReport & { type: 'live' }
type ModifiedArticle = Article & { type: 'article' }

const props = defineProps<{
    article: ModifiedArticle | ModifiedLiveReport;
}>()

</script>

<template>
    <div v-if="article.type === 'article'" class="grid grid-cols-[repeat(8,1fr)] md:grid-cols-[repeat(12,1fr)] gap-4">
        <div class="col-start-1 col-end-5 md:col-start-2 row-end-1 md:col-end-8">
            <div class="flex flex-col items-stretch justify-between gap-4">
                <div>
                    <NuxtLink :href="`/articles/${article.slug}`">
                        <h1 class="text-lg md:text-3xl font-display text-slate-900 hover:text-blue-950">{{ article.title }}</h1>
                    </NuxtLink>
                    <p class="text-gray-800/70 text-xs md:text-base">{{ article.description }}</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-gray-600 text-xs md:text-base">{{ $dayjs(article.date_created).format('MMM D, YYYY h:mm a') }}</p>
                </div>
            </div>
        </div>
        <figure class="col-start-6 col-end-9 md:col-start-9 md:col-end-11" v-if="article.coverImage">
            <NuxtLink :href="`/articles/${article.slug}`">
                <NuxtImg
                :src="article.coverImage"
                width="1080"
                height="1080"
                provider="directus"

                class="aspect-square w-full h-auto"
                fit="cover"
                />
            </NuxtLink>
        </figure>
    </div>
    <div v-if="article.type === 'live'" class="grid grid-cols-[repeat(8,1fr)] md:grid-cols-[repeat(12,1fr)] gap-4">
        <div class="col-start-1 col-end-5 md:col-start-2 md:col-end-8">
            <NuxtLink :href="`/articles/live/${article.report.id}`">
                <h1 class="text-lg md:text-3xl font-display text-slate-900 hover:text-blue-950">{{ article.title || article.report.title }}</h1>
            </NuxtLink>
            <p class="text-xs md:text-base text-gray-600">This article is a part of an live report.</p>
        </div>
        <figure class="col-start-6 col-end-9 md:col-start-9 md:col-end-11" v-if="typeof article.report !== 'number'">
            <NuxtLink :href="`/articles/live/${article.report.id}`">
                <NuxtImg
                :src="article.report.coverImage"
                width="1080"
                height="1080"
                provider="directus"
                class="aspect-square w-full h-auto"
                fit="cover"
                />
            </NuxtLink>
        </figure>
    </div>
</template>