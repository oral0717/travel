<template>
<div class="city-list" ref="cityList">
  <div>
    <div class="list-title">我的位置</div>
    <div class="city-area my-location">
      <span class="city-item">{{this.currentCity}}</span>
    </div>
    <div class="list-title">热门城市</div>
    <div class="city-area">
      <span class="city-item"
        v-for="item of cityData.hotCities"
        :key="item.id"
        @click="handleChangeCity(item.name)"
      >
        {{item.name}}
      </span>
    </div>

    <div v-for="(letterCities,letter) in cityData.cities" :key="letter" >
      <div class="list-title" ref="refLetter">{{letter}}</div>
      <div class="city-area long-list">
        <div class="long-list-item"
          v-for="item of letterCities"
          :key="item.id"
          @click="handleChangeCity(item.name)"
        >
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from '@better-scroll/core'
import {mapState, mapMutations} from 'vuex'
export default {
  name: "CityList",
  props: {
    curLetter: String,
    curLetterIndex: Number,
    cityData: {
      type: Object,
      default(){
        return {}
      },

    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    this.listScroll = new BScroll(this.$refs.cityList, {
      click: true
    })
  },
  updated() {
    console.log('upd')
  },
  activated() {
    this.listScroll = new BScroll(this.$refs.cityList, {
      click: true
    })
  },
  watch: {
    curLetter() {
      if (this.curLetter) {
        const element = this.$refs.refLetter[this.curLetterIndex]// 获取dom元素
        this.listScroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleChangeCity(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
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
    font-size 0.28rem
    height 0.6rem
    line-height 0.6rem
    padding-left 0.32rem
    border-top 1px solid #ddd
    border-bottom 1px solid #ddd
  .city-area
    padding 0.24rem 0.3rem 0
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
      margin-bottom 0.24rem
    &.my-location .city-item
      border-color $themeColor
      color $themeColor
  .long-list
    padding 0
    .long-list-item
      width 100%
      border-bottom  0.02rem solid #eee
      padding 0.16rem 0.32rem

</style>