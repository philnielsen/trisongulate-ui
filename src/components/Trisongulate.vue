<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>
      <search-box/>
      <search-box/>
      <search-box/>
    </div>

  </div>
</template>

<script>
import Search from './Search.vue'
export default {
  name: 'Trisongulate',
  components: {
    'search-box': Search
  },
  data () {
    return {
      msg: 'Trisongulate'
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
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
