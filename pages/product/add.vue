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
      title: "Add Product"
    }
  }
}
</script>
<style>

</style>
