<template>
  <div>
    <CCardBody>
      <CRow>
        <CCol sm="12">
        <CInput label="Name" v-model="dataRole.name" placeholder="Enter your name"/>       
        </CCol>
      </CRow>
    </CCardBody>
    <button type="submit" class="btn btn-primary sm-2" v-show="showAdd" @click="addRole">Add</button>
    <button type="submit" class="btn btn-primary sm-2" v-show="showEdit" @click="editRole(dataRole.id)">Edit</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'new',
  components: {
  },
  data() {
    return {
        ShowAdd: false,
        showEdit: true,
       
       
        dataRole : {
            'id' : '',
            'name' : ''
        }
    }
  },
  methods : {
    addRole(){
      axios.post('http://127.0.0.1:8000/api/roles/',this.dataRole)
      
      
    },
    getRoleByID(id) {
        axios
            .get("http://127.0.0.1:8000/api/roles/" + id)
            .then((res) => (this.dataRole = res.data));
        
    },
    editRole(id){
        axios.put('http://127.0.0.1:8000/api/roles/' + id,this.dataRole)
        console.log(this.dataRole)
    },
    
  },
  mounted() {
    if (this.$route.params.id != null) {
      this.getRoleByID(this.$route.params.id);
      this.showEdit = !this.showEdit;
      this.ShowAdd = !this.ShowAdd;
    }
  },
}
</script>
<style scoped>

</style>