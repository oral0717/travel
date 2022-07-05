<template>
  <div class="">
    <div class="banner" :style="{backgroundImage: `url(${bannerImg})`}" @click="handleToggleGallary">
      <div class="banner-bottom">
        <p class="banner-txt">
          {{sightName}}
        </p>
        <div class="img-num">
          <i class="iconfont icon-tupian"></i>{{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <AnimationFade>
      <CommonGallary v-show="showGallary" :imgs="gallaryImgs" @handleCloseGallary="handleToggleGallary"/>
    </AnimationFade>
  </div>
</template>

<script>
import CommonGallary from 'common/components/gallary/Gallary'
import AnimationFade from 'common/components/animation/Fade'
export default {
  name: "DetailBanner",
  components: {
    CommonGallary,
    AnimationFade
  },
  props: {
    bannerImg: String, // banner图
    gallaryImgs: { // banner滚动图
      type: Array,
      default() {
        return []
      }
    },
    sightName: String // banner文案
  },
  data() {
    return {
      showGallary: false
    }
  },
  methods: {
    handleToggleGallary() {
      this.showGallary = !this.showGallary
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.banner
  position relative
  width 100%
  height 31.05vh
  overflow hidden
  background-color $defaultBg
  background-size cover
  background-position: center center
  background-repeat: no-repeat
  .banner-bottom
    display flex
    justify-content: space-between
    align-items: center
    position absolute
    left 0
    right 0
    bottom 0
    z-index 1
    color #fff
    font-size 0.28rem
    background linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4), rgba(0,0,0,0.6))
  .banner-txt
    flex 1
    padding 0 0.2rem
    height 0.6rem
    line-height 0.6rem
    ellipsis()
  .img-num
    margin-right 0.16rem
    background-color #000
    padding 0.06rem
    min-width: 1rem
    border-radius 0.6rem
    display flex
    justify-content: center
    align-items: center
    .icon-tupian
      font-size 0.32rem
      margin-right 0.06rem
</style>