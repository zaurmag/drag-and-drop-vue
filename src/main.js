import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
// import globalComponents from './components/globals'
import './assets/main.css'

const app = createApp(App)

app.mount('#app')

// globalComponents.forEach(component => {
//   app.component(component.__name, component)
// })
