<script lang="ts" setup>
import MdcPlayer from '~/components/mdc/MinecraftPlayer.vue';
import OurPeople from '~/components/OurPeople.vue'
definePageMeta({
    layout: 'footer-only'
})
useSeoMeta({
    title: "Support TPA News",
    description: "Your donation, however big or small, will help us continue our extensive journalism across mediums.",
    applicationName: 'TPA News',
    themeColor: '#162456',
    ogType: 'website',
    ogLocale: 'en-US',
    ogUrl: `/og/img-promo-1.webp`,
    ogImage: {
        url: ``,
        width: 1920,
        height: 1080,
    },
    ogSiteName: 'https://tpanews.demcraft.site',
    twitterImage: `https://tpanews.demcraft.site/og/img-promo-1.webp`,
    twitterCard: 'summary_large_image',
    twitterCreator: '@tpamedianews',
    twitterTitle: "About TPA News",
    twitterDescription: "Read more about our companies history, and more"
})
</script>

<template>
    <section class="px-8 py-4 min-h-screen bg-gradient-to-tr from-blue-950 to-blue-500">
        <nav class="px-4 py-2 mb-8">
            <div class="flex items-center justify-center">
                <NuxtLink href="/">
                    <img src="~/assets/img/default-monochrome-white.svg" class="max-w-32">
                </NuxtLink>
            </div>
        </nav>
        <header class="flex items-center justify-center text-center text-white mb-1">
            <h1 class="text-4xl font-extrabold font-[NRK_Super_Sans_Extended]">Support ad-free, fearless journalism</h1>
        </header>
        <main class="flex flex-col items-center justify-center gap-1 text-center text-white">
            <p class="font-lg">
                Your donation, however big or small, will help us continue our extensive journalism across mediums.
            </p>
            <a href="https://discord.gg/xeR4m9nJd6" target="_blank" class="py-4">
                <button class="bg-blue-950 text-white px-4 py-2 flex items-center justify-center gap-1 hover:cursor-pointer rounded-md">
                    <span class="font-display font-medium text-3xl">Donate thru our Discord server</span>
                    <UIcon name="lucide:circle-arrow-right" class="md:size-8 size-32" />
                </button>
            </a>
            <div class="max-w-prose w-full text-left">
            <div class="mb-4">
                <h3 class="text-2xl font-display font-semibold">
                    How to Donate?
                </h3>
                <p>You can support us thru the following channels to provide financial support These donations can help to sustain our journalistic operations and pay our journalists.</p>
            </div>
            <div class="mb-2">
                <h3 class="text-2xl font-display">
                    In-game
                </h3>
                <p>
                    You can send us your donations in-game or thru the Server bot by using the following commands
                </p>
                <p class="w-full font-mono rounded-md border-[1px] border-gray-800/50 px-4 py-2 bg-slate-900">
                    /firm deposit TPANews (amount)
                </p>
                <p>or thru the Server discord bot:</p>
                <p class="w-full font-mono rounded-md border-[1px] border-gray-800/50 px-4 py-2 bg-slate-900">
                    /firm pay TPANews (amount)
                </p>
            </div>
            <div>
                <h3 class="text-2xl font-display">
                    Voyager
                </h3>
                <p>
                    Voyager Bank is our only bank account. You can donate using this command:
                </p>
                <p class="w-full font-mono rounded-md border-[1px] border-gray-800/50 px-4 py-2 bg-slate-900">
                    /transfer from-account:(your account number: xxxx-xxxx) amount:(amount) recipient-account:3228-7961
                </p>
            </div>
            </div>
        </main>
    </section>
</template>