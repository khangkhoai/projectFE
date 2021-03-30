<template>
  <div>
    <create-edit-role />
  </div>
</template>
<script>

import CreateEditRole from "@/components/roles/CreateEditRole.vue";
export default {
  name: 'new',
  components: {
    CreateEditRole
  },
  data() {
    return {
      ShowAdd: false,
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