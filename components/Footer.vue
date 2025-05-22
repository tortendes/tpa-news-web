<template>
    <footer class="px-2 md:px-8 py-4 bg-blue-950">
        <div class="inline-grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="~/assets/img/tpa-white.svg" alt="TPA News" class="max-w-16 col-span-2 md:col-span-1">
            <ul class="flex flex-col text-sm gap-1">
                <li>
                    <NuxtLink href="/information/about">
                        <span class="hover:text-gray-500 text-gray-300 font-mono">About</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink href="/tips">
                        <span class="hover:text-gray-500 text-gray-300 font-mono">Send a Tip</span>
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
            <p class="text-xs text-gray-400"><strong>Disclosure</strong>: [taken down at the moment, in short. tpa is just fictional. any resemblance to actual irl people, events, or places is just coincidental. ]</p>
        </div>
    </footer>
</template>