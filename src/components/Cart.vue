<script>
    export default {
        data() {
            return {
                cart: this.$cart.initialValue,
                unsub: () => {}
            }
        },

        methods: {
            plusItem(product) {
                this.$cart.update(products => {
                    products.forEach(item => {
                        if (item.id === product.id) {
                            product.quantity += 1
                        }
                    })
                    return [...products]
                })
            },

            minusItem(product) {
                this.$cart.update(products => {
                    let last = false
                    products.forEach(item => {
                        if (item.id === product.id) {
                            if (product.quantity > 1) {
                                product.quantity -= 1
                            } else {
                                last = true
                            }
                        }
                    })

                    return last 
                        ? products.filter(item => item.id !== product.id)
                        : [...products]
                })
            }
        },

        computed: {
            totalCart() {
                return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
            }
        },

        mounted() {
            this.unsub = this.$cart.subscribe(value => this.cart = value)
        },

        unmounted() {
            this.unsub()
        }
    }
</script>

<template>
    <div class="cart-list">
            <div class="cart-item" v-for="item in cart" v-bind:key="item.id">
                <img width="50" v-bind:src="item.image" v-bind:alt="item.name"/>
                <div>{{item.quantity}}
                    <button v-on:click="plusItem(item)">+</button>
                    <button v-on:click="minusItem(item)">-</button>
                </div>
                <p>₹{{item.price * item.quantity}}</p>
            </div>
        <div class="total">
            <h4>Total: ₹ {{totalCart}}</h4>
        </div>
    </div>
</template>

<style scoped>
    .cart-item {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .total {
        text-align: right;
    }

    .cart-list {
        border: 2px solid;
        padding: 10px;
    }
</style>