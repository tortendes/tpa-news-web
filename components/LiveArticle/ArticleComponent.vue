<script setup lang="ts">
import type { LiveReport } from '~/types/Article';
import MDCPlayer from '~/components/mdc/MinecraftPlayer.vue'

const props = defineProps<{ content: LiveReport }>()
</script>

<template>
    <article class="max-w-prose px-2 py-4">
        <NuxtImg v-if="props.content.head_image" :src="props.content.head_image" provider="directus" class="h-auto max-w-[40%] md:max-w-1/3 mb-2" />
        <h1 class="text-2xl font-display font-bold" v-if="props.content.title">{{ props.content.title }}</h1>
        <div class="flex items-center gap-1">
            <div class="flex flex-col gap-0.5">
                <p class="text-blue-950 font-medium text-sm">
                    <span class="text-black font-normal">{{ $dayjs(props.content.date_created).format('MMMM DD, YYYY, hh:mm a') }} &bull;</span>
                    {{ $dayjs().to($dayjs(props.content.date_created)) }}
                </p>
            <div>
                <span>By </span>
                <template v-for="(author, index) in props.content.authors" :key="author.author_id.id">
                    <NuxtLink
                    :href="`/editors/${author.author_id.id}`"
                    class="font-medium hover:underline hover:underline-offset-4 inline-flex items-center"
                    >
                        <MDCPlayer :username="author.author_id.username">
                            {{ author.author_id.username }}
                        </MDCPlayer>
                    </NuxtLink>
                    <span v-if="index < props.content.authors.length - 2">, </span>
                    <span v-else-if="index === props.content.authors.length - 2">, and </span>
                </template>
            </div>
            </div>
        </div>
        <MDC :value="props.content.content" class="mt-2"/>
    </article>
</template>