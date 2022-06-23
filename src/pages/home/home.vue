<template>
  <div>
    <HomeHeader/>
    <SwiperComp/>
    <IconsEntry />
    <RecommendList />
    <HomeWeekend />
  </div>
</template>

<script>
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
};
</script>