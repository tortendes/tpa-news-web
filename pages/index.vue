<script setup lang="ts">
const { getItems } = useDirectusItems();

const items = await getItems({
    collection: 'article',
})
</script>

<template>
    <main class="px-4 py-2">
        <h1 class="text-3xl font-serif">TPA News Homepage</h1>
        <p class="font-light">This page is currently under construction.</p>
    </main>
</template>