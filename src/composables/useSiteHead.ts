import { useHead, useSeoMeta } from "@unhead/vue";
import {
    useSchemaOrg,
    definePerson,
    defineWebPage,
    defineWebSite,
} from "@unhead/schema-org/vue";
import { useI18n } from "vue-i18n";

const SITE_URL = "https://trab-ml.github.io/portfolio/";
const AUTHOR_NAME = "Bernard T.";
const LINKEDIN_URL = "https://www.linkedin.com/in/bernart0123456789/";
const OG_IMAGE = `${SITE_URL}portfolio-homepage.png`;

export function useSiteHead(titleKey: string, descriptionKey: string) {
    const { t } = useI18n();
    const JOB_TITLE = () => t(titleKey);
    const DESCRIPTION = () => t(descriptionKey);

    useHead({
        htmlAttrs: {
            lang: "fr",
            "data-theme": "light",
        },

        link: [
            {
                rel: "canonical",
                href: SITE_URL,
            },
        ],

        meta: [
            {
                name: "google-site-verification",
                content: "5hKM7mYyRjYLtipo8mCPd_1Y9ybCIBMir08xHnlD7QY",
            },
            {
                name: "robots",
                content: "index,follow",
            },
            {
                name: "referrer",
                content: "strict-origin-when-cross-origin",
            },
        ],
    });

    useSeoMeta({
        title: JOB_TITLE,
        titleTemplate: "%s | Portfolio",

        description: DESCRIPTION,

        ogType: "website",
        ogLocale: "fr_FR",
        ogUrl: SITE_URL,
        ogSiteName: "Portfolio",
        ogTitle: `${JOB_TITLE}`,
        ogDescription: DESCRIPTION,
        ogImage: OG_IMAGE,
        ogImageWidth: 1200,
        ogImageHeight: 630,
        ogImageType: "image/png",
        ogImageAlt: `${JOB_TITLE} - Portfolio`,

        twitterCard: "summary_large_image",
        twitterTitle: `${JOB_TITLE} - Portfolio`,
        twitterDescription: DESCRIPTION,
        twitterImage: OG_IMAGE,
    });

    useSchemaOrg([
        defineWebSite({
            "@id": `${SITE_URL}#website`,
            url: SITE_URL,
            name: "Portfolio",
            description: DESCRIPTION,
            inLanguage: "fr-FR",
            publisher: {
                "@id": `${SITE_URL}#person`,
            },
        }),

        defineWebPage({
            "@id": `${SITE_URL}#webpage`,
            url: SITE_URL,
            name: `${JOB_TITLE} | Portfolio`,
            description: DESCRIPTION,
            inLanguage: "fr-FR",
            isPartOf: {
                "@id": `${SITE_URL}#website`,
            },
            about: {
                "@id": `${SITE_URL}#person`,
            },
        }),

        definePerson({
            "@id": `${SITE_URL}#person`,
            name: AUTHOR_NAME,
            url: SITE_URL,
            image: OG_IMAGE,
            jobTitle: JOB_TITLE,
            sameAs: [LINKEDIN_URL],
        }),
    ]);
}
