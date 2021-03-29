<template lang="">
  <div>
    <CRow>
      <CCol sm="6">
        <CCard class="card-login">
          <CCardHeader>
            Login
          </CCardHeader>
          <CCardBody>
            <!-- <div v-if="error">
              <CAlert color="warning" closeButton>
                {{ error }}
              </CAlert>
            </div> -->
            <form>
              <div>
                <CInput
                  label="Email"
                  placeholder="Enter your mail"
                />
              </div>
              <div>
                <CInput
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>

              <div class="button-login">
                <CButton class="m-2 " color="success" >
                  Login
                </CButton>
                </div>

            </form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
<style lang="">
</style>
