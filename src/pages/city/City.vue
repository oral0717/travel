<template>
  <div class="">
    <CityHeader />
    <CiteySearch />
    <CiteyList :cityData="cityData" />
    <AlphabetList :list="alphabetList" />
  </div>
</template>

<script>
import axios from 'axios'
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
  },
  data() {
    return {
      cityData: {},
      alphabetList: []
    }
  },
  mounted(){
    this.getCity()
  },
  methods: {
    getCity(){
      const self = this
      axios.get('/api/city.json').then((res)=>{
        const {ret, data} = res.data
        if (ret) {
          self.cityData=data
          self.alphabetList=data.cities
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>