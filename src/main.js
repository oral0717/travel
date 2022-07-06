import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VConsole from 'vconsole'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
// import fastClick from 'fastclick'
import store from './store'

new VConsole()
// new VueAwesomeSwiper()
createApp(App)
  .use(router)
  .use(store)
  .use(VueAwesomeSwiper)
  .mount('#app')
