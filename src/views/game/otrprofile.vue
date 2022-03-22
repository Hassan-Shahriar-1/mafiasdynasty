
<template>
  <div class="container Gp0m0 jaldi">
    <div class="StryCntnr">
      <div class="mrgnbtm">
        <div class="container-fluid no-gutters Gp0m0">
          <div class="row Gp0m0 blksdout rounded bdr3 tmibg">
            <div class="col-4 Gp0m0 p-2">
              <img
                class="card-img bdr3 rounded"
                :src="require('../../assets/img/item/' + MmnDtlst.mimg)"
                alt=""
              />
            </div>

            <div class="col-8 p-2 px-0">
              <h3 class="Gp0m0 titlefnt">{{ usrdata.name }} <br /></h3>
              <h6 class="Gp0m0 dtlsfnt">Skill:{{ usrdata.skl }} <br /></h6>
              <h6 class="Gp0m0 dtlsfnt">Level:{{ usrdata.lvl }} <br /></h6>
              <h6 class="Gp0m0 dtlsfnt">
                Organization:{{ usrdata.ogr }}
                <button class="btn nBtn button3 float-right sizv25 mt-1">
                  <i class="fas fa-share-alt"></i> <br />
                  Share
                </button>
              </h6>
            </div>
          </div>

          <div
            class="bw100 w-100 rounded jaldi blkgry"
            role="group"
            aria-label="..."
          >
            <div class="btn-group bw100 w-100 sizv13">
              <div
                tag="button"
                class="btn nBtn Gp0m0 blkgry"
                @click="cgiftso()"
              >
                <i class="fas fa-gift"></i> <br />
                <h4 class="siz15">Send Gift</h4>
              </div>
              <router-link
                to="/ctrophy"
                tag="button"
                class="btn nBtn Gp0m0 blkgry"
                ><i class="fas fa-trophy"></i> <br />
                <h4 class="siz15">Trophies</h4>
              </router-link>
              <router-link
                to="/cproperty"
                tag="button"
                class="btn nBtn Gp0m0 blkgry"
                ><i class="fas fa-hotel"></i><br />
                <h4 class="siz15">Property</h4></router-link
              >
              <router-link
                to="/cminions"
                tag="button"
                class="btn nBtn Gp0m0 blkgry"
                ><i class="fas fa-glass-cheers"></i> <br />
                <h4 class="siz15">Minions</h4></router-link
              >
            </div>
          </div>

          <div class="row Gp0m0 itmbg rounded">
            <div class="col-3 Gp0m0 p-1">
              <popover name="foo" topCenter> Hello clan </popover>
              <div class="btn nBtn btn-block" v-popover:foo>
                <i class="fas fa-user-slash"></i> <br />
                <h4 class="siz13 text-danger">D-clan</h4>
              </div>
              <div class="btn nBtn btn-block">
                <i class="fas fa-users"></i> <br />
                <h4 class="siz13 text-success">Clan <br />Request</h4>
              </div>
              <div class="btn nBtn btn-block">
              <router-link to="/cablities"
                >
                  <i class="fas fa-gopuram"></i> <br />
                  <h4 class="siz13">Ablities</h4>
                </router-link> </div>
                <div class="btn nBtn btn-block">
                    <router-link to="/cabout">
                        <i class="far fa-address-card"></i> <br />
                        <h4 class="siz13">About</h4>
                    </router-link> 
                </div>

             <div class="btn nBtn btn-block"> <router-link to="/badge">
                  <i class="fas fa-award"></i> <br />
                  <h4 class="siz13">Badge</h4>
                </router-link> </div>


                <div class="btn nBtn btn-block">
              <router-link to="/wall">
                  <i class="fas fa-pallet"></i> <br />
                  <h4 class="siz13">Wall</h4>
                </router-link>
                </div>
                
              <div class="btn nBtn btn-block" @click="ppup()">
                <i class="fas fa-heartbeat"></i> <br />
                <h4 class="siz13">
                  Send <br />
                  Abilities
                </h4>
              </div>
            </div>
            <div class="col-9 Gp0m0 tmibg">
              <router-view></router-view>

              <div class="card mx-1 my-2 rounded grybdr">
                <div class="card-header blkgry p-0">
                  <h3 class="text-center">Mafia States</h3>
                  <h6 class="text-center">Level:1000</h6>
                </div>
                <div class="card-body tmibg">
                  <div class="row">
                    <div class="col-6 p-1">
                      <h6 class="blk bdr1 py-2 rounded text-center">Toxic5</h6>
                    </div>
                    <div class="col-6 p-1">
                      <h6 class="blk bdr1 py-2 rounded text-center">
                        Tempting3
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mx-1 my-2 rounded grybdr">
                <div class="card-header blkgry p-0">
                  <h3 class="text-center">Fight States</h3>
                  <h6 class="text-center">Level:1000</h6>
                </div>
                <div class="card-body tmibg">
                  <div class="row">
                    <div class="col-6 p-1">
                      <h6 class="blk py-2 rounded text-center">Toxic5</h6>
                    </div>
                    <div class="col-6 p-1">
                      <h6 class="blk py-2 rounded text-center">Tempting3</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mx-1 my-2 rounded grybdr">
                <div class="card-header blkgry p-0">
                  <h3 class="text-center">Arena States</h3>
                  <h6 class="text-center">Level:1000</h6>
                </div>
                <div class="card-body tmibg">
                  <div class="row">
                    <div class="col-6 p-1">
                      <h6 class="blk blkbdr py-2 rounded text-center">
                        Toxic5
                      </h6>
                    </div>
                    <div class="col-6 p-1">
                      <h6 class="blk py-2 rounded text-center">Tempting3</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mx-1 my-2 rounded grybdr">
                <div class="card-header blkgry p-0">
                  <h3 class="text-center">Activity</h3>
                  <h6 class="text-center">Level:1100</h6>
                </div>
                <div class="card-body tmibg">
                  <div class="row">
                    <div class="col-6 p-1">
                      <h6 class="blk blkbdr py-2 rounded text-center">
                        Toxic5
                      </h6>
                    </div>
                    <div class="col-6 p-1">
                      <h6 class="blk py-2 rounded text-center">Tempting3</h6>
                    </div>
                    <div class="col-6 p-1">
                      <h6 class="blk blkbdr py-2 rounded text-center">
                        Toxic5
                      </h6>
                    </div>
                    <div class="col-6 p-1">
                      <h6 class="blk py-2 rounded text-center">Tempting3</h6>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6 p-1">
                      <div class="card">
                        <img
                          class="card-img-top" :src="require('../../assets/img/item/' + MmnDtlst.mimg)" alt="Card image cap"/>
                        <div class="card-body p-1">
                          <p class="card-text p-2">Some quick</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 p-1">
                      <div class="card">
                        <img
                          class="card-img-top"
                          :src="
                            require('../../assets/img/item/' + MmnDtlst.mimg)
                          "
                          alt="Card image cap"
                        />
                        <div class="card-body p-1">
                          <p class="card-text p-2">Some quick</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mx-1 my-2 rounded grybdr">
                <div class="card-header blkgry p-0">
                  <h3 class="text-center">Power</h3>
                  <h6 class="text-center">Level:1200</h6>
                </div>
                <div class="card-body tmibg">
                  <div class="row">
                    <div class="col-6 p-1">
                      <div class="card">
                        <img
                          class="card-img-top"
                          :src="
                            require('../../assets/img/item/' + MmnDtlst.mimg)
                          "
                          alt="Card image cap"
                        />
                        <div class="card-body p-1">
                          <p class="card-text p-2">Some quick</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 p-1">
                      <div class="card">
                        <img
                          class="card-img-top"
                          :src="
                            require('../../assets/img/item/' + MmnDtlst.mimg)
                          "
                          alt="Card image cap"
                        />
                        <div class="card-body p-1">
                          <p class="card-text p-2">Some quick</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6 p-1">
                      <h6 class="blk blkbdr py-2 rounded text-center">
                        Toxic5
                      </h6>
                    </div>
                    <div class="col-6 p-1">
                      <h6 class="blk py-2 rounded text-center">Tempting3</h6>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6 p-1">
                      <h6 class="blk blkbdr py-2 rounded text-center">
                        Toxic5
                      </h6>
                    </div>
                    <div class="col-6 p-1">
                      <h6 class="blk py-2 rounded text-center">Tempting3</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <modal
        name="ppup"
        :width="300"
        :isAutoHeight="true"
        @before-open="beforeOspen"
        class="mblr"
      >
        <div class="row Gp0m0 tmibg" id="ablht">
          <div class="card">
            <div class="card-header p-2 blkgry">
              <h5 class="subtitlefnt">
                Send Your Abilities to Me
                <h5 class="float-right" @click="pphd()">
                  <i class="text-danger fas fa-window-close"></i>
                </h5>
              </h5>
            </div>
            <div class="card-body Gp0m0 tmibg">
              <div class="row Gp0m0 py-2">
                <div class="col-2 Gp0m0">
                  <img
                    class="card-img"
                    src="../../assets/img/item/1.gif"
                    alt=""
                  />
                </div>
                <div class="col-4 Gp0m0 mt-2">
                  <h6 class="siz15">Habibur Rahman</h6>
                </div>
                <div class="col-3 Gp0m0 mt-2">
                  <select name="Select" id="" class="w-100 text-dark">
                    <option selected class="text-dark">Select</option>
                    <option value="1">1</option>
                    <option value="3">2</option>
                    <option value="5">3</option>
                    <option value="7">4</option>
                    <option value="10">5</option>
                  </select>
                </div>
                <div class="col-3 Gp0m0">
                  <div class="btn nBtn button5 btn-block btn-lg py-1 px-0">
                    <h4 class="siz15">
                      Send<i class="fas fa-paper-plane"></i>
                    </h4>
                  </div>
                </div>
              </div>

              <div class="row Gp0m0 py-2">
                <div class="col-2 Gp0m0">
                  <img
                    class="card-img"
                    src="../../assets/img/item/1.gif"
                    alt=""
                  />
                </div>
                <div class="col-4 Gp0m0 mt-2">
                  <h6 class="siz15">Habibur Rahman</h6>
                </div>
                <div class="col-3 Gp0m0 mt-2">
                  <select name="Select" id="sablits" class="w-100 text-dark">
                    <option selected class="text-dark">Select</option>
                    <option value="1">1</option>
                    <option value="3">2</option>
                    <option value="5">3</option>
                    <option value="7">4</option>
                    <option value="10">5</option>
                  </select>
                </div>
                <div class="col-3 Gp0m0">
                  <div class="btn nBtn button5 btn-block btn-lg py-1 px-0">
                    <h4 class="siz15">
                      Send<i class="fas fa-paper-plane"></i>
                    </h4>
                  </div>
                </div>
              </div>
              
              <div class="row Gp0m0 py-2">
                <div class="col-2 Gp0m0">
                  <img
                    class="card-img"
                    src="../../assets/img/item/1.gif"
                    alt=""
                  />
                </div>
                <div class="col-4 Gp0m0 mt-2">
                  <h6 class="siz15">Habibur Rahman</h6>
                </div>
                <div class="col-3 Gp0m0 mt-2">
                  <select name="Select" id="sablits" class="w-100 text-dark">
                    <option selected class="text-dark">Select</option>
                    <option value="1">1</option>
                    <option value="3">2</option>
                    <option value="5">3</option>
                    <option value="7">4</option>
                    <option value="10">5</option>
                  </select>
                </div>
                <div class="col-3 Gp0m0">
                  <div class="btn nBtn button5 btn-block btn-lg py-1 px-0">
                    <h4 class="siz15">
                      Send<i class="fas fa-paper-plane"></i>
                    </h4>
                  </div>
                </div>
              </div>
              
              <div class="row Gp0m0 py-2">
                <div class="col-2 Gp0m0">
                  <img
                    class="card-img"
                    src="../../assets/img/item/1.gif"
                    alt=""
                  />
                </div>
                <div class="col-4 Gp0m0 mt-2">
                  <h6 class="siz15">Habibur Rahman</h6>
                </div>
                <div class="col-3 Gp0m0 mt-2">
                  <select name="Select" id="sablits" class="w-100 text-dark">
                    <option selected class="text-dark">Select</option>
                    <option value="1">1</option>
                    <option value="3">2</option>
                    <option value="5">3</option>
                    <option value="7">4</option>
                    <option value="10">5</option>
                  </select>
                </div>
                <div class="col-3 Gp0m0">
                  <div class="btn nBtn button5 btn-block btn-lg py-1 px-0">
                    <h4 class="siz15">
                      Send<i class="fas fa-paper-plane"></i>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </modal>

      <modal
        name="cgift"
        :width="300"
        :height="250"
        :isAutoHeight="true"
        @before-open="beforeOspen"
        class="mblr"
      >
        <div class="row Gp0m0 " id="ablht">
          <div class="card w-100" style="height:300px; width:250px;">
            <div class="card-header p-2 blkgry">
              <h5 class="subtitlefnt">
                Send Your Abilities to Me
                <h5 class="float-right" @click="cgifthd()">
                  <i class="text-danger fas fa-window-close"></i>
                </h5>
              </h5>
            </div>
            <div class="card-body Gp0m0 tmibg p-1"><h6>Lorem laudantium cupiditate vel vero!</h6></div>
          </div>
        </div>
      </modal>
      <!-- Body Content End -->
    </div>
  </div>
