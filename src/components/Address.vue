<script>
export default {
  data() {
    return {
      cart: this.$cart.initialValue,
      address: this.$address.initialValue,
      unsub: () => {},
    };
  },

  methods: {
    checkout() {
      alert(JSON.stringify(this.cart));
      alert(JSON.stringify(this.address));
    },
  },

  mounted() {
    this.unsub = this.$cart.subscribe((value) => (this.cart = value));
  },

  unmounted() {
      this.unsub()
  }
};
</script>
    
<template>
  <div class="shipping-address">
    <div>
      <p>Name</p>
      <input v-model="address.name" />

      <p>Email</p>
      <input v-model="address.email" />

      <p>Phone</p>
      <input v-model="address.phone" />

      <p>Address</p>
      <textarea v-model="address.street" cols="24" rows="6"></textarea>

      <p>City</p>
      <input v-model="address.city" />

      <p>State</p>
      <input v-model="address.state" />

      <p>PIN</p>
      <input v-model="address.pin" />

      <div>
        <button v-on:click="checkout">Checkout</button>
      </div>
    </div>

    <div class="current-address">
      <p>{{ address.name }}</p>
      <p>{{ address.email }}</p>
      <p>{{ address.phone }}</p>
      <p>{{ address.street }}</p>
      <p>{{ address.city }}</p>
      <p>{{ address.state }}</p>
      <p>{{ address.pin }}</p>
    </div>
  </div>
</template>

<style scoped>
.shipping-address {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
}
.current-address {
  padding: 2em;
  border: 2px dashed green;
}
</style>