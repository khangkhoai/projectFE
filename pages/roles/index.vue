<template>
  <div>
    <list-role :listRoles="listRoles"></list-role>
  </div>  
</template>
<script>
import ListRole from "@/components/roles/ListRole.vue";

import axios from 'axios'
export default {
  components : {
    ListRole
  },
  data () {
    return {
      listRoles:[],
    }
  },
  methods: {
    listData(){
      axios({method: 'GET',url: 'http://127.0.0.1:8000/api/roles/',data: null}).then(res =>{this.listRoles = res.data; 
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