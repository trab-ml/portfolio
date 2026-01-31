<template>
    <Header />
    <main class="px-6 sm:px-8">
        <RouterView />
    </main>
    <Footer />
</template>

<script setup lang="js">
import Header from "./atoms/Header.vue";
import { RouterView } from "vue-router";
import Footer from "./atoms/Footer.vue";
</script>
