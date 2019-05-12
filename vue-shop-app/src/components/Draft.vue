<template>

 <div class="md-layout container">
    <div class="md-layout-item">
      <md-card class="card" md-with-hover>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">British Open Draft</div>
          <div class="md-subhead">Entry: $25</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../../static/img/assets/flag.svg">
        </md-card-media>
      </md-card-header>

      <md-card-actions class="actions">
        <router-link to="/players">
        <md-button class="md-raised">Enter Draft</md-button>
        </router-link>
        <span><strong>Payout: $300</strong></span>
      </md-card-actions>
    </md-card>

    <md-card class="card md-primary"  md-with-hover>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">PGA Championship Draft</div>
          <div class="md-subhead">Entry: $25</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../../static/img/assets/ball.svg">
        </md-card-media>
      </md-card-header>

      <md-card-actions class="actions">
         <router-link to="/players">
        <md-button class="md-raised">Enter Draft</md-button>
         </router-link>
        <span><strong>Payout: $300</strong></span>
      </md-card-actions>
    </md-card>

    <md-card class="card"  md-with-hover>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">British Open Draft</div>
          <div class="md-subhead">Entry: $25</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../../static/img/assets/flag.svg">
        </md-card-media>
      </md-card-header>

      <md-card-actions class="actions">
         <router-link to="/players">
        <md-button class="md-raised">Enter Draft</md-button>
         </router-link>
        <span><strong>Payout: $300</strong></span>
      </md-card-actions>
    </md-card>

    <md-card class="card md-accent"  md-with-hover>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Byron Nelson Draft</div>
          <div class="md-subhead">Entry: $25</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../../static/img/assets/bag.svg">
        </md-card-media>
      </md-card-header>

      <md-card-actions class="actions">
         <router-link to="/players">
        <md-button class="md-raised">Enter Draft</md-button>
         </router-link>
        <span><strong>Payout: $300</strong></span>
      </md-card-actions>
    </md-card>
    </div>

    <!-- Right Column -->
    <div class="md-layout-item col-right">

    </div>
  </div>

</template>

</template>

<script>
import axios from "axios";

export default {
  name: "draft",
  data() {
    return {
      drafts: []
    };
  },
  created() {
    axios.get(``).then(response => {
      this.drafts = response.data;
    });
  }
};
</script>

<style scoped>
/* .container {
  background-color: #fafafa;
} */
.card {
  margin-top: 1rem;
}
.md-layout-item {
  margin: 2rem;
}
.actions {
  display: flex;
  justify-content: space-between;
}
.md-card.md-theme-default .md-card-actions .md-button:not(.md-primary):not(.md-accent) {
  color: #28ffb7;
}
@media only screen and (max-width: 1024px) {
  .col-right {
    display: none;
  }
}
</style>