import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

let data = {
  products: mock,
  cart: []
}

export { data };
// let app = Firebase.initializeApp(config);

new Vue({
  name: 'MainCart',
  props: {
    cart: Array
  },
  router,
  data,
  render: h => h(App),

  // numInCart: this.cart
  
  // components: {App},
  // template: '<App :cart="cart" />'
}).$mount('#app')
