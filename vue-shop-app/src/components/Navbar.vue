<template>
  <div>
    <md-toolbar>
      <div style="flex: 1">
        <router-link to="/">
          <logo />
        </router-link>
      </div>

      <div class="nav-buttons">
        <router-link to="/leaderboard">
          <md-button class="md-raised leaderboard">Live Leaderboard</md-button>
        </router-link>
      </div>

      <md-button class="md-icon-button md-accent">
        <md-icon>more_vert</md-icon>
      </md-button>
    </md-toolbar>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  name: "navbar",
  components: {
    Logo
  }
};
</script>

<style>
.title_wrapper {
  float: left;
}
@media only screen and (max-width: 600px) {
  .register {
    display: none;
  }
}
</style>