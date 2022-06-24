<template>
  <div class="">
    <CityHeader />
    <CiteySearch />
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CiteySearch from './components/Search.vue'

export default {
  name: "CityPage",
  components: {
    CityHeader,
    CiteySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>