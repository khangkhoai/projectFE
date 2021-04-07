<template>
  <div>
    <list-products :listRoles="listRoles"></list-products>
  </div>  
</template>
<script>
import ListProducts from "@/components/products/ListProducts";

import axios from 'axios'
export default {
  components : {
    ListProducts,
  },
  data () {
    return {
      listRoles:[],
      search: ''
    }
  },
  methods: {
    listData(){
       axios.get("http://127.0.0.1:8000/api/product/", {
                headers: { Authorization: this.$auth.getToken("local") }
              }).then(res =>{this.listRoles = res.data;  console.log(res.data);
      }).catch(err => {console.log(err)}) 
    }, 
    
  },
  mounted () {
    this.listData();   
  },
}
</script>
<style>
</style>