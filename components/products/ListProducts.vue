<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>List Product</h3>
      </CCardHeader>
      <CCardBody >
        <CButton color="primary" class="m-2 btn_add">
          <nuxt-link to="/product/add" class="text-white d-block"> + Add</nuxt-link>
        </CButton>
      <CDataTable :items="listRoles"
          :fields="fields"
          tableFilter
          items-per-page-select
          :items-per-page="5"
          hover
          pagination
        >
        <template #thumb="{ item }">
            <td class="thumb">
              <img v-bind:src="'http://127.0.0.1:8000/' + item.thumb"  alt="" width="1%"
                height="1%"  class="c-sidebar-brand-full img-fluid w-75">
              <!-- <img
                width="1%"
                height="1%"
                v-bind:src="'/_nuxt' + item.thumb"
                class="c-sidebar-brand-full img-fluid w-75"
              /> -->
            </td>
        </template>
        <template #method="{ item }">
           <td class="py-2">
              <CButton color="success">
                <nuxt-link :to="`/product/${item.id}`">
                  <CIcon :content="$options.freeSet.cilPencil" />
                </nuxt-link>
              </CButton>
              <CButton color="danger" @click="deleteRole(item.id)">
                <CIcon :content="$options.freeSet.cilTrash" />
              </CButton>
            </td>
        </template> 
      </CDataTable>
      </CCardBody>
    </CCard>
  </div>  
</template>
<script>
import axios from 'axios'
import { freeSet } from "@coreui/icons";
import swal from "sweetalert2";
const fields = [
    { key: 'id', label: 'ID',_style:'min-width:50px' },
    { key: "thumb",_style:'width:100px;'},
    { key: 'name', label: 'ProductName',_style:'min-width:100px' },
    { key: 'desc', _style:'min-width:50px;' },
    { key: 'price', _style:'min-width:50px;' },
    { key: 'amount', _style:'min-width:50px;' },
    { key: 'discount', _style:'min-width:50px;' },
    { key: 'sale_price', _style:'min-width:50px;' },
    { key: 'category_id', _style:'min-width:50px;' },
    { key: "method", label: "Method", _style: "min-width:100px;" },
]
export default {
  name: 'ListRole',
  freeSet,
   props: {
    listRoles: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {
      fields : fields ,
      keySearch : ''
      
    }
  },
  methods: {
    deleteRole(id)
    {
      swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios.delete('http://127.0.0.1:8000/api/product/' + id, {
                headers: { Authorization: this.$auth.getToken("local") }
              })
              .then((res) => {
              });
            swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
    },
    searchRole(value){
      this.keySearch=value;
      console.log(this.keySearch)
      axios.get("http://localhost:8000/api/roles/search?name="+this.keySearch, {
                headers: { Authorization: this.$auth.getToken("local") }
              }).then(res => {
        this.dataUser = res.data;
       
      });
    }
  },
  
}
</script>

<style>
</style>