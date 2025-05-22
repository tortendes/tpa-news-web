<script setup lang="ts">
definePageMeta({
    layout: 'none'
})
useSeoMeta({
    title: "Got a tip? - TPA News",
    applicationName: 'TPA News',
    themeColor: '#162456',
    ogType: 'website',
    ogUrl: "https://tpanews.demcraft.site/tips",
    ogImage: {
        url: `/og/img-promo-2.webp`,
        width: 1920,
        height: 1080,
    },
    ogSiteName: "TPA News",
    twitterImage: "https://tpanews.demcraft.site/tips",
    twitterCard: 'summary_large_image',
    twitterCreator: '@tpamedianews',
    twitterTitle: "Want to send an anonymous tip?",
    twitterDescription: "Do you have a news tip that you want to share with us? We offer several ways for you to provide materials to our journalists."
})
</script>

<template>
    <section class="px-8 py-4 h-64 bg-gradient-to-tr from-blue-950 to-blue-500">
        <nav class="px-4 py-2">
            <div class="flex items-center justify-center">
                <NuxtLink href="/">
                    <img src="~/assets/img/default-monochrome-white.svg" class="max-w-32">
                </NuxtLink>
            </div>
        </nav>
        <header class="h-full flex items-center justify-center text-center text-white">
            <h1 class="text-4xl font-bold">Send confidential tips to the newsroom</h1>
        </header>
    </section>
    <div class="flex items-center justify-center my-6">
        <section class="max-w-prose md:text-lg flex flex-col gap-4 mx-4">
            <div>
                <p>
                    Do you have a news tip that you want to share with us? We offer several ways for you to provide materials to our journalists.
                    Each communication method has varying degrees of security. We encourage you to view and consider each method. Please do not send anything but tips thru these methods.
                    For more general correspondence, open a ticket on our <a href="https://discord.gg/w4P9Kgda" target="_blank" class="text-blue-500 underline underline-offset-4 after:content-['_↗']">Discord server</a>.
                </p>
            </div>
            <div>
                <h3 class="text-2xl font-display">
                    What makes a good tip?
                </h3>
                <p>
                    A good tip is specific, and backed up by evidence or documentation. It should not based on hunches or personal opinion, we unfortunately cannot write an article on how the air is unfair to you.
                    Furthermore, tips should show a clear and understandable issue or problem that has groundbreaking impact. Be specific with the details.
                    Finally, a strong news tip should be trustworthy.
                </p>
            </div>
            <div>
                <h3 class="text-2xl font-display">
                    Email
                </h3>
                <p>
                    You can send us your tip thru our email addess at our tips inbox at the email below. While we try to keep our sources anonymous, cannot guarantee anonymity thru this method. Try using Signal for a more secure communication method.
                </p>
                <h5 class="font-bold text-lg my-2">
                    <a href="mailto:news.tips@tpa.demcraft.site">news.tips@tpademcraft.site</a>
                </h5>
            </div>
            <div>
                <h3 class="text-2xl font-display">
                    Signal
                </h3>
                <p>
                    Signal is a free and open source messaging app that has end-to-end security.
                    This means communication thru this channel is encrypted and can only be viewed by you and TPA News.
                    Signal <em>only</em> retains three pieces of information about you; your phone number, your registration date, and when you are last online.
                </p>
                <h5 class="font-bold text-lg my-2">Add us: +63 939 812 2113</h5>
                <p>You can view instructions on how to use Signal on its <a href="https://discord.gg/w4P9Kgda" target="_blank" class="text-blue-500 underline underline-offset-4 after:content-['_↗']">website</a>.</p>
            </div>
        </section>
    </div>
</template>