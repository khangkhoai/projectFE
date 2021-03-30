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
            <CInput label="Comfirm-Password" type="password"  v-model="form.comfirm_password">
            </CInput>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput
              label="Role_Id"
              type="text"
              v-model="form.role_id"
            >
            </CInput>
          </CCol>
        </CRow>
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
        comfirm_password:"",
        email: "",
        role_id: "",
      },
      errors: [],
    };
  },
  mounted() {
    this.addUser();
    
  },
  methods: {
    addUser() {
      this.validate();
      if (this.errors.length > 0) {
        return this.errors;
      } else {
        axios.post('http://127.0.0.1:8000/api/user/',this.form) 
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
      if (this.form.password!==this.form.comfirm_password) {
        this.errors.push("Password không giống");
      }
      if (this.form.email == "") {
        this.errors.push("Email không được trống");
      }

    },
  }
}
</script>
<style lang="">
</style>
