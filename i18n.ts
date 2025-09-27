import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
        fr: {
            abbreviation: 'Fr',
            header: {
                nav: {
                    menu: 'Menu',
                    experiences: 'Expériences',
                    projects: 'Projets',
                    contact: 'Contactez-moi'
                }
            },
            homepage: {
                title: {
                    partOne: "Salut,",
                    partTwo: "bienvenue sur mon portfolio."
                },
                firstname: "Bernard",
                lastname: "TRAORÉ",
                job: "Développeur Web Full Stack",
                status: "Disponible pour travailler",
                mobility: "France entière",
                downloadTheCV: "Télécharger le CV",
                experience: {
                    title: "Expériences professionnelles",
                },
                projects: {
                    title: "Projets",
                    seeCode: {
                        title: "Code",
                        desc: "Voir le code"
                    },
                    noMatchingProject: "Aucun projet correspondant"
                }
            },
        },
        en: {
            abbreviation: 'En',
            header: {
                nav: {
                    menu: 'Menu',
                    experiences: 'Experiences',
                    projects: 'Projects',
                    contact: 'Contact me'
                }
            },
            homepage: {
                title: {
                    partOne: "Hello there,",
                    partTwo: "welcome on my portfolio website."
                },
                firstname: "Bernard",
                lastname: "TRAORÉ",
                job: "Full Stack Web Developer",
                status: "Open to work",
                mobility: "France-wide",
                downloadTheCV: "Download CV",
                experience: {
                    title: "Work Experience",
                },
                projects: {
                    title: "Projects",
                    seeCode: {
                        title: "Code",
                        desc: "See the code"
                    },
                    noMatchingProject: "No matching project"
                }
            },
        }
    }
})
