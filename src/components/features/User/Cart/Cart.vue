<template>
  <cart-products-list :cart="cart" class="p-2"></cart-products-list>
</template>

<script>
  import CartProductsList from './CartProductsList.vue';

  export default {
    components : {
      CartProductsList,
    },
    props: ['cart']

  }

</script>

<style>
</style>