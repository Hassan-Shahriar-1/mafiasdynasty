<template>
  <div class="jaldi mblr">
    <div class="card">
      <orgcomp></orgcomp>

      <div class="card-header clr7 p-1 mt-1">
        <h4
          class="rounded-0 text-center py-1 w-100 subtitlefnt"
          style="position: sticky"
        >
          Search Organization
        </h4>
        <h3 v-if="ntfmsg">{{ ntfmsg }}</h3>
      </div>

      <div class="card-body p-0 bMbg blksdo">
        <div class="row Gp0m0 px-2 dtlsfnt">
          <div class="w-100">
            <div class="form-group mb-0">
              <div class="row no-gutters mt-2">
                <!-- <div class="col-9">
                    <input type="text" class="form-control py-2" v-model="gngnms" @keypress="orgsrMsg='',srshsts=true;" placeholder="Gang Name"></div>
                    <div class="btn nBtn tmibg col-3" @click="srch()">Search</div>  -->

                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    v-model="gngnms"
                    @keypress="(orgsrMsg = ''), (srshsts = true)"
                    placeholder="Gang Name"
                  />
                  <div class="input-group-prepend">
                    <div class="btn nBtn clr7" @click="srch()">
                      <i class="fas fa-search"></i>Search
                    </div>
                  </div>
                </div>

                <div class="card-body p-0 m-0" v-show="srshsts">
                  <ul v-if="orgmbrlst == false">
                    <li class="list-group-item blk50 p-2 mt-1 bdr3">
                      <h4 class="text-center&quot;">{{ orgsrMsg }}</h4>
                    </li>
                  </ul>
                  <ul class="list-group w-100" v-if="orgmbrlst != false">
                    <h4 class="text-center">Found</h4>
                    <li
                      class="list-group-item blk50 p-2"
                      v-for="(orgsrc, i) in orgmbrlst"
                      :key="i"
                    >
                      <div class="row Gp0m0 rounded grnd75 p-2">
                        <div class="col-2 Gp0m0 p-1">
                          <img
                            src="../../../assets/img/1.png"
                            class="card-img bdrblk2"
                            alt=""
                          />
                        </div>
                        <div class="col-6">
                          <h5 class="subtitlefnt">
                            {{ orgsrc.name }}
                          </h5>
                          <h6 class="dtlsfnt">{{ orgsrc.type }}</h6>
                        </div>
                        <div class="col-4">
                          <div
                            class="button4 nBtn mt-2 border py-2 rounded"
                            @click="reqjngng(orgsrc.gid, orgsrc.rmid)"
                          >
                            <h6 class="text-center">{{ orgsrc.act }}</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <ul class="list-group">
                <h4 class="text-center grnd75 py-2">Suggestions</h4>
                <li
                  class="list-group-item Gp0m0 bMbg2 border-0 mt-1"
                  v-for="(gng, i) in ganglst"
                  :key="i"
                >
                  <div class="row no-gutters p-2">
                    <div class="col-2 p-2">
                      <img
                        src="../../../assets/img/1.png"
                        class="card-img"
                        alt=""
                      />
                    </div>
                    <div class="col-10 px-2">
                      <h4 class="subtitlefnt">{{ gng.name }}</h4>
                      <br />
                      <button
                        class="float-right btn nBtn blkbggreen"
                        @click="reqjngng(gng.id, gng.rmid)"
                      >
                        Join Gang
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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
      srshsts: false,
      gngnms: "",
      ganglst: [],

      orgsrMsg: "",
      ntfmsg: "",

      orgmbrlst: false,
    };
  },
  beforeCreate() {
    this.axios.get("/gang/user/gang").then((response) => {
      if (response.status_code == 400) {
        this.$router.push("/game/searchorg");
      } else if (response.status_code == 200) {
        this.org = "yOrg";
        this.axios.get("/gang/member/list").then((response) => {
          if (response.status_code === 200) {
            this.clnmm = response.gnnm;
          } else {
            this.err = response.msg;
          }
        });
      }
      console.log(response);
    });
  },
  created() {
    this.$mgo.gt("/gang/suggestion", (response) => {
      this.ganglst = response.data;
      console.log("gangdata", this.ganglst);
    });
  },

  methods: {
    reqjngng: function (id, rmid) {
      console.log("ids here", id, rmid);
      this.$mgo.gp("/organization/mbrrequest/" + id, {}, (rspp) => {
        console.log("orgrequestdone", rspp);
        if (rspp.status_code == "orgmsg") {
          let data = {
            rm: rmid,
            msg: "request",
            typ: 2,
          };
          console.log(data);
          this.socket.emit("reqorg", data);
        } else if (rspp.status_code == "orgreq") {
          let data = {
            rm: rmid,
            msg: "join",
            typ: 2,
          };
          this.socket.emit("reqorg", data);
        }

        console.log(rspp);
      });

      console.log(id);
      this.$router.push("/game/organization/member");
    },
    srch() {
      this.srshsts = true;
      this.$mgo.gt("/gang/search/" + this.gngnms, (rsp) => {
        switch (rsp.status_code) {
          case "msg":
            this.orgmbrlst = false;
            this.orgsrMsg = rsp.msg;
            break;
          case "found":
            console.log("list found", rsp.data);
            this.orgmbrlst = rsp.data;

            break;
        }
        console.log(rsp);
      });
    },
  },
};
</script>
