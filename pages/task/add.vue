<template>
  <CreateEditTask :title="title"/>
</template>
<script>
import CreateEditTask from '@/components/task/CreateEditTask'
import axios from "axios"
export default {
  components:{
    CreateEditTask
  },
  data() {
    return {
      title:"Add Task",
      // dataTasks: [],
    };
  },
  methods: {
    /**
     * get list task
     */
  //   getData() {
  //     axios.get("http://127.0.0.1:8000/api/task").then((res) => {
  //       this.dataTasks = res.data;
  //       // this.page = res.data
  //     });
  //   },
  // },
  // mounted() {
  //   this.getData();
  },

}
</script>
<style>

</style>
