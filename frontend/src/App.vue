<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
import PostComponent from './components/PostComponent.vue'
import Register from './components/Register.vue'

export default {
  name: 'app',
  components: {
    PostComponent,
    Register
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
