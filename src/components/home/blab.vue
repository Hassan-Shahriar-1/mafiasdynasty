/*  blab section works  same like vampire dynasty blab section  ,and it will show the updates of your organizations members Activity */

<template>
  <div>
    <!-- <popover  name="foo"   class="bg-danger">
                <h5>Culpa architecto expedita iste quisquam aspernatur,
                quibusdam aliquam numquam quas tempore corporis dignissimos
                 perferendis pariatur accusamus quo. Blanditiis, possimus. 
                 Praesentium, animi esse. clan </h5>
            </popover>
              <div class="btn nBtn btn-block"  v-popover:foo>foo</div> -->
    <div class="section mt-1 tmibg">
      <div class="row no-gutters">
        <textarea
          v-model="Gmessage"
          @keyup.enter="insrtMsg()"
          class="w-100 form-control"
          name=""
          id=""
          cols="10"
          rows="1"
          placeholder="Type here"
          style="height: 40px"
        ></textarea>
      </div>
      <div class="btn nBtn blkgry w-100 mt-1 mb-2" @click="insrtMsg()">
        Blab here <span><i class="fas fa-hand-point-down"></i></span>
      </div>
      <div
        class="contain Gp1m1 blkd50 grysdo my-2 p-1"
        v-for="(MsgsLt, i) in MsgsLts"
        :key="i"
      >
        <div class="row no-gutters mb-1">
          <img
            src="../../assets/img/item/1.gif"
            alt="Avatar"
            style="width: 100%"
          />
          <div class="header">
            <strong class="text-white"
              ><h3 class="subtitlefnt">{{ MsgsLt.nm }}</h3></strong
            >
            <small class="text-right text-muted"></small>
          </div>
        </div>
        <div class="dtlsfnt">
          <div class="row no-gutters p-1">
            <h6 class="mb-2">{{ MsgsLt.msg }}</h6>
          </div>
          <div class="row no-gutters">
            <div class="col-6">
              <i class="fas fa-thumbs-up bgmn">100&nbsp;</i>
              <i class="fas fa-thumbs-down bgmn mlr3">100</i>
            </div>
            <div class="col-6 Gp0m0">
              <span class="float-right"><i class="fas fa-flag bgmn"></i></span>
              <h6 class="mlr2 siz13 float-right">
                <i class="fas fa-clock"></i> {{ MsgsLt.Tm }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<script>
export default {
  name: "Family",
  data() {
    return {
      Gmessage: "",
      MsgsLts: [],
    };
  },
  created() {},
  beforeCreate() {
    this.$mgo.gt("mp/profile", (res) => {
      this.MsgsLts.nm = res.data.name;
      console.log(res);
    });
    console.log(this.axios.defaults.headers.Authorization);
  },
  methods: {
    insrtMsg: function () {
      let msggg = this.Gmessage.replace(/  +/g, " ");
      console.log(msggg);
      if (msggg == " " || msggg == "") {
        console.log("msg log empty");
      } else {
        this.MsgsLts.push({
          msg: this.Gmessage,
          Tm: Date.now(),
          nm: this.MsgsLts.nm,
        });
        /* console.log(this.MsgsLts); */
        this.MsgsLts = this.MsgsLts.reverse();
        this.socket.emit("gblmsg", this.Gmessage);
        this.Gmessage = "";
      }
    },
  },
};
</script>