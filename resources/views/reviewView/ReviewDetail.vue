<template>
  <div>
    <h1>id {{$route.params.id}} 입니다 </h1>
  </div>    
</template>

<script>
import axios from 'axios'

export default {
    data(){
      return {
        product :''
      }
    },
    created : function(){
        axios.get('./static/products.json')
        .then((response) => {
            this.products = response.data.products.filter(
              data => data.id == this.$route.params.id)[0]
            this.product.image = '/' + this.product.image;
        })
        .catch((err)=>{
            console.log(err);
        });
    } 
  }
</script>
