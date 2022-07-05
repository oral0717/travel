import Vue from 'vue'
import Router from 'vue-router'
// import HomePage from '@/pages/home/HomePage'
// import CityPage from '@/pages/city/CityPage'
// import DetailPage from '@/pages/detail/DetailPage'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HomePage',
    // component: HomePage,
    component: () => import('@/pages/home/HomePage'),
  }, {
    path: '/city',
    name: 'CityPage',
    // component: CityPage,
    component: () => import('@/pages/city/CityPage'),
  }, {
    path: '/detail/:id',
    name: 'DetailPage',
    // component: DetailPage,
    component: () => import('@/pages/detail/DetailPage'),
    }],
  scrollBehavior() { // 切换路由时，页面始终显示页面最顶部
    return {x: 0, y: 0}
  }
})

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}


