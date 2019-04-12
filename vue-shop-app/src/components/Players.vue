<template>
  <div id="players">
    <b-container>
      <b-row>
        <b-col cols="12" md="8">
          <div id="players">
            <div v-for="player in players" v-bind:key="player.id">
              <b-card class="card">
                <div class="card-info">
                  <b-img class="player-profile" :src="player.img" fluid alt="golf" />
                  <div class="main-card-content">
                    <h4>{{ player.name }}</h4>
                    <p>WGR: {{ player.rank }}</p>
                  </div>
                  <div>
                    <i class="fas fa-redo"></i>
                  </div>
                </div>
                <b-button @click="addToQueue(player)" class="add">Add to Play</b-button>
              </b-card>
            </div>
          </div>
        </b-col>
        <b-col cols="6" md="4" id="queue-col">
          <div id="queue">
            <h2>Draft Queue</h2>

            <b-list-group v-for="item in queue" v-bind:key="item.id">
              <b-list-group-item class="shop-item-btn flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <div class="chip">
                     <b-img class="player-profile-added" :src="item.img" fluid alt="golf" />
                    <span class="chip-name">{{ item.name }}</span>
                    <span class="close-btn" @click="removeItem(item)">x</span>
                  </div>
                </div>
              </b-list-group-item>
            </b-list-group>

            <div v-if="queue.length"><b-button>Save</b-button></div>
            <div v-else>No Favorite Plays</div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "landing",
  data() {
    return {
      total: 0,
      players: [
        {
          name: "Brooks Koepka",
          id: 1,
          country: "",
          rank: "4",
          img: '/static/img/assets/brooks_koepka.svg'
        },
        {
          name: "Tiger Woods",
          id: 2,
          country: "",
          rank: "4",
          img: '/static/img/assets/tiger_woods.svg'
        },
        {
          name: "Justin Thomas",
          id: 3,
          country: "",
          rank: "4",
          img: '/static/img/assets/justin_thomas.svg'
        },
        {
          name: "Tommy Fleetwood",
          id: 4,
          country: "",
          rank: "4",
          img: '/static/img/assets/tommy_fleetwood.svg'
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
.add {
  margin-left: 7rem;
}

.card {
  margin: 1rem;
  width: 26rem;
  background-color: #f1f1f1;
}
.card:hover {
  background-color: white;
}

.player-profile {
  height: 8rem;
  width: 8rem;
}

.player-profile-added {
  height: 3rem;
  width: 3rem;
}

.main-card-content {
  margin-top: 2rem;
}

.card-info {
  display: flex;
  justify-content: space-around;
}

.chip-name {
  margin-left: 1rem;
}

#queue {
  position: sticky;
  right: 5rem;
  top: 5rem;
}

.shop-item-btn {
  border: none;
}

.chip {
  display: inline-block;
  padding: 0 10px;
  height: 50px;
  width: 250px;
  min-width: 210px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #f1f1f1;
}

.chip i {
  height: 50px;
  width: 250px;
  margin-left: -40px;
  border-radius: 50%;
}

.bb {
  padding-left: 1rem;
}

.close-btn {
  color: #888;
  font-weight: bold;
  float: right;
  font-size: 20px;
  cursor: pointer;
  border: none;
  padding-right: 1rem;
}

.closebtn:hover {
  color: #000;
}
</style>