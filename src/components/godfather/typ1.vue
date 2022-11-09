
/* Godfather type one is Fredo Carlos shortformed as (typ1) and this page will reward something after a time limit by the server side data manipulation */

<template>
  <div class="bMbg3">
    <div class="row py-2 text-center Gp0m0">
      <h4 class="hr-sect jaldi">Godfathers</h4>
    </div>
    <div class="card Gp0m0">
      <div class="card-header blkgry text-center">
        <h4 class="titlefnt">Fredo Carlos</h4>
      </div>
      <h6 class="dtlsfnt p-2 blkgry bdr1">
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
      </h6>
      <div class="blkgry p-2" v-if="strttm != ''">
        <h4 class="w-100 text-center">Time Left To unlock Box</h4>
        <h5 class="w-100 text-center"></h5>
        <vue-countdown-timer
          @start_callback="startCallBack('You Have to Until Finish This Time')"
          @end_callback="endCallBack('You Can Select Any Box')"
          :start-time="strttm"
          :end-time="endtm"
          :interval="1000"
          label-position="begin"
          :end-text="'Event ended!'"
          :day-txt="'days'"
          :hour-txt="'hours'"
          :minutes-txt="'minutes'"
          :seconds-txt="'seconds'"
        >
        </vue-countdown-timer>
      </div>

      <div class="card-body">
        <div class="row Gp0m0" v-if="box != ''">
          <div class="col-6 p-0">
            <div
              class="rotation_ainm m-2 p-0 btn nBtn nBbg blkgry"
              @click="show(), itmgt()"
            >
              <img class="card-img" src="../../assets/img/item/1.gif" alt="" />
              <div class="card-image-overlay">
                <div
                  class="
                    card-img-overlay
                    text-white
                    d-flex
                    flex-column
                    justify-content-center
                  "
                >
                  <h4 class="card-title subtitlefnt siz18">Fredo Carlos</h4>
                  <h6 class="card-subtitle mb-2 siz15">Gamber</h6>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 p-0">
            <div
              class="rotation_ainm m-2 p-0 btn nBtn nBbg blkgry"
              @click="show(), itmgt()"
            >
              <img class="card-img" src="../../assets/img/item/1.gif" alt="" />
              <div class="card-image-overlay">
                <div
                  class="
                    card-img-overlay
                    text-white
                    d-flex
                    flex-column
                    justify-content-center
                  "
                >
                  <h4 class="card-title subtitlefnt siz18">Fredo Carlos</h4>
                  <h6 class="card-subtitle mb-2 siz15">Gamber</h6>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 p-0">
            <div
              class="rotation_ainm m-2 p-0 btn nBtn nBbg blkgry"
              @click="show(), itmgt()"
            >
              <img class="card-img" src="../../assets/img/item/1.gif" alt="" />
              <div class="card-image-overlay">
                <div
                  class="
                    card-img-overlay
                    text-white
                    d-flex
                    flex-column
                    justify-content-center
                  "
                >
                  <h4 class="card-title subtitlefnt siz18">Fredo Carlos</h4>
                  <h6 class="card-subtitle mb-2 siz15">Gamber</h6>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 p-0">
            <div
              class="rotation_ainm m-2 p-0 btn nBtn nBbg blkgry"
              @click="show(), itmgt()"
            >
              <img class="card-img" src="../../assets/img/item/1.gif" alt="" />
              <div class="card-image-overlay">
                <div
                  class="
                    card-img-overlay
                    text-white
                    d-flex
                    flex-column
                    justify-content-center
                  "
                >
                  <h4 class="card-title subtitlefnt siz18">Fredo Carlos</h4>
                  <h6 class="card-subtitle mb-2 siz15">Gamber</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <modal
        name="Gitmso"
        class="mblr bdr p-1 rounded-2"
        style="height: 300px"
        :width="300"
        :isAutoHeight="true"
        @before-open="beforeOspen"
      >
        <div class="card Gp0m0" style="height: 300px">
          <div class="card-header blkgry p-1">
            <h4
              class="rounded-0 text-center py-1 w-100"
              style="position: sticky"
            >
              Item Found
              <span
                class="float-right"
                style="margin-right: 2%"
                @click="hide()"
              >
                <div class="crossbtn"><i class="fas fa-times"></i></div
              ></span>
            </h4>
          </div>
          <div class="card-body Gp0m0 tmibg">
            <div class="row Gp0m0 mt-3">
              <div class="col-6">
                <img class="card-img" :src="mdlitmimg" alt="" />
              </div>
              <div class="col-6 Gp0m0">
                <h3 class="subtitlefnt">You found item {{ mdlimnm }}.</h3>
              </div>
            </div>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      box: "",
      mdlitmimg: "",
      mdlimnm: "",
      strttm: "",
      endtm: "",
    };
  },

  methods: {
    show() {
      this.$modal.show("Gitmso");
    },
    hide() {
      this.$modal.hide("Gitmso");
      this.$router.push("/game/Godfathers");
    },
    itmgt() {
      this.$mgo.gt("elders/eld1/itm/get", (res) => {
        console.log(res);
        console.log(res.data.img);
        if (res.sts == "itmgt") {
          (this.mdlimnm = res.data.name), (this.mdlitmimg = res.data.img);
        }
      });
    },
    getingo() {
      this.$mgo.gt("elders/get/1", (res) => {
        console.log(res);
        if (res.sts == "eld1") {
          this.box = res.sts;
        } else if (res.sts == "eldtm") {
          this.box = "";
          this.strttm = res.now;
          // this.start-time=res.data
          this.endtm = res.endtm;
          console.log(this.endtm);
        }
      });
    },
    startCallBack: function (x) {
      console.log(x);
    },
    endCallBack: function (x) {
      console.log(x);
    },
  },

  mounted() {
    this.getingo();
    console.log(this.endtm);
  },
};
</script>