<template>
  <div>
    <h6 v-if="errmsg" class="text-center text-white dtlsfnt center siz25">
      {{ errmsg }}
    </h6>
    <h6 v-else-if="smsg" class="text-center text-white dtlsfnt">{{ smsg }}</h6>
    <div
      v-else
      v-for="(rlst, i) in relst"
      :key="i"
      class="row Gp0m0 tmibg py-1"
    >
      <div class="col-8 p-1">
        <div class="d-flex">
          <img
            class="flex-shrink-0 rounded"
            width="40"
            height="40"
            src="../../assets/img/1.png"
          />
          <h6 class="ml-1 pb-1 mb-0 lh-sm">
            <strong class="pl-3 d-block text-danger subtitlefnt">{{
              rlst.name
            }}</strong>
            <strong class="pl-3 d-block text-danger dtlsfnt"
              >LVL: {{ rlst.lvl }}</strong
            >
          </h6>
        </div>
      </div>
      <div class="col-4 Gp0m0">
        <div class="mlr1 Gp1m1">
          <div class="btn nBtn btn-block blkblu">Request</div>
        </div>
      </div>

      <div class="col-6 Gp0m0 p-2">
        <h6 class="mt-2 dtlsfnt">
          <i class="fas fa-clock">{{ rlst.tm }}</i>
        </h6>
      </div>

      <div class="col-3 Gp0m0">
        <div class="mlr1">
          <div
            @click="acpt(rlst.id)"
            class="btn-block button5 nBbg p-2 text-center nBtn jaldi"
          >
            Accept
          </div>
        </div>
      </div>
      <div class="col-3 Gp0m0">
        <div class="mlr1">
          <div
            class="btn-block blkredbtn nBbg p-2 text-center nBtn jaldi"
            @click="decln(rlst.id)"
          >
            Decline
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      errmsg: "",
      smsg: "",
      relst: [],
    };
  },
  beforeCreate() {
    this.axios.get("/mp/rqlist").then((response) => {
      if (response.status_code == 200) {
        this.relst = response.data;
      } else {
        this.errmsg = response.msg;
      }
      console.log(response);
    });
  },
  methods: {
    acpt: function (aid) {
      this.axios.post("/mp/acpt/" + aid).then((response) => {
        console.log(response);
        if (response.status_code == 200) {
          this.smsg = response.msg;
        } else {
          this.errmsg = this.msg;
        }
      });
    },
    decln: function (did) {
      this.axios.post("/mp/dlt/" + did).then((response) => {
        console.log(response);
        if (response.status_code == 200) {
          this.smsg = response.msg;
        } else {
          this.errmsg = this.msg;
        }
      });
    },
  },
};
</script>