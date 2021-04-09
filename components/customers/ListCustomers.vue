<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>List Customer</h3>
      </CCardHeader>
      <CCardBody >
        <CButton color="primary" class="m-2 btn_add">
          <nuxt-link to="/customer/add" class="text-white d-block"> + Add</nuxt-link>
        </CButton>
      <CDataTable :items="listData"
          :fields="fields"
          items-per-page-select
          :items-per-page="5"
          hover
          pagination
        >
        <template #method="{ item }">
           <td class="py-2">
              <CButton color="success">
                <nuxt-link :to="`/customer/${item.id}`">
                  <CIcon :content="$options.freeSet.cilPencil" />
                </nuxt-link>
              </CButton>
              <CButton color="danger" @click="deleteCustomer(item.id)">
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
    { key: 'name', label: 'ProductName',_style:'min-width:150px' },
    { key: 'email', _style:'min-width:50px;' },
    { key: 'password', _style:'min-width:50px;' },
    { key: 'phone', _style:'min-width:50px;' },
    { key: 'address', _style:'min-width:50px;' },
    { key: "method", label: "Method", _style: "min-width:100px;" },
]
export default {
  
  freeSet,
   props: {
    listData: {
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
    deleteCustomer(id)
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
            axios.delete('http://127.0.0.1:8000/api/customer/' + id)
              .then((res) => {
               
              });
            swal.fire("Deleted!", "Your file has been deleted.", "success");
            
          }
        });
    },
  },
  
}
</script>

<style>
</style>