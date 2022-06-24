<template>
  <div class="city-list">
    <div class="list-title">我的位置</div>
    <div class="city-area">
      <span class="city-item">北京北京北京北</span>
      <span class="city-item">北京</span>
      <span class="city-item">北京</span>
      <span class="city-item">北京</span>
      <span class="city-item">北京</span>
    </div>
    <div class="list-title">热门城市</div>
    <div class="city-area">
      <span class="city-item">北京</span>
    </div>
    <div class="list-title">A</div>
    <div class="city-area long-list">
      <div class="long-list-item">北京</div>
      <div class="long-list-item">北京</div>
      <div class="long-list-item">北京</div>
      <div class="long-list-item">北京</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityList"
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.city-list
  .list-title
    background-color $defaultBg
    color #666
    font-size 0.24rem
    height 0.48rem
    line-height 0.48rem
    padding-left 0.32rem
    border-top 1px solid #ddd
    border-bottom 1px solid #ddd
  .city-area
    padding 0.32rem
    display: flex
    flex-wrap wrap
    justify-content flex-start
    .city-item
      width 1.9rem
      text-align center
      padding 0.1rem 0
      border 0.02rem solid #ccc
      font-size 0.24rem
      margin-right 0.2rem
      margin-bottom 0.2rem
  .long-list
    padding 0
    .long-list-item
      width 100%
      border-bottom  0.02rem solid #eee
      padding 0.16rem 0.32rem

</style>