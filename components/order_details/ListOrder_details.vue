<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>List Order Detail</h3>
      </CCardHeader>
      <CCardBody >
        <CButton color="primary" class="m-2 btn_add">
          <nuxt-link to="/order_detail/add" class="text-white d-block"> + Add</nuxt-link>
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
                <nuxt-link :to="`/order_detail/${item.id}`">
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
import { URL } from '~/constant/constant';
import swal from "sweetalert2";
const fields = [
    { key: 'id', label: 'ID',_style:'min-width:50px' },
    { key: 'order_id', _style:'min-width:50px;' },
    { key: 'product_id', label: 'ProductName',_style:'min-width:150px' },
    { key: 'amount', _style:'min-width:50px;' },
    { key: 'sub_tota', _style:'min-width:50px;' },
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
            axios.delete(URL+"order_detail/" + id)
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