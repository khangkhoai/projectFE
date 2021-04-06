<template>
  <div>
    <CCard>
      <CCardHeader>
        <div class="row">
          <div v-for="(dev, key) in dataProjects" :key="key" class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ dev.name }}</h5>
                <p class="card-text">{{ dev.desc }}</p>
                <CButton
                  color="primary"
                  variant="outline"
                  square
                  size="sm"
                  @click="getTaskOfProject(dev.id)"
                >
                  Detail
                </CButton>
              </div>
            </div>
          </div>
        </div>
      </CCardHeader>
      <CCardBody>
        <CButton color="primary" class="m-2 btn_add">
          <nuxt-link to="/project/add" class="text-white d-block w-100">
            + Add</nuxt-link
          >
        </CButton>
        <CDataTable
          :items="listTasks"
          :fields="fields1"
          items-per-page-select
          :items-per-page="5"
          hover
          pagination
        >
        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
import axios from "axios";
import { freeSet } from "@coreui/icons";
import swal from "sweetalert2";

const fields = [
  { key: "id", label: "Id", _style: "min-width:100px" },
  { key: "name", label: "Name", _style: "min-width:150px" },
  { key: "desc", label: "Description", _style: "min-width:100px;" },
  { key: "start_date", label: "Start Date", _style: "min-width:100px;" },
  { key: "method", label: "Method", _style: "min-width:100px;" }
];
const fields1 = [
  { key: "id", label: "Id" },
  { key: "subject", label: "Name" },
  { key: "id_project", label: "Project" },
  { key: "content", label: "Content" },
  { key: "member_id", label: "Assignee" },
  { key: "priority", label: "Priority" },
  { key: "status", label: "Status" },
  { key: "start_date", label: "Start Date" },
  { key: "due_date", label: "Due Date" },
];

export default {
  name: "ListProject",
  freeSet,
  props: {
    dataProjects: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      fields: fields,
      fields1: fields1,
      listTasks: [],
      dataProjects: this.dataProjects.map((item, id) => {
        return { item, id };
      })
    };
  },
  methods: {
    /**
     * delete project
     */
    deleteProject(id) {
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
            axios
              .delete("http://localhost:8000/api/projects/" + id, {
                headers: { Authorization: this.$auth.getToken("local") }
              })
              .then(res => {
                this.$emit("getListProjects", this.dataProjects);
              });
            swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
    },
    getTaskOfProject(id) {
      axios.get("http://localhost:8000/api/project/get/" + id, {
            headers: {
              Authorization: `${$nuxt.$auth.getToken("local")}`,
            },
          }).then(res => {
        this.listTasks = res.data;
        console.log(res.data);
        // this.page = res.data;
      });
    }
  }
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
