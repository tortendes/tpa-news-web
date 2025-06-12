<script setup lang="ts">
import type { Article } from '~/types/Article';

const { getItems } = useDirectusItems();

const { data: items, status } = useAsyncData<Article[]>('featuredArticles', async () => await getItems<Article>({
        collection: 'article',
        params: {
            filter: {
                featured: true,
            },
            sort: '-date_created',
            limit: 50,
        }
    })
)
</script>

<template>
  <section>
    <div class="max-w-3/5 grid md:grid-cols-4 md:grid-rows-2 grid-cols-1 gap-4">
      <article v-if="items.length > 0" class="col-span-3 grid md:grid-cols-2">
        <div>
          <h1 class="text-3xl font-display font-bold">{{ items[0].title }}</h1>
          <p class="text-slate-600 text-sm">{{ items[0].description }}</p>
        </div>
        <NuxtImg :src="items[0].coverImage" provider="directus" class="" />
      </article>
      <article v-for="(article, index) in items.slice(1)" :key="index + 1">
        <h1 class="text-xl  font-semibold">{{ article.title }}</h1>
        <p class="text-slate-500 text-sm">{{ article.description }}</p>
      </article>
    </div>
  </section>
</template>