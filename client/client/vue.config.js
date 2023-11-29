const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        '/api/Todolist': {
          target: 'https://opulent-rotary-phone-pjwq77jqvrjc6wqj-3000.app.github.dev/',
        },
      },
    },
  },
})