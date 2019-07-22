import Vue from 'vue'
import App from './App.vue'
import * as Filters from './utils/filters';

Vue.config.productionTip = false;

Object.keys(Filters).forEach( (f) => {
  Vue.filter(f, Filters[f]);
});

export const eventBus = new Vue({
  data : {
    products : [
      {
        id : '1',
        img: 'https://www.natureetdecouvertes.com/fstrz/r/s/cache.natureetdecouvertes.com/Medias/Images/Articles/91289930/0050234110976_1.jpg?width=750&height=750&frz-v=208',
        title: 'TÉLESCOPE CGEM',
        description: 'La monture CGEM est capable de supporter la charge des plus grands tubes  optiques Celestron comme le 11 optiques Celestron comme le 11',
        price: 3500
      },
      {
        id : '2',
        img: 'https://www.maison-astronomie.com/2656-large_default/pendule-lunaire-galilea.jpg',
        title: 'PENDULE GALILE',
        description: 'La pendule Galiléa affiche en permanence la phase lunaire au moyen dune demi sphère tournant en 29,5 jours autour dun disque représentant la Lune.',
        price: 70
      },
      {
        id : '3',
        img: 'https://www.maison-astronomie.com/6526-large_default/mug-constellations.jpg',
        title: 'MUG STELAR',
        description: 'Versez de leau chaude dans votre tasse et vous verrez apparaître 11 constellations Versez de leau chaude dans votre tasse et vous verrez apparaître 11 constellations',
        price: 25
      },
      {
        id : '4',
        img: 'https://www.maison-astronomie.com/4877-large_default/microscope-binoculaire-bresser.jpg',
        title: 'MICROSCOPE',
        description: 'Microscope binoculaire de précision BRESSER grossissant 40 à 1000x, Microscope binoculaire de précision BRESSER grossissant 40 à 1000x',
        price: 750
      },
    ],
    cart : [],
    page : 'Admin'
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
    changePage(page){
      this.page = page;
      this.$emit('update:page', this.page); 
    },
    addProduct(product){
      this.products = [...this.products, {...product, id: this.products.length + 1 + ''}];
      this.$emit('uptade:products', this.products);
    } 
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
