 <template lang="">
  <div>
    <ListProject :dataProjects="dataProjects"  @getListProjects="getData"/>
  </div>
</template>
<script>
import axios from "axios";
import ListProject from "~/components/project/ListProject";
export default {
  components: {
    ListProject,
  },
  data() {
    return {
      dataProjects: [],
    };
  },
  methods: {
    /**
     * get list blog
     */
    getData() {
      axios.get("http://127.0.0.1:8000/api/projects").then((res) => {
        this.dataProjects = res.data;
        // this.page = res.data
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style lang="">
</style>
