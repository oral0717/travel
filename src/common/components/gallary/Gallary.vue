<template>
  <div class="container">
    <i class="iconfont icon-guanbi" @click="handleClose"></i>
    <div class="swiper-wrap">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="swiper-item" :src="item"/>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>

export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType : 'fraction',
        observeParents: true, // 如果容器发生变化，swiper要自动自我刷新
        observer: true
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit('handleCloseGallary')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.container
  z-index 999
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background #000
  display flex
  justify-content center
  align-items center
  .icon-guanbi
    position absolute
    top 0
    right 0
    color #aaa
    font-size 1rem
  .swiper-wrap
    background $defaultBg
    width 100%
    height 0
    padding-bottom 100%
    & >>> .swiper-container
      overflow inherit
    & >>> .swiper-pagination
      color #fff
      bottom -1rem
    .swiper-item
      width 100%
</style>