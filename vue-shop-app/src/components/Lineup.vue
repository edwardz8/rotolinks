<template>
  <div class="lineup">
    <md-card md-with-hover class="card">
      <md-card-header class="card-heading">
        <div class="md-title" style="flex: 1">
          Current Lineup
          <span>(0/6)</span>
        </div>
      </md-card-header>

      <md-list class="md-triple-line">
        <!-- Golfer -->
        <md-list-item v-for="(draftee, index) in getDraftees" :key="index">
          <div>G</div>
          <div class="md-list-item-text">
            <md-avatar class="md-large">
              <img :src="matchPlayerPhoto(draftee.player_name)" />
            </md-avatar>
            <p class="drafted-player-name">{{ draftee.player_name }}</p>
          </div>

          <md-button
            @click="removeGolfer(index)"
            class="md-icon-button md-list-action"
          >
            <md-icon class="md-primary">{{
              vacant ? "indeterminate_check_box" : "add"
            }}</md-icon>
          </md-button>
        </md-list-item>
      </md-list>

      <md-card-actions>
        <md-button class="md-raised md-primary" @click="clearLineup()"
          >Clear</md-button
        >
        <md-button class="md-raised md-accent">
          <md-icon>sports_golf</md-icon>Submit Lineup
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<!-- 
        <md-list-item>
          <div>
            <md-avatar class="md-large">
              <img :src="draftee.img" />
            </md-avatar>
            <span>{{ draftee.name }}</span>
          </div>
          <span class="x">x</span>
        </md-list-item>
      </md-list> -->

<!--   <div v-if="lineup.length">
        <md-button class="md-raised md-accent">Draft Team</md-button>
      </div>
      <div v-else class="plays">Add Golfers to Draft</div>-->

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
    ...mapGetters(["getDraftees"])
  },
  methods: {
    ...methods,
    ...mapActions([
      "addGolferToLineup",
      "currentGolfer",
      "removeGolfer",
      "clearLineup"
    ])
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
  max-width: 32rem;
  min-width: 20rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
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
</style>
