<template>
  <div class="header">
    <div class="header-left"><i class="iconfont icon-fanhui"></i></div>
    <div class="header-input"><i class="iconfont icon-chazhao"></i>输入城市/景点/游玩主题</div>
    <router-link to='/city'>
      <div class="header-right">{{city}}<i class="iconfont icon-shixiangxiajiantou-"></i></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  height $headerHeight
  background-color $themeColor
  display: flex
  color: #fff
  align-items: center
  .header-left
    width 0.64rem
    display: flex;
    justify-content: center;
    .icon-fanhui
      font-size: 0.45rem;
      font-weight: bold
  .header-input
    flex 1
    background-color: #fff
    height 0.6rem
    border-radius: 0.06rem
    color #999
    display: flex
    align-items: center
    margin 0 0.12rem
    padding 0 0.1rem
    .icon-chazhao
      font-size 0.36rem
      margin-right 0.1rem
  .header-right
    width 1.23rem
    display: flex
    justify-content: center
    align-items: center
    color: #fff
    .icon-shixiangxiajiantou-
      font-size 0.5rem
</style>