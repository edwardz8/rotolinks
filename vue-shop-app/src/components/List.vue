<template>
  <div id="list">
    <b-container class="bv-example-row">
      <ul v-if="players">
        <li>
          <p>{{players.name}}</p>
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
  axios.get(`https://mlb18.theshownation.com/api/v1/listings.json`)
  .then(response => {
    this.players = response.data
  })
}
};

</script>

<style scoped>

</style>