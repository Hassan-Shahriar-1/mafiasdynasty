/* Safe house i s aplace mwhere user can stay by paying and anyone is not able to attack teh at all */

<template>
  <div>
    <div class="card">
      <div class="card-header blkgry p-2">
        <div class="col-12">
          <h4 class="text-center titlefnt">Safe House</h4>
        </div>
      </div>
      <div class="card-body Gp2m2">
        <div class="row Gp0m0">
          <div class="col-3"></div>
          <div class="col-6">
            <img
              src="../../assets/img/item/Gold-bar.png"
              class="text-center rounded-0 blksdout"
              style="height: 120px; width: 150px"
              alt=""
            />
          </div>
          <div class="col-3"></div>
        </div>
        <h6 class="dtlsfnt text-center py-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          ex! Expedita sed nam nulla hic in ratione rerum, libero quasi
          veritatis minus delectus voluptate veniam tenetur, quis ad unde
          consequatur!
        </h6>
        <div class="card p-1" v-if="activee == true">
          <div class="card-header blkd75 p-2">
            <div class="col-12">
              <h4 class="text-center titlefntnew">
                {{ activesafehouse.name }}
              </h4>
            </div>
          </div>
          <div class="card-body blkd50">
            <div class="row Gp0m0">
              <div class="col-3 p-0">
                <img
                  src="../../assets/img/item/1.gif"
                  class="card-img vertical-center"
                  alt=""
                />
              </div>
              <div class="col-6">
                <h5 class="titlefnt2 siz17">
                  Safe House for {{ activesafehouse.drtm }} Hourrrrr Which will
                  cost
                  {{ activesafehouse.csttp + " " + activesafehouse.cst }}
                </h5>
                <h6 class="mt-2">{{ this.tleft }} Hours left to lock</h6>
                <div class="blkred p-2 siz15">
                  <vue-countdown-timer
                    @start_callback="startCallBack('event started')"
                    @end_callback="endCallBack('event ended')"
                    :start-time="tmr"
                    :end-time="end"
                    :interval="1000"
                    :start-label="'Until start:'"
                    :end-label="' Time Left to lock'"
                    label-position="begin"
                    :end-text="'Event ended!'"
                    :day-txt="'days'"
                    :hour-txt="'hours'"
                    :minutes-txt="'minutes'"
                    :seconds-txt="'seconds'"
                  >
                  </vue-countdown-timer>
                </div>
                <div class="progress n_bar-a mt-1" style="height: 10px">
                  <div
                    class="progress-bar clRBrd bgD0"
                    id="itmBr"
                    style="width: 50%"
                  ></div>
                </div>
              </div>
              <div class="col-3 mt-4 Gp0m0">
                <!-- sttm endtm -->

                <div
                  class="mt-1 btn nBbg nBtn button5 btnfnt sizv15 btn-block p-1"
                  @click="deactive()"
                >
                  detivate
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activee == false">
          <div class="card p-1" v-for="(lst, i) in list" :key="i">
            <div class="card-header blkd75 p-2">
              <div class="col-12">
                <h4 class="text-center titlefntnew">{{ lst[0] }}</h4>
              </div>
            </div>
            <div class="card-body blkd50">
              <div class="row Gp0m0">
                <div class="col-3 p-0">
                  <img
                    src="../../assets/img/item/1.gif"
                    class="card-img vertical-center"
                    alt=""
                  />
                </div>
                <div class="col-6">
                  <h5 class="titlefnt2 siz17">
                    Safe House for {{ lst.drtm }} Hour Which will costsss
                    {{ lst.csttp }}
                  </h5>
                  <h6 class="mt-2">25 Hours left to lock</h6>
                  <div class="progress n_bar-a mt-1" style="height: 10px">
                    <div
                      class="progress-bar clRBrd bgD0"
                      id="itmBr"
                      style="width: 50%"
                    ></div>
                  </div>
                </div>
                <div class="col-3 Gp0m0">
                  <h6 class="dtlsfnt">Requirment</h6>
                  <h6 class="text-success dtlsfnt siz17">
                    {{ lst.cst }} {{ lst.csttp }}
                  </h6>
                  <div
                    v-if="activee == false"
                    class="
                      mt-1
                      btn
                      nBbg
                      nBtn
                      button5
                      btnfnt
                      sizv15
                      btn-block
                      p-1
                    "
                    @click="active(i)"
                  >
                    Activate
                  </div>
                  <!-- <div
                  v-if="activee == true"
                  class="mt-1 btn nBbg nBtn button5 btnfnt sizv15 btn-block p-1"
                  @click="deactive(i)"
                >
                  Detivate
                </div> -->
                </div>
              </div>
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
      list: Array,
      activesafehouse: "",
      activee: false,
      mft: " ",
      tmr: "",
      end: "",
      tleft: "",
    };
  },

  beforeUpdate() {
    this.$mgo.gt("safehouse/list", (res) => {
      console.log(res);
      if (res.status_code == 400) {
        this.list = res.list;
        console.log("this is safehousee list", this.list);
      } else if (res.status_code == 200) {
        this.tmr = res.activesafehouse.sttm;
        this.end = res.activesafehouse.endtm;
        console.log("time is ", this.tmr, this.end);
        this.activesafehouse = res.activesafehouse;
        this.activee = true;
      }
      /*  {
        this.tmr = res.activesafehouse.sttm;
        this.end = res.activesafehouse.endtm;
        this.activesafehouse = res.activesafehouse;
        this.activee = true;
      } */
    });
  },

  beforeCreate() {
    this.$mgo.gt("safehouse/list", (res) => {
      console.log(res);
      if (res.status_code == 400) {
        this.list = res.list;
        console.log("this is safehouse list", this.list);
      } else if (res.status_code == 200) {
        this.tmr = res.activesafehouse.sttm;
        console.log("time", this.tmr);
        this.end = res.activesafehouse.endtm;
        this.activesafehouse = res.activesafehouse;
        this.activee = true;
        console.log("active list", res.activesafehouse);
      }
    });
  },
  methods: {
    active(key) {
      this.$mgo.gt("safehouse/active/" + key, (rs) => {
        console.log("this is Key", key);
        console.log(rs);
        this.activee = true;
        console.log(rs.status_code, "data status code");
      });

      /*   console.log(this.rs.this.tmstrt, "from combaT"); */
    },
    deactive() {
      this.$mgo.gpp("safehouse/deactive", (rs) => {
        console.log(rs);
        this.activee = false;
        console.log(rs.status_code, "data status code daactive");
      });

      /*   console.log(this.rs.this.tmstrt, "from combaT"); */
    },
  },
};
</script>