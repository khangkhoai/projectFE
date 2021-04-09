<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>List Category</h3>
      </CCardHeader>
      <CCardBody >
        <CButton color="primary" class="m-2 btn_add">
          <nuxt-link to="/category/add" class="text-white d-block"> + Add</nuxt-link>
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
                <nuxt-link :to="`/category/${item.id}`">
                  <CIcon :content="$options.freeSet.cilPencil" />
                </nuxt-link>
              </CButton>
              <CButton color="danger" @click="deleteCategory(item.id)">
                <CIcon :content="$options.freeSet.cilTrash" />
              </CButton>
            </td>
        </template>
         <template #show_details="{ item, index }">
            <td class="py-2">
              <CButton
                color="primary"
                variant="outline"
                square
                size="sm"
                @click="toggleDetails(item, index),getDetails(item.id)"
              >
                {{ Boolean(item._toggled) ? "Hide" : "Show" }}
              </CButton>
            </td>
          </template>
           <template #details="{ item }">
            <CCollapse
              :show="Boolean(item._toggled)"
              :duration="collapseDuration"
            >
              <CCardBody>
                <h6>List Task</h6>
                <CDataTable 
                :items="listDetails"
                :fields="fields1"
                hover
                pagination
                striped
                >
                </CDataTable>
              </CCardBody>
            </CCollapse>
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
    { key: 'thumb', _style:'min-width:50px;' },
    { key: "method", label: "Method", _style: "min-width:100px;" },
    { key: "show_details", label: "Method", _style: "min-width:100px;" },
   
]
const fields1 = [
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
  
  freeSet,
   props: {
    listData: {
      type: Array,
      default: () => [],
    },
    listDetails: {
      type: Array,
      default: () => [],
    }
  },
  data () {
    return {
      fields : fields ,
      fields1 : fields1 ,
      keySearch : ''
      
    }
  },
  methods: {
    deleteCategory(id)
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
            axios.delete('http://127.0.0.1:8000/api/category/' + id, {
                headers: { Authorization: this.$auth.getToken("local") }
              })
              .then((res) => {
               
              });
            swal.fire("Deleted!", "Your file has been deleted.", "success");
            
          }
        });
    },
    toggleDetails(item, index) {
      this.$set(this.listData[index], "_toggled", !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => {
        this.collapseDuration = 0;
      });
    },
    getDetails(id) {
      axios.get("http://localhost:8000/api/category/get/" + id, {
            headers: {
              Authorization: `${$nuxt.$auth.getToken("local")}`,
            },
          }).then(res => {
        this.listDetails = res.data;
        console.log(res.data);
        // this.page = res.data;
      });
    }
  },
  
}
</script>

<style>
</style>