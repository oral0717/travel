const path = require('path')
const { defineConfig } = require('@vue/cli-service')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 1874,
    proxy: {}
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        // 'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'styles': resolve('src/assets/styles'),
        'common': resolve('src/common'),
      }
    }
  }
})
