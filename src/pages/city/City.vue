<template>
  <div class="">
    <CityHeader />
    <CiteySearch />
    <CiteyList />
    <AlphabetList />
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CiteySearch from './components/Search.vue'
import CiteyList from './components/List.vue'
import AlphabetList from './components/AlphabetList.vue'

export default {
  name: "CityPage",
  components: {
    CityHeader,
    CiteySearch,
    CiteyList,
    AlphabetList
  }
}
</script>

<style lang="stylus" scoped>

</style>