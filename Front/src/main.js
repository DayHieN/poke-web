// import '@babel/polyfill'
// import 'mutationobserver-shim'

import {
    createApp
} from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()





import '@/css/style.css';
import '@/css/slider.css';
import '@/css/animations.css';

import router from './router/router'


createApp(App).use(router).use(pinia).mount('#app')




