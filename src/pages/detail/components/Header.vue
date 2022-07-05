<template>
  <div>
    <router-link tag="div" to="/" v-show="showAbs" class="header-abs">
      <i class="iconfont icon-fanhui"></i>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/" class="header-left">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <div class="">景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 1
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      if (top > 46) {
        let opacity = top / 120
        opacity = opacity > 1 ? 1 : opacity
        this.showAbs = false
        this.opacityStyle = {opacity}
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute
  top .2rem
  left .2rem
  width .7rem
  height .7rem
  border-radius 100%
  background-color rgba(0, 0, 0, .6)
  display flex
  justify-content: center
  align-items: center
  .icon-fanhui
    color #fff
    font-size .46rem
    font-weight: bold

.header-fixed
  z-index 10
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  background-color $themeColor
  color: #fff
  align-items: center
  text-align: center
  .header-left
    position absolute
    width 0.64rem
    display: flex;
    justify-content: center;
    .icon-fanhui
      font-size: 0.45rem;
      font-weight: bold
      color #fff
</style>