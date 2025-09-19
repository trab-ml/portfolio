import { createApp } from 'vue'
import 'vue-material-design-icons/styles.css';
import './style/app.css'
import App from './App.vue'
import { router } from './router.js'

createApp(App)
    .use(router)
    .mount('#app')
