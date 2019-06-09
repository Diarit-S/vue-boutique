<template>
  <div class="d-flex flex-row flex-wrap">
    <shop-products-item v-for="product in products" :key="product.id" :product="product"></shop-products-item>
  </div>
</template>

<script>
  import ShopProductsItem from './ShopProductsItem.vue'


  export default {
    components : {
      ShopProductsItem,
    },
    props : {
      products : {

      }
    }
  }


</script>

<style>
</style>
