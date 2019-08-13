<template>
  <div id="app">
    <div v-for="result in results" :key="result.players" class="list">
      <h2>RotoLinks {{ result.Tour }} Leaderboard</h2>
      <h3>{{ result.Tournament }} at {{ result.Course }}</h3>
      <div class="md-layout md-gutter">
        <md-card v-for="player in result.Players" :key="player.Name" class="md-layout-item card">
            <img src="../../static/img/assets/Jordan_Spieth.svg" height="13rem">
          <p>{{ player.Name }}</p>
          <p>Current Position: {{ player.CurrentPosition }}</p>
          <p>Total Score: {{ player.Total }}</p>
          <p>Total Strokes: {{ player.TotalStrokes }}</p>
        </md-card>
      </div>
    </div>
    <!-- <Table/> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "leaderboard",
  data() {
    return {
      results: [],
      players: []
    };
  },
  /* methods() {
    // match name from api with correct image path ???
    if (this.players.name) {
      return null;
    }
  }, */
  mounted() {
    debugger;
    console.log("mounted");
    axios
      .get("https://golf.jacoduplessis.co.za/?format=json")
      .then(response => {
        this.results = response.data.Leaderboards;
        this.players = response.data.Leaderboards[0];
        console.log(response, "api call here");
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  background-color: #ededed;
}
h2, h3 {
    text-align: center;
}
.list {
  margin: 3rem;
}
.card {
  min-width: 12rem;
  min-height: 12rem;
  border-radius: 3px;
  margin: 1rem;
}
.card:hover {
  background-color: #2a2a2a;
}
</style>