<template>
  <section>
    <div>
      <div class="logo">
        <logo/>
      </div>
      <h1 class="title">rotolinks</h1>
      <h2 class="subtitle">fantasy golf draft app</h2>
      <div class="links">
        <md-button to="/draft" class="md-raised">Draft Lobby</md-button>
        <md-button to="/draft" class="md-raised">Join</md-button>
      </div>
    </div>
  </section>

  <!-- <div class="head">
     <router-link to="/draft" class="button">Enter Draft Lobby</router-link>
      <b-img class="phone" src="/static/img/assets/golf-v3.gif" fluid />
    </div>
    <div class="body">
  </div>-->
</template>


<script>
import Logo from "../components/Logo.vue";

export default {
  name: "landing",
  components: {
    Logo
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a2a2a;
}
.title {
  font-weight: 300;
  font-size: 50px;
  color: #28ffb7;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 5rem;
  padding-top: 15px;
}
.logo {
  margin: auto;
  width: 50%;
}
.subtitle {
  font-weight: 300;
  font-size: 20px;
  color: #4a86fd;
  word-spacing: 5px;
}

.links {
  display: flex;
  flex-direction: row;
}

/* .button {
  color: #629a92;
  text-decoration: none;
  border: solid white .1rem;
  background-color: white;
  padding: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  border-radius: .3rem;
  position: absolute;
  left: 6rem;
  bottom: 18rem;
}

.phone {
  position: absolute;
  top: 10rem;
  height: 30rem;
  width: 30rem;
}

 .head {
  width: 100%;
  height: 800px;
  background: radial-gradient(
    200% 100% at top left,
    #629a92 12%,
    #02d2a0 67%,
    #fff 11%
  )
}

.body {
  height: 200px;
  width: 100%;
}

a {
  color: #464d55;
}

@media only screen and (max-width: 900px) {
  .phone {
    display: none;
  }
} */
</style>