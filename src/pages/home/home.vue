<template>
  <div>
    <HomeHeader/>
    <SwiperComp/>
    <IconsEntry />
    <RecommendList />
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import SwiperComp from "./components/Swiper"
import IconsEntry from "./components/IconsEntry"
import RecommendList from "./components/RecommendList"
export default {
  name: "HomePage",
  components: {
    HomeHeader,
    SwiperComp,
    IconsEntry,
    RecommendList
  },
};
</script>