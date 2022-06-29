<template>
<div class="city-list" ref="cityList">
  <div>
    <div class="list-title">我的位置</div>
    <div class="city-area">
      <span class="city-item">{{cityData.city}}</span>
    </div>
    <div class="list-title">热门城市</div>
    <div class="city-area">
      <span class="city-item" v-for="item of cityData.hotCities" :key="item.id">{{item.name}}</span>
    </div>

    <div v-for="(letterCities,letter) in cityData.cities" :key="letter" :ref="letter">
      <div class="list-title">{{letter}}</div>
      <div class="city-area long-list">
        <div class="long-list-item" v-for="item of letterCities" :key="item.id">{{item.name}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: "CityList",
  props: {
    letter: String,
    cityData: {
      type: Object,
      default(){
        return {}
      },

    }
  },
  mounted () {
    this.listScroll = new BScroll(this.$refs.cityList)
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]// 获取dom元素
        this.listScroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.city-list
  position absolute
  top: 1.58rem
  left 0
  right 0
  bottom 0
  overflow hidden
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