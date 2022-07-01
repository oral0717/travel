<template>
  <div class="">
    <Banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" />
  </div>
</template>

<script>
import axios from 'axios'
import Banner from './components/Banner.vue'
export default {
  name: "DetailPage",
  components: {
    Banner
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