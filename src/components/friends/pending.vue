<template>
  <div>
    <h6 v-if="errmsg" class="text-center text-white dtlsfnt center siz25">
      {{ errmsg }}
    </h6>

    <div v-else>
      <div
        class="row no-gutters blkgry p-2 my-2"
        v-for="(pndng, i) in list"
        :key="i"
      >
        <div class="col-2">
          <img class="card-img" src="../../assets/img/1.png" alt="" />
        </div>
        <div class="col-8 px-1">
          <h4 class="subtitle">{{ pndng.name }}</h4>
          <h6 class="dtlsfnt">Level:{{ pndng.lvl }}</h6>
          <h6 class="dtlsfnt">Time:{{ pndng.tm }}</h6>
        </div>
        <div class="col-2">
          <div class="btn nBtn btn-block mt-2" @click="dltpnd(pndng.id)">
            <i class="fas fa-times-circle text-danger"></i>
          </div>
        </div>
      </div>

      <!--      <hr />
      <h3>pending Requests</h3>

      <div
        class="row no-gutters blkgry p-2 my-2"
        v-for="(reqpend, i) in reqlist"
        :key="i"
      >
        <div class="col-2">
          <img class="card-img" src="../../assets/img/1.png" alt="" />
        </div>
        <div class="col-6 px-1">
          <h4 class="subtitle">{{ reqpend.name }}</h4>
          <h6 class="dtlsfnt">Level:{{ reqpend.lvl }}</h6>
          <h6 class="dtlsfnt">Time:{{ reqpend.tm }}</h6>
        </div>
        <div class="col-2">
          <div class="btn nBtn mt-2 px-3" @click="dltpnd(reqpend.id)">
            <i class="fas fa-times text-danger"></i>
          </div>
        </div>
        <div class="col-2">
          <div class="btn nBtn mt-2 px-3" @click="accept(reqpend.id)">
            <i class="fas fa-check text-success"></i>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      reqlist: [],
      errmsg: "",
      smsg: "",
    };
  },

  onMounted() {
    this.errmsg;
  },
  updated() {
    this.errmsg;
  },
  mounted() {
    this.errmsg;
  },
  beforeCreate() {
    this.axios.get("/mp/pending").then((response) => {
      console.log("request response here", response);
      if (response.status_code == 400) {
        this.errmsg = response.msg;
      } else {
        this.list = response.data;
      }
    });
    this.axios.get("/mp/request/list").then((response) => {
      console.log("pending request", response);
      if (response.status_code == "errormsg") {
        this.errmsg = response.msg;
      } else {
        this.reqlist = response.data;
      }
    });
  },
  methods: {
    dltpnd: function (id) {
      this.axios.post("/mp/delete/request/" + id).then((response) => {
        console.log(response);
      });
    },
    accept: function (id) {
      this.axios.post("/mp/accept/request/" + id).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>
