<template>
  <div id="app">
    <dashboard/>
  </div>
</template>

<script>

import Dashboard from "@/components/Dashboard.vue";

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style>

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
