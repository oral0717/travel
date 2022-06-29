<template>
  <div class="">
    <CityHeader />
    <CiteySearch :cities="cityData.cities"/>
    <CiteyList
      :cityData="cityData"
      v-if="cityData.cities"
      :letter="letter"
    />
    <AlphabetList
      :list="alphabetList"
      @handleLetterClick="handleLetterClick"
    />
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
      alphabetList: {},
      letter: ''
    }
  },
  mounted(){
    this.getCity()
  },
  methods: {
    handleLetterClick(letter) {
      this.letter = letter
    },
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