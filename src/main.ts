import { createApp } from 'vue'
import App from './App.vue'

import pluginRegister from '@/plugins'

import router from './router'

import store from './store'

createApp(App).use(store).use(router).use(pluginRegister).mount('#app')
