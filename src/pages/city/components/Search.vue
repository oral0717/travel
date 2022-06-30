<template>
  <div>
    <div class="search">
      <input v-model.trim="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div v-if="showSearchResult" class="search-content" ref="searchResult">
      <ul class="search-ul">
        <li v-for="item of list" :key="item.id" class="search-item">{{item.name}}</li>
        <li v-if="noCityData" class="search-item">没有查询到该城市！</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: "CityHeader",
  props: {
    cities: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    showSearchResult() {
      return !!this.keyword
    },
    noCityData() {
      return this.list.length <= 0
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if(value.spell.indexOf(this.keyword.toLowerCase()) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted(){
  },
  updated() {
    this.listScroll = new BScroll(this.$refs.searchResult)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search-container
  position relative
.search
  background-color $themeColor
  padding 0 0.16rem 0.1rem
  .search-input
    box-sizing: border-box
    width 100%
    border-radius: 0.04rem
    padding 0.1rem
    color #666
    text-align center
.search-content
  z-index 1
  overflow: hidden
  position: absolute
  top 1.58rem
  left 0
  right 0
  bottom: 0
  background $defaultBg
  .search-item
    line-height 0.62rem
    padding-left 0.2rem
    background #fff
    color #666
    border-bottom 0.02rem solid $defaultBg
</style>