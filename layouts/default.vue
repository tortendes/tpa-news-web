<template>
    <Banner />
    <Navigation />
    <slot></slot>
    <Footer />
</template>
<script setup lang="ts">
import Navigation from "~/components/layoutComponents/navigation.vue"
import Footer from '~/components/layoutComponents/Footer.vue'
import Banner from '~/components/layoutComponents/notice.vue'
</script>