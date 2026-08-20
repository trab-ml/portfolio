import "vue-material-design-icons/styles.css";
import "./style/app.css";
import App from "./App.vue";
import { routes } from "./router";
import { i18n } from "./i18n/i18n";
import { ViteSSG } from "vite-ssg";
import { startLoading, stopLoading } from "@/utils/LoadingStore";

export const createApp = ViteSSG(App, { routes: routes }, ({ app, router }) => {
    app.use(i18n);

    router.beforeEach(() => {
        startLoading();
    });
    router.afterEach(() => {
        stopLoading();
    });
});
