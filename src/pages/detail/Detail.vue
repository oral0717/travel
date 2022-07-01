<template>
  <div class="">
    <div class="banner" :style="{backgroundImage: `url(${detail.bannerImg})`}">
      <div class="banner-bottom">
        <p class="banner-txt">
          {{detail.sightName}}
        </p>
        <div class="img-num"
          v-if="detail.gallaryImgs"
          @click="handleToggleGallary"
        >
          <i class="iconfont icon-tupian"></i>{{detail.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <CommonGallary v-if="showGallary" :imgs="detail.gallaryImgs" @handleCloseGallary="handleToggleGallary"/>
  </div>
</template>

<script>
import axios from 'axios'
import CommonGallary from 'common/components/gallary/Gallary'
export default {
  name: "DetailPage",
  components: {
    CommonGallary
  },
  data() {
    return {
      detail: {},
      showGallary: false
    }
  },
  mounted(...rest) {
    console.log(rest)
    this.getDetail()
  },
  methods: {
    getDetail() {
      axios.get('/api/detail.json').then((res) => {
        const {data, ret} = res.data
        console.log(ret, data)
        this.detail = data

      })
    },
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