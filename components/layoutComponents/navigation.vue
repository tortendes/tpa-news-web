<template>
    <nav class="px-4 py-2">
        <div class="flex items-center justify-between">
            <div class="flex gap-4 items-center">
            <NuxtLink href="/">
                <img src="~/assets/img/default-monochrome.svg" class="max-w-32">
            </NuxtLink>
            <div class="gap-2 md:visible invisible md:flex hidden">
                <ShortTitles />
                <div class="flex gap-2">
                    <p class="font-display font-semibold">Politics</p>
                    <p class="font-display font-semibold">Business</p>
                    <p class="font-display font-semibold">Culture</p>
                    <p class="font-display font-semibold">Opinion</p>
                </div>
            </div>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import ShortTitles from '~/components/layoutComponents/shortTitles.vue'
</script>