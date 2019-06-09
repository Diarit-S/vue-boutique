<template>
  <shop-products-list :products="products" class="p-2"></shop-products-list>
</template>

<script>
  import ShopProductsList from './ShopProductsList.vue';
  import {eventBus} from '../../../../main';

  export default {
    name : 'Shop',
    components : {
      ShopProductsList,
    },
    data(){
      return {
        products : []
      }
    },
    created(){
      this.products = eventBus.products;
      eventBus.$on('update:products', (products)=>{
        this.products = products;
      })
    }
  }

</script>

<style>
</style>