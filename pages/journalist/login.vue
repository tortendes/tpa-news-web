<script setup lang="ts">
const { login } = useDirectusAuth();
definePageMeta({
    layout: 'footer-only'
})
</script>

<template>
    <main class="grid grid-cols-2 min-h-screen">
        <section class="bg-gradient-to-b from-blue-800 to-blue-500 flex flex-col items-center justify-center text-center text-white gap-2">
            <img src="~/assets/img/default-monochrome-white.svg" class="max-w-72" alt="TPA News">
            <div>
                <h1 class="text-3xl font-display font-light italic">"News, as simple as that."</h1>
                <h3 class="text-lg font-display font-thin">— <Player username="tortenwashere">tortenwashere</Player></h3>
            </div>
        </section>
        <section class="px-6 py-4 flex flex-col items-center justify-center text-center gap-2">
            <header>
                <h1 class="text-3xl font-bold font-[NRK_Super_Sans]">Journalist Log-in</h1>
                <p>Log-in to your journalist account to allow viewing article previews and more.</p>
            </header>
        </section>
    </main>
</template>