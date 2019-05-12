<template>
  <div class="md-layout container">
    <div class="md-layout-item">
      <div v-for="player in players" v-bind:key="player.id">
        <md-card class="card" md-with-hover>
          <md-card-header>
            <md-card-media md-big>
              <img :src="player.img" height="12rem">
            </md-card-media>

            <md-card-header-text>
              <div class="md-title">{{player.name}}</div>
              <div class="md-subhead">WGR: {{player.rank}}</div>
              <md-icon class="md-accent">trending_up</md-icon>
            </md-card-header-text>
          </md-card-header>

          <md-card-actions class="actions">
            <md-button class="md-raised md-primary" @click="addToQueue(player)">Add to Play</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
    <!-- Right Column -->
    <div class="md-layout-item col-right">
      <div class="queue">
        <h2>Draft Queue</h2>

        <md-list v-for="item in queue" v-bind:key="item.id" class="md-primary list">
          <md-list-item>
            <div>
            <md-avatar class="md-large">
            <img :src="item.img" >
            </md-avatar>
            <span >{{ item.name }}</span>
            </div>
            <span @click="removeItem(item)" class="x">x</span>
          </md-list-item>
        </md-list>

        <div v-if="queue.length">
          <md-button class="md-raised md-accent">Draft Team</md-button>
        </div>
        <div v-else class="plays">No Favorite Plays</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "players",
  data() {
    return {
      total: 0,
      players: [
        {
          name: "Tiger Woods",
          id: 2,
          country: "",
          rank: "4",
          img: "/static/img/assets/tiger_woods.svg"
        },
        {
          name: "Justin Thomas",
          id: 3,
          country: "",
          rank: "4",
          img: "/static/img/assets/justin_thomas.svg"
        },
        {
          name: "Dustin Johnson",
          id: 6,
          country: "",
          rank: "1",
          img: "/static/img/assets/dustin_johnson.svg"
        },
        {
          name: "Tommy Fleetwood",
          id: 4,
          country: "",
          rank: "4",
          img: "/static/img/assets/tommy_fleetwood.svg"
        },
        {
          name: "Rory McIlroy",
          id: 8,
          country: "",
          rank: "6",
          img: "/static/img/assets/rory_mcilroy.svg"
        },
        {
          name: "Justin Rose",
          id: 7,
          country: "",
          rank: "17",
          img: "/static/img/assets/justin_rose.svg"
        },
        {
          name: "Brooks Koepka",
          id: 1,
          country: "",
          rank: "4",
          img: "/static/img/assets/brooks_koepka.svg"
        },
        {
          name: "Jon Rahm",
          id: 8,
          country: "",
          rank: "10",
          img: "/static/img/assets/jon_rahm.svg"
        },
        {
          name: "Sergio Garcia",
          id: 5,
          country: "",
          rank: "17",
          img: "/static/img/assets/sergio_garcia.svg"
        }
      ],
      queue: [],
      search: ""
    };
  },
  methods: {
    addToQueue: function(player) {
      /* this.total += player.price; */
      var found = false;
      for (var i = 0; i < this.queue.length; i++) {
        if (this.queue[i].id === player.id) {
          this.queue[i].qty++;
          found = true;
        }
      }
      if (!found) {
        this.queue.push({
          id: player.id,
          img: player.img,
          name: player.name,
          price: player.price
        });
      }
    },
    removeItem: function(item) {
      this.queue.splice(item, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin: 1rem;
}
.card:hover {
  background-color: #696969;
}
.queue {
  text-align: center;
}
.list {
  margin: 2rem;
}
.x {
  cursor: pointer;
  color: #64dd17;
}
h2, .plays {
  color: white;
}
.col-right {
  position: sticky;
}
</style>