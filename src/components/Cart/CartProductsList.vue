<template>
  <div class="d-flex flex-column p-5">
    <h5 class="border-bottom pb-3">Mon Panier</h5>
    <cart-products-item v-for="item in cart" :key="item.id" :item="item"></cart-products-item>
    <template v-if="cart.length">
      <hr class="w-100">
      <span>Total : {{total}} €</span>
    </template>
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
    },
    computed :{
      total(){
        return this.cart.reduce((acc, value)=>{
          acc += value.price;
          return acc;
        },0)
      }
    }
  }

</script>

<style>
</style>
