<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: "CityHeader"
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  background-color $themeColor
  padding 0 0.3rem 0.1rem
  .search-input
    width 100%
    border-radius: 0.04rem
    padding 0.1rem
    color #666
    text-align center
</style>