<template>
  <CreateEdit :title="title"/>
</template>
<script>
import CreateEdit from '@/components/order_details/CreateEditOrder_detail'
export default {
  components:{
    CreateEdit
  },
  data(){
    return{
      title: "Add Order Detail"
    }
  }
}
</script>
<style>

</style>
