<template>
  <div>
    <div class="row text-center">
      <h4 class="hr-sect Gp0m0 subtitlefnt">Block List</h4>
    </div>
    <h5 v-if="msg" class="text-white text-center">{{ msg }}</h5>
    <div class="row Gp0m0" v-else>
      <div class="col-3 Gp0m0" v-for="(blk, i) in blklst" :key="i">
        <div class="m-1 blksdo2" @click="show(blk.id, blk.name)">
          <img
            :src="require('/src/assets/img/1.png')"
            class="card-img rounded-0"
            alt=""
          />
          <div class="dtlsfnt bMbg5 text-white">
            <h5 class="px-1 sizv20">
              {{ blk.name }}
              <h6 class="sizv13">LVL: {{ blk.lvl }}</h6>
            </h5>
          </div>
        </div>
      </div>
    </div>

    <modal
      name="mdlMempsts"
      :width="300"
      :isAutoHeight="true"
      @before-open="beforeOspen"
      class="mblr"
    >
      <div class="row Gp0m0 tmibg bdr3 p-3 blksdout rounded" id="gtmhyHt">
        <div class="col-12 p-0 pb-2">
          <h4 class="subtitlefnt text-center">{{ unm }}</h4>
          <br />
          <h6 class="dtlsfnt text-center"></h6>
        </div>
        <div class="col-12 Gp0m0 pr-1">
          <div
            class="btn nBtn btn-lg text-center btnbfnt btn-block bMbg5 sizv35"
            @click="vwprf(uuid)"
          >
            View Profile
          </div>
          <div
            class="btn nBtn btn-lg text-center btnbfnt btn-block sizv35"
            @click="unblk(uuid)"
          >
            Unblock
          </div>
        </div>
        <div class="col-12 Gp0m0 pr-1">
          <div
            class="
              btn
              nBtn
              btn-lg
              text-center
              btnbfnt
              btn-block
              blkredbtn
              sizv35
            "
            @click="hide()"
          >
            Close
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unm: "",
      msg: "",
      errmsg: "",
      uuid: "",
      blklst: [],
    };
  },
  beforeCreate() {
    this.$mgo.gt("gangmember/bnmbrlist", (resp) => {
      if (resp.status_code == 200) {
        //response.data.mbr.forEach((val)=>{
        resp.data.forEach((dts) => {
          this.blklst.push(dts);
        });
        console.log(this.blklst);
      } else if (resp.sts == "orgmsgerr") {
        this.msg = resp.msg;
      }
    });
  },
  methods: {
    beforeOspen() {
      setTimeout(() => {
        window.jq(".v--modal").height(window.jq("#gtmhyHt").outerHeight());
      }, 10);
    },
    show(id, nm) {
      // this.mdl.nm=dt.name;
      // this.mdl.btns=dt.btn;
      // console.log(dt.btn);
      this.uuid = id;
      this.unm = nm;
      this.$modal.show("mdlMempsts", { height: "auto" });
    },
    hide() {
      this.$modal.hide("mdlMempsts");
    },

    unblk(id) {
      console.log(id);
      this.$mgo.gp("gangmember/unblock/" + id, {}, (res) => {
        if (res.sts == "orgmsg") {
          this.hide();
        } else if (res.sts == "orgmsgerr") {
          this.errmsg = res.msg;
        }
      });
    },
    vwprf(id) {
      //recive id then redirec to any user profile///
      this.$router.push("/game/otrprofile/" + id);
    },
  },
};
</script>