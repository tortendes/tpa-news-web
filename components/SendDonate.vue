<template>
    <div class="py-4 px-2 md:px-6 md:py-4 border-y-[1px] md:border-2 border-blue-600 w-full md:max-w-fit max-h-fit">
        <h1 class="font-display font-extrabold text-2xl mb-1">Support ad-free journalism</h1>
        <p class="md:max-w-[35ch] mb-2">TPA News delivers the latest news and current affairs without intrusive advertisements, thanks to government grants and the generosity of readers like you. Help us continue our work by donating!</p>
        <div class="flex items-center justify-start">
            <NuxtLink href="/information/donate">
                <button class="bg-blue-950 text-white px-4 py-2 flex items-center justify-center gap-1 hover:cursor-pointer rounded-md">
                    <span class="font-display font-bold">Support us</span>
                    <UIcon name="lucide:circle-arrow-right" class="size-4" />
                </button>
            </NuxtLink>
        </div>
    </div>
</template>