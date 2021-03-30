<template lang="">
  <div>
    <list-user :dataUser="dataUser" :fields="fields"/>
    <b-pagination
      v-model="currentPage"
      :total-rows="page.total"
      :per-page="page.per_page"
      @page-click="getUser"
      prev-text="Prev"
      next-text="Next"
    ></b-pagination>
  </div>
</template>
<script>
import ListUser from "@/components/users/ListUser"
import axios from 'axios';
import {FIELDS} from '../../constant/constant'; 
export default {
  components:{
    ListUser
  },
  data(){
    return {
      dataUser: [],
      fields: FIELDS,
      page: {},
      currentPage: 1
    }
  },
  methods: {
    getUser(){
      axios.get('http://localhost:8000/api/all-user').then(res=>{
        this.dataUser = res.data.data;
        console.log(res);
        this.page = res.data

      })
    }
  },
  mounted() {
    this.getUser()
  },
}
</script>
<style lang="">

</style>
