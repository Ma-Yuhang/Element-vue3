import './assets/main.css'
import './styles/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Icon from './components/Icon'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

const app = createApp(App)
// console.log('MODE', import.meta.env.MODE);
// console.log('BASE_URL', import.meta.env.VITE_SOME_KEY);
/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.component('HIcon', Icon)
app.use(router)

app.mount('#app')
