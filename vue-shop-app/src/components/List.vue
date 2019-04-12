<template>
  <div id="list">
    <b-container class="bv-example-row">
      <ul>
        <li>
          <p></p>
        </li>
      </ul>
       
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "list",
  data() {
    return {
      players: []
    }
  },
created() {
  axios.get(``)
  .then(response => {
    this.players = response.data
  })
}
};

</script>

<style scoped>

</style>