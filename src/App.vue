<template>
  <div id="app">
    <weather></weather>
  </div>
</template>

<script>

import Weather from "@/components/Weather";
export default {
  name: 'App',
  components: {
    Weather,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  padding: 0;
}
h1,h2,h3,h4,h5,p,span {
  margin: 0;
  color: black;
}
body {
margin: 0;
}
</style>
