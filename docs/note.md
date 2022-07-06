官方项目代码：https://git.imooc.com/coding-203/coding-203

## meta
- <meta name="viewport"
    content="
    width=device-width,
    initial-scale=1.0,
    minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" // 触屏段禁止手指滑动放大页面
    >
- assets
  - styles 全局样式
    - border.css 解决多倍屏幕上1像素边框问题
    - reset.css

## 第三方包 fastclick库 解决触屏端click事件延迟300ms
yarn add fastclick
在main.js中注入：
import fastClick from 'fastclick'
fastClick.attach(document.body)
- 可以不使用fastclick,直接添加样式：（同效）
html{touch-action: manipulation;}
## 使用iconfont
- https://www.iconfont.cn/
- 资源管理 -> 我的项目 -> 新增项目 Travel
- 需要的icon加入购物车，在购物车里将icon加入 项目Travel
- 进入项目Travel中”下载至本地“，将 iconfont.css eot svg ttf woff复制入项目中使用
- 入口文件main.js中加入import 'styles/iconfont/iconfont.css'
- 需要使用iconfont的组件中：<i class="iconfont icon-fanhui"></i>,icon-fanhui为当前图标样式名

## rem
1rem=html font-size设定的值  如font-size:50px;

## 使用第三方插件vue-awesome-swiper
- 修改第三方组件样式,使用 `>>>`穿透
```css
.swiper-wrap >>> .swiper-pagination-bullet-active{ // 修改第三方组件样式
  background: #fff
}

```

## 样式 padding margin 百分比关系
<style lang="stylus" scoped>
.test-container
  background #f2f2f2
  width 200px
  height 100px
  padding 1% // 相对于父层容器width
  margin 1% // 相对于父层容器width
  box-sizing: border-box // 只管当前盒子
  .inner-box
    display inline-block
    box-sizing: border-box
    width 10%  // 相对于父级.test-container
    background pink
    padding 1% // 相对于父级.test-container的content-box宽度，即父层容器宽度
    margin 1% // 相对于父级.test-container的content-box宽度，即父层容器宽度
</style>

## flex时子级层想要显示一行后...
.rec-content
  flex 1
  margin-left 0.2rem
  min-width 0
  .rec-tit // 想要显示一行后...，但是有没有设定宽度，可以在父级设置min-width:0
    color $defaultTextColor
    font-size 0.28rem
    line-height 0.4rem
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis

## 访问本地mock数据
在public/mock下创建mock数据
http://localhost:1874/mock/test.json

## 第三方包
better-scroll 实现模块滚动 没有滚动条

## @touchmove="handleTouchMove"方法滑动时导致页面下拉，可以使用 @touchmove.prevent="handleTouchMove"

## 浏览器中使用localStorage，需要用try catch以防隐身模式或者用户操作不允许使用localStorage
try {
  localStorage.city = city
} catch (e) {
  console.log('浏览器不支持localStorage')
}

## 路由问题
- 报错 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/".
- 解决
// src/router/index.js
Vue.use(Router)
const router = new Router({
  routes
})

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

## refs
- 问题： v-for渲染了一组dom, dom上用了:ref="letter",letter是变量，this.$refs[letter] undefined，this.$refs有值，this.$refs['A']有值，但是当letter是变量时就是undefined
- 解决：v-for渲染了一组dom, dom上用了ref="refLetter"，refLetter是常量，然后his.$refs['refLetter']是数组，然后通过letter的index取refs组织中的目标项

## 图片留默认位置
width 100%
height 0
padding-bottom 100% // 根据图片宽高比计算得出
overflow hidden
background #f8f8f8

## 全局事件解绑
使用<keep-alive>时，用的生命周期：
activated() {
  window.addEventListener("scroll", this.handleScroll)
},
deactivated() {
  window.removeEventListener('scroll', this.handleScroll)
},
补充：vue3中使用keep-alive
// App.vue
<router-view v-slot="{ Component }">
  <keep-alive exclude="DetailPage">
    <component :is="Component"/>
  </keep-alive>
</router-view>

## 递归组件

## 切换路由时页面始终回到顶部
router/index.js
scrollBehavior(to, from, savedPosition) { // 切换路由时，页面始终显示页面最顶部
  return {x: 0, y: 0}
}
## 需要用到组件name的地方
export default {
  name: "HomePage",
};
- <keep-alive exclude="DetailPage"></keep-alive> // include="name1,name2"
- 递归调用组件时，写的组件名 <DetailList></DetailList>
- devtool中展示的组件名


## 代码拆分，按需加载
router/index.js
component: () => import('@/pages/home/HomePage'),

## vue3中使用vConsole
import VConsole from 'vconsole'
new VConsole()
Vue.use(new VConsole()) // 不要这样做，会报错