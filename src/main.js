import { createApp } from 'vue'
import { createStore } from "vuex";
import createStoreGame from './store'
import App from './App.vue'
import i18n from './i18n'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const store = createStore(createStoreGame);


createApp(App)
    .use(i18n)
    .use(PerfectScrollbar)
    .use(store)
    .mount('#app')
