<template>
  <section class="sm:flex">
    <h1 class="text-3xl font-bold sm:mt-2">{{$t('homepage.title.partOne')}} <span class="text-3xl font-light">{{$t('homepage.title.partTwo')}}</span></h1>
    <div class="mockup-code w-full mt-1 sm:w-fit sm:mt-12">
      <pre data-prefix="1"><code>const profile = {</code></pre>
      <pre data-prefix="2" class="text-info"><code>"firstname": "{{$t('homepage.firstname')}}",</code></pre>
      <pre data-prefix="3" class="text-info"><code>"lastname": "{{$t('homepage.lastname')}}",</code></pre>
      <pre data-prefix="4" class="text-warning"><code>"job": "{{$t('homepage.job')}}",</code></pre>
      <pre data-prefix="5" class="text-success"><code>"status": {{$t('homepage.status')}},</code></pre>
      <pre data-prefix="6" class="text-success"><code>"mobility": "{{$t('homepage.mobility')}}",</code></pre>
      <pre data-prefix="7"><code>}</code></pre>
    </div>
  </section>
  <Experiences />
</template>

<script setup lang="ts">
import Experiences from "@/atoms/Experiences.vue"
</script>

<style scoped>
</style>