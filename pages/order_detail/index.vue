<template>
  <div>
    <ListCategories :listData="listData"></ListCategories>
  </div>  
</template>
<script>
import ListCategories from "@/components/order_details/ListOrder_details";

import axios from 'axios'
export default {
  components : {
    ListCategories,
  },
  data () {
    return {
      listData:[],
      search: ''
    }
  },
  methods: {
    listCategory(){
       axios.get("http://127.0.0.1:8000/api/order_detail/", {
                headers: { Authorization: this.$auth.getToken("local") }
              }).then(res =>{this.listData = res.data;  console.log(res.data);
      }).catch(err => {console.log(err)}) 
    }, 
    
  },
  mounted () {
    this.listCategory();   
  },
}
</script>
<style>
</style>