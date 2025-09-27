<template>
  <section id="projects" class="py-2">
    <h2 class="text-3xl text-center my-8">{{$t('homepage.projects.title')}}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {{updateDescriptions}}
      <Project v-for="p in projectList" :project="p" :key="p.id"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import Project from "@/atoms/Project.vue"
import { projectList, descriptionMap, descriptionsInFrench, descriptionsInEnglish } from "@/data/projects.ts"
import {computed} from "vue"
import {useI18n} from "vue-i18n"
import type {TProject} from "@/types/utils.ts"

const { locale } = useI18n()

const updateDescriptions = computed(() => {
  descriptionMap.value = locale.value === 'fr'
      ? descriptionsInFrench
      : descriptionsInEnglish
  projectList.value.map((p: TProject) =>
      p.description = descriptionMap.value.get(p.id) || "")
})
</script>
