<template lang="">
  <div>
    <CreateEditTask :title="title"/>
  </div>
</template>
<script>
import CreateEditTask from "@/components/task/CreateEditTask"
export default {
  components:{
    CreateEditTask
  },
  data() {
    return {
      title:"Edit Task"
    }
  },
}
</script>
<style lang="">

</style>
