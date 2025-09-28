<template>
  <section id="experiences" class="flex flex-col items-center">
    <h2 class="text-3xl text-center my-8">{{ $t('homepage.experience.title') }}</h2>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {{updateExperiences}}
      <Experience v-for="(item, index) in internShipList" :key="index" :index="index" :experience="item"
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
import {fr, en, internShipList, lang} from "../data/experiences.ts"

const {locale} = useI18n()

const updateExperiences = computed(() => {
  lang.value = locale.value === 'fr'
      ? fr
      : en
  internShipList.value.map((item: TInternShip, index: number) => {
    item.title = lang.value[index].title
    item.startDate = lang.value[index].startDate
    item.endDate = lang.value[index].endDate
    item.period = lang.value[index].period
    item.description = lang.value[index].description
  })
})
</script>
