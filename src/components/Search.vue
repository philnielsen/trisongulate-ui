<template lang='pug'>
  div.search-box
    input(type='text' v-model='query' tabindex=1)
</template>

<script>
export default {
  name: 'search-box',
  components: {
  },
  data () {
    return {
      query: '',
      searchTypes: [
        'Artist',
        'Album',
        'Track'
      ]
    }
  }
}
</script>

<style>
input[type=text] {
  background: #303030;
  border-radius: 4px;
  border-color: #1ED760;
  color: #1ED760;
  font: 20px Sans-serif;
  float: left;
  height: 44px;
  opacity: 0.7;
  text-indent: 0.2em;
  vertical-align: top;
  width: calc(33%);
  -webkit-appearance: none;
  -webkit-box-sizing: border-box;
}
.search-box {
  /* background: #303030;
  padding: 0.25em 0 0.25em 0.25em;
  position: fixed;
  width: 100%;
  z-index: 1; */
}
.right-spacing {
  margin-right: 0.5em;
}
</style>
