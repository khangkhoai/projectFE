<template lang="">
  <div>
      <div>
    <CCard>
      <CCardHeader >
        <h3>Add Task</h3>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm="6">
           <CSelect
              label="Project"
            />
          </CCol>
          <CCol sm="6">
            <CInput label="Name" placeholder="Name" >
            </CInput>
          </CCol>
        </CRow>

         <CRow>
          <CCol sm="12">
            <CInput label="Content" placeholder="Content" >
            </CInput>
          </CCol>
        </CRow>

        <CRow>
          <CCol sm="6">
           <CSelect
              label="Status"
            />
          </CCol>
           <CCol sm="6">
           <CSelect
              label="Priority"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="3">
            <CInput
              label="Start Date"
              type="date"
            >
            </CInput>
          </CCol>
           <CCol sm="3">
            <CInput
              label="Due Date"
              type="date"
            >
            </CInput>
          </CCol>
           <CCol sm="3">
            <CInput
              label="Spent Time"
              type="text"
              placeholder="Hours"
            >
            </CInput>
          </CCol>
           <CCol sm="3">
            <CInput
              label="Estimated Time"
              type="text"
              placeholder="Hours"
            >
            </CInput>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CInput
              label="Note"
              type="text"
              placeholder="Note"
            >
            </CInput>
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CButton
        v-if="!this.$route.params.id"
         color="primary"  @click="createProject()"
        >
          Submit
        </CButton>
        <CButton v-else color="primary" class="btn-click" @click="updateProject(form.id)" >
          Update
        </CButton>

      </CCardFooter>
    </CCard>
  </div>
  </div>
</template>
<script>
export default {
  name: "CreateEditTask",
};
</script>
<style lang="">
</style>
