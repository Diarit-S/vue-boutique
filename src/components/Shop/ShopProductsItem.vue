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
      <span>{{product.price}}</span>
      <button class="btn btn-primary btn-sm float-right">Commander</button>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        product : {
          img: 'https://www.natureetdecouvertes.com/fstrz/r/s/cache.natureetdecouvertes.com/Medias/Images/Articles/91289930/0050234110976_1.jpg?width=750&height=750&frz-v=208',
          title: 'TÉLESCOPE CGEM',
          description: 'La monture CGEM est capable de supporter la charge des plus grands tubes optiques Celestron comme le 11',
          price: '3500 €'
        }
      }
    }
  }

</script>

<style>
  p {
    font-size: 14px;
  }
</style>
