<template>
  <div>
    <list-role/>
  </div>
</template>
<script>
import ListRole from "@/components/roles/ListRole.vue";
export default {
  name: 'new',
  components: {
    ListRole
  },
  data() {
    return {
     
      dataRole : {
          'id' : '',
          'name' : ''
        }
    }
  },
}
</script>
<style scoped>
</style>