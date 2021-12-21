import { createApp } from 'vue'
import App from './App.vue'
import { $cart, $address } from "./store/store";

const app = createApp(App)

app.config.globalProperties.$cart = $cart
app.config.globalProperties.$address = $address

app.mount('#app')
