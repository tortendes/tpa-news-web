<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

</script>

<template>
  <nav class="px-8 py-4 flex items-center justify-center border-b-[1px] border-gray-600 border-opacity-50">
      <div class="flex items-center justify-between">
          <NuxtLink href="/">
              <img src="~/assets/img/default-monochrome.svg" class="max-w-48">
          </NuxtLink>
      </div>
  </nav>
  <div v-if="props.error?.statusCode == 503" class="bg-gray-900 text-white min-h-screen text-center flex items-center justify-center flex-col px-4">
      <img src="~/assets/img/default-monochrome-white.svg" class="max-w-xs mb-8">
      <h1 class="text-2xl mb-2 font-display">TPA News is currently under maintenance</h1>
      <p class="text-gray-500">
          Thank you for visiting TPA News. We are currently performing website maintenance to improve your browsing experience.
      </p>
      <p class="text-gray-500">
          Our team is working diligently to bring you the latest news and updates as quickly as possible.
      </p>
      <p class="text-gray-500">
          Meanwhile, please stay tuned as we release news on other platforms.
      </p>
      <div class="mt-4">
          <a href="https://discord.gg/uX6cFC7dTH" class="text-blue-600 hover:text-blue-800 underline underline-offset-4">Join our Discord server for updates</a>
      </div>
  </div>
  <div v-else class="py-24 flex flex-col items-center justify-center text-center m-4">
    <a href="https://discord.gg/KNsekNWekA" class="hover:cursor-default" target="_blank">
        <img src="/georg.webp" class="h-auto max-w-24" alt="a three dimensional view of a minecraft wolf who may or may not be named georg">
    </a>
    <div class="mt-4 inline-flex flex-col items-center justify-center">
        <h1 class="text-2xl md:text-5xl font-black">Uh-oh! {{ props.error?.name || props.error?.statusMessage }}</h1>
        <p>{{ props.error?.message }}</p>
        <p class="font-mono text-gray-500">{{ props.error?.cause }}</p>
        <p v-if="props.error?.fatal == true" class="mt-4 text-gray-700">This error is unexpected, try submitting your request later. If the error still persists, contact TPA News</p>
        <button
            class="my-6 bg-blue-800 text-white px-4 py-2 font-mono hover:cursor-pointer"
            @click="$router.back"
            >
            Go Back
        </button>
    </div>
  </div>
  <footer class="px-8 py-4 bg-blue-950">
      <div class="inline-grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="~/assets/img/tpa-white.svg" alt="TPA News" class="max-w-16 col-span-2 md:col-span-1">
          <ul class="flex flex-col text-sm gap-1">
              <li>
                  <NuxtLink href="/information/about">
                      <span class="hover:text-gray-500 text-gray-300 font-mono">About</span>
                  </NuxtLink>
              </li>
              <li>
                  <NuxtLink href="/information/contact">
                      <span class="hover:text-gray-500 text-gray-300 font-mono">Contact</span>
                  </NuxtLink>
              </li>
              <li>
                  <NuxtLink href="/information/careers">
                      <span class="hover:text-gray-500 text-gray-300 font-mono">Careers</span>
                  </NuxtLink>
              </li>
          </ul>
          <ul class="flex flex-col text-xs gap-1">
              <li>
                  <a href="https://tpacorporate.demcraft.site">
                      <span class="hover:text-gray-500 text-gray-300 font-mono">TPA Corporate</span>
                  </a>
              </li>
              <li>
                  <a href="https://tpa.demcraft.site/shows">
                      <span class="hover:text-gray-500 text-gray-300 font-mono">Shows at TPA</span>
                  </a>
              </li>
              <li>
                  <a href="https://tpabooks.demcraft.site">
                      <span class="hover:text-gray-500 text-gray-300 font-mono">TPA Books</span>
                  </a>
              </li>
              <li>
                  <NuxtLink href="/corporate/newswire">
                      <span class="hover:text-gray-500 text-gray-300 font-mono">TPA Newswire</span>
                  </NuxtLink>
              </li>
          </ul>
          <ul class="flex flex-col text-xs gap-1">
              <li>
                  <a href="https://democracycraft.net">
                      <span class="hover:text-gray-500 text-gray-300 font-mono">DemocracyCraft</span>
                  </a>
              </li>
              <li>
                  <a href="https://mcstatecraft.com">
                      <span class="hover:text-gray-500 text-gray-300 font-mono">StateCraft</span>
                  </a>
              </li>
          </ul>
      </div>
      <div class="text-gray-100 text-sm mt-4">
          <p>&copy; 2025, TPA Corporation</p>
          <p class="text-xs text-gray-400"><strong>Disclosure</strong>: TPA and its subsidiaries such as TPA News is a fictional media organization created for roleplay purposes within the DemocracyCraft and StateCraft community. All contents published here is fictional and not indicative of real-world events, individuals or organizations. Any resemblance to actual persons, places, or events is purely coincidental. This organization is not affiliated with any real-world news outlets. No information from this site should be taken as any form of advice. The site is purely for roleplay purposes and does not have any real-life monetary exchange in for its services.</p>
      </div>
  </footer>
</template>
