import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as apolloProvider from './apollo.provider'
const app = createApp(App);
app.use(apolloProvider.prvider)
app.use(router)
app.use(store)
app.mount('#app')
