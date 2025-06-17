<script setup lang="ts">
import Donate from '~/components/SendDonate.vue'
import Section from '~/components/SectionList.vue'
useSeoMeta({
    title: 'TPA News - Breaking News, Redmont News. Alexandria News and More'
})
</script>

<template>
    <main class="px-4 py-2">
        <!-- <Headlines /> -->
        <Section uuid="f02b3120-8adb-4900-9a44-75c123b8deb6" />
        <Section uuid="54487b0a-7e4e-433a-873c-792d0f59ac43" />
        <Section uuid="233ecca7-36ec-4484-a2b2-6643a81a3b32" />
        <Section uuid="0b7b029e-c7a6-4c2a-9b8c-e91eaec58269" />
        <Section uuid="4f9b28b1-a142-4bf6-be81-b63653101f39" />
        <Section uuid="b8d29e38-c7dd-4f3f-aed8-eb65bcba97a4" />
        <Donate />
    </main>
</template>