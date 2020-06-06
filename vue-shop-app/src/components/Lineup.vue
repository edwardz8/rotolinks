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
          <div class="card_flex">
          <div class="g">G</div>
          <div class="md-list-item-img">
            <md-avatar class="md-large">
              <img :src="matchPlayerPhoto(draftee.player_name)" />
            </md-avatar>
          </div>
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
  min-width: 30rem;
  margin-top: 2rem;
  position: sticky;
  top: 2rem;
  max-height: 50rem;
}
.plays {
  color: lime;
  padding: 1rem;
}
.g {
  color: lime;
  margin-right: 2rem;
}
.drafted-player-name {
  margin-top: -.2px;
}
.card_flex {
  display: flex;
}
.md-list-item-img {
  margin-top: -1rem;
  margin-right: 1rem;
}
</style>
