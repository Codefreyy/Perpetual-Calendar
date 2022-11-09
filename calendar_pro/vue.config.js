// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer:{
    overlay:{
      warning: false,
      errors: false
    },
    proxy:{
      "/api":{
        target: "http://v.juhe.cn/",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          "^/api":""
        }
      }
    }
  },
  lintOnSave: false
}
