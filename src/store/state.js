let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.log('浏览器不支持localStorage')
}

export default {
  city: defaultCity,
}