<template>
  <div>
    <create-edit-role />
  </div>
</template>
<script>
import axios from 'axios';
import CreateEditRole from "@/components/roles/CreateEditRole.vue";
export default {
  name: 'new',
  components: {
    CreateEditRole
  },
  data() {
    return {
        showEdit: true,
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