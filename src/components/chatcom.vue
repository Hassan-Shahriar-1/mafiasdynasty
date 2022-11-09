<template>
  <div>
    <div class="col-12 card-header text-center">
      <h3 class="text-white text-center">Global Chat</h3>
    </div>
    <div
      class="row Gp0m0 rounded bMbg5"
      id="Chmsgh"
      style="height: 400px; overflow: auto"
    >
      <div class="card-body Gp0m0 overflow-Scroll">
        <div
          v-for="MsgsLt in MsgsLts"
          :key="MsgsLt.id"
          class="m-4"
          style="min-width: 90%"
        >
          <!-- MsgR S -->

          <div class="d-flex justify-content-start" v-if="MsgsLt.whm === 'l'">
            <img
              class="card-img rounded-circle img_cont_msg"
              src="../assets/img/logo.png"
              alt=""
            />

            <div class="msg_cotainer sizv20">
              {{ MsgsLt.msg }}
              <span class="msg_time text-white">{{ MsgsLt.Tm }}</span>
            </div>
          </div>

          <!-- MsgR E -->

          <!-- MsgS S -->
          <div
            class="d-flex justify-content-end"
            v-else-if="MsgsLt.whm === 'r'"
            style="word-break: break-all"
          >
            <div class="msg_cotainer_send sizv20">
              {{ MsgsLt.msg }}
              <span class="msg_time_send text-white">{{ MsgsLt.Tm }}</span>
            </div>
            <img
              class="card-img rounded-circle img_cont_msg"
              src="../assets/img/logo.png"
              alt=""
            />
          </div>
          <!-- MsgS E -->
        </div>
      </div>
    </div>
    <!-- MSG Footr S -->
    <div
      class="card-footer Gp0m0 bw100 rounded pb-5"
      style="width: 100%; border-radious: 1px solid red"
    >
      <div class="input-group Gp0m0 pb-5">
        <div class="input-group-append Gp0m0" style="height: 50px">
          <!-- <div class="image-upload">

                        <div class="d-none "> <input id="file-input" type="file">
                        </div>
                        <div class="input-group-append d-flex ">
                            <span class="input-group-text attach_btn blk text-white border-0"><i class="fas fa-paperclip"></i></span>
                                </div>
                            </div> -->
        </div>
        <input
          v-model="Wmessage"
          @keyup.enter="insrtMsg"
          class="
            form-control
            type_msg
            bg-white
            sizv20
            text-dark
            font-weight-bold
            siz20
            rounded
            border-0
          "
          placeholder="Type your message..."
        />
        <div class="input-group-append" @click="insrtMsg()">
          <span class="input-group-text px-3 send_btn bMbg7 text-white border-0"
            ><i class="fas fa-location-arrow"></i
          ></span>
        </div>
      </div>
    </div>
    <!-- MSG Footr End -->
  </div>
</template>

<script>
//import {$} from 'jquery';

export default {
  name: "Family",
  data() {
    return {
      Wmessage: "",
      MsgsLts: [
        {
          id: 1,
          whm: "r",
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia nam provident deserunt fugit qui quidem consectetur minus suscipit nobis, debitis dignissimos tenetur atque accusamus nihil. Tempore molestiae repellendus temporibus. 2 olor sit amet ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia nam provident deserunt fugit qui quidem consectetur minus suscipit nobis, debitis dignissimos tenetur atque accusamus nihil. Tempore molestiae repellendus temporibus. 2 ol ",
          Tm: "8:40 AM, Today",
        },
        {
          id: 2,
          whm: "l",
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia nam provident deserunt fugit qui quidem consectetur minus suscipit nobis, debitis dignissimos tenetur atque accusamus nihil. Tempore molestiae repellendus temporibus. 1 ",
          Tm: "8:45 AM, Today",
        },
        {
          id: 3,
          whm: "l",
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia nam provident deserunt fugit qui quidem consectetur minus suscipit nobis, debitis dignissimos tenetur atque accusamus nihil. Tempore molestiae repellendus temporibus. 1 ",
          Tm: "8:48 AM, Today",
        },
      ],
    };
  },
  methods: {
    insrtMsg: function () {
      this.MsgsLts.push({
        id: this.MsgsLts.slice(-1)[0]["id"] + 1,
        whm: "r",
        msg: this.Wmessage,
        Tm: "Exp TYime",
      });
      window
        .jq("#Chmsgh")
        .animate({ scrollTop: document.body.scrollHeight }, "fast");
      this.Wmessage = "";
    },
  },
};
</script>
 