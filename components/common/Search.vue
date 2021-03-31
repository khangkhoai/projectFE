<template>
  <CRow>
    <CCol sm="4">
      <CInput placeholder="Enter your name" v-model="keyword" />
    </CCol>
    <CCol sm="4" class="search">
      <CButton color="success" class="m-2 btn-search" @click="search">
        <CIcon :content="$options.freeSet.cilMagnifyingGlass" />
      </CButton>
    </CCol>
  </CRow>
</template>
<script>
import { freeSet } from "@coreui/icons";
export default {
  freeSet,
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    search(){
      this.$emit('sendKeyword', this.keyword);
    }
  }
};
</script>
<style scoped>
.search {
  padding: 0;
}
.btn-search {
  margin-top: 0 !important
}
</style>