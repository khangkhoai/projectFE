<template lang="">
  <div>
      <div>
    <CCard>
      <CCardHeader >
        <h3>{{title}}</h3>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm="6">
           <!-- <p  v-for="(item, index) in data" :key="index">{{item.project.name}}</p> -->
            <label for="source">Project</label>
               <select id="id_project" v-model="form.id_project" class="form-control">

              <option
                v-for="(item, index) in dataTasks"
                :key="index"
                :value="item.id"
                :disabled="isInterviewer"
              >
                {{item.name }}
              </option>
            </select>
           <!-- <CSelect
              label="Project"
              :options="this.data.project"
              :value.sync="form.member_id"
            /> -->
          </CCol>
          <CCol sm="6">
            <CInput label="Name" placeholder="Name" v-model="form.subject">
            </CInput>
          </CCol>
        </CRow>

         <CRow>
          <CCol sm="12">
            <CInput label="Content" placeholder="Content" v-model="form.content">
            </CInput>
          </CCol>
        </CRow>

        <CRow>
          <CCol sm="4">
           <!-- <CSelect
              label="Assignee"
              :options="PRIORITY"
              :value.sync="form.member_id"
            /> -->

            <label for="source">Assignee</label>
               <select id="id_project" v-model="form.member_id" class="form-control">

              <option
                v-for="(item, index) in dataTasks"
                :key="index"
                :value="item.id"
                :disabled="isInterviewer"
              >
                {{item.name }}
              </option>
            </select>
          </CCol>
          <CCol sm="4">
           <CSelect
              label="Status"
              :options="STATUS"
              :value.sync="form.status"
              v-model="form.st"
            />

          </CCol>
           <CCol sm="4">
           <CSelect
              label="Priority"
              :options="PRIORITY"
              :value.sync="form.priority"
            />
          </CCol>

        </CRow>
        <CRow>
          <CCol sm="3">
            <CInput
              label="Start Date"
              type="date"
              v-model="form.start_date"
            >
            </CInput>
          </CCol>
           <CCol sm="3">
            <CInput
              label="Due Date"
              type="date"
              v-model="form.due_date"
            >
            </CInput>
          </CCol>
           <CCol sm="3">
            <CInput
              label="Spent Time"
              type="text"
              placeholder="Hours"
              v-model="form.spent_time"
            >
            </CInput>
          </CCol>
           <CCol sm="3">
            <CInput
              label="Estimated Time"
              type="text"
              placeholder="Hours"
              v-model="form.estimated_time"
            >
            </CInput>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CTextarea label="Note" rows="5" v-model="form.note">
            </CTextarea>
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CButton
        v-if="!this.$route.params.id"
         color="primary"  @click="createTask()"
        >
          Submit
        </CButton>
        <CButton v-else color="primary" class="btn-click" @click="updateTask(form.id)" >
          Update
        </CButton>

      </CCardFooter>
    </CCard>
  </div>
  </div>
</template>
<script>
import { DATA_PRIORITY } from '~/constant/constant';
import { DATA_STATUS } from '~/constant/constant';
import axios from "axios";
import swal from "sweetalert2";
export default {
  name: "CreateEditTask",
 data() {
    return {
      form: {
        id: "",
        subject: "",
        status: "",
        content: "",
        priority: "",
        spent_time: "",
        estimated_time: "",
        start_date:"",
        due_date:"",
        member_id:"",
        id_project:"",
        note:""
      },
      errors: [],
      STATUS: DATA_STATUS,
      PRIORITY:DATA_PRIORITY,
      dataTasks:[]
    };
  },
  mounted() {
    if (this.$route.params.id != null) {
      this.getTaskByID(this.$route.params.id);
    }
    this.getData()
  },
  props: {
    title:"",
    // data: {
    //   type: Array,
    //   default: () => [],
    // },
  },
  methods: {
    /**
     * create blog
     */
    createTask() {
      this.validate();
      if (this.errors.length > 0) {
        return this.errors;
      } else {
        axios
          .post("http://localhost:8000/api/task", this.form)
          .then((res) => {
            this.$router.push("/task");
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
     * get blog by id
     */
    getTaskByID(id) {
      axios
        .get("http://localhost:8000/api/task/" + id)
        .then((res) => (this.form = res.data));
    },

    /**
     * update blog
     */
    updateTask(id) {
      this.validate();
      if (this.errors.length > 0) {
        return this.errors;
      } else {
        axios
          .put("http://localhost:8000/api/task/" + id, this.form)
          .then((res) => {
            this.$router.push("/task");
            swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Update",
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
      if (this.form.subject == "") {
        this.errors.push("Name không được trống");
      }
      if (this.form.desc == "") {
        this.errors.push("Description không được trống");
      }
      if (this.form.start_date == "") {
        this.errors.push("Start Date không được trống");
      }
    },


    getData() {
      axios.get("http://127.0.0.1:8000/api/projects").then((res) => {
        this.dataTasks = res.data;
        // this.page = res.data
      });
    },
  },




};
</script>
<style lang="">
</style>
