<template>
  <CreateEditCategories :title="title"/>
</template>
<script>
import CreateEditCategories from '@/components/categories/CreateEditCategories'
export default {
  components:{
    CreateEditCategories
  },
  data(){
    return{
      title: "Add Category"
    }
  }
}
</script>
<style>

</style>
