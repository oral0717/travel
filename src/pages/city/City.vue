<template>
  <div class="">
    <CityHeader />
    <CiteySearch />
    <CiteyList />
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CiteySearch from './components/Search.vue'
import CiteyList from './components/List.vue'

export default {
  name: "CityPage",
  components: {
    CityHeader,
    CiteySearch,
    CiteyList
  }
}
</script>

<style lang="stylus" scoped>

</style>