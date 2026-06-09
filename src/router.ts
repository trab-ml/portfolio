const HomePage = () => import("./pages/HomePage.vue");

export const routes = [
    {
        path: "/",
        name: "homePathOne",
        component: HomePage,
        meta: { description: "homepage.description" },
    },
    {
        path: `/${import.meta.env.VITE_REPO_NAME}/`,
        name: "homePathTwo",
        component: HomePage,
    },
    {
        path: `/:pathMatch(.*)*`,
        name: "notFound",
        component: () => import("./pages/NotFound.vue"),
    },
];
