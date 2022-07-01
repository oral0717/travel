<template>
  <div class="">
    <div class="recommend-title">热销推荐</div>
    <div class="list">
      <router-link tag="div" :to="`/detail/${item.id}`" class="recommend-item"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="rec-img" :style="{backgroundImage:`url(${item.imgUrl})`}"></div>
        <div class="rec-content">
          <p class="rec-tit">{{item.title}}</p>
          <p class="rec-desc">{{item.desc}}</p>
          <p class="btn-view">查看详情</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendList",
  props: {
    recommendList: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.recommend-title
  background $defaultBg
  color $defaultTextColor
  font-size 0.24rem
  padding 0.2rem 0.4rem
.recommend-item
  border-bottom 0.02rem solid $defaultBg
  padding 0.3rem 0
  margin 0 0.3rem
  display flex
  .rec-img
    width 1.4rem
    height 1.4rem
    background-color $defaultBg
    border-radius 0.04rem
    background-size cover
  .rec-content
    flex 1
    margin-left 0.2rem
    min-width 0
    .rec-tit
      color $defaultTextColor
      font-size 0.28rem
      line-height 0.4rem
      ellipsis()
    .rec-desc
      color $textColor1
      font-size 0.24rem
      line-height 0.5rem
      ellipsis()
    .btn-view
      color #fff
      width 2rem
      text-align: center
      height 0.5rem
      line-height 0.5rem
      font-size 0.24rem
      border-radius: 0.04rem
      background #A084CF
</style>