import "vue-material-design-icons/styles.css";
import "./style/app.css";
import App from "./App.vue";
import { routes } from "./router.ts";
import { i18n } from "./i18n/i18n.ts";
import { ViteSSG } from "vite-ssg";
import { startLoading, stopLoading } from "@/utils/LoadingStore.ts";

export const createApp = ViteSSG(App, { routes: routes }, ({ app, router }) => {
    app.use(i18n);

    router.beforeEach(() => {
        startLoading();
    });
    router.afterEach(() => {
        stopLoading();
    });
});