</template>

<style scoped>
[data-popover="foo"] {
  background: rgb(255, 255, 255);
  color: #000000;
  padding: 15px 0px;
  position: top center;
  font-size: 12px;
  line-height: 1.5;
  margin: 5px;
}
</style>
<script>
export default {
  props: ["uid"],
  name: "otrprofile",
  data() {
    return {
      skp: {
        eng: 0,
        stmn: 0,
        hlth: 0,
        atck: 0,
        defnc: 0,
      },
      usrdata: [],
      MmnDtlst: {
        mname: "HRhabib",
        mststs: "Modern Vampire",
        mgndr: "Gender:male",
        mage: "Age:25",
        mimg: "1.gif",

        mn: [
          {
            clk: "1.png",
            nm: "habib",
            mu: "pare",
            icn: "naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          },
          {
            clk: "1.png",
            nm: "habib",
            mu: "pare",
            icn: "naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          },
          {
            clk: "1.png",
            nm: "habib",
            mu: "pare",
            icn: "naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          },
          {
            clk: "1.png",
            nm: "habib",
            mu: "pare",
            icn: "naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          },
          {
            clk: "1.png",
            nm: "habib",
            mu: "pare",
            icn: "naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          },
          {
            clk: "1.png",
            nm: "habib",
            mu: "pare",
            icn: "naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          },
        ],

        bp: [
          {
            clk: "1.png",
            nm: "habib",
          },
          {
            clk: "1.png",
            nm: "habib",
          },
          {
            clk: "1.png",
            nm: "habib",
          },
          {
            clk: "1.png",
            nm: "habib",
          },
          {
            clk: "1.png",
            nm: "habib",
          },
          {
            clk: "1.png",
            nm: "habib",
          },
        ],
      },
    };
  },
  created() {
    this.$mgo.gt("mp/mafiaprf/" + this.$route.params.uid, (resp) => {
      if (resp.sts == "ok") {
        this.usrdata = resp.data;
      }
    });
  },
  methods: {
    beforeOspen() {
      setTimeout(() => {
        window.jq(".vm--modal").height(window.jq("#ablht").outerHeight());
      }, 10);
    },
    ppup() {
      this.$modal.show("ppup", { height: "auto" });
    },
    pphd() {
      this.$modal.hide("ppup");
    },

    cgiftso() {
      this.$modal.show("cgift", { height: "auto" });
    },
    cgifthd() {
      this.$modal.hide("cgift");
    },

    add(val) {
      this.skp[val] = parseInt(this.skp[val]) + 1;
    },
    sub(val) {
      this.skp[val] = parseInt(this.skp[val]) - 1;
    },
  },
  beforeCreate() {
    console.log(this.axios.defaults.headers.Authorization);
  },
};
</script>
