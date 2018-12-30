<template>
  <div id="shop">
    <b-jumbotron header="Welcome to Vue Shop">

      <form class="search-bar" v-on:submit.prevent="onSubmit">
        <input type="text" v-model="search" class="search-input" placeholder="Search for products" required>
        <input type="submit" value="Search" class="btn">
      </form>

      
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
              <b-list-group-item class="shop-item-btn flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{ item.title }}</h5>
                  <small>{{ item.qty}}</small>
                </div>
                <small class="price">{{ item.price }}</small>
              </b-list-group-item>
            </b-list-group>

            <div v-if="cart.length">Total: {{ total }}</div>
            <div v-else>No items in your cart.</div>
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
      cart: [],
      search: ''
    };
  },
  methods: {
    addToCart: function(product) {
      this.total += product.price;
      var found = false;
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === product.id) {
          this.cart[i].qty++;
          found = true;
        }
      }
      if (!found) {
        this.cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          qty: 1
        });
      }
    },
    onSubmit: function() {
      console.log("search");
    }
    /*  filters: {
      currency: function(price) {
        return "$".concat(price.tofixed(2));
      } 
    } */
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

.price {
  float: left;
}

.search-input {
  color: blue;
}

a {
  color: #35495e;
}
</style>
