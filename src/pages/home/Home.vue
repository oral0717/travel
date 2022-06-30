<template>
  <div>
    <HomeHeader/>
    <SwiperComp :swiperList="swiperList"/>
    <IconsEntry :iconList="iconList"/>
    <RecommendList :recommendList="recommendList"/>
    <HomeWeekend :weekendList="weekendList"/>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from "./components/Header";
import SwiperComp from "./components/Swiper"
import IconsEntry from "./components/IconsEntry"
import RecommendList from "./components/RecommendList"
import HomeWeekend from "./components/Weekend"

export default {
  name: "HomePage",
  components: {
    HomeHeader,
    SwiperComp,
    IconsEntry,
    RecommendList,
    HomeWeekend
  },
  data() {
    return {
      swiperList:[],
      weekendList:[],
      iconList:[],
      recommendList:[]
    }
  },
  mounted(){
    this.getHomeData()
  },
  methods: {
    getHomeData() {
      const self = this
      axios.get('/api/index.json')
      .then((res)=>{
        if (res.data.ret) {
          const { swiperList, weekendList, iconList, recommendList} = res.data.data
          self.swiperList = swiperList
          self.weekendList = weekendList
          self.iconList = iconList
          self.recommendList = recommendList
        }
      })
    },
  }
};
</script>