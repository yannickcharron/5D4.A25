import './assets/style.css'

import { createApp } from 'vue'
import router from './router'
import axiosPlugin from './plugins/api'
import App from './App.vue'

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(router)
app.use(vuetify)
app.use(axiosPlugin, {
  key: 'Mockoon',
  baseURL: 'http://localhost:3001'
})
app.mount('#app')
