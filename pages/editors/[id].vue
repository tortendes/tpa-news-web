<script setup lang="ts">
import { LiveReport, Article } from '~/types/Article'
import type { Author } from '~/types/Author'
import ArticleBlock from '~/components/article-block.vue'
const { getItemById, getItems } = useDirectusItems()
const route = useRoute()

type ModifiedLiveReport = LiveReport & { type: 'live' }
type ModifiedArticle = Article & { type: 'article' }

definePageMeta({
    validate: async (route) => {
        return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
    }
})

const { data: writer, pending, status: writerStatus } = await useAsyncData("writer", () => 
    getItemById<Author>({
        id: Array.isArray(route.params.id) ? route.params.id[0] : route.params.id,
        collection: 'author'
    })
)

if (writerStatus.value == "error" && !writer.value) {
    throw createError({
        statusCode: 404,
        statusText: "Writer Not Found",
        name: "Writer not found!",
        message: "The specified writer could not be found. Please verify the writer's ID or ensure the writer exists before proceeding."
    })
}

const articleArr: (ModifiedLiveReport | ModifiedArticle)[] = [];

const getLiveArticles = await getItems<LiveReport>({
    collection: "live_report",
    params: {
        filter: {
            authors: {
                author_id: {
                    id: { _eq: writer.value?.id }
                }
            },
            status: { _neq: 'draft' }
        },
        fields: ['title', 'authors.author_id.username', 'authors.author_id.id',  'date_created', 'id', 'report.id', 'report.coverImage', 'report.title'],
    }
})

const getArticles = await getItems<Article>({
    collection: "article",
    params: {
        filter: {
            authors: {
                author_id: {
                    id: { _eq: writer.value?.id }
                }
            }
        },
        fields: ['title', 'description', 'authors.author_id', 'date_created', 'date_updated', 'id', 'coverImage', 'slug'],
    }
})

getArticles.forEach((i) => {
    return articleArr.push({
        ...i,
        type: "article"
    })
})
getLiveArticles.forEach((l) => {
    return articleArr.push({
        ...l,
        type: "live"
    })
})

articleArr.sort(function(a,b){
  return new Date(b.date_created).getTime() - new Date(a.date_created).getTime();
});


useSeoMeta({
    title: `${writer.value?.username} - TPA News`,
    description: writer.value?.description,
    applicationName: 'TPA News',
    themeColor: '#162456',
    ogType: 'profile',
    ogLocale: 'en-US',
    ogSiteName: 'TPA News',
    twitterImage: `https://directus.tpanews.demcraft.site/assets/${writer.value?.image}`,
    twitterCard: 'summary',
    twitterCreator: '@tpamedianews',
    twitterTitle: writer.value?.username,
    twitterDescription: writer.value?.description
})
</script>

<template>
    <div v-if="writer && writerStatus == 'success'">
        <header>
            <div class="flex md:flex-row flex-col items-center md:items-start text-center md:text-left gap-0.5 md:gap-8 mx-4 my-2">
                <NuxtImg :src="writer.image" provider="directus" class="h-auto max-w-[5rem]" />
                <div class="flex flex-col">
                    <h1 class="font-medium font-display text-3xl">{{ writer.username }}</h1>
                    <p class=" text-gray-800">{{ writer.description }}</p>
                    <div class="flex flex-row items-center justify-center md:justify-start gap-1 mt-2">
                        <a :href="platform.url" v-for="platform in writer.socials">
                            <UIcon :name="`fa6-brands:${platform.platform}`" class="size-16 text-blue-600"></UICon>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <nav class="border-y-[1px] border-gray-800/50 flex items-center gap-4 px-4 py-4 overflow-scroll">
            <a href="#about" v-if="writer.aboutme">About Me</a>
            <a href="#latest">Latest</a>
        </nav>
        <section id="about" v-if="writer.aboutme" class="mx-4 py-4">
            <MDC :value="writer.aboutme" />
        </section>
    </div>
    <header v-else-if="writerStatus == 'pending'">
        <h1 class="w-full text-center">Data loading...</h1>
    </header>
    <div class="flex flex-col gap-0.5">
        <span class="h-[0.10em] w-full bg-gray-600/50"></span>
        <span class="h-[0.20em] w-full bg-gray-600/50"></span>
        <span class="h-[0.35em] w-full bg-gray-600/50"></span>
    </div>
    <section class="pl-4 md:px-4 py-4 flex flex-col gap-4" id="latest">
        <div v-for="item in articleArr" v-if="articleArr.length > 0">
            <ArticleBlock :article="item" />
        </div>
        <div v-else class="flex flex-col items-center justify-center gap-4">
            <img src="~/assets/img/fox.webp" class="h-auto max-w-3xs">
            <section>
                <h2 class="text-2xl font-serif font-medium">This writer does not have any stories yet...</h2>
                <p>Come back later, our writers are cooking something up!<span class="text-gray-700 font-light">(let them cook)</span></p>
            </section>
        </div>
    </section>
</template>
