<template>
  <div class="icon-wrapper">
    <swiper  :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon-item" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img width="100%" :src="item.img" />
          </div>
          <p class="icon-text">{{item.text}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>


  </div>
</template>

<script>
export default {
  name: "IconsEntry",
  data(){
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [{
        id: 1,
        img: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        text: '酒店'
      },{
        id: 2,
        img: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
        text: '机票'
      },{
        id: 3,
        img: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
        text: '火车票'
      },{
        id: 4,
        img: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
        text: '度假'
      },{
        id: 5,
        img: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
        text: '景点门票'
      },{
        id: 6,
        img: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        text: '去滑雪'
      },{
        id: 7,
        img: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
        text: '去爬山'
      },{
        id: 8,
        img: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
        text: '一日游'
      },{
        id: 9,
        img: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
        text: '泡温泉'
      }]
    }
  },
  computed: {
    // 将icon列表分组，每8个一组
    pages () {
      const pages = []
      this.iconList.forEach((item, index)=>{
        const pageIndex = Math.floor(index / 8)
        if (!pages[pageIndex]) {
          pages[pageIndex] = []
        }
        pages[pageIndex].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icon-wrapper
    padding 0.3rem 0 50%
    height 0
    overflow hidden
    display flex
    flex-wrap: wrap
    .icon-item
      display inline-block
      width: 25%;
      text-align center
      overflow: hidden
      margin-bottom 0.3rem
      .icon-img
        display: inline-block
        background-color $defaultBg
        border-radius 100%
        width 60%
        height 0
        padding-bottom 60%
        margin-bottom 0.14rem
      .icon-text
        color $defaultTextColor
        font-size 0.24rem
        ellipsis()
</style>