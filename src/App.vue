<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/atoms/Header.vue'
import { RouterView } from 'vue-router'
import Footer from "@/atoms/Footer.vue"
</script>

<style scoped>
/* TODO: some style using tailwindcss and daisyui grid */
</style>