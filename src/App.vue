<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/car-detail">Car Detail</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
a{
  text-decoration: none;
  font-size: 35px;
  margin: 1%;
}
</style>