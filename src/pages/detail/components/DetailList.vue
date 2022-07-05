
<template>
  <div class="list">
    <div class="ticket-item"
      v-for="(item,index) of list"
      :key="index"
    >
      <div class="item-title">
        <i class="iconfont icon-ticket"></i>
        {{item.title}}
      </div>
      <div class="item-child-title" v-if="item.children">
        <DetailList :list="item.children"></DetailList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.item-title
  padding 0.2rem 0.4rem
  border-bottom 1px solid $defaultBg
  .icon-ticket
    color $themeColor
.item-child-title
  padding-left 0.4rem
</style>