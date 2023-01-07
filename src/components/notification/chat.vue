<template>
  <div>
    <div class="row Gp0m0 card-header tmibg p-2 text-center mb-2">
      <router-link to="/game/notification/pchat">
        <button class="float-left p-1 nBtn tmibg">
          <i class="fas fa-arrow-left"></i>Back
        </button></router-link
      >

      <h3 class="ml-2 text-white text-center titlefnt">{{ usrnm }}</h3>
    </div>

    <div
      class="Gp0m0 bw100 rounded"
      style="width: 100%; border-radius: 1px solid red; position: sticky"
    >
      <div class="input-group Gp0m0">
        <div class="input-group-append Gp0m0" style="height: 42px"></div>
        <input
          v-model="Wmessage"
          @keyup.enter="insrtMsg"
          class="
            form-control
            type_msg
            bg-white
            siz20
            text-dark
            rounded
            border-0
          "
          placeholder="Type your message..."
        />
        <div class="input-group-append" @click="insrtMsg()">
          <span
            class="input-group-text px-3 send_btn blkgry text-white border-0"
            ><i class="fas fa-location-arrow"></i
          ></span>
        </div>
      </div>
    </div>

    <div class="row Gp0m0 rounded" id="Chmsgh">
      <div
        v-for="(MsgsLt, i) in MsgsLts"
        :key="i"
        class="m-4"
        style="min-width: 90%"
      >
        <div class="d-flex justify-content-start" v-if="MsgsLt.pstn === 'l'">
          <img
            class="card-img rounded-circle img_cont_msg"
            src="../../assets/img/logo.png"
            alt=""
          />
          <div class="msg_cotainer sizv20 dtlsfnt w-100">
            <div class="mb-2">{{ MsgsLt.msg }}</div>
            <h6 class="mt-2 mlr2 siz13 float-right msg_time text-white">
              <i class="fas fa-clock"></i>
              <vue-moments-ago
                prefix=""
                suffix="ago"
                :date="MsgsLt.tm"
                lang="en"
              />
            </h6>
          </div>
        </div>
        <div
          class="d-flex justify-content-end"
          v-else
          style="word-break: break-all"
        >
          <div class="msg_cotainergsp sizv20 dtlsfnt w-100 text-right">
            <div class="mb-2">{{ MsgsLt.msg }}</div>
            <h6 class="text-white text-right">
              <i class="fas fa-clock"></i>
              <vue-moments-ago
                prefix=""
                suffix="ago"
                :date="MsgsLt.tm"
                lang="en"
              />
            </h6>
          </div>
          <img
            class="card-img rounded-circle img_cont_msggsp"
            src="../../assets/img/logo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMomentsAgo from "vue-moments-ago";
export default {
  components: {
    VueMomentsAgo,
  },
  name: "Family",
  props: ["id"],
  data() {
    return {
      usrnm: "",
      Wmessage: "",
      data: "",
      oid: "0",
      MsgsLts: Array,
    };
  },

  created() {
    this.axios.get("mp/chkmafia/" + this.$props.id).then((res) => {
      ////checking if user exist or not/////
      console.log("tag", res.data);
      if (res.sts == "you") {
        ///for own msg
        this.$router.push("/game/home/gtns");
      } else if (res.sts == "errmsg") {
        ///for usr not found
        this.$router.push("/game/home/gtns");
      } else if (res.status_code == 200) {
        ///if user found then get all msg
        this.usrnm = res.data.name;
        this.oid = res.data.uid;
        if (
          res.data.msglstd != "we didnt find any conversation with this user"
        ) {
          this.MsgsLts = res.data.msglstd;
        } else {
          this.MsgsLts = "";
        }
      }

      this.socket.on("resintusrmsg", (dta) => {
        console.log("log", dta);
        let rmp = {
          pstn: "l",
          msg: dta.msg,
          tm: dta.sendtm,
        };
        this.MsgsLts.unshift(rmp);
      });
    });
  },
  methods: {
    insrtMsg: function () {
      this.data = {
        oid: this.oid,
        msg: this.Wmessage,
      };

      let rmps = {
        pstn: "r",
        msg: this.Wmessage,
        tm: this.moment().format(),
      };
      this.MsgsLts.unshift(rmps);
      console.log("msg inserted");
      this.socket.emit("usr1v1", this.data);
      this.Wmessage = "";
      if (this.Wmessage == null) {
        console.log("error");
      }
    },
  },
};
</script>
 