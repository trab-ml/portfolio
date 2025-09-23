<template>
  <div class="card bg-base-100 w-full shadow-sm">
    <figure>
      <img
          :src="project.imageUrl"
          :alt="project.title"/>
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <a v-if="project.projectUrl" :href="project.projectUrl" target="_blank"
           class="cursor-pointer underline underline-offset-3 hover:no-underline"># {{ project.title }}</a>
        <span v-else># {{ project.title }}</span>

        <a v-if="project.repositoryUrl" :href="project.repositoryUrl" target="_blank"
           class="tooltip cursor-pointer underline underline-offset-3 hover:no-underline"
           :data-tip="$t('homepage.projects.seeCode.desc')"># {{ $t('homepage.projects.seeCode.title') }}</a>
        <span class="badge badge-secondary">{{ project.category }}</span>
      </h2>
      <p>{{ project.description }}</p>
      <div class="card-actions justify-end">
        <div v-for="(techno) in project.technologies" class="badge badge-outline">{{ techno }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  project: {
    id: number
    title: string
    description: string
    imageUrl: string
    projectUrl?: string
    repositoryUrl?: string
    secondRepositoryUrl?: string
    category: string
    technologies: string[]
  }
}>()
</script>
