<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>List Task</h3>
      </CCardHeader>
      <CCardBody>
        <CButton color="primary" class="m-2 btn_add">
          <nuxt-link to="/user/add" class="text-white d-block"> + Add</nuxt-link>
        </CButton>
        <CDataTable
          :items="dataUser"
          :fields="fields"
          hover
          sorter
        >
        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
export default {
  name: "ListUser",
  props: {
    dataUser: {
      type: Array,
      default: () => [],
    },
    fields: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

