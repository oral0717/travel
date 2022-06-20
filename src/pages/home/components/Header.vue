<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">内容</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="stylus" scoped>
// @import '~styles/varibles.styl'
.header
  height 0.86rem
  background-color #00bcd4
  display: flex
  .header-left
    width 0.64rem
    display: flex;
    justify-content: center
    align-items: center
  .header-input
    flex 1
    background-color: #fff
    margin 0.1rem
    border-radius: 0.06rem
  .header-right
    width 1.23rem
    display: flex;
    justify-content: center
    align-items: center
</style>