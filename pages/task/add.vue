<template>
  <CreateEditTask :title="title"/>
</template>
<script>
import CreateEditTask from '@/components/task/CreateEditTask'
export default {
  components:{
    CreateEditTask
  },
  data() {
    return {
      title:"Add Task",
    };
  },
}
</script>
<style>

</style>
