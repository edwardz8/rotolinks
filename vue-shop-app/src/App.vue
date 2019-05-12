<template>
  <div id="app">
    <navbar-home></navbar-home>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    "navbar-home": Navbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

body {
  margin: 0;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
