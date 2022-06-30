import Vue from 'vue'
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
// fastClick.attach(document.body)

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(new VConsole())
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
