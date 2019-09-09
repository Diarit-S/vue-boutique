<template>
  <shop-products-list :products="products" class="p-2"></shop-products-list>
</template>

<script>
  import ShopProductsList from './ShopProductsList.vue';
  import {eventBus} from '../../../../main';

  export default {
    name : 'Shop',
    props: ['products'],
    components : {
      ShopProductsList,
    },
  }

</script>

<style>
</style>