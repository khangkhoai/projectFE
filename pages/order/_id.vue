<template>
  <CreateEdit :title="title"/>
</template>
<script>
import CreateEdit from '@/components/orders/CreateEditOrders'
export default {
  components:{
    CreateEdit
  },
  data(){
    return{
      title: "Edit Order"
    }
  }
}
</script>
<style>

</style>
