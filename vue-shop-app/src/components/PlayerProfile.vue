<template>
  <div class="container">
    <div>
      <div v-for="(player, index) in players" :key="index">
      <div v-if="id === player.id" class="profile">
        <img class="img">
      </div>
      </div>
        <h2>{{ this.$route.params.id }}</h2>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
/* import polarAreaData from "../polar-area-data.js";
 */
/*  import barChartData from "../bar-chart-data.js";
 */
export default {
  name: "players-id",
  components: {
    /* Chart */
  },
  data() {
    return {
      id: this.$route.params.id,
      players: [],
    }
  },
  methods: {
  },
};
</script>

<style scoped>
.container {
  background-color: #f6f6f6;
  height: 100vh;
}
.img {
  width: 16rem;
}
h2 {
  color: black;
}
</style>