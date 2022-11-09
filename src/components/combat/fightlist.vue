/* Fight list is showing a list of attackable players anyone in game may have this kind of list and they can attack them and earn some points as in game views */

<template>
  <div>
    <div v-if="atk == true">
      <div class="fightbg card">
        <h1 class="text-center subtitlefnt mb-0">Attack</h1>
        <div class="container-fluid Gp0m0">
          <div class="row no-gutters">
            <div class="col-12">
              <h4 class="hr-sect titlefnt text-center">Fight</h4>
            </div>
            <div class="col-6 p-2 px-3">
              <div class="row p-2">
                <h6 class="Gp0m0 float-right">{{ bh.hpst }}/{{ bh.hped }}</h6>
                <div class="progress n_bar-a w-100" style="height: 8px">
                  <div
                    class="progress-bar clRBrd bgD0"
                    id="itmBr"
                    :style="{ width: bh.hpW + '%' }"
                  ></div>
                </div>
              </div>
            </div>

            <div class="col-6 p-2 px-3">
              <div class="row p-2">
                <h6 class="Gp0m0 float-right">{{ bh.hpost }}/{{ bh.hpoed }}</h6>
                <div class="progress n_bar-a w-100" style="height: 8px">
                  <div
                    class="progress-bar clRBrd bgD0"
                    id="itmBr"
                    :style="{ width: bh.hpoW + '%' }"
                  ></div>
                </div>
              </div>
            </div>
            <div class="col-5 Gp0m0 px-2">
              <h6 class="blkgry text-center bdr25 px-2 py-2">Haibur Rahman</h6>
            </div>
            <div class="col-2 Gp0m0">
              <h2 class="subtitlefnt text-center">VS</h2>
            </div>
            <div class="col-5 Gp0m0 px-2">
              <h6 class="blkgry text-center bdr25 px-2 py-2">{{ whos }}</h6>
            </div>

            <div class="col-6 Gp0m0">
              <img
                class="card-img"
                src="../../assets/img/fight/mlbdy.png"
                alt=""
              />
            </div>
            <div class="col-6 Gp0m0">
              <img
                class="card-img"
                src="../../assets/img/fight/fmbdy.png"
                alt=""
              />
            </div>

            <div class="col-3 Gp0m0">
              <div class="mx-1 blkgry">
                <h6 class="text-center">Level:53 <br />Clan:45</h6>
              </div>
            </div>
            <div class="col-3 Gp0m0">
              <div class="mx-1 blkgry">
                <h6 class="text-center">Skill Rank <br />1562</h6>
              </div>
            </div>
            <div class="col-3 Gp0m0">
              <div class="mx-1 blkgry">
                <h6 class="text-center">Level:53 <br />Clan:455</h6>
              </div>
            </div>
            <div class="col-3 Gp0m0">
              <div class="mx-1 blkgry">
                <h6 class="text-center">Skill Rank <br />155562</h6>
              </div>
            </div>

            <div
              class="
                card-img-overlay
                text-white
                d-flex
                flex-column
                justify-content-center
              "
              style="z-index: +100"
            >
              <div class="opcty5 blkgry rounded-1" style="width: 100px">
                <h4 class="card-title mb-0 text-center p-1">Gone</h4>
                <img
                  class="card-img p-2"
                  src="../../assets/img/item/1.gif"
                  alt=""
                />

                <div
                  class="btn btn-block nBtn blkred text-center"
                  @click="demoV1(dfnd, arkey)"
                >
                  attack
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row blkgry Gp0m0">
      <div class="col-2 p-1">
        <img
          src="../../assets/img/item/1.gif"
          class="card-img rounded-circle vertical-center"
          alt=""
        />
      </div>
      <div class="col-10">
        <h3 class="p-4 subtitlefnt">
          Fight List({{ cnt }})
          <h5>{{ grnd }}</h5>
        </h3>
      </div>
    </div>
    <div class="row no-gutters w-100">
      <ul class="list-group w-100" v-for="(masrc, i) in mbrlst" :key="i">
        <li class="list-group-item blk50 p-1">
          <div class="row Gp0m0 rounded blkd75 p-2">
            <div class="col-2 Gp0m0">
              <img src="../../assets/img/item/1.gif" class="card-img" alt="" />
            </div>
            <div class="col-8 px-1">
              <h5 class="text-info titlefnt2 siz25">{{ masrc.name }}</h5>
              <div class="row Gp0m0">
                <div class="col-6 p-0">
                  <h6 class="dtlsfnt siz17">Cash: {{ masrc.mcash }}</h6>
                </div>
                <div class="col-6 pl-2">
                  <h6 class="dtlsfnt siz17">Org: {{ masrc.org }}</h6>
                </div>
                <div class="col-6 p-0">
                  <h6 class="dtlsfnt siz17">Level: {{ masrc.lvl }}</h6>
                </div>
                <div class="col-6 pl-2">
                  <h6 class="dtlsfnt siz17">Rank: {{ masrc.rank }}</h6>
                </div>
              </div>
            </div>
            <!--  <div class="col-2 p-1"> <router-link :to="{path:'/game/attack/'+masrc.id}" @click="attack()"> <div class=" button4 nBtn mt-2 border py-2 rounded"><h6 class="text-center"><i class="fab fa-wolf-pack-battalion"></i></h6></div></router-link></div> -->
            <div class="col-2 p-1">
              <div
                @click="attack(masrc.id, i, masrc.name, masrc.lvl, mid, key)"
              >
                <div class="button4 nBtn mt-2 border py-2 rounded">
                  <h6 class="text-center">
                    <i class="fab fa-wolf-pack-battalion"></i>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- fight killed popup start -->
    <modal
      name="fdone"
      :width="300"
      :isAutoHeight="true"
      class="mblr bdr p-1 rounded-2"
    >
      <div class="row Gp0m0 card blkgry">
        <div class="card-header blkgry px-1 py-0">
          <h4 class="rounded-0 text-center py-1 w-100" style="position: sticky">
            Welcome To the flight
            <span class="float-right" style="margin-right: 2%" @click="hide()"
              ><div class="crossbtn"><i class="fas fa-times"></i></div
            ></span>
          </h4>
        </div>
        <div
          class="card-body tmibg p-0"
          style="height: 250px; overflow: scroll"
        >
          <h4 class="text-center">
            You have successfully killed name Moshiur {{ whos }}
          </h4>
        </div>
      </div>
    </modal>

    <!-- fight killed popup End -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      bh: {
        hpW: 0,
        hpst: 950,
        hped: 1000,
        hpoW: 0,
        hpost: 900,
        hpoed: 1000,
        whos: "",
        me: "",
      },
      flstnmbr: 163,
      mbrlst: Array,
      msg: "",
      atk: "",
      cnt: "",
      dfnd: Number,
      arkey: Number,
      grnd: "",
    };
  },

  /* mounted(){this.atk}, */
  props: ["who"],

  beforeCreate() {
    this.$mgo.gt("/fight/list/1", (rs) => {
      console.log(rs);
      if (rs.sts == "fghtlst") {
        this.grnd = rs.lv;
        this.mbrlst = rs.list;
        this.cnt = rs.cnt;
        console.log("list", this.mbrlst);
      } else {
        this.msg = rs.msg;
      }
    });
  },
  updated() {
    this.TptrgrBr();
    this.whos;
    /* 
              this.bh.hpost
              this.bh.hpoed
              this.bh.hpst
              this.bh.hped */
  },
  mounted: function () {
    this.TptrgrBr();
    this.whos;
    this.attack();
  },

  methods: {
    attack(mid, key, name) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // for chorme
      this.arkey = key;
      console.log(mid);
      this.$mgo.gt("/fight/attack/" + mid + "/" + key + "/Fight", (res) => {
        this.atk = false;
        if (res.sts == "found") {
          (this.atk = true),
            (this.whos = name),
            (this.me = res.mme),
            (this.dfnd = mid);
          this.reset_atas();
          console.log(this.whos);
        } else {
          this.atk = false;
        }
      });
    },

    reset_atas() {
      this.bh.hpW = 0;
      this.bh.hpst = 950;
      this.bh.hped = 1000;
      this.bh.hpoW = 0;
      this.bh.hpost = 900;
      this.bh.hpoed = 1000;
    },
    TptrgrBr() {
      this.bh.hpW = (100 / this.bh.hped) * this.bh.hpst;
      this.bh.hpoW = (100 / this.bh.hpoed) * this.bh.hpost;
    },
    demoV1(mid, key) {
      this.$mgo.gt("/fight/attack/" + mid + "/" + key + "/arena", (res) => {
        console.log(res);
      });
      if (
        (this.bh.hpst != this.bh.hped) &
        (this.bh.hpst > 0) &
        (this.bh.hpost > 0)
      ) {
        this.bh.hpst = this.bh.hpst - 20;

        if (this.bh.hpst <= 0) {
          this.bh.hpst = 0;

          this.$modal.show("fdone");
        }
      }

      if (
        (this.bh.hpost != this.bh.hpoed) &
        (this.bh.hpost > 0) &
        (this.bh.hpst > 0)
      ) {
        this.bh.hpost = this.bh.hpost - 20;
        if (this.bh.hpost <= 0) {
          this.bh.hpost = 0;
          this.$modal.show("fdone");
        }
      }
    },
    hide() {
      this.$modal.hide("fdone");
    },
  },
};
</script>