<template>
  <div class="container Gp0m0 smlttlfnt3">
    <div class="StryCntnr">
      <h5 v-if="err" class="text-white text-center">{{ err }}</h5>
      <div class="mrgnbtm">
        <div class="container-fluid no-gutters px-0">
          <div class="card">
            <div class="card-header p-0">
              <div
                class="
                  row
                  Gp0m0
                  text-center
                  blkgry
                  py-2
                  d-flex
                  justify-content-center
                "
              >
                <h4 class="subtitlefnt">Family Name: {{ clnmm }}</h4>
              </div>
            </div>
            <div class="card-body p-1">
              <div
                class="btn-group rounded jaldi bw100 mb-2"
                role="group"
                aria-label="..."
              >
                <router-link to="gossipe" tag="a" class="btn nBtn blkgry Gp0m0"
                  ><i class="fas fa-comments"></i> <br />
                  <h4 class="siz15">Gossip</h4></router-link
                >
                <router-link to="family" tag="a" class="btn nBtn blkgry Gp0m0"
                  ><i class="fas fa-users"></i> <br />
                  <h4 class="siz15">Family</h4></router-link
                >
                <router-link to="member" tag="a" class="btn nBtn blkgry Gp0m0"
                  ><i class="fas fa-users"></i> <br />
                  <h4 class="siz15">Members</h4></router-link
                >
                <div tag="a" class="btn nBtn blkgry Gp0m0" @click="lsow()">
                  <i class="fas fa-sign-out-alt"></i> <br />
                  <h4 class="siz15">Leave</h4>
                </div>
              </div>
              <router-view></router-view>
            </div>
          </div>
          <modal
            v-if="org == true"
            name="leve"
            :width="350"
            :height="250"
            class="mblr"
          >
            <div
              class="mrgnbtm tmibg bdr3 p-2 bmsdo rounded overflow-y"
              style="height: 250px; width: auto"
            >
              <h3 class="mb-2 subtitlefnt">Do you really want to leave?</h3>
              <div class="row no-gutters rounded mt-5">
                <div class="col-6 p-1">
                  <div
                    class="btn nBtn btn-block btn-lg btnbfnt blkredbtn"
                    @click="leaveConfrm()"
                  >
                    Yes
                  </div>
                </div>
                <div class="col-6 p-1">
                  <div
                    class="btn nBtn btn-block btn-lg btnbfnt button5"
                    @click="lhide()"
                  >
                    No
                  </div>
                </div>
              </div>
            </div>
          </modal>
        </div>
      </div>
    </div>
  </div>
</template>

                 
<script>
export default {
  data() {
    return {
      org: false,
      gngcrt: false,
      err: "",
      cln: "",
      clnmm: "",
    };
  },
  created() {
    /*  this.axios.get('/gang/gnglist').then(response=>{
            console.log('gang list')
            this.ganglst=response.data;
          }) */
  },
  beforeCreate() {
    this.axios.get("/gang/user/gang").then((response) => {
      if (response.sts == "noOrg") {
        this.$router.push("/game/searchorg");
      } else if (response.sts == "yOrg") {
        this.axios.get("/gang/mbrlist").then((response) => {
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
  methods: {
    /* @click="gngcrt^=true" */

    lsow() {
      this.$modal.show("leve");
    },
    lhide() {
      this.$modal.hide("leve");
    },
    leaveConfrm() {
      this.axios.post("/gang/leave").then((response) => {
        console.log(response);
        if (response.sts == "orGlv") {
          this.ganglst = response.data;
          this.socket.emit("orgleave");
          this.$router.push("/game/searchorg");
        }
      });
    },
  },
};
</script>





