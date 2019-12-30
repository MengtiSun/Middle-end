// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      // https://stackoverflow.com/questions/40315451/proxy-requests-to-a-separate-backend-server-with-vue-cli
      // Now any call to (assuming your dev server is at localhost:8080) http://localhost:8080/gists 
      // will be redirected to https://api.github.com/gists.
      '^/': {
        target: 'http://localhost:8888/' // api server
      } 
    }
  }
}