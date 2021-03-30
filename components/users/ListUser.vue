<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>List Task</h3>
      </CCardHeader>
      <CCardBody>
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
      default: ()=>[]
    },
    fields: {
      type: Array,
      default: ()=>[]
    }
  }
};
</script>
