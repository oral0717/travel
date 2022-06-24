<template>
  <div class="icon-wrapper">
    <swiper  :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon-item" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img width="100%" :src="item.imgUrl" />
          </div>
          <p class="icon-text">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "IconsEntry",
  props: {
    iconList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoPlay: false
      }
    }
  },
  computed: {
    // 将icon列表分组，每8个一组
    pages () {
      const pages = []
      this.iconList.forEach((item, index)=>{
        const pageIndex = Math.floor(index / 8)
        if (!pages[pageIndex]) {
          pages[pageIndex] = []
        }
        pages[pageIndex].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icon-wrapper
    padding 0.3rem 0 50%
    height 0
    overflow hidden
    display flex
    flex-wrap: wrap
    .icon-item
      display inline-block
      width: 25%;
      text-align center
      overflow: hidden
      margin-bottom 0.3rem
      box-sizing: border-box
      .icon-img
        display: inline-block
        background-color $defaultBg
        width 60%
        height 0
        padding-bottom 60%
        margin-bottom 0.14rem
        background-size cover
        border-radius: 0.4rem
      .icon-text
        color $defaultTextColor
        font-size 0.24rem
        ellipsis()
</style>