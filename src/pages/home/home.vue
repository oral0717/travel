<template>
  <div>
    <HomeHeader/>
    <SwiperComp/>
    <IconsEntry />
    <div>test</div>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import SwiperComp from "./components/Swiper"
import IconsEntry from "./components/IconsEntry"
export default {
  name: "HomePage",
  components: {
    HomeHeader,
    SwiperComp,
    IconsEntry
  },
};
</script>