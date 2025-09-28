<template>
  <section class="flex flex-col items-center sm:flex-row sm:items-start">
    <h1 class="text-3xl font-bold sm:w-1/3 sm:mt-2 md:w-full">{{ $t('homepage.title.partOne') }} <span
        class="text-3xl font-light">{{ $t('homepage.title.partTwo') }}</span></h1>
    <div class="w-full mt-1 sm:w-2/3 md:w-full sm:mt-12">
      <div class="mockup-code">
        <pre data-prefix="1"><code>const profile = {</code></pre>
        <pre data-prefix="2" class="text-info"><code>"firstname": "{{ $t('homepage.firstname') }}",</code></pre>
        <pre data-prefix="3" class="text-info"><code>"lastname": "{{ $t('homepage.lastname') }}",</code></pre>
        <pre data-prefix="4" class="text-warning"><code>"job": "{{ $t('homepage.job') }}",</code></pre>
        <pre data-prefix="5" class="text-success"><code>"status": {{ $t('homepage.status') }},</code></pre>
        <pre data-prefix="6" class="text-success"><code>"mobility": "{{ $t('homepage.mobility') }}",</code></pre>
        <pre data-prefix="7"><code>}</code></pre>
      </div>
      <div class="block max-w-fit mx-auto mt-4 border-1 rounded-md ">
        <a href="Bernard_TRAORE (CV).pdf" download>
          <button class="btn download-btn">{{ $t('homepage.downloadTheCV') }}<i class="fas fa-download"></i></button>
        </a>
      </div>
    </div>
  </section>
  <Experiences/>
  <Projects/>
</template>

<script setup lang="ts">
import Experiences from "../molecules/Experiences.vue"
import Projects from "../molecules/Projects.vue"
</script>
