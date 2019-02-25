<template>
  <div id="players">
    <b-container>
      <b-row>
        <b-col cols="12" md="8">
          <div id="players">
            <div v-for="player in players" v-bind:key="player.id">
              <b-card class="card">
                <div class="card-info">
                  <i class="bbclub-atl bb-2x"></i>
                  <div>
                    <h4>{{ player.name }}</h4>
                    <p>{{ player.team }}</p>
                  </div>
                  <div>
                    <p>{{ player.pos }}</p>
                  </div>
                </div>
                <b-button @click="addToQueue(player)">Add to Watch</b-button>
              </b-card>
            </div>
          </div>
        </b-col>
        <b-col cols="6" md="4" id="queue-col">
          <div id="queue">
            <h2>Favorite Plays of Day</h2>

            <b-list-group v-for="item in queue" v-bind:key="item.id">
              <b-list-group-item class="shop-item-btn flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <div class="chip">
                    <i class="bbclub-atl bb"></i>
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
          name: "Freddie Freeman",
          id: 1,
          pos: "1B",
          bt: "L",
          team: "Atlanta Braves"
        },
        {
          name: "Ronald Acuna Jr.",
          id: 2,
          pos: "OF",
          bt: "R",
          team: "Atlanta Braves"
        },
        {
          name: "Ozzie Albies",
          id: 3,
          pos: "2B",
          bt: "S",
          team: "Atlanta Braves"
        },
        {
          name: "Josh Donaldson",
          id: 4,
          pos: "3B",
          bt: "R",
          team: "Atlanta Braves"
        },
        {
          name: "Charlie Culberson",
          id: 5,
          pos: "SS/2B",
          bt: "S",
          team: "Atlanta Braves"
        },
        {
          name: "Ender Inciarte",
          id: 6,
          pos: "OF",
          bt: "L",
          team: "Atlanta Braves"
        },
        {
          name: "Mike Foltynewicz",
          id: 7,
          pos: "SP",
          bt: "R",
          team: "Atlanta Braves"
        },
        {
          name: "Sean Newcomb",
          id: 8,
          pos: "SP",
          bt: "L",
          team: "Atlanta Braves"
        },
        {
          name: "Julio Teheran",
          id: 9,
          pos: "SP",
          bt: "R",
          team: "Atlanta Braves"
        },
        {
          name: "Johan Camargo",
          id: 10,
          pos: "3B",
          bt: "S",
          team: "Atlanta Braves"
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
  width: 23rem;
  background-color: #f1f1f1;
}
.card:hover {
  background-color: white;
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