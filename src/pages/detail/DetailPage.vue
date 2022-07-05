<template>
  <div class="">
    <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" />
    <DetailHeader />
    <DetailList :list="categoryList"></DetailList>
    <div style="height: 30rem"></div>

  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/DetailBanner.vue'
import DetailHeader from './components/DetailHeader.vue'
import DetailList from './components/DetailList.vue'
export default {
  name: "DetailPage",
  components: {
    DetailBanner,
    DetailHeader,
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
      // console.log(this.$route.params) // id
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