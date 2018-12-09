<template>
  <div id="shop">
    <b-jumbotron header="Welcome to Vue Shop">
      <p>You won't be able to purchase anything just yet but have a look around. Sign up for updates below!</p>

      <b-form-input></b-form-input>

      <div class="btn-group">
        <b-button>Sign Up</b-button>
      </div>
    </b-jumbotron>

    <b-container>
      <b-row>
        <b-col cols="12" md="8">
          <div class="products">
            <div v-for="product in products" v-bind:key="product.id">
              <b-card class="card">
                <h4>{{ product.title }}</h4>
                <b-button @click="addToCart(product)">Add to Cart</b-button>
              </b-card>
            </div>
          </div>
        </b-col>
        <b-col cols="6" md="4">
          <div class="cart">
            <h2>Shopping Cart</h2>

            <b-list-group v-for="item in cart" v-bind:key="item.id">
              <b-list-group-item button class="shop-item-btn">{{ item.title }}</b-list-group-item>
            </b-list-group>

            <div>Total: {{ total }}</div>

            <div>
              No items in your cart.
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "shop",
  data() {
    return {
      total: 0,
      products: [
        { title: "Product One", id: 1, price: 9.99 },
        { title: "Product Two", id: 2, price: 9.99 },
        { title: "Product Three", id: 3, price: 9.99 }
      ],
      cart: []
    };
  },
  methods: {
    addToCart: function(product) {
      this.total += product.price;
      this.cart.push(product);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  margin-top: -2.5rem;
}

.card {
  margin: 1rem;
  width: 28rem;
}

.btn-group {
  margin-top: 2rem;
}

.shop-item-btn {
  border: none;
}

a {
  color: #35495e;
}
</style>
