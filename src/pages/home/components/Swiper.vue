<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-item" :src="item.img"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'SwiperComp',
  data(){
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      swiperList: [{
        id: 1,
        img: 'https://imgs.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_710x360_59da4b3a.jpg'
      },{
        id: 2,
        img: 'https://qimgs.qunarzz.com/piao_qsight_provider_piao_qsight_web/0104m120008g5v5of875C.jpg_710x360_6d7895b2.jpg'
      },{
        id: 3,
        img: 'https://imgs.qunarzz.com/sight/p0/1411/ec/86594fa9af20fda6737b2e9d8b49b840.water.jpg_710x360_4836cc0b.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.swiper-wrap
  background $defaultBg
  width 100%
  height 0
  padding-bottom 50.4%
  overflow hidden
  & >>> .swiper-pagination-bullet-active
    background #fff
  .swiper-item
    width 100%

</style>
