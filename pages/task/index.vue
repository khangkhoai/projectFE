 <template lang="">
  <div>
    <ListTask :dataTasks="dataTasks"  @getListTasks="getData"/>
  </div>
</template>
<script>
import axios from "axios";
import ListTask from "~/components/task/ListTask";
export default {
  components: {
    ListTask,
  },
  data() {
    return {
      dataTasks: [],
    };
  },
  methods: {
    /**
     * get list task
     */
    getData() {
      axios.get("http://127.0.0.1:8000/api/task").then((res) => {
        this.dataTasks = res.data;
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
