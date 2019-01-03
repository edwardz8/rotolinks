<template>
  <div id="landing">
    <div class="head">
     <router-link to="/players" class="button">View Players</router-link>
    </div>
    <div class="body">
    </div>
  </div>
</template>

<script>
export default {
  name: 'landing',
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button {
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

#landing {
  margin-top: -2.5rem;
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
</style>