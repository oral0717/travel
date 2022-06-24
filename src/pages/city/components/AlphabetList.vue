
<template>
  <div class="alphabet">
    <div class="letter">A</div>
    <div class="letter">B</div>
    <div class="letter">C</div>
    <div class="letter">D</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">E</div>
    <div class="letter">G</div>
  </div>
</template>

<script>
export default {
  name: "AlphabetList"
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