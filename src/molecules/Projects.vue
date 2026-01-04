<template>
  <section id="projects" class="py-2">
    <h2 class="text-3xl text-center my-8">{{ $t('homepage.projects.title') }}</h2>
    <form class="flex justify-start gap-2 flex-wrap">
      <input v-for="(item, index) in categories" :key="`techno-${index}`" type="checkbox" name="techno" :value="item" v-model="checkedCategories"
             :aria-label="item" class="btn border border-solid border-black text-base font-light checked:border-0"/>
      <input class="btn btn-square border-black" type="reset" value="×" @click="resetFilters"/>
    </form>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {{ updateDescriptions }}
      <div v-if="projectListFiltered.length < 1">
        {{ $t('homepage.projects.noMatchingProject') }}
      </div>
      <Project v-for="p in projectListFiltered" :project="p" :key="p.id"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import Project from "../atoms/Project.vue"
import {projectList, descriptionMap, descriptionsInFrench, descriptionsInEnglish} from "../data/projects.ts"
import {computed, ref} from "vue"
import {useI18n} from "vue-i18n"
import {Category, type TProject} from "../types/utils.ts"

const {locale} = useI18n()
const categories: string[] = Object.values(Category)
const checkedCategories = ref<string[]>([])

const resetFilters = () => {
  checkedCategories.value = []
}

const updateDescriptions = computed(() => {
  descriptionMap.value = locale.value === 'fr'
      ? descriptionsInFrench
      : descriptionsInEnglish
  projectList.value.map((p: TProject) =>
      p.description = descriptionMap.value.get(p.id) || "")
})

const projectListFiltered = computed(() => {
  if (checkedCategories.value.length === 0) {
    return projectList.value
  }
  return projectList.value.filter((p: TProject) =>
      checkedCategories.value.includes(p.category))
})
</script>
