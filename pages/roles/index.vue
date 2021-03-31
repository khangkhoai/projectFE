<template>
  <div>
    <CCard>
      <CCardBody >
        <CButton color="info">
          <nuxt-link :to="`/roles/Create`">Add</nuxt-link>
        </CButton><br>
        <search-form @getKeySearch=searchRole /><br>
      <CDataTable :items="listRoles"
                  :fields="fields"
                  hover
                  sorter
        pagination>
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
import ListRole from "@/components/roles/ListRole.vue";
import SearchForm from "@/components/roles/SearchForm.vue";
import axios from 'axios'
export default {
  name: 'ListRole',
  components : {
    ListRole,
    SearchForm
  },
  data () {
    return {
      listRoles:[],
      fields,
      details: [],
      collapseDuration: 0,
      page : {},
      currentPage : 1,
      
    }
  },
  methods: {
    listData(){
      axios({method: 'GET',url: 'http://127.0.0.1:8000/api/roles/',data: null}).then(res =>{this.listRoles = res.data; 
      }).catch(err => {console.log(err)}) 
    }, 
    deleteRole(id)
    {
      console.log(id)
      axios.delete('http://127.0.0.1:8000/api/roles/' + id).then(response => {
        this.items.splice((index), 1)
        });
    },
    searchRole(keySearch){
      axios({method: 'GET',url: 'http://127.0.0.1:8000/api/roles/'+ keySearch}).then(res =>{this.listRoles = res.data; 
      }).catch(err => {console.log(err)}) 
    }
  },
  mounted () {
    this.listData();
    
   
  },
}
</script>

<style>

</style>
