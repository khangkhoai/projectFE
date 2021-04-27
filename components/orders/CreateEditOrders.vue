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
              label="Customer ID"
              v-model="dataForm.customer_id"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
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
              label="Date"
              v-model="dataForm.date"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <label for="source">STATUS</label>
            <select id="status" v-model="dataForm.status" class="form-control">
              <option
                v-for="(item, index) in STATUS"
                :key="index"
                :value="index"
              >
                {{ item}}
              </option>
            </select>
           
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
        <CRow>
          <CCol sm="12">
            <CInput
              label="Total Price"
              v-model="dataForm.total_price"
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
import { URL } from "~/constant/constant";
import { DATA_STATUS } from "~/constant/constant";
export default {
  name: "new",
  components: {},
  data() {
    return {
      dataForm: {
        id: "",
        name: "",
        permission: [],
        status : []
        
      },
      STATUS: DATA_STATUS,
      dataPermission: []
    };
  },
  props: {
    title: ""
  },
  methods: {
    addProduct() {
      axios.post(URL + "order/", this.dataForm).then(res => {
        this.$router.push("/order");
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
      axios.get(URL + "order/" + id).then(res => {
        this.dataForm = res.data;
        console.log(this.dataForm);
      });
    },
    editProduct(id) {
      axios.put(URL + "order/" + id, this.dataForm).then(res => {
        this.$router.push("/order");
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
      this.getProductByID(this.$route.params.id);
    }
  }
};
</script>
<style scoped></style>
