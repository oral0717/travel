官方项目代码：https://git.imooc.com/coding-203/coding-203
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
- fastclick库 解决触屏端click事件延迟300ms
yarn add fastclick
在main.js中注入：
import fastClick from 'fastclick'
fastClick.attach(document.body)

- iconfont
官网上 Travel项目









