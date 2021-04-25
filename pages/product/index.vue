<template>
  <div>
    <list-products :listData="listData"></list-products>
  </div>  
</template>
<script>
import ListProducts from "@/components/products/ListProducts";

import axios from 'axios'
import { URL } from '~/constant/constant';
export default {
  components : {
    ListProducts,
  },
  data () {
    return {
      listData: [] ,
      search: ''
    }
  },
  methods: {
    listProduct(){
       axios.get(URL +"product/getProduct", {
                headers: { Authorization: this.$auth.getToken("local") }
              }).then(res =>{this.listData = res.data;  console.log(res.data);
      }).catch(err => {console.log(err)}) 
    }, 
    
  },
  mounted () {
    this.listProduct();   
  },
}
</script>
<style>
</style>