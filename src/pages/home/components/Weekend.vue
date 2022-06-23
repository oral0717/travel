<template>
  <div class="">
    <div class="recommend-title">周末去哪儿</div>
    <div class="list">
      <div class="recommend-item" v-for="item of recommendList" :key="item.id">
        <div class="rec-img" :style="{backgroundImage:`url(${item.img})`}"></div>
        <div class="rec-content">
          <p class="rec-tit">{{item.title}}</p>
          <p class="rec-desc">{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [{
        id:1,
        img: 'https://youimg1.c-ctrip.com/target/01038120009i7d80s57D0_R_238_268.jpg',
        title:'上海陆家嘴上海中心上海陆家嘴上海中心上海陆家嘴上海中心上海陆家嘴上海中心',
        desc:'到达的地方大幅度发的放大放大放大到达的地方大幅度发的放大放大放大到达的地方大幅度发的放大放大放大'
      },{
        id:2,
        img: 'https://youimg1.c-ctrip.com/target/01038120009i7d80s57D0_R_238_268.jpg',
        title:'上海陆家嘴上海中心上海陆家嘴上海中心上海陆家嘴上海中心上海陆家嘴上海中心',
        desc:'到达的地方大幅度发的放大放大放大到达的地方大幅度发的放大放大放大到达的地方大幅度发的放大放大放大'
      },{
        id:3,
        img: 'https://youimg1.c-ctrip.com/target/01038120009i7d80s57D0_R_238_268.jpg',
        title:'上海陆家嘴上海中心上海陆家嘴上海中心上海陆家嘴上海中心上海陆家嘴上海中心',
        desc:'到达的地方大幅度发的放大放大放大到达的地方大幅度发的放大放大放大到达的地方大幅度发的放大放大放大'
      }]
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
.list
  background $defaultBg

.recommend-item
  border-bottom 0.02rem solid $defaultBg
  margin 0 0 0.1rem
  background #fff
  .rec-img
    width 100%
    height 2rem
    background-color $defaultBg
    background-size cover
  .rec-content
    padding 0.2rem 0.3rem
    .rec-tit
      color $defaultTextColor
      font-size 0.24rem
      line-height 0.4rem
      ellipsis()
    .rec-desc
      color $textColor1
      font-size 0.22rem
      line-height 0.4rem
      ellipsis()
</style>