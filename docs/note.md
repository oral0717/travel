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

## fastclick库 解决触屏端click事件延迟300ms
yarn add fastclick
在main.js中注入：
import fastClick from 'fastclick'
fastClick.attach(document.body)

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







