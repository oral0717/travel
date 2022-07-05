<template>
  <div class="">
    <Banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" />
    <Header />
    <DetailList :list="list"></DetailList>
    <div style="height: 30rem"></div>

  </div>
</template>

<script>
import axios from 'axios'
import Banner from './components/Banner.vue'
import Header from './components/Header.vue'
import DetailList from './components/DetailList.vue'
export default {
  name: "DetailPage",
  components: {
    Banner,
    Header,
    DetailList
  },
  data() {
    return {
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
      sightName: '',
      list: [{ // 递归组件调用
        title: '成人票',
        children: [{
          title: '成人票三馆联票',
          children: [{
            title: '成人票三馆联票 - 某一链锁店销售',
            children: [{
              title: '某一链锁店销售'
            }]
          }]
        },{
          title: '成人票五馆联票'
        }]
      }, {
        title: '亲子票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      axios.get('/api/detail.json').then((res) => {
        const {data} = res.data
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
        this.sightName = data.sightName
      })
    },
  }
}
</script>

<style lang="stylus" scoped>

</style>