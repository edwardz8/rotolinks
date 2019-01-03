<template>
  <div id="register">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form">
      <b-form-group
        id="exampleInputGroup1"
        label="Email address:"
        label-for="exampleInput1">
        <b-form-input
          id="exampleInput1"
          type="email"
          v-model="form.email"
          required
          placeholder="Enter email"></b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2" label="Your Name:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="text"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "register",
  data () {
    return {
      form: {
        email: '',
        name: '',
        checked: []
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style scoped>
.form {
  min-width: 18rem;
  max-width: 26rem;
  margin: auto;
  width: 50%;
  padding: 10px;
}

</style>