<template>
  <div class="">
    <Banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" />
    <Header />
    <DetailList :list="categoryList"></DetailList>
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
      sightName: ''
    }
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      console.log(this.$route.params)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then((res) => {
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