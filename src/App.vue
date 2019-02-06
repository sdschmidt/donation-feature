<template>
  <div id="app">
    <Donation msg="" address="safe.nimiq.com" imgDark="darkImg.png" imgLight="lightImg.png"/>
  </div>
</template>

<script>
import Donation from './components/Donation.vue'

export default {
  name: 'app',
  components: {
    Donation
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
