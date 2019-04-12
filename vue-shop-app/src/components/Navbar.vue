<template>
  <div id="navbar">
    <b-navbar class="navbar" toggleable>
      <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
      <router-link to="/">
        <b-navbar-brand>RotoLinks</b-navbar-brand>
      </router-link>

      <router-link to="/list">
       <b-nav-text class="list">List</b-nav-text>
      </router-link>

      <b-collapse is-nav id="nav_text_collapse">
        <b-navbar-nav class="ml-auto">
          <router-link to="/register" class="button">Register</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar'
};
</script>

<style scoped>
.navbar {
  background-color: #629a92;
}

.button {
  color: #629a92;
  text-decoration: none;
  border: solid white 0.1rem;
  background-color: white;
  padding: 0.4rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 1.5rem;
}

a.button {
  text-decoration: none;
}

.list {
    color: white;
}
</style>