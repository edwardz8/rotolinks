<template>
  <div id="app">
    <div class="top-half">
      <img src="../../static/img/assets/brooks_koepka.svg">

      <canvas id="radar-chart"></canvas>
    </div>

    <div class="bottom-half"></div>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "player-profile",
  components: {
    Chart
  }
};
</script>

<style scoped>
.top-half {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>