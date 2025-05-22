<script setup lang="ts">
import type { Article, AuthorRelation } from '~/types/Article';
import type { Author } from '~/types/Author';
import MDCPlayer from '~/components/mdc/player.vue'
const route = useRoute()
const { getItems, getItemById } = useDirectusItems();

const data = await getItems<Article>({
    collection: 'article',
    params: {
        filter: {
            slug: { _eq: route.params.slug }
        }
    }
})
if (!data[0]) {
    throw createError({
        statusCode: 404,
        name: "Article not found",
        statusMessage: "Article not found. It may be unpublished, deleted, or moved. Check the URL and try again.",
    })
}
const article = data[0]
const { data: content } = await useAsyncData('markdown', () => parseMarkdown(article.content))

const authorList = await getItems<AuthorRelation>({
    collection: 'article_author',
    params: {
        filter: {
            article_id: { _eq: article.id }
        }
    }
})
const authors = await Promise.all(
    authorList.map(async (a: AuthorRelation) => {
        const author = await getItemById<Author>({
            id: a.author_id.toString(),
            collection: 'author'
        })
        return author
    })
)

function returnAuthorsForSEO(a: Author[]): string {
    return a.map((wrtr, index, arr) => {
        if (index < arr.length - 2) {
            return `${wrtr.username}, `
        } else if (index === arr.length - 2) {
            return `${wrtr.username}, and `
        } else {
            return wrtr.username
        }
    }).join('')
}

useSeoMeta({
    title: `${article.title} - TPA News`,
    author: returnAuthorsForSEO(authors),
    description: article.description,
    applicationName: 'TPA News',
    themeColor: '#162456',
    articlePublishedTime: new Date(article.date_created).toISOString(),
    ogType: 'article',
    ogLocale: 'en-US',
    ogUrl: `https://tpanews.demcraft.site/articles/${article.slug}`,
    ogImage: {
        url: `https://directus.tpanews.demcraft.site/assets/${article.seoImage}`,
        width: 1920,
        height: 1080,
    },
    ogSiteName: 'https://tpanews.demcraft.site',
    twitterImage: `https://directus.tpanews.demcraft.site/assets/${article.seoImage}`,
    twitterCard: 'summary_large_image',
    twitterCreator: '@tpamedianews',
    twitterTitle: article.title,
    twitterDescription: article.description
})
</script>

<template>
    <section class="md:px-8 px-2 py-4 bg-blue-600 text-white flex items-center justify-center flex-col after:bg">
        <div class="max-w-prose">
            <h1 class="text-2xl font-display font-bold md:text-4xl">{{ article.title }}</h1>
            <p class="text-gray-300">{{ article.description }}</p>
            <div class="mt-2">
                <span>By </span>
                <template v-for="(author, index) in authors" :key="author.id">
                    <NuxtLink
                    :href="`/editors/${author.id}`"
                    class="font-medium hover:underline hover:underline-offset-4"
                    >
                        <MDCPlayer :username="author.username">
                            {{ author.username }}
                        </MDCPlayer>
                    </NuxtLink>
                    <span v-if="index < authors.length - 2">, </span>
                    <span v-else-if="index === authors.length - 2">, and </span>
                </template>
            </div>
            <div class="flex items-center gap-0.5">
                <UIcon name="uil:clock-eight" class="size-5" />
                <span>{{ $dayjs(article.date_created).format('MMM D, YYYY h:mm a') }}</span>
            </div>
            <NuxtImg :src="article.coverImage" provider="directus" class="mt-2 shadow-2xl rounded-2xl max-h-96" />
        </div>
    </section>
    <div class="flex items-center justify center flex-col px-2 md:px-4 py-4">
        <main class="max-w-prose">
            <template v-if="content">
                <MDCRenderer :body="content.body" :data="content.data" />
            </template>
        </main>
        <div class="w-full">
            <DisqusComments :identifier="article.slug" />
        </div>
    </div>
</template>