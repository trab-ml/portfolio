<template>
  <div class="card bg-base-100 w-full shadow-sm">
    <figure>
      <img
          class="rounded-b-box w-[90%] cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-112"
          :src="props.project.imageUrl"
          :alt="project.title"/>
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <a v-if="project.projectUrl" :href="project.projectUrl" target="_blank"
           class="cursor-pointer underline underline-offset-3 hover:no-underline">
          <eye-outline-icon />
          {{ project.title }}
        </a>
        <span v-else># {{ project.title }}</span>

        <a v-if="project.repositoryUrl" :href="project.repositoryUrl" target="_blank"
           class="tooltip cursor-pointer underline underline-offset-3 hover:no-underline"
           :data-tip="$t('homepage.projects.seeCode.desc')">
          <code-braces-icon /> {{ $t('homepage.projects.seeCode.title') }}
        </a>
        <span :class="`badge ${categoriesColors.get(project.category)}`">{{ project.category }}</span>
      </h2>
      <p>{{ project.description }}</p>
      <div class="card-actions justify-end">
        <div v-for="(techno) in project.technologies" class="badge badge-outline">{{ techno }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EyeOutlineIcon from 'icons/EyeOutline.vue'
import CodeBracesIcon from 'icons/CodeBraces.vue'
import {categoriesColors, type TProject} from "../types/utils.ts"

const props = defineProps<{
  project: TProject
}>()
</script>
