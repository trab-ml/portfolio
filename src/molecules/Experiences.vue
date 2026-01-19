<template>
  <section id="experiences" class="flex flex-col items-center">
    <h2 class="text-3xl text-center my-8">{{ $t('homepage.professional_experience.title') }}</h2>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <Experience v-for="(item, index) in experiences" :key="index" :index="index" :experience="item"
                  :style="index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'"
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
import Experience from "../atoms/Experience.vue"
import {useI18n} from "vue-i18n"
import {type TInternShip} from "../types/utils.ts"
import {computed} from "vue"

const {tm} = useI18n()

const experiences = computed<TInternShip[]>(() => {
  return tm('homepage.professional_experience.experiences') as TInternShip[]
})
</script>
