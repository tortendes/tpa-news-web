<template>
    <section v-if="bannerStatus == 'success' && fetchBanner && fetchBanner.status == 'visible'">
        <div class="px-4 py-0.5 w-full text-center"
            :class="{
                'bg-blue-600 text-white': fetchBanner.type == 'default',
                'bg-amber-400': fetchBanner.type == 'warn',
                'bg-red-800 text-white': fetchBanner.type == 'alert',
                }">
            <NuxtLink :href="fetchBanner.link" v-if="fetchBanner.link">
                <MDC :value="fetchBanner.notice" />
            </NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Banner {
    status: string;
    notice: string;
    type: string;
    link: string | null
}

const { getSingletonItem } = useDirectusItems()
const { data: fetchBanner, status: bannerStatus } = await useAsyncData<Banner>(
    'banner',
    () => getSingletonItem<Banner>({
        collection: "banner",
    })
)
</script>