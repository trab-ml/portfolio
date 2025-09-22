<template>
  <section id="experiences">
    <h2 class="text-3xl text-center my-8">{{$t('homepage.experience.title')}}</h2>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <Experience v-for="(item, index) in internShipList" :key="index" :index="index" :experience="item"
                  :style="index % 2 === 0 ? 'timeline-start mb-10 md:text-end' : 'timeline-end md:mb-10'"
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
import Experience from "@/atoms/Experience.vue"

type InternShip = {
  title: string;
  company: string;
  startDate: string;
  endDate: string | null;
  period: string;
  description: string;
  technologies: string[];
}

// const internShipList: InternShip[] = t('homepage.internShips') // TODO: find a way to do in that way (for proper internationalization) !
const internShipList: InternShip[] = [
  {
    title: 'Full Stack Developer',
    company: 'Nextoo',
    startDate: '31 Mars 2025',
    endDate: '31 August 2025',
    period: '5 months',
    description: 'Worked on training handler web application.',
    technologies: ['JavaScript', 'Vue.js', 'Vuetify', 'TypeScript', 'Node.js', 'Java', 'Spring Boot', 'Hibernate', 'Docker', 'Docker Compose', 'PostgreSql']
  },
  {
    title: 'Backend Developer',
    company: 'Wezaart',
    startDate: '02 Avril 2024',
    endDate: '24 Mai 2024',
    period: '2 months',
    description: 'Contributed to social networking web application.',
    technologies: ['JavaScript', 'Nest.js', 'TypeScript', 'Node.js', 'Prisma']
  },
  {
    title: 'Frontend Developer',
    company: 'StudentBank',
    startDate: '03 Avril 2025',
    endDate: '30 Mai 2025',
    period: '2 months',
    description: 'Turned mockups into modern functional website.',
    technologies: ['JavaScript', 'React.js', 'Node.js', 'Bootstrap']
  }
]
</script>

<style scoped></style>