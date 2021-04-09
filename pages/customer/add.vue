<template>
  <CreateEdit :title="title"/>
</template>
<script>
import CreateEdit from '@/components/customers/CreateEditCustomers'
export default {
  components:{
    CreateEdit
  },
  data(){
    return{
      title: "Add Customer"
    }
  }
}
</script>
<style>

</style>
