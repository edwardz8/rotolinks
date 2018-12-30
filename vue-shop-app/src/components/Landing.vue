<template>
  <div id="landing">
    <div class="head"></div>
    <div class="body"></div>
  </div>
</template>

<script>
export default {
  name: 'landing',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
  color: #35495e;
}
</style>