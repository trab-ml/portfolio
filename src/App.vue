<template>
  <Header />
  <main class="px-[1.5rem] sm:px-[2rem]">
    <RouterView />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/atoms/Header.vue'
import { RouterView } from 'vue-router'
import Footer from "@/atoms/Footer.vue"
</script>

<style>
main {
  min-height: calc(100vh - 6.7rem);
  background-color: #f9fafb;
}
</style>
