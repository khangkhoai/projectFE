<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>List Role</h3>
      </CCardHeader>
      <CCardBody >
        <CButton color="primary" class="m-2 btn_add">
          <nuxt-link to="/roles/Create" class="text-white d-block"> + Add</nuxt-link>
        </CButton>
      <CDataTable :items="listRoles"
          :fields="fields"
          items-per-page-select
          :items-per-page="5"
          hover
          pagination
        >
        <template #show_details="{item}">
          <CButtonGroup>
            <CButton  color="danger" @click="deleteRole(item.id)">
                  Delete
            </CButton>
            <CButton color="success">
              <nuxt-link :to="`/roles/${item.id}`">Edit</nuxt-link>
            </CButton>
          </CButtonGroup>  
        </template> 
      </CDataTable>
      </CCardBody>
    </CCard>
  </div>  
</template>
<script>
import axios from 'axios'
const fields = [
    { key: 'id', label: 'ID',_style:'min-width:50px' },
    { key: 'name', label: 'RoleName',_style:'min-width:150px' },
    { key: 'created_at', _style:'min-width:50px;' },
    { key: 'updated_at', _style:'min-width:50px;' },
    { 
    key: 'show_details', 
    label: '', 
    _style: 'width:1%', 
    sorter: false, 
    filter: false
    }
]
export default {
  name: 'ListRole',
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
      console.log(id)
      axios.delete('http://127.0.0.1:8000/api/roles/' + id).then(response => {
        this.items.splice((index), 1)
        });
    },
    searchRole(value){
      this.keySearch=value;
      console.log(this.keySearch)
      axios.get("http://localhost:8000/api/roles/search?name="+this.keySearch).then(res => {
        this.dataUser = res.data;
       
      });
    }
  },
  
}
</script>

<style>
</style>