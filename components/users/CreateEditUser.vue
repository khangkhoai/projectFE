<template lang="">
  <div>
    <CCard>
      <CCardHeader >
        <h3>Add User</h3>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm="12">
            <CInput
              label="Name"
              placeholder="Enter your name"
              v-model="form.name"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput label="Email"   v-model="form.email">
            </CInput>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput label="Password" type="password"  v-model="form.password">
            </CInput>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput label="Comfirm-Password" type="password"  v-model="form.password_confirmation">
            </CInput>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
              <label>Role</label>
              <select id="id_project" v-model="form.role_id" class="form-control">
              <option
                v-for="(item, index) in dataRoles"
                :key="index"
                :value="item.id"
              >
              {{ item.name }}
              </option>
            </select>
          </CCol>
        </CRow>
        <br>
        <CRow>
          <ul v-if="errors.length > 0" class="alert alert-danger">
          <li v-for="error in errors" :key="error">{{ error }}</li>
         </ul>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CButton
        v-if="!this.$route.params.id"
         color="primary"  @click="addUser()"
        >
          Submit
        </CButton>
        <CButton v-else color="primary" class="btn-click" @click="updateProject(form.id)" >
          Update
        </CButton>

      </CCardFooter>
    </CCard>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert2";
export default {
  name: "CreateEditProject",
  data() {
    return {
      form: {
        id: "",
        name: "",
        password : "",
        password_confirmation:"",
        email: "",
        role_id: "",
      },
      errors: [],
      dataRoles : []
    };
  },
  mounted() {
    this.addUser();
    this.getDataRole();
    
  },
  methods: {
    addUser() {
      this.validate();
      if (this.errors.length > 0) {
        return this.errors;
      } else {
        axios.post('http://127.0.0.1:8000/api/auth/signup',this.form) 
          .then((res) => {
            this.$router.push("/user");
            swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Added",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    },
    
    /**
     * check validate
     */
    validate() {
      this.errors = [];
      if (this.form.name == "") {
        this.errors.push("Name không được trống");
      }
      if (this.form.password == "") {
        this.errors.push("Password không được trống");
      }
      if (this.form.password!==this.form.password_confirmation) {
        this.errors.push("Password không giống");
      }
      if (this.form.email == "") {
        this.errors.push("Email không được trống");
      }
    },
    getDataRole() {
      axios.get("http://127.0.0.1:8000/api/roles").then((res) => {
        this.dataRoles = res.data;
      });
    },
  }
}
</script>
<style lang="">
</style>
