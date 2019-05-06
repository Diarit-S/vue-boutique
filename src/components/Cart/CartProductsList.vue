<template>
  <div class="d-flex flex-column p-5">
    <h5 class="border-bottom pb-3">Mon Panier</h5>
    <cart-products-item v-for="item in cart" :key="item.id" :item="item"></cart-products-item>
    <hr class="w-100">
  </div>
</template>

<script>
  import CartProductsItem from './CartProductsItem.vue'


  export default {
    components : {
      CartProductsItem,
    },
    props : {
      cart : {

      }
    }
  }

</script>

<style>
</style>
