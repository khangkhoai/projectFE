<template>
  <CreateEditProducts :title="title"/>
</template>
<script>
import CreateEditProducts from '@/components/products/CreateEditProducts'
export default {
  components:{
    CreateEditProducts
  },
  data(){
    return{
      title: "Edit Product"
    }
  }
}
</script>
<style>

</style>
