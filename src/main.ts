import { createApp } from 'vue'
import router from './router'
import './assets/main.css'
import App from './pages/AppPage'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
