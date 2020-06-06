<template>
  <div class="lineup">
    <md-card md-with-hover class="card">
      <md-card-header class="card-heading">
        <div class="md-title" style="flex: 1">
          Current Lineup
          <!-- <span>(0/6)</span> -->
        </div>
      </md-card-header>

      <md-list class="md-triple-line" v-if="getCurrentLineup.length">
        <!-- Golfer -->
        <md-list-item v-for="(draftee, index) in getCurrentLineup" :key="index">
          <div class="g">G</div>
          <div class="md-list-item-text">
            <md-avatar class="md-large">
              <img :src="matchPlayerPhoto(draftee.player_name)" />
            </md-avatar>
            <p class="drafted-player-name">{{ draftee.player_name }}</p>
          </div>

          <md-button @click="removeGolfer(index)" class="md-icon-button md-list-action">
            <md-icon class="md-primary">
              {{
              vacant ? "indeterminate_check_box" : "add"
              }}
            </md-icon>
          </md-button>
        </md-list-item>
      </md-list>

      <div v-else class="plays">Add Golfers to Lineup</div>

      <md-card-actions>
        <md-button class="md-raised md-primary" @click="clearLineup()">Clear</md-button>
        <md-button
          class="md-raised md-accent"
          @click="submitLineup()"
          :disabled="getCurrentLineup.length < 6"
        >
          <md-icon>sports_golf</md-icon>Submit Lineup
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import methods from "../../methods";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "lineup",
  data() {
    return {
      vacant: true
    };
  },
  computed: {
    ...mapGetters(["getCurrentLineup", "getGolfers"])
  },
  methods: {
    ...methods,
    ...mapActions([
      "addGolferToLineup",
      "currentGolfer",
      "removeGolfer",
      "clearLineup"
    ]),
    submitLineup() {
      if (this.$store.getters.getCurrentLineup) {
        return this.$store.getters.getCurrentLineup.map(lineup => {
          return this.$store.getters.getGolfers.find(availablePlayers => {
            return lineup === availablePlayers.id;
          });
        });
      }
      console.log(this.$store.getters.getCurrentLineup);
    }
  }
};
</script>

<style>
.list {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
.card-heading {
  display: flex;
  justify-content: space-between;
}
.lineup {
  min-width: 15rem;
  margin-top: 2rem;
  position: sticky;
  top: 2rem;
  max-height: 50rem;
  min-height: 50rem;
}
.drafted-player-name {
  padding-top: 1rem;
}
.md-list-item-text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.md-list.md-triple-line .md-list-item-content {
  min-height: initial;
}
.plays {
  color: lime;
  padding: 1rem;
}
.g {
  color: lime;
}
</style>
