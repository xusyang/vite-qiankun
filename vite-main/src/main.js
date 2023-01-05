import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

function startQiankun() {
  // registerMicroApps([
  //   {
  //     name: 'react app', // app name registered
  //     entry: '//localhost:7100',
  //     container: '#yourContainer',
  //     activeRule: '/yourActiveRule',
  //   },
  //   {
  //     name: 'vue app',
  //     entry: { scripts: ['//localhost:7100/main.js'] },
  //     container: '#yourContainer2',
  //     activeRule: '/yourActiveRule2',
  //   },
  // ])
  // start()
}
