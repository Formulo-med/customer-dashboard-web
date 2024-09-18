import { createApp } from 'vue'
import 'bootstrap';
import App from './App.vue'
import router from '@/common/router/index.js'
import '@/config/fa.config'
import { cookiesPlugin } from '@/config/cookiesPlugin'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "@/assets/scss/custom-bootstrap.scss";
import "@/assets/scss/fonts.scss";


const app = createApp(App)
app.use(router).use(cookiesPlugin()).component('font-awesome-icon', FontAwesomeIcon).mount('#app')