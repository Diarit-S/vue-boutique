<template>
  <div class="w-25 product-container p-2 d-flex flex-column overflow-hidden">
    <div class="d-flex flex-row justify-content-center">
      <img :src="product.img" style="height : 150px;">
    </div>
    <div>
      {{product.title}}
    </div>
    <div>
      <p>{{product.description}}</p>
    </div>
    <div>
      <span>{{product.price | price}}</span>
      <button @click="addOne(product)" class="btn btn-primary btn-sm float-right">Commander</button>
    </div>
  </div>
</template>

<script>

import {mapMutations} from 'vuex';

  export default {
    props : {
      product : {
      }
    },
    methods : {
     ...mapMutations('cart', ['addOne'])
    }
  }

</script>

<style>
  p {
    font-size: 14px;
  }
</style>
