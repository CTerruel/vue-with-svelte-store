<script>
    import { products } from "../store/products"

  export default {
      data() {
          return {
              products,
          }
      },

        methods: {
            addToCart(product) {
                this.$cart.update(products => {
                    let found = false
                    products.forEach(item => {
                        if (item.id === product.id) {
                            product.quantity += 1
                            found = true
                        }
                    })

                    return found ? [...products ] : [...products, product]
                })
            }
        },
  }
</script>

<template>
    <div class="product-list">
        <div v-for="product in products" v-bind:key="product.id">
            <div class="image" v-bind:style="{backgroundImage: `url(${product.image})`}"></div>
            <h4>{{product.name}}</h4>
            <p>₹{{product.price}}</p>
            <button v-on:click="addToCart(product)">Add to cart</button>
        </div>
    </div>
</template>

<style scoped>
    .product-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .image {
        height: 150px;
        width: 150px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>