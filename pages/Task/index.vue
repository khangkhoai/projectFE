<template>
  <CCard>
    <CCardHeader>
      <h1>Task</h1>
    </CCardHeader>
    <CCardBody>
      <CDataTable :items="listTask" :fields="fields" sorter hover> 
          <template #status="{item}">
              <div>
                  <td>{{item.status == 0 ? 'hiện' : 'ẩn'}}</td>
              </div>
          </template>
          <template #member="{item}">
              <div>
                  <td>{{Project(item)}}</td>
              </div>
          </template>
          <template #project="{item}">
              <div>
                  <td>{{Member(item)}}</td>
              </div>
          </template>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>
<script>
import axios from "axios";
import {TASKKEY} from "../../constant/constant";
export default {
  data() {
    return {
      listTask: [],
      fields: TASKKEY
    };
  },
  methods: {
    async getListTask() {
      await axios
        .get("http://localhost:8000/api/task/list")
        .then((res) => {
          this.listTask = res.data;
          console.log(res.data[0].project);
        //   console.log(this.listTask);
        //   this.page = res.data;
        });
    },
    Project(item) {
      return item.project.name;
    },
    Member(item) {
      return item.member.name;
    },
  },
  mounted(){
      this.getListTask();
  },
};
</script>
<style scoped>
</style>