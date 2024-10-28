const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
})
module.exports = {
  devServer: {
    historyApiFallback: true
  }
};