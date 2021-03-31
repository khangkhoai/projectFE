<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>List Task</h3>
      </CCardHeader>
      <CCardBody>
        <CButton color="primary" class="m-2 btn_add">
          <nuxt-link to="/task/add" class="text-white d-block">
            + Add</nuxt-link
          >
        </CButton>

        <CDataTable
          :items="dataTasks"
          :fields="fields"
          items-per-page-select
          :items-per-page="5"
          hover

          pagination
        >
         <template #member_id="{ item }">
            <td>
              {{ item.member.name}}
            </td>
          </template>
          <template #id_project="{ item }">
            <td>
              {{ item.project.name}}
            </td>
          </template>
            <template #status="{ item }">
            <td>
              {{ filterStatus(item.status)}}
            </td>
          </template>
          <template #method="{ item }">
            <td class="py-2">
              <CButton color="success">
                <nuxt-link :to="`/task/${item.id}`">
                  <CIcon :content="$options.freeSet.cilPencil" />
                </nuxt-link>
              </CButton>
              <CButton color="danger" @click="deleteTask(item.id)">
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
import { DATA_STATUS } from '@/constant/constant'
import swal from "sweetalert2";

const fields = [
  { key: "id", label: "Id" },
  { key: "subject", label: "Name" },
  { key: "id_project", label: "Project" },
  { key: "content", label: "Content" },
  { key: "member_id", label: "Assignee" },
  { key: "status", label: "Status" },
  { key: "start_date", label: "Start Date" },
  { key: "due_date", label: "Due Date" },
  { key: "method", label: "Method" },
];

export default {
  name: "ListTask",
  freeSet,
  props: {
    dataTasks: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      fields: fields,
      STATUS: DATA_STATUS
    };
  },
  methods: {
    /**
     * delete project
     */
    deleteTask(id) {
      swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios.delete("http://localhost:8000/api/task/" + id).then((res) => {
              this.$emit("getListTasks", this.dataTasks);
            });
            swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
    },
     /**
     * get name status
     */
    filterStatus(id) {
      return this.STATUS.find((status, index) => {
        if (index === id) {
          return status
        }
      })
    },
  },
};
</script>
<style>
.btn_add {
  width: 100px;
  position: absolute;
  top: 20px;
}
.card-body {
  position: relative;
}
</style>
