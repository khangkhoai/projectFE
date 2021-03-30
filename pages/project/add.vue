<template>
  <CreateEditProject :title="title"/>
</template>
<script>
import CreateEditProject from '@/components/project/CreateEditProject'
export default {
  components:{
    CreateEditProject
  },
  data(){
    return{
      title: "Add Project"
    }
  }
}
</script>
<style>

</style>
