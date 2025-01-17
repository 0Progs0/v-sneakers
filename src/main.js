import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import {autoAnimatePlugin} from "@formkit/auto-animate/vue";
import {router} from "@/router.js";

const app = createApp(App)
app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
