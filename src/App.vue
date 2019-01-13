<template>
  <v-app id="app">
    <header class="header">
      <top-header></top-header>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>
    <footer class="footer">
      footer
    </footer>
  </v-app>
</template>

<script>
import TopHeader from './components/organisms/TopHeader'

export default {
  name: 'app',
  components: {
    'top-header': TopHeader
  }
}
</script>

<style lang="scss">
@import "./css/reset.css";
html {
  height: 100%;
}
body{
  margin: 0;
  background-color: silver;
  text-align: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: block;
  color: #2c3e50;
  background-color: white;
  height: 100%;
}
.header {
  display: block;
  margin-bottom: 40px;
}
.footer {
  margin: 50px 0px;
  width: auto;
  text-align: center;
}
</style>
