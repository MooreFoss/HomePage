const { defineConfig } = require('@vue/cli-service')
export default {
  server: {
    historyApiFallback: true
  }
}
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: ".",
})
module.exports = {
  devServer: {
    historyApiFallback: true
  }
};