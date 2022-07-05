<template>
  <div class="">
    <Banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" />
    <Header />
    <div style="height: 30rem"></div>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from './components/Banner.vue'
import Header from './components/Header.vue'
export default {
  name: "DetailPage",
  components: {
    Banner,
    Header
  },
  data() {
    return {
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
      sightName: ''
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