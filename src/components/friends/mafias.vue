
/* Mafias section consist a input box where mafias can send their clan cypher with them and adddressed them as a invitation there  */

<template>
  <div>
    <div class="row Gp0m0 mt-1">
      <div class="card-body p-1">
        <div class="input-group mb-3">
          <input type="text" class="form-control rounded-0 form-control-lg" />
          <div class="input-group-append">
            <span class="input-group-text Gp0m0" id="basic-addon2">
              <button
                class="btn nBtn blkgry btn-block mr-1"
                @click="tog ^= true"
              >
                <i class="fas fa-search"></i></button
            ></span>
          </div>

          <div class="row no-gutters w-100" v-show="tog">
            <ul class="list-group w-100" v-for="(masrc, i) in frndlst" :key="i">
              <li class="list-group-item blk50 p-2 mt-1">
                <div class="row Gp0m0 rounded blkd75 mt-1 p-2">
                  <div class="col-2 Gp0m0 p-1">
                    <img
                      src="../../assets/img/1.png"
                      class="card-img bdrblk2"
                      alt=""
                    />
                  </div>
                  <div class="col-6">
                    <h5 class="subtitlefnt">{{ masrc.name }}</h5>
                    <h6 class="dtlsfnt">{{ masrc.lvl }}</h6>
                  </div>
                  <div class="col-4">
                    <div class="button4 nBtn mt-2 border py-2 rounded">
                      <h6 class="text-center">View profile</h6>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h6 v-if="errmsg" class="text-white text-center w-100 jaldi">
        {{ errmsg }}
      </h6>
      <div v-else class="row no-gutters py-1">
        <div
          class="col-6 Gp0m0 no-guttersb3px"
          v-for="(list, i) in frndlst"
          :key="i"
        >
          <div class="bdrblk2 tmibg rounded blksdo" @click="show(list.uid)">
            <div class="row py-2 no-gutters bdr1">
              <div class="col-3">
                <img src="../../assets/img/1.png" class="card-img p-1" alt="" />
              </div>
              <div class="col-9 px-1">
                <h5
                  class="text-widge-bold subtitlefnt siz15"
                  style="word-break: break-all"
                >
                  {{ list.name }}
                </h5>
                <h6 class="dtlsfnt">level:{{ list.lvl }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal
      name="mdlfndsts"
      animation="slideDown"
      :width="300"
      :height="227"
      :isAutoHeight="true"
      @before-open="beforeOspen"
      class="mblr"
    >
      <div class="row Gp0m0 tmibg bdr3 p-3 blksdout rounded">
        <div class="col-12 Gp0m0">
          <router-link :to="{ path: '/game/otrprofile/' + this.uid }"
            ><div class="btn nBtn btn-lg text-center btnbfnt btn-block sizv35">
              View
            </div></router-link
          >
        </div>
        <div class="col-12 Gp0m0">
          <div class="btn nBtn btn-lg text-center btnbfnt btn-block sizv35">
            unfriend
          </div>
        </div>
        <div class="col-12 Gp0m0">
          <router-link :to="{ path: '/game/chat/' + this.uid }">
            <div class="btn nBtn btn-lg text-center btnbfnt btn-block sizv35">
              Message
            </div></router-link
          >
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
      tog: false,
      frndlst: [],
      uid: "",
      errmsg: "",
    };
  },

  beforeCreate() {
    this.axios.get("/mp/mlist").then((response) => {
      if (response.status_code === 200) {
        this.frndlst = response.data;
      } else {
        this.errmsg = response.msg;
      }
      console.log(response);
    });
  },

  methods: {
    beforeOspen() {
      setTimeout(() => {
        window.jq(".v--modal").height(window.jq("#gtmhyHt").outerHeight());
      }, 10);
    },
    show(id) {
      this.uid = id;
      this.$modal.show("mdlfndsts", { height: "auto" });
    },
    hide() {
      this.$modal.hide("mdlfndsts");
    },
  },
};
</script>