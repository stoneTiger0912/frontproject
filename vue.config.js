module.exports = {
  outputDir:"../webproject/src/main/resources/static/vue",
  devServer:{
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true
      }
    }
  }
}