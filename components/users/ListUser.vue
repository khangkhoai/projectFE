<template>
  <div>
    <CDataTable :items="dataUser" :fields="fields" hover sorter> </CDataTable>
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

