<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <button class="btn btn-primary" v-on:click="getMsg()">Spotify Sign In</button>
    <div class="quote-area" v-if="msg">
      <h2><blockquote>{{ msg }}</blockquote></h2>
    </div>
  </div>
</template>

<script>
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const REDIRECT_URI = 'http://localhost:8080/auth'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App Page2'
    }
  },
  methods: {
    getMsg () {
      var clientId = CLIENT_ID // Your client id
      var redirectUri = REDIRECT_URI // Your redirect uri
      var state = 'pants'
      var scope = 'user-read-private user-read-email'
      var url = 'https://accounts.spotify.com/authorize'
      url += '?response_type=token'
      url += '&client_id=' + encodeURIComponent(clientId)
      url += '&scope=' + encodeURIComponent(scope)
      url += '&redirect_uri=' + encodeURIComponent(redirectUri)
      url += '&state=' + encodeURIComponent(state)
      location.href = url
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
