<template>
  <b-container>
    <b-row>
      <b-col cols="6" class="col">
        <div class="card">
          <div class="card-left-content">
            <b-img
              class="img"
              src="../../static/img/assets/flag.svg"
              fluid
              width="80"
              height="80"
              alt="flag image"
            ></b-img>
            <div class="card-title-content">
              <h5>British Open Draft</h5>
              <p>
                Payout:
                <strong>$145</strong>
              </p>
              <p class="entrants">6/6 Entrants</p>
            </div>
          </div>

          <div class="card-right-content">
            <p>
              Entry:
              <strong>$25</strong>
            </p>
            <router-link to="/players" class="button">Draft</router-link>
          </div>
        </div>

        <div class="card">
          <div class="card-left-content">
            <b-img
              class="img"
              src="../../static/img/assets/ball.svg"
              fluid
              width="80"
              height="80"
              alt="flag image"
            ></b-img>
            <div class="card-title-content">
              <h5>Championship Draft</h5>
              <p>
                Payout:
                <strong>$145</strong>
              </p>
              <p class="entrants">6/6 Entrants</p>
            </div>
          </div>

          <div class="card-right-content">
            <p>
              Entry:
              <strong>$10</strong>
            </p>
            <router-link to="/players" class="button">Draft</router-link>
          </div>
        </div>

        <div class="card">
          <div class="card-left-content">
            <b-img
              class="img"
              src="../../static/img/assets/bag.svg"
              fluid
              width="80"
              height="80"
              alt="flag image"
            ></b-img>
            <div class="card-title-content">
              <h5>US Open Draft</h5>
              <p>
                Payout:
                <strong>$1235</strong>
              </p>
              <p class="entrants">6/6 Entrants</p>
            </div>
          </div>

          <div class="card-right-content">
            <p>
              Entry:
              <strong>$125</strong>
            </p>
            <router-link to="/players" class="button">Draft</router-link>
          </div>
        </div>

        <div class="card">
          <div class="card-left-content">
            <b-img
              class="img"
              src="../../static/img/assets/flag.svg"
              fluid
              width="80"
              height="80"
              alt="flag image"
            ></b-img>
            <div class="card-title-content">
              <h5>British Open Draft</h5>
              <p>
                Payout:
                <strong>$145</strong>
              </p>
              <p class="entrants">6/6 Entrants</p>
            </div>
          </div>

          <div class="card-right-content">
            <p>
              Entry:
              <strong>$25</strong>
            </p>
            <router-link to="/players" class="button">Draft</router-link>
          </div>
        </div>

        <div class="card">
          <div class="card-left-content">
            <b-img
              class="img"
              src="../../static/img/assets/ball.svg"
              fluid
              width="80"
              height="80"
              alt="flag image"
            ></b-img>
            <div class="card-title-content">
              <h5>British Open Draft</h5>
              <p>
                Payout:
                <strong>$145</strong>
              </p>
              <p class="entrants">6/6 Entrants</p>
            </div>
          </div>

          <div class="card-right-content">
            <p>
              Entry:
              <strong>$25</strong>
            </p>
            <router-link to="/players" class="button">Draft</router-link>
          </div>
        </div>
      </b-col>

      <b-col cols="6" class="col-2">
        <aside>
          <!-- Chat component-->
          <div>
            <p>
              Talk with fellow friends and competetiors in
              draft lobby chat
            </p>
          </div>
          <b-form-textarea
            id="textarea"
            placeholder="Chat..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </aside>
      </b-col>
    </b-row>
  </b-container>
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
.card {
  margin: 1rem;
  width: 28rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #f1f1f1;
}
.card:hover {
  background-color: white;
}
b-card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.img {
  margin-left: -5rem;
}
.card-left-content {
  display: flex;
  flex-direction: row;
}
.card-right-content {
  margin-top: 1rem;
}
.payout {
  margin-left: 2rem;
}
.title-payout {
  display: flex;
  flex-direction: row;
}
.card-title-content {
  margin-left: 1rem;
  margin-top: 1rem;
}
.btn-secondary {
  width: 7rem;
}
.button {
  color: white;
  text-decoration: none;
  border: solid white 0.1rem;
  border-radius: 0.3rem;
  background-color: #629a92;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.2rem;
}

@media only screen and (max-width: 1024px) {
  .col-2 {
    display: none;
  }
}
</style>