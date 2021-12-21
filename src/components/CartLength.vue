<script>
export default {
  data() {
    return {
      cart: this.$cart.initialValue,
      unsub: () => {},
    };
  },

  computed: {
    totalCart() {
      return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
  },

  mounted() {
    this.unsub = this.$cart.subscribe((value) => (this.cart = value));
  },

  unmounted() {
    this.unsub();
  },
}
</script>

<template>
  <p>
    There are <strong>{{ cart.length }}</strong> types of items in your cart
  </p>
  <p>
    Total items:
    <strong> {{ totalCart }}</strong>
  </p>
</template>