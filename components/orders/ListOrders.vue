<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>List Customer</h3>
      </CCardHeader>
      <CCardBody>
        <CButton color="primary" class="m-2 btn_add">
          <nuxt-link to="/order/add" class="text-white d-block">
            + Add</nuxt-link
          >
        </CButton>
        <CDataTable
          :items="listData"
          :fields="fields"
          items-per-page-select
          :items-per-page="5"
          hover
          pagination
        >
          <template #status="{ item }">
            <td>{{ getStatus(item.status) }}</td>
          </template>
          <template #method="{ item }">
            <td class="py-2">
              <CButton color="success">
                <nuxt-link :to="`/order/${item.id}`">
                  <CIcon :content="$options.freeSet.cilPencil" />
                </nuxt-link>
              </CButton>
              <CButton color="danger" @click="deleteCustomer(item.id)">
                <CIcon :content="$options.freeSet.cilTrash" />
              </CButton>
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
import axios from "axios";
import { freeSet } from "@coreui/icons";
import swal from "sweetalert2";
import { URL } from "~/constant/constant";
import { DATA_STATUS } from "~/constant/constant";
const fields = [
  { key: "id", label: "ID", _style: "min-width:50px" },
  { key: "customer_id", _style: "min-width:50px;" },
  { key: "name", label: "ProductName", _style: "min-width:150px" },
  { key: "date", _style: "min-width:50px;" },
  { key: "address", _style: "min-width:50px;" },
  { key: "total_price", _style: "min-width:50px;" },
  { key: "status", _style: "min-width:50px;" },
  { key: "method", label: "Method", _style: "min-width:100px;" }
];
export default {
  freeSet,
  props: {
    listData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      fields: fields,
      keySearch: "",
      status: DATA_STATUS
    };
  },
  methods: {
    deleteCustomer(id) {
      swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.isConfirmed) {
            axios.delete(URL + "order/" + id).then(res => {});
            swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
    },
    getStatus(id) {
      return this.status.find((stt, index) => {
        if (index == id) {
          return stt;
        }
      });
    }
  }
};
</script>

<style></style>
