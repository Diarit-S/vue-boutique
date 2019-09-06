import Vue from 'vue'
import App from './App.vue'
import * as Filters from './utils/filters';
import router from './router';
import axios from 'axios';

axios.defaults.baseURL= "https://vue-boutique.firebaseio.com/";
Vue.prototype.$http = axios; 

Vue.config.productionTip = false;

Object.keys(Filters).forEach( (f) => {
  Vue.filter(f, Filters[f]);
});

export const eventBus = new Vue({
  data : {
    products: [],
    cart : [],
  },
  methods : {
    addProductToCart(product) {
      if (!this.cart.map(i => i.id).includes(product.id)) {
        this.cart = [ ...this.cart, product ];
        this.$emit('update:cart', this.cart.slice());  
      }
    },
    removeItemFromCart(item) {
      this.cart = this.cart.slice().filter( i => i.id !== item.id);
      this.$emit('update:cart', this.cart.slice());   
    },
    addProduct(product){
      this.$http.post('products.json', product)
        .then(res => {
          this.products = [...this.products, {...product, id: this.products.length + 1 + ''}];
          this.$emit('uptade:products', this.products);
        })
    },
    addProducts(products){
      this.products = products;
      this.$emit('update:products', this.products);
    },
    initProducts() {
      this.$http.get('products.json')
        .then(res => {
          console.log(res);
          const data = res.data;
          this.addProducts(Object.keys(data).map(key=>data[key]));
          console.log(this.products);
          
        })
    }
  },
  created() {
    this.initProducts();
  }
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
