import {ref} from "vue"
import type {TInternShip} from "../types/utils.ts"

const fr = [
    {
        title: 'Dévelopeur Full Stack',
        startDate: '31 Mars 2025',
        endDate: '31 Août 2025',
        period: '5 mois',
        description: "J'ai participé à une formation technique intensive où des responsables techniques expérimentés (Tech Leads) m'ont accompagné sur des technologies clés comme Spring, Vue et les pratiques DevOps. Au cœur du projet, j'ai contribué au développement d'une application métier au sein d'une équipe agile, passant de la conception de nouvelles fonctionnalités à la résolution de bugs critiques impactant l'expérience utilisateur. Cette expérience m'a permis d'évoluer dans un environnement collaboratif où le duo de développeurs et les revues de code régulières ont enrichi ma vision d'un développement logiciel de qualité.",
    },
    {
        title: 'Dévelopeur Backend',
        startDate: '02 Avril 2024',
        endDate: '24 Mai 2024',
        period: '2 mois',
        description: "Je me suis lancé dans la conception d'API REST avec TypeScript et NestJS, découvrant l'art de la modélisation de données PostgreSQL grâce à Prisma ORM. Le défi technique le plus enrichissant a été la réalisation de benchmarks qui ont révélé des opportunités d'optimisation inattendues, générant des gains de performance sur nos requêtes les plus critiques. Rapidement intégré à une équipe produit dynamique, j'ai pu participer à des brainstormings créatifs et co-rédiger des spécifications techniques, tout en gagnant progressivement en autonomie sur mes choix architecturaux.",
    },
    {
        title: 'Dévelopeur Frontend',
        startDate: '03 Avril 2025',
        endDate: '30 Mai 2025',
        period: '2 mois',
        description: "J'ai transformé des maquettes Figma en interfaces web dynamiques et réactives, maîtrisant l'écosystème React.js et Tailwind CSS pour créer des expériences utilisateur fluides et performantes. Le défi technique consistait à développer une suite de composants réutilisables et entièrement réactifs, garantissant une expérience cohérente sur tous les appareils. En étroite collaboration avec les équipes design et produit dans un cadre agile, j'ai contribué à améliorer les standards de qualité en optimisant chaque détail de performance afin d'offrir une navigation fluide aux utilisateurs finaux.",
    }
]
const en = [
    {
        title: 'Full Stack Developer',
        startDate: '31 March 2025',
        endDate: '31 August 2025',
        period: '5 months',
        description: "I participated in an intensive technical training where experienced tech leads supported me on key technologies like Spring, Vue, and DevOps practices. At the heart of the project, I contributed to the development of a business application in an agile team, moving from designing new features to resolving critical bugs that impacted the user experience. This experience allowed me to evolve in a collaborative environment where the programming duo and regular code reviews enriched my vision of quality software development.",
    },
    {
        title: 'Backend Developer',
        startDate: '02 April 2024',
        endDate: '24 May 2024',
        period: '2 months',
        description: "I dove into REST API design with TypeScript and NestJS, discovering the art of PostgreSQL data modeling through Prisma ORM. The most rewarding technical challenge was conducting benchmarks that revealed unexpected optimization opportunities, resulting in performance gains on our most critical queries. Quickly integrated into a dynamic product team, I was able to participate in creative brainstorming and co-write technical specifications, while gradually gaining autonomy over my architectural choices.",
    },
    {
        title: 'Frontend Developer',
        startDate: '03 April 2025',
        endDate: '30 May 2025',
        period: '2 months',
        description: "I transformed Figma mockups into vibrant, responsive web interfaces, mastering the React.js ecosystem and Tailwind CSS to create fluid and performant user experiences. The technical challenge was to develop a suite of reusable and fully responsive components, ensuring a consistent experience across all devices. Collaborating closely with the design and product teams in an agile framework, I helped raise quality standards by optimizing every performance detail to offer frictionless navigation for end users.",
    }
]
const lang = ref(fr)
const internShipList = ref<TInternShip[]>([
    {
        title: lang.value[0].title,
        company: 'Nextoo',
        companyWebsite: 'https://nextoo.lang.value/',
        startDate: lang.value[0].startDate,
        endDate: lang.value[0].endDate,
        period: lang.value[0].period,
        description: lang.value[0].description,
        technologies: ['JavaScript', 'Vue.js', 'Vuetify', 'TypeScript', 'Node.js', 'Java', 'Spring Boot', 'Hibernate', 'Docker', 'Docker Compose', 'PostgreSql']
    },
    {
        title: lang.value[1].title,
        company: 'Wezaart',
        companyWebsite: 'https://pro.wezaart.lang.value/home.html',
        startDate: lang.value[1].startDate,
        endDate: lang.value[1].endDate,
        period: lang.value[1].period,
        description: lang.value[1].description,
        technologies: ['JavaScript', 'Nest.js', 'TypeScript', 'Node.js', 'Prisma']
    },
    {
        title: lang.value[2].title,
        company: 'StudentBank',
        companyWebsite: 'https://lescalator.com/startups/student-bank/',
        startDate: lang.value[2].startDate,
        endDate: lang.value[2].endDate,
        period: lang.value[2].period,
        description: lang.value[2].description,
        technologies: ['JavaScript', 'React.js', 'Node.js', 'Bootstrap']
    }
])

export {fr, en, internShipList, lang}
