
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
              <h6 class="Gp0m0 dtlsfnt">skill:{{ usrdata.skl }} <br /></h6>
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
              <router-link
                to="abilities"
                tag="button"
                class="btn nBtn Gp0m0 blkgry"
              >
                <i class="fas fa-award"></i> <br />Send Gift</router-link
              >
              <router-link
                to="trophies"
                tag="button"
                class="btn nBtn Gp0m0 blkgry"
                ><i class="fas fa-address-card"></i> <br />
                Trophies
              </router-link>
              <router-link to="pchat" tag="button" class="btn nBtn Gp0m0 blkgry"
                ><i class="fas fa-comments"></i><br />Message</router-link
              >
              <router-link
                to="request"
                tag="button"
                class="btn nBtn Gp0m0 blkgry"
                ><i class="fas fa-glass-cheers"></i> <br />request</router-link
              >
            </div>
          </div>

          <div class="row Gp0m0 itmbg rounded">
            <div class="col-3 Gp0m0 p-1">
              <div class="btn nBtn btn-block text-danger">
                <i class="fas fa-user-slash"></i> <br />D-clan
              </div>
              <div class="btn nBtn btn-block text-success">
                <i class="fas fa-users"></i> <br />Clan <br />Request
              </div>
              <router-link to="cablities"
                ><div class="btn nBtn btn-block">
                  <i class="fas fa-award"></i> <br />Ablities
                </div></router-link
              >
              <router-link to="badge"
                ><div class="btn nBtn btn-block">
                  <i class="fas fa-award"></i> <br />Badge
                </div></router-link
              >
              <router-link to="wall">
                <div class="btn nBtn btn-block">
                  <i class="fas fa-award"></i> <br />Wall
                </div></router-link
              >
              <router-link to="chealth"
                ><div class="btn nBtn btn-block">
                  <i class="fas fa-award"></i> <br />Health
                </div></router-link
              >
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
      <!-- Body Content End -->
    </div>
  </div>
</template>
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
      if (resp.status_code === 200) {
        this.usrdata = resp.data;
      }
    });
  },
  methods: {
    ppup() {
      this.$modal.show("ppup");
    },
    pphd() {
      this.$modal.hide("ppup");
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
