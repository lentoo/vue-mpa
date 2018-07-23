const path = require('path')
const webpack = require('webpack')
const package = require('../package.json')
const AssetsPlugin = require('assets-webpack-plugin')
module.exports = {
  entry: {
    vender: Object.keys(package.dependencies).map(item=>{
      if(item==='vue'){
        return 'vue/dist/vue.esm.js'
      }else{
        return item
      }
    })
    // vender: ['vue/dist/vue.esm.js','vue-router','vuex']
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: '[name].dll.[hash:6].js',
    library: '[name]_[hash:6]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name].json'),
      name: '[name]_[hash:6]_library',

      context: __dirname
    }),
    new AssetsPlugin({
      filename: 'bundle-config.json',
      path: path.join(__dirname, '.'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}