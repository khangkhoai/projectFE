<template>
  <div>
    <CCard>
      <CCardHeader>
        {{ title }}
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm="12">
            <CInput
              label="Name"
              v-model="dataRole.name"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
        <h4>List Permission</h4>
        <div class="row">
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <div
                  class="form-check"
                  v-for="(dev, key) in dataPermission"
                  :key="key"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="dev.id"
                    id="flexCheckDefault"
                    v-model="dataRole.permission"
                   
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    {{ dev.desc }}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CCardBody>
      <CCardFooter>
        <CButton
          v-if="!this.$route.params.id"
          color="primary"
          @click="addRole()"
        >
          Submit
        </CButton>
        <CButton
          v-else
          color="primary"
          class="btn-click"
          @click="editRole(dataRole.id)"
        >
          Update
        </CButton>
      </CCardFooter>
    </CCard>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "new",
  components: {},
  data() {
    return {
      dataRole: {
        id: "",
        name: "",
        permission: []
      },
      dataPermission: []
    };
  },
  props: {
    title: ""
  },
  methods: {
    addRole() {
      axios
        .post("http://127.0.0.1:8000/api/roles/", this.dataRole, {
          headers: { Authorization: this.$auth.getToken("local") }
        })
        .then(res => {
          this.$router.push("/roles");
          swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 1500
          });
        });
    },
    getRoleByID(id) {
      axios
        .get("http://127.0.0.1:8000/api/roles/" + id, {
          headers: { Authorization: $nuxt.$auth.getToken("local") }
        })
        .then(res => {
          this.dataRole = res.data;
          console.log(this.dataRole);
        });
    },
    editRole(id) {
      axios
        .put(
          "http://127.0.0.1:8000/api/roles/" + id,
          this.dataRole,
          this.dataRole,
          {
            headers: { Authorization: this.$auth.getToken("local") }
          }
        )
        .then(res => {
          this.$router.push("/roles");
          swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 1500
          });
        });
    },
    getPermissions() {
      axios
        .get("http://localhost:8000/api/permission/", {
          headers: { Authorization: this.$auth.getToken("local") }
        })
        .then(res => {
          this.dataPermission = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    setCheck(){

    }
  },
  mounted() {
    if (this.$route.params.id !== null) {
      this.getRoleByID(this.$route.params.id);
    }
    this.getPermissions();
  }
};
</script>
<style scoped></style>
