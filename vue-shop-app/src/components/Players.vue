<template>
  <div class="md-layout container">
    <div class="column-left md-layout md-gutter">
      <div v-for="(golfer, index) in golfers" :key="index" class="md-layout md-gutter">
        <md-card class="md-layout-item card" md-with-hover>
          <md-card-media md-big>
            <img :src="matchPlayerPhoto(golfer.player_name)" />
          </md-card-media>

          <md-card-header-text>
            <div class="md-title">{{ golfer.player_name }}</div>
            <div class="md-subhead">WGR: {{ golfer.owgr_rank }}</div>
            <md-icon class="md-accent" v-if="golfer.dg_rank <= golfer.owgr_last_week">trending_up</md-icon>
            <md-icon class="md-accent" v-if="golfer.dg_rank >= golfer.owgr_last_week">trending_down</md-icon>
          </md-card-header-text>

          <md-card-actions class="actions">
            <md-button
              class="md-raised md-accent btn"
              @click.once="addGolferToLineup(golfer)"
              :disabled="golfer.disablePlayer"
            >Add to Play</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>

    <!-- Right Column -->
    <div class="column-right">
      <lineup />
    </div>
  </div>
</template>

<script>
import lineup from "@/components/Lineup.vue";
import golfers from "../../golfers.json";
import methods from "../../methods";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "players",
  data() {
    return {
      golfers
    };
  },
  computed: {
    ...mapGetters(["getGolfers", "getCurrentGolfer"])
  },
  methods: {
    ...methods,
    ...mapActions([
      "addGolferToLineup",
      "currentGolfer",
      "currentLineup",
      "isDisabled"
    ]),
    viewCurrentGolfer(golfer) {
      this.currentGolfer(golfer);
    }
  },
  components: {
    lineup
  }
};
</script>

<style scoped>
.container {
  background-color: #191919;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap-reverse;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 1400px;
}
.column-left {
  max-width: 40rem;
}
.card {
  margin: 2rem;
  max-width: 15rem;
  min-width: 12rem;
  height: 20rem;
  position: relative;
}
.card:hover {
  background-color: #4c4c4c;
}
.column-right {
  text-align: center;
}
.list {
  margin: 2rem;
}
.x {
  cursor: pointer;
  color: #64dd17;
}
h2,
.plays {
  color: white;
}
.add-btn {
  margin-left: 2rem;
}
.btn {
  position: absolute;
  bottom: 10px;
}
</style>
