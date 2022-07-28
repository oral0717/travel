/*
 * @Descripttion:
 * @Author: Oral
 * @Date: 2022-06-17 14:25:14
 * @LastEditTime: 2022-07-28 12:52:21
 */
const path = require('path')
const { defineConfig } = require('@vue/cli-service')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: true, // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  productionSourceMap: false, //设置生产环境的 source map 开启与关闭,是否生成 sourceMap 文件

  devServer: {
    port: 1874,
    allowedHosts: ['.test.com'],
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:1874',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  },

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.mode = 'production'
    } else {
      config.mode = 'development'
      config.devtool = 'eval-source-map'
    }

    Object.assign(config.resolve, {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        // 'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'styles': resolve('src/assets/styles'),
        'common': resolve('src/common'),
      }
    })

  }
})
