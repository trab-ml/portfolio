<template>
  <section id="experiences" class="flex flex-col items-center">
    <h2 class="text-3xl text-center my-8">{{$t('homepage.experience.title')}}</h2>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <Experience v-for="(item, index) in internShipList" :key="index" :index="index" :experience="item"
                  :style="index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'"
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
import Experience from "@/atoms/Experience.vue"
import {useI18n} from "vue-i18n"
import {type InternShip} from "@/types/utils.ts"

const {locale} = useI18n()

// const internShipList: InternShip[] = t('homepage.internShips') // TODO: find a way to do in that way (for proper internationalization) !
const internShipList: InternShip[] = locale.value === 'en'
    ? [
      {
        title: 'Full Stack Developer',
        company: 'Nextoo',
        companyWebsite: 'https://nextoo.fr/',
        startDate: '31 March 2025',
        endDate: '31 August 2025',
        period: '5 months',
        description: "I participated in an intensive technical training where experienced tech leads supported me on key technologies like Spring, Vue, and DevOps practices. At the heart of the project, I contributed to the development of a business application in an agile team, moving from designing new features to resolving critical bugs that impacted the user experience. This experience allowed me to evolve in a collaborative environment where the programming duo and regular code reviews enriched my vision of quality software development.",
        technologies: ['JavaScript', 'Vue.js', 'Vuetify', 'TypeScript', 'Node.js', 'Java', 'Spring Boot', 'Hibernate', 'Docker', 'Docker Compose', 'PostgreSql']
      },
      {
        title: 'Backend Developer',
        company: 'Wezaart',
        companyWebsite: 'https://pro.wezaart.fr/home.html',
        startDate: '02 April 2024',
        endDate: '24 May 2024',
        period: '2 months',
        description: "I dove into REST API design with TypeScript and NestJS, discovering the art of PostgreSQL data modeling through Prisma ORM. The most rewarding technical challenge was conducting benchmarks that revealed unexpected optimization opportunities, resulting in performance gains on our most critical queries. Quickly integrated into a dynamic product team, I was able to participate in creative brainstorming and co-write technical specifications, while gradually gaining autonomy over my architectural choices.",
        technologies: ['JavaScript', 'Nest.js', 'TypeScript', 'Node.js', 'Prisma']
      },
      {
        title: 'Frontend Developer',
        company: 'StudentBank',
        companyWebsite: 'https://lescalator.com/startups/student-bank/',
        startDate: '03 April 2025',
        endDate: '30 May 2025',
        period: '2 months',
        description: "I transformed Figma mockups into vibrant, responsive web interfaces, mastering the React.js ecosystem and Tailwind CSS to create fluid and performant user experiences. The technical challenge was to develop a suite of reusable and fully responsive components, ensuring a consistent experience across all devices. Collaborating closely with the design and product teams in an agile framework, I helped raise quality standards by optimizing every performance detail to offer frictionless navigation for end users.",
        technologies: ['JavaScript', 'React.js', 'Node.js', 'Bootstrap']
      }
    ] : [
      {
        title: 'Dévelopeur Full Stack',
        company: 'Nextoo',
        companyWebsite: 'https://nextoo.fr/',
        startDate: '31 Mars 2025',
        endDate: '31 Août 2025',
        period: '5 mois',
        description: "J'ai participé à une formation technique intensive où des responsables techniques expérimentés (Tech Leads) m'ont accompagné sur des technologies clés comme Spring, Vue et les pratiques DevOps. Au cœur du projet, j'ai contribué au développement d'une application métier au sein d'une équipe agile, passant de la conception de nouvelles fonctionnalités à la résolution de bugs critiques impactant l'expérience utilisateur. Cette expérience m'a permis d'évoluer dans un environnement collaboratif où le duo de développeurs et les revues de code régulières ont enrichi ma vision d'un développement logiciel de qualité.",
        technologies: ['JavaScript', 'Vue.js', 'Vuetify', 'TypeScript', 'Node.js', 'Java', 'Spring Boot', 'Hibernate', 'Docker', 'Docker Compose', 'PostgreSql']
      },
      {
        title: 'Dévelopeur Backend',
        company: 'Wezaart',
        companyWebsite: 'https://pro.wezaart.fr/home.html',
        startDate: '02 Avril 2024',
        endDate: '24 Mai 2024',
        period: '2 mois',
        description: "Je me suis lancé dans la conception d'API REST avec TypeScript et NestJS, découvrant l'art de la modélisation de données PostgreSQL grâce à Prisma ORM. Le défi technique le plus enrichissant a été la réalisation de benchmarks qui ont révélé des opportunités d'optimisation inattendues, générant des gains de performance sur nos requêtes les plus critiques. Rapidement intégré à une équipe produit dynamique, j'ai pu participer à des brainstormings créatifs et co-rédiger des spécifications techniques, tout en gagnant progressivement en autonomie sur mes choix architecturaux.",
        technologies: ['JavaScript', 'Nest.js', 'TypeScript', 'Node.js', 'Prisma']
      },
      {
        title: 'Dévelopeur Frontend',
        company: 'StudentBank',
        companyWebsite: 'https://lescalator.com/startups/student-bank/',
        startDate: '03 Avril 2025',
        endDate: '30 Mai 2025',
        period: '2 mois',
        description: "J'ai transformé des maquettes Figma en interfaces web dynamiques et réactives, maîtrisant l'écosystème React.js et Tailwind CSS pour créer des expériences utilisateur fluides et performantes. Le défi technique consistait à développer une suite de composants réutilisables et entièrement réactifs, garantissant une expérience cohérente sur tous les appareils. En étroite collaboration avec les équipes design et produit dans un cadre agile, j'ai contribué à améliorer les standards de qualité en optimisant chaque détail de performance afin d'offrir une navigation fluide aux utilisateurs finaux.",
        technologies: ['JavaScript', 'React.js', 'Node.js', 'Bootstrap']
      }
    ]
</script>
