<script>
  import CartLenght from "./components/CartLength.vue"
  import Products from "./components/Products.vue"
  import Cart from "./components/Cart.vue"
  import Address from "./components/Address.vue"
  import './assets/global.css'

  export default {
    components: {
      CartLenght,
      Products,
      Cart,
      Address
    }
  }
</script>

<template>
  <CartLenght />
  <Products />
  <Cart />
  <Address />
</template>