import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
        fr: {
            abbreviation: 'Fr',
            header: {
                nav: {
                    menu: 'Menu',
                    experiences: 'Expériences',
                    projects: 'Projets'
                }
            }
        },
        en: {
            abbreviation: 'En',
            header: {
                nav: {
                    menu: 'Menu',
                    experiences: 'Experiences',
                    projects: 'Projects'
                }
            }
        }
    }
})
