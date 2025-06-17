<script setup lang="ts">
import relativeTime from 'dayjs/plugin/relativeTime' 
import type { Live, LiveReport } from '~/types/Article';
import ArticleComponent from '~/components/LiveArticle/ArticleComponent.vue'
import Donate from '~/components/SendDonate.vue'
const route = useRoute();
const { getItems, getItemById } = useDirectusItems();
useDayjs().extend(relativeTime)

const report = await getItemById<Live>({
    collection: 'live_article',
    id: Array.isArray(route.params.id) ? route.params.id[0] : route.params.id,
    params: {
        filter: {
            status: { _neq: "draft" }
        }
    }
})

let articles = await getItems<LiveReport>({
    collection: 'live_report',
    params: {
        filter: {
            report: {
                id: { _eq: report.id },
            },
            status: { _eq: "published" },
        },
        fields: [
            'authors.author_id.*',
            '*'
        ],
        sort: ['-date_created']
    }
})


if (!report) {
    throw createError({
        statusCode: 404,
        name: "Live report not found",
        statusMessage: "Live report not found. It may be unpublished, deleted, or moved. Check the URL and try again.",
    })
}

useSeoMeta({
    title: `${report.title} - TPA News`,
    author: "TPA Newsroom",
    description: report.description,
    applicationName: 'TPA News',
    themeColor: '#162456',
    articlePublishedTime: new Date(report.date_created).toISOString(),
    ogType: 'article',
    ogUrl: `https://tpanews.demcraft.site/articles/live/${report.id}`,
    ogImage: {
        url: `https://directus.tpanews.demcraft.site/assets/${report.seoImage}`,
        width: 1920,
        height: 1080,
    },
    ogSiteName: "Live Report",
    twitterImage: `https://directus.tpanews.demcraft.site/assets/${report.seoImage}`,
    twitterCard: 'summary_large_image',
    twitterCreator: '@tpamedianews',
    twitterTitle: report.title,
    twitterDescription: report.description
})
</script>
<template>
    <section class="md:px-8 pt-8 md:py-4 bg-slate-950 text-white flex items-center justify-center flex-col">
        <div class="max-w-prose px-4">
            <div class="flex items-center gap-2 mb-2">
                <span v-if="report.status == 'published'" class="bg-blue-900 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <UIcon name="ix:circle-dot" class="size-5" />
                    <span class="md:text-base text-xs md:font-display md:font-extrabold">LIVE</span>
                </span>
                <span v-else class="bg-yellow-600 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <UIcon name="bx:bxs-archive-in" class="size-5" />
                    <span class="md:text-base text-xs md:font-display md:font-extrabold">ARCHIVE</span>
                </span>
                <span v-if="articles[0]" class="text-gray-300 md:text-base text-sm">Last updated {{ $dayjs().to($dayjs(articles[0].date_created)) }}</span>
                <span v-else class="text-gray-300 md:text-base text-sm">Developing story...</span>
            </div>
            <h1 class="text-2xl font-[NRK_Super_Sans Extended] font-bold md:text-4xl">{{ report.title }}</h1>
            <p class="text-gray-300 mt-2">{{ report.description }}</p>
        </div>
        <NuxtImg :src="report.coverImage" provider="directus" class="mt-8 shadow-2xl md:rounded-2xl h-auto md:max-w-2/3" />
    </section>
    <section class="flex items-center justify-center">
        <div class="flex flex-col items-center justify-center">
            <div v-if="articles.length > 0" v-for="(article, index) in articles" class="">
                <ArticleComponent :content="article" />
                <div v-if="index !== articles.length - 1" class="h-[1px] w-full bg-gray-600/50 my-4 mx-2"></div>
            </div>
            <div v-else class="flex items-center justify-center py-4 px-2">
                <div class="flex flex-col items-center justify-center gap-4">
                    <img src="~/assets/img/fox.webp" class="h-auto max-w-3xs">
                    <section>
                        <h2 class="text-2xl font-serif font-medium">This is a developing story...</h2>
                        <p>Come back later, our writers are currently have a story baking! <span class="text-gray-700 font-light">(let them cook)</span></p>
                    </section>
                </div>
            </div>
            <Donate class="mx-2" />
        </div>
    </section>
</template>