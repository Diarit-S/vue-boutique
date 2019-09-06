<template>
  <form @submit="trySubmit" class="d-flex flex-column ">
    <h4>Ajouter un produit :</h4>
    <hr class="w-100">
    <div class="form-group">
      <label>Image</label>
      <input v-model="form.img" class="form-control" type="text">
    </div>
    <div class="form-group">
      <label>Titre</label>
      <input v-model="form.title" class="form-control" type="text">
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea v-model="form.description" class="form-control"></textarea>
    </div>
    <div class="form-group">
      <label>Prix</label>
      <input v-model.number="form.price" class="form-control" type="number">
    </div>
    <ul v-if="errors.length">
      <li class="text-danger" v-for="error in errors" :key="error">
        {{error}}
      </li>
    </ul>
    <button type="submit" class="btn btn-primary">Envoyer</button>

  </form>
</template>

<script>
import { eventBus } from '../../../main';

  export default {
    data(){
      return {
        form : {
          img : '',
          title : '',
          description : '',
          price : ''
        },
        errors : []
      }
    },
    methods : {
      trySubmit(e){
        e.preventDefault();
        if (this.formIsValid()) {
          eventBus.addProduct({...this.form});
          this.resetForm(); 
          this.$router.push('/shop');
        }
      },
      formIsValid(){
        this.errors = [];
        if (!this.form.img) {
          this.errors.push('Image required');
        };  
        if (!this.form.title) {
          this.errors.push('Title required');
        };  
        if (!this.form.description) {
          this.errors.push('Description required');
        };  
        if (!this.form.price) {
          this.errors.push('Price required');
        };  
        return this.errors.length ? false : true;
      },
      resetForm(){
        this.form = {
          img : '',
          title : '',
          description : '',
          price : ''
        }
      }
    }
  }

</script>

<style>
</style>
