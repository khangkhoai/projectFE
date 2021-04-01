<template lang="">
  <div>
    <CCard>
      <CCardHeader>
        <h3>List User</h3>
      </CCardHeader>
      <CCardBody>
        <search  @sendKeyword="getKeyword"/>
        <list-user :dataUser="dataUser" :fields="fields" />
        <!-- <b-pagination
        v-show="page.last_page>1"
          v-model="currentPage"
          :total-rows="page.total"
          :per-page="page.per_page"
          @page-click="getUser"
          prev-text="Prev"
          next-text="Next"
        ></b-pagination> -->
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
import ListUser from "@/components/users/ListUser";
import Search from "../../components/common/Search";
import axios from "axios";
import { FIELDS } from "../../constant/constant";
export default {
  components: {
    ListUser,
    Search
  },
  data() {
    return {
      dataUser: [],
      fields: FIELDS,
      page: {},
      currentPage: 1,
      search: ''
    };
  },
  methods: {
    getUser(e,page) {
      axios.get("http://localhost:8000/api/all-user").then(res => {
        this.dataUser = res.data;
        // this.page = res.data;
      });
    },
    getKeyword(value){
      this.search = value;
      axios.get("http://localhost:8000/api/search?username="+this.search).then(res => {
        this.dataUser = res.data;
        // console.log(res.data);
        // this.page = res.data;
      });
    }
  },
  mounted() {
    this.getUser();
  }
};
</script>
<style lang=""></style>
