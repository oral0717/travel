
<template>
  <div class="alphabet">
    <div
      class="letter"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove.prevent="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
      <span class="bubble" v-show="bubbleLetter === item">{{bubbleLetter}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlphabetList",
  props: {
    list: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      // timer: null,
      bubbleLetter: ''
    }
  },
  computed: {
    // 所有字母
    letters() {
      const letters = []
      for (let i in this.list) {
        letters.push(i)
      }
      return letters
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop // A所处位置距离本组件顶部高度
  },
  methods: {
    handleLetterClick(e) {
      const {innerText} = e.target
      this.$emit('handleLetterClick', innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      const {startY} = this
      if (!this.touchStatus) return

      // if (this.timer) {
      //   clearTimeout(this.timer)
      // }
      // this.timer = setTimeout(()=>{
        const touchY = e.touches[0].clientY - 79 // e.touches[0].clientY手指距离屏幕顶部距离，e.touches[0]手指所处位置信息, 79为标题栏和搜索框高度
        const index = Math.floor((touchY - startY) / 21) // 手指当前所处字母位置的index
        if (index >= 0 && index < this.letters.length) {
          this.bubbleLetter = this.letters[index]
          this.$emit('handleLetterClick', this.letters[index])
        }
      // }, 16)
    },
    handleTouchEnd() {
      this.bubbleLetter = ''
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.alphabet
  width 0.5rem
  position absolute
  top 1.58rem
  right 0
  bottom 0
  display flex
  flex-direction: column
  justify-content: center
  text-align: center
  .letter
    position relative
    color $themeColor
    font-size 0.28rem
    line-height 0.42rem
    .bubble
      position absolute
      top -0.2rem
      left -1rem
      background-color $themeColor
      color #fff
      width 0.8rem
      height 0.8rem
      border-radius 100%
      display flex
      justify-content: center
      align-items: center
      font-size 0.36rem
      &::after
        position absolute
        top 0.2rem
        right -0.3rem
        content ''
        width 0rem
        height 0rem
        border 0.2rem solid $themeColor
        border-right 0.2rem solid transparent
        border-top 0.2rem solid transparent
        border-bottom 0.2rem solid transparent
</style>