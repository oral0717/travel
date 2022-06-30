export default {
  changeCity(state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
      console.log('浏览器不支持localStorage')
    }

  }
}