<template>
  <div>
    <HomeHeader/>
    <HomeSwiper :swiperList="swiperList"/>
    <IconsEntry :iconList="iconList"/>
    <RecommendList :recommendList="recommendList"/>
    <HomeWeekend :weekendList="weekendList"/>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
import HomeHeader from "./components/HomeHeader";
import HomeSwiper from "./components/HomeSwiper"
import IconsEntry from "./components/IconsEntry"
import RecommendList from "./components/RecommendList"
import HomeWeekend from "./components/HomeWeekend"

export default {
  name: "HomePage",
  components: {
    HomeHeader,
    HomeSwiper,
    IconsEntry,
    RecommendList,
    HomeWeekend
  },
  data() {
    return {
      lastCity: '',
      swiperList:[],
      weekendList:[],
      iconList:[],
      recommendList:[]
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted(){
    // this.getHomeData()
  },
  activated() { // 使用了<keep-alive>就会有这个钩子,每次组件渲染都执行
    if (this.lastCity !== this.city) { // 城市切换了才会获取新的数据
      this.lastCity = this.city
      this.getHomeData()
    }
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