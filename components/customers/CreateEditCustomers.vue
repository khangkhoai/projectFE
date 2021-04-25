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
          @click="addCustomer()"
        >
          Submit
        </CButton>
        <CButton
          v-else
          color="primary"
          class="btn-click"
          @click="editCustomer(dataForm.id)"
        >
          Update
        </CButton>
      </CCardFooter>
    </CCard>
  </div>
</template>
<script>
import axios from "axios";
import { URL } from "~/constant/constant";
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
    addCustomer() {
      axios
        .post(URL + "customer/", this.dataForm, {
          headers: { Authorization: this.$auth.getToken("local") }
        })
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
     /**
     * get customer by id
     * @param Integer id
     */
    getCustomerByID(id) {
      axios
        .get(URL + "customer/" + id, {
          headers: { Authorization: this.$auth.getToken("local") }
        })
        .then(res => {
          this.dataForm = res.data;
          console.log(this.dataForm);
        });
    },
    editCustomer(id) {
      axios
        .put(URL + "customer/" + id, this.dataForm, {
          headers: { Authorization: this.$auth.getToken("local") }
        })
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
    }
  },
  mounted() {
    if (this.$route.params.id !== null) {
      this.getCustomerByID(this.$route.params.id);
    }
  }
};
</script>
<style scoped></style>
