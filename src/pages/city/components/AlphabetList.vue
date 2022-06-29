
<template>
  <div class="alphabet">
    <div
      class="letter"
      v-for="(value, key) in list"
      :key="key"
      @click="handleLetterClick"
    >{{key}}</div>
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
  methods: {
    handleLetterClick(e) {
      const {innerText} = e.target
      this.$emit('handleLetterClick', innerText)
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
    color $themeColor
    font-size 0.28rem
    line-height 0.42rem
</style>