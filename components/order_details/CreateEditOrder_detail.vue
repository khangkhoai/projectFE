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
              v-model="dataForm.order_id"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput
              label="Name"
              v-model="dataForm.product_id"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
       <CRow>
          <CCol sm="12">
            <CInput
              label="Date"
              v-model="dataForm.amount"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput
              label="Status"
              v-model="dataForm.sub_total"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
        
      </CCardBody>
      <CCardFooter>
        <CButton
          v-if="!this.$route.params.id"
          color="primary"
          @click="addOrderDetail()"
        >
          Submit
        </CButton>
        <CButton
          v-else
          color="primary"
          class="btn-click"
          @click="editOrderDetail(dataForm.id)"
        >
          Update
        </CButton>
      </CCardFooter>
    </CCard>
  </div>
</template>
<script>
import axios from "axios";
import { URL } from '~/constant/constant';
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
    addOrderDetail() {
      axios
        .post(URL+"order_detail/", this.dataForm)
        .then(res => {
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
     getOrderDetailByID(id) {
      axios
        .get(URL+"order_detail/" + id )
        .then(res => {
          this.dataForm = res.data;
          console.log(this.dataForm);
        });
    },
    editOrderDetail(id) {
      axios
        .put(
          URL+"order_detail/" + id,
          this.dataForm
          
        )
        .then(res => {
          this.$router.push("/order_detail");
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
      this.getOrderDetailByID(this.$route.params.id);
    }
    
  }
};
</script>
<style scoped></style>
