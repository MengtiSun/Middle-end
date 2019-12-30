<template>
  <div id="app">
    <div id="name">{{ name }}</div>
    <div id="culture">{{ culture }}</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: null,
      culture: null
    }
  },
  mounted () {
    this.axios.get('/data')
        .then(response => {
            this.name = response.data.name;
            this.culture = response.data.culture;
        })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
