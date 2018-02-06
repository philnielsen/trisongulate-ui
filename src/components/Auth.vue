<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
const queryString = require('query-string')
export default {
  name: 'Auth',
  components: {
  },
  data () {
    return {
      msg: 'Trisongulate'
    }
  },
  computed: {
    user () {
      return this
    }
  },
  mounted () {
    var parseHash = queryString.parse(location.hash)
    this.$store.commit('SET_SPOTIFY_TOKEN', {hash: parseHash.access_token})
    console.log('spotify Token: ', this.$store.getters.spotifyToken)
    this.$router.push('trisongulate')
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
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
