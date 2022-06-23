<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-item" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'SwiperComp',
  props: {
    swiperList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data(){
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.swiper-wrap
  background $defaultBg
  width 100%
  height 0
  padding-bottom 30.333%
  overflow hidden
  & >>> .swiper-pagination-bullet-active
    background #fff
  .swiper-item
    width 100%

</style>
