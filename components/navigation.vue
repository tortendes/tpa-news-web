<template>
    <nav class="px-4 py-2">
        <div class="flex items-center justify-between">
            <NuxtLink href="/">
                <img src="~/assets/img/default-monochrome.svg" class="max-w-32">
            </NuxtLink>
            <div class="flex gap-2 md:visible invisible md:block hidden">
                <ShortTitles />
                <div class="flex gap-2">
                    <p class="font-display">Politics</p>
                    <p class="font-display">Business</p>
                    <p class="font-display">Culture</p>
                    <p class="font-display">Opinion</p>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import ShortTitles from '~/components/layoutComponents/shortTitles.vue'
</script>