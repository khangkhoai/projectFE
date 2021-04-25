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
              v-model="dataProduct.name"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput
              label="Description"
              v-model="dataProduct.desc"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="6">
            <CInput
              label="Price"
              v-model="dataProduct.price"
              placeholder="Enter your name"
            />
          </CCol>
          <CCol sm="6">
            <CInput
              label="Amount"
              v-model="dataProduct.amount"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="6">
            <CInput
              label="Discount"
              v-model="dataProduct.discount"
              placeholder="Enter your name"
            />
          </CCol>
          <CCol sm="6">
            <CInput
              label="Sale Price"
              v-model="dataProduct.sale_price"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="6">
            <label for="source">Category</label>
            <select
              id="category_id"
              v-model="dataProduct.category_id"
              class="form-control"
            >
              <option
                v-for="(item, index) in dataCatagory"
                :key="index"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </select>
          </CCol>
          <CCol sm="6">
            <CInputFile
              label="Thumb"
              v-model="dataProduct.thumb"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CButton
          v-if="!this.$route.params.id"
          color="primary"
          @click="addProduct(dataProduct)"
        >
          Submit
        </CButton>
        <CButton
          v-else
          color="primary"
          class="btn-click"
          @click="editProduct(dataProduct)"
        >
          Update
        </CButton>
      </CCardFooter>
    </CCard>
  </div>
</template>
<script>
import swal from "sweetalert2";
import { URL } from "../../constant/constant";
import axios from "axios";
export default {
  name: "new",
  components: {},
  data() {
    return {
      dataProduct: {
        id: "",
        name: "",
        thumb: "",
        price: "",
        discount: "",
        category_id: "",
        desc: "",
        amount: ""
      },

      dataCatagory: []
    };
  },
  props: {
    title: ""
  },
  methods: {
    async addProduct(dataProduct) {
      const data = new FormData();
      data.append("category_id", dataProduct.category_id);
      data.append("name", dataProduct.name);
      data.append("desc", dataProduct.desc);
      data.append("price", dataProduct.price);
      data.append("discount", dataProduct.discount);
      data.append("amount", dataProduct.amount);
      data.append("thumb", dataProduct.thumb.target.files[0]);
      console.log(data.get("thumb"));
      const res = await axios.post(URL + "product/", data, {
        headers: {
          Authorization: this.$auth.getToken("local"),
          "Content-type": "multipart/form-data"
        }
      });
      if (res) {
        this.$router.push("/product");
      }
    },
    getFile(files) {
      this.dataProduct.thumb = files;
    },
    getProductByID(id) {
      axios
        .get(URL + "product/" + id, {
          headers: { Authorization: this.$auth.getToken("local") }
        })
        .then(res => {
          this.dataProduct = res.data;
          console.log(this.dataProduct);
        });
    },
    editProduct(dataProduct) {
      let data = new FormData();
      data.append("category_id", dataProduct.category_id);
      data.append("name", dataProduct.name);
      data.append("desc", dataProduct.desc);
      data.append("price", dataProduct.price);
      data.append("discount", dataProduct.discount);
      data.append("amount", dataProduct.amount);
      data.append("thumb", dataProduct.thumb);
      console.log(dataProduct.name);
      axios
        .post(URL + "product/" + dataProduct.id, data, {
          headers: {
            Authorization: this.$auth.getToken("local"),
            "Content-type": "multipart/form-data"
          }
        })
        .then(res => {
          this.$router.push("/product");
          swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 1500
          });
        });
    },
    getData() {
      axios
        .get(URL + "category", {
          headers: { Authorization: this.$auth.getToken("local") }
        })
        .then(res => {
          this.dataCatagory = res.data;
        });
    }
  },
  mounted() {
    if (this.$route.params.id !== null) {
      this.getProductByID(this.$route.params.id);
    }
    this.getData();
  }
};
</script>
<style scoped></style>
