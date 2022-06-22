<template>
  <div>
    <HomeHeader/>
    <SwiperComp/>
    <div>test</div>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import SwiperComp from "./components/Swiper"
export default {
  name: "HomePage",
  components: {
    HomeHeader,
    SwiperComp
  },
};
</script>