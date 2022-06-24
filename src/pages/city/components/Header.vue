<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <i class="iconfont icon-fanhui"></i>
      </div>
    </router-link>
    <div class="">城市选择</div>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position relative
  height $headerHeight
  line-height $headerHeight
  background-color $bgColor
  color: #fff
  align-items: center
  text-align: center
  .header-left
    position absolute
    width 0.64rem
    display: flex;
    justify-content: center;
    .icon-fanhui
      font-size: 0.45rem;
      font-weight: bold
      color #fff
</style>