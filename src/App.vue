<template>
  <div id="app">
    <img id="big-logo" src="./assets/Spotify_Logo_RGB_Green.png">
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
#big-logo {
  height: 25%;
  width: 25%;
}
</style>
