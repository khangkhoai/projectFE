<template>
  <div>
    <search  @sendKeyword="getKeyword"/>
    <list-role :listRoles="listRoles"></list-role>
  </div>  
</template>
<script>
import ListRole from "@/components/roles/ListRole.vue";
import Search from "@/components/common/Search"
import axios from 'axios'
export default {
  components : {
    ListRole,
    Search
  },
  data () {
    return {
      listRoles:[],
      search: ''
    }
  },
  methods: {
    listData(){
       axios.get("http://localhost:8000/api/roles/", {
                headers: { Authorization: this.$auth.getToken("local") }
              }).then(res =>{this.listRoles = res.data;  console.log(res.data);
      }).catch(err => {console.log(err)}) 
    }, 
    getKeyword(value){
      this.search = value;
      axios.get("http://localhost:8000/api/roles?name="+this.search,this.dataRole, {
                headers: { Authorization: this.$auth.getToken("local") }
              }).then(res => {
        this.listRoles = res.data;
        console.log(res.data);
        // this.page = res.data;
      });
    }
  },
  mounted () {
    this.listData();   
  },
}
</script>
<style>
</style>