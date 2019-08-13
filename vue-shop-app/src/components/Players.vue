<template>
  <div class="md-layout container">
    <div v-for="(player, index) in players" :key="index" class="md-layout md-gutter">
      <md-card class="md-layout-item card" md-with-hover>
        <md-card-media md-big>
          <img :src="player.img" />
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">{{player.name}}</div>
          <div class="md-subhead">WGR: {{player.rank}}</div>
          <md-icon class="md-accent">trending_up</md-icon>
        </md-card-header-text>

        <md-card-actions class="actions">
          <!-- Links to Golfer Profile -->
          <!-- <md-button class="md-raised md-accent">
            <router-link v-if="player.id" :to="{name: 'players-id', params: { id: player.name }}">
              Player Profile
            </router-link>
          </md-button>-->
          <md-button class="md-raised md-accent btn" @click="addToQueue(player)">Add to Play</md-button>
        </md-card-actions>
      </md-card>
    </div>

    <!-- Right Column -->
    <div class="queue">
      <h2>Draft Queue</h2>

      <md-list v-for="item in queue" v-bind:key="item.id" class="md-primary list">
        <md-list-item>
          <div>
            <md-avatar class="md-large">
              <img :src="item.img" />
            </md-avatar>
            <span>{{ item.name }}</span>
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
</template>

<script>
export default {
  name: "players",
  data() {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name,
      img: this.$route.params.img,
      total: 0,
      players: [
        {
          name: "Francesco Molinari",
          id: 12,
          country: "",
          rank: "9th",
          img: "/static/img/assets/Francesco_Molinari.svg"
        },
        {
          name: "Jason Day",
          id: 13,
          country: "",
          rank: "12th",
          img: "/static/img/assets/Jason_Day.svg"
        },
        {
          name: "Jordan Spieth",
          id: 14,
          country: "",
          rank: "20th",
          img: "/static/img/assets/Jordan_Spieth.svg"
        },
        {
          name: "Rickie Fowler",
          id: 23,
          country: "",
          rank: "20th",
          img: "/static/img/assets/Rickie_Fowler.svg"
        },
        {
          name: "Tiger Woods",
          id: 1,
          country: "",
          rank: "4th",
          img: "/static/img/assets/tiger_woods.svg"
        },
        {
          name: "Justin Thomas",
          id: 2,
          country: "",
          rank: "32nd",
          img: "/static/img/assets/justin_thomas.svg"
        },
        {
          name: "Dustin Johnson",
          id: 3,
          country: "",
          rank: "2nd",
          img: "/static/img/assets/dustin_johnson.svg"
        },
        {
          name: "Tommy Fleetwood",
          id: 4,
          country: "",
          rank: "15th",
          img: "/static/img/assets/tommy_fleetwood.svg"
        },
        {
          name: "Rory McIlroy",
          id: 5,
          country: "",
          rank: "6th",
          img: "/static/img/assets/rory_mcilroy.svg"
        },
        {
          name: "Justin Rose",
          id: 6,
          country: "",
          rank: "3rd",
          img: "/static/img/assets/justin_rose.svg"
        },
        {
          name: "Brooks Koepka",
          id: 7,
          country: "",
          rank: "1st",
          img: "/static/img/assets/brooks_koepka.svg"
        },
        {
          name: "Jon Rahm",
          id: 8,
          country: "",
          rank: "13th",
          img: "/static/img/assets/jon_rahm.svg"
        },
        {
          name: "Patrick Reed",
          id: 17,
          country: "",
          rank: "8th",
          img: "/static/img/assets/Patrick_Reed.svg"
        },
        {
          name: "Matt Kuchar",
          id: 18,
          country: "",
          rank: "9th",
          img: "/static/img/assets/Matt_Kuchar.svg"
        },
        {
          name: "Xander Shauffele",
          id: 19,
          country: "",
          rank: "21st",
          img: "/static/img/assets/Xander_Schauffele.svg"
        },
        {
          name: "Sergio Garcia",
          id: 9,
          country: "",
          rank: "24th",
          img: "/static/img/assets/sergio_garcia.svg"
        },
        {
          name: "Bryson DeChambeau",
          id: 10,
          country: "",
          rank: "17th",
          img: "/static/img/assets/Bryson_DeChambeau.svg"
        },
        {
          name: "Bubba Watson",
          id: 11,
          country: "",
          rank: "29th",
          img: "/static/img/assets/Bubba_Watson.svg"
        },
        {
          name: "Kevin Kisner",
          id: 15,
          country: "",
          rank: "18th",
          img: "/static/img/assets/Kevin_Kisner.svg"
        },
        {
          name: "Paul Casey",
          id: 16,
          country: "",
          rank: "20th",
          img: "/static/img/assets/Paul_Casey.svg"
        },
        {
          name: "Adam Scott",
          id: 19,
          country: "",
          rank: "20th",
          img: "/static/img/assets/Adam_Scott.svg"
        },
        {
          name: "Gary Woodland",
          id: 20,
          country: "",
          rank: "20th",
          img: "/static/img/assets/Gary_Woodland.svg"
        },
        {
          name: "Henrik Stenson",
          id: 21,
          country: "",
          rank: "20th",
          img: "/static/img/assets/Henrik_Stenson.svg"
        },
        {
          name: "Hideki Matsuyama",
          id: 22,
          country: "",
          rank: "20th",
          img: "/static/img/assets/Hideki_Matsuyama.svg"
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
    },
    goToDetail: function(id) {
      this.$router.push({ name: "players-id", params: { id: id } });
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #191919;
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