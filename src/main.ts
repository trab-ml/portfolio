import { createApp } from 'vue'
import 'vue-material-design-icons/styles.css'
import './style/app.css'
import App from './App.vue'
import { router } from './router.js'
import { i18n } from '../i18n.js'

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
