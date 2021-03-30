<template lang="">
  <div>
    <CreateEditProject :title="title"/>
  </div>
</template>
<script>
import CreateEditProject from "@/components/project/CreateEditProject"
export default {
  components:{
    CreateEditProject
  },
   data(){
    return{
      title: "Edit Project"
    }
  }
}
</script>
<style lang="">

</style>
