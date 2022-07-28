<!--
 * @Descripttion: 
 * @Author: Oral
 * @Date: 2022-06-22 14:12:31
 * @LastEditTime: 2022-07-28 13:33:31
-->
<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-item" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slots="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
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
  // & >>> .swiper-pagination-bullet-active
  :deep(.swiper-pagination-bullet-active) // vue3中改变引入的子组件样式采用:deep()
    background #fff
  .swiper-item
    width 100%

</style>
