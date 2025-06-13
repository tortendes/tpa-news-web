<script lang="ts" setup>
import MdcPlayer from '~/components/mdc/player.vue';
import OurPeople from '~/components/OurPeople.vue'
definePageMeta({
    layout: 'footer-only'
})
useSeoMeta({
    title: "About Us - TPA News",
    description: "Learn more about our company.",
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
    <main>
        <section class="px-8 py-4 h-64 bg-gradient-to-tr from-blue-950 to-blue-500">
            <nav class="px-4 py-2">
                <div class="flex items-center justify-center">
                    <NuxtLink href="/">
                        <img src="~/assets/img/default-monochrome-white.svg" class="max-w-32">
                    </NuxtLink>
                </div>
            </nav>
            <header class="h-full flex items-center justify-center text-center text-white">
                <h1 class="text-4xl font-bold">About TPA News</h1>
            </header>
        </section>
        <div class="flex items-center justify-center my-6">
            <section class="max-w-prose md:text-lg flex flex-col gap-4 mx-4">
                <div>
                    <p>
                        TPA News was founded by <MdcPlayer username="tortenwashere">tortenwashere</MdcPlayer> on March 2025 to initially broadcast presidential conferences live for archival purposes. Since then we have expanded our coverage, covering news across different topics, and regions. May that be the Alexandrian Outback, to Politics, to Business and Finance. We report as much of it as we can.
                    </p>
                </div>
                <div class="grid md:grid-cols-2 grid-cols-1">
                    <div>
                        <h5 class="font-bold">Our Mission</h5>
                        <p>Our mission is to deliver news from ranging topics in a variety of mediums for everyone. May that be thru written articles, or thru daily audio summaries of the latest topics.</p>
                    </div>
                    <div>
                        <h5 class="font-bold">Our Vision</h5>
                        <p>Our vision is to be one of the premier source of information for comprehensive news and empowering readers with day-to-day knowledge thru interactive and engaing mediums.</p>
                    </div>
                </div>
                <div class="flex flex-col gap-0.5">
                    <p class="text-center font-black text-2xl mb-2">Our Team</p>
                    <span class="h-[0.10em] w-full bg-gray-600/50"></span>
                    <span class="h-[0.20em] w-full bg-gray-600/50"></span>
                    <span class="h-[0.35em] w-full bg-gray-600/50"></span>
                </div>
                <div class="grid md:grid-cols-3 grid-cols-1">
                    <h5 class="font-bold">Executive Team</h5>
                    <div class="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-2">
                        <OurPeople username="tortenwashere">
                            Editor-in-Chief, Digital Interactive Head
                        </OurPeople>
                        <OurPeople username="roryyy___">
                            Independent Consultant
                        </OurPeople>
                    </div>
                </div>
                <div class="grid md:grid-cols-3 grid-cols-1">
                    <h5 class="font-bold">Journalists</h5>
                    <div class="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-2">
                        <OurPeople username="Rubilubi55">
                            Investigative Journalist
                        </OurPeople>
                        <OurPeople username="ps2girlfriend">
                            Political Journalist
                        </OurPeople>
                        <OurPeople username="emilypancakes22">
                            Political Journalist
                        </OurPeople>
                        <OurPeople username="MounOnWay">
                            Journalist
                        </OurPeople>
                        <OurPeople username="selenodot">
                            Journalist
                        </OurPeople>
                        <OurPeople username=".GianPaul2111">
                            Journalist
                        </OurPeople>
                    </div>
                </div>
                <div class="grid md:grid-cols-3 grid-cols-1">
                    <h5 class="font-bold">Digital News Gathering</h5>
                    <div class="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-2">
                        <OurPeople username="TheTiger2011">
                            Camera Operator
                        </OurPeople>
                        <OurPeople username="rora_soul">
                            Stream Operator
                        </OurPeople>
                    </div>
                </div>
                <div class="grid md:grid-cols-3 grid-cols-1">
                    <h5 class="font-bold">Staff Emeritus</h5>
                    <div class="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-2">
                        <OurPeople username="ps2girlfriend">
                            Camera Operator
                        </OurPeople>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>