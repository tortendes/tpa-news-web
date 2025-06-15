<script lang="ts" setup>
import type { Author } from '~/types/Author';

type AuthorObject = {
    author_id: Author[] |
}

const props = defineProps<{ authors: AuthorObject[] }>()
</script>

<template>
    <div class="text-gray-600">
        <span>By </span>
        <template v-for="(author, indx) in props.authors" :key="indx">
            <NuxtLink
            :href="`/by/${author.id}`"
            class="font-medium hover:underline hover:underline-offset-4 inline-flex items-center"
            >
                <Player :username="author.author_id.username">
                    {{ author.author_id.username }}
                </Player>
            </NuxtLink>
            <span v-if="indx < props.authors.length - 2">, </span>
            <span v-else-if="indx === props.authors.length - 2">, and </span>
        </template>
    </div>
</template>