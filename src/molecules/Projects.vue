<template>
  <section id="projects" class="py-2">
    <h2 class="text-3xl text-center my-8">{{$t('homepage.projects.title')}}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Project v-for="p in projectList" :project="p" :key="p.id"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import Project from "@/atoms/Project.vue"

type Project = {
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

const projectList: Project[] = [
  {
    id: 1,
    title: "Notesapp",
    description: "Solution web de prise de notes avec fonctionnalité hors-ligne.",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    projectUrl: "https://notesapp-f639b.web.app/",
    repositoryUrl: "https://github.com/trab-ml/notesapp",
    category: "Front",
    technologies: ["React", "TypeScript", "Firebase"],
  },
  {
    id: 2,
    title: "Fammeal",
    description: "Application mobile de gestion de repas.",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    repositoryUrl: "https://github.com/trab-ml/fammeal-front",
    secondRepositoryUrl: "https://github.com/trab-ml/fammeal-back",
    category: "Front",
    technologies: ["Android Studio", "Java", "Openapi Generator"],
  },
  {
    id: 3,
    title: "DPEWeb",
    description: "Application web permettant de déterminer les indices de performance d'une ville et éventuellement d'une rue données.",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    repositoryUrl: "https://github.com/trab-ml/DPEWeb_Broutin_Traore",
    category: "Fullstack",
    technologies: ["JSP", "Java", "SQL"],
  },
  {
    id: 4,
    title: "JPP",
    description: "Solution web permettant d'accéder au planning d'un établissement scolaire.",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    repositoryUrl: "https://github.com/trab-ml/jpp",
    category: "Fullstack",
    technologies: ["JavaScript", "Php", "MySQL"],
  },
  {
    id: 5,
    title: "Lisp interpreter",
    description: "Interpréteur Lisp (langage de programmation impératif et fonctionnel) écrit en Java.",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    repositoryUrl: "https://github.com/trab-ml/lisp?tab=readme-ov-file",
    category: "Algorithm",
    technologies: ["Java"],
  },
  {
    id: 6,
    title: "Classifier",
    description: "Projet d'études visant à implémenter un classificateur avec l'algorithme de l'arbre de décision.",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    repositoryUrl: "https://github.com/trab-ml/classifier",
    category: "Machine Learning",
    technologies: ["Java"],
  },
  {
    id: 7,
    title: "Spicy Food",
    description: "Intégration front visant à concevoir un site vitrine de restaurant.",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    projectUrl: "https://trab-ml.github.io/spicy-food/",
    repositoryUrl: "https://github.com/trab-ml/spicy-food",
    category: "Front",
    technologies: ["HTML", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 8,
    title: "TheBox",
    description: "Intégration front ayant pour but de concevoir un site vitrine d'entreprise.",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    projectUrl: "https://trab-ml.github.io/landing-page/",
    repositoryUrl: "https://github.com/trab-ml/landing-page?tab=readme-ov-file",
    category: "Front",
    technologies: ["HTML", "CSS", "SASS"],
  },
  {
    id: 8,
    title: "Dream Bank",
    description: "Intégration front ayant pour but de concevoir un site vitrine d'entreprise.",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    projectUrl: "https://trab-ml.github.io/stdb/",
    repositoryUrl: "https://github.com/trab-ml/stdb/tree/master?tab=readme-ov-file",
    category: "Front",
    technologies: ["React", "CSS"],
  },
  {
    id: 9,
    title: "DreamImmo",
    description: "Site vitrine d'une agence immobilière.",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    projectUrl: "https://trab-ml.github.io/Dreamhome/",
    repositoryUrl: "https://github.com/trab-ml/stdb/tree/master?tab=readme-ov-file",
    category: "Front",
    technologies: ["HTML", "CSS", "SASS", "JavaScript"],
  },
  {
    id: 10,
    title: "Admin Dashboard",
    description: "Squelette de Dashboard pour admin.",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    projectUrl: "https://trab-ml.github.io/css-dashboard/",
    repositoryUrl: "https://github.com/trab-ml/css-dashboard?tab=readme-ov-file",
    category: "Front",
    technologies: ["HTML", "CSS"],
  },
  {
    id: 11,
    title: "DreamHome",
    description: "Intégration du site web d'une agence immobilière.",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    projectUrl: "https://trab-ml.github.io/dream-home/",
    repositoryUrl: "https://github.com/trab-ml/dream-home",
    category: "Front",
    technologies: ["React", "CSS", "Bootstrap"],
  },
]
</script>
