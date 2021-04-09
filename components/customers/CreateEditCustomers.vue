<template>
  <div>
    <CCard>
      <CCardHeader>
        {{ title }}
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm="12">
            <CInput
              label="Name"
              v-model="dataForm.name"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
       <CRow>
          <CCol sm="12">
            <CInput
              label="Email"
              v-model="dataForm.email"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput
              label="Password"
              v-model="dataForm.password"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput
              label="Phone"
              v-model="dataForm.phone"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput
              label="Address"
              v-model="dataForm.address"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CButton
          v-if="!this.$route.params.id"
          color="primary"
          @click="addProduct()"
        >
          Submit
        </CButton>
        <CButton
          v-else
          color="primary"
          class="btn-click"
          @click="editProduct(dataForm.id)"
        >
          Update
        </CButton>
      </CCardFooter>
    </CCard>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "new",
  components: {},
  data() {
    return {
      dataForm: {
        id: "",
        name: "",
        permission: []
      },
      dataPermission: []
    };
  },
  props: {
    title: ""
  },
  methods: {
    addProduct() {
      axios
        .post("http://127.0.0.1:8000/api/customer/", this.dataForm)
        .then(res => {
          this.$router.push("/customer");
          swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 1500
          });
        });
    },
     getProductByID(id) {
      axios
        .get("http://127.0.0.1:8000/api/customer/" + id )
        .then(res => {
          this.dataForm = res.data;
          console.log(this.dataForm);
        });
    },
    editProduct(id) {
      axios
        .put(
          "http://127.0.0.1:8000/api/customer/" + id,
          this.dataForm
          
        )
        .then(res => {
          this.$router.push("/customer");
          swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 1500
          });
        });
    },
    
  },
  mounted() {
    if (this.$route.params.id !== null) {
      this.getProductByID(this.$route.params.id);
    }
    
  }
};
</script>
<style scoped></style>
