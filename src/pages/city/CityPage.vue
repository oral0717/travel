<template>
  <div class="">
    <CityHeader />
    <CitySearch :cities="cityData.cities"/>
    <CityList
      :cityData="cityData"
      v-if="cityData.cities"
      :curLetter="letter"
      :curLetterIndex="letterIndex"
    />
    <AlphabetList
      :list="alphabetList"
      @handleLetterClick="handleLetterClick"
    />
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/CityList.vue'
import AlphabetList from './components/AlphabetList.vue'

export default {
  name: "CityPage",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    AlphabetList
  },
  data() {
    return {
      cityData: {},
      alphabetList: {},
      letter: '',
      letterIndex: 0
    }
  },
  mounted(){
    this.getCity()
  },
  methods: {
    handleLetterClick(obj) {
      const {letter, index} = obj
      this.letter = letter
      this.letterIndex = index
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