<template>
  <div class="mb-2">
    <div class="row py-2 text-center Gp0m0">
      <h4 class="hr-sect titlefnt">Combat</h4>
    </div>
    <div class="row Gp0m0">
      <div class="col-4">
        <img
          class="card-img"
          src="../../assets/img/custom profile/01.jpg"
          alt=""
        />
      </div>
      <div class="col-8 bg-transparent Gp0m0">
        <div class="mb-2" v-if="chk == true">
          <div class="row Gp0m0 p-2">
            <div class="col-2"></div>
            <div class="col-8">
              <img
                class="card-img"
                src="../../assets/img/custom profile/01.jpg"
                alt=""
              />
            </div>
            <div class="col-2"></div>

            <div class="blkd75 p-2 siz15">
              <vue-countdown-timer
                @start_callback="startCallBack('event started')"
                @end_callback="endCallBack('event ended')"
                :start-time="tmstrt"
                :end-time="tmend"
                :interval="1000"
                :start-label="'Until start:'"
                :end-label="' Time Left:'"
                label-position="begin"
                :end-text="'Event ended!'"
                :day-txt="'days'"
                :hour-txt="'hours'"
                :minutes-txt="'minutes'"
                :seconds-txt="'seconds'"
              >
              </vue-countdown-timer>
            </div>
            <p class="mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisic ut qui porro
              corrupti, debitis fugit quisquam consequuntur maxime corporis
              doloribus aliquid odit odio modi. Aut, soluta!
            </p>
          </div>
        </div>
        <div v-if="chk == false">
          <router-link to="fightlist">
            <div class="row Gp0m0 py-2 my-1 blkgry">
              <div class="col-3">
                <img
                  class="card-img"
                  src="../../assets/img/item/1.gif"
                  alt=""
                />
              </div>
              <div class="col-9 Gp0m0">
                <h4 class="subtitlefnt">Fightlist ({{ fghtcnt }})</h4>
                <h5 class="subtitlefnt">{{ flvl }}</h5>
              </div>
              <div class="col-12">
                <div class="progress n_bar-a w-100" style="height: 8px">
                  <div
                    class="progress-bar clRBrd bgD0"
                    id="itmBr"
                    :style="{ width: th.fl + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </router-link>

          <router-link to="arenalist">
            <div class="row Gp0m0 py-2 my-1 blkgry">
              <div class="col-3">
                <img
                  class="card-img"
                  src="../../assets/img/item/1.gif"
                  alt=""
                />
              </div>
              <div class="col-9 Gp0m0">
                <h4 class="subtitlefnt">Arena List ({{ arncnt }})</h4>
                <h5 class="subtitlefnt">{{ arlvl }}</h5>
              </div>
              <div class="col-12">
                <div class="progress n_bar-a w-100" style="height: 8px">
                  <div
                    class="progress-bar clRBrd bgD0"
                    id="itmBr"
                    :style="{ width: th.al + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </router-link>

          <router-link to="hitlist">
            <div class="row Gp0m0 py-2 my-1 blkgry">
              <h4 class="subtitlefnt">Hitlist ({{ htlst }})</h4>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="row Gp0m0">
      <div class="col-4 blk bdr1 py-3">
        <h4 class="Subtitlefnt siz13">Bounty:{{ bnty }}</h4>
      </div>
      <div class="col-4 blk bdr1 py-3">
        <h4 class="Subtitlefnt siz13">Skill Rank:{{ sr }}</h4>
      </div>
      <div class="col-4 blk bdr1 py-3">
        <h4 class="Subtitlefnt siz13">Arena Skill Rank:{{ asr }}</h4>
      </div>
    </div>

    <div class="row Gp0m0">
      <div class="col-4 Gp0m0">
        <router-link
          to="/game/leaderboard/friend"
          tag="button"
          class="btn nBtn Gp0m0 blkgry w-100 p-2 my-1"
          ><i class="fas fa-crown"></i><br />
          <h4 class="siz15">Leaderboard</h4></router-link
        >
        <br />
        <router-link
          to="friendsfeed"
          tag="button"
          class="btn nBtn Gp0m0 blkgry w-100 p-2 my-1"
          ><i class="fas fa-rss-square"></i> <br />
          <h4 class="siz15">Friends feed</h4> </router-link
        ><br />
        <router-link
          to="safehouse"
          tag="button"
          class="btn nBtn Gp0m0 blkgry w-100 p-2 my-1"
          ><i class="fas fa-shield-alt"></i><br />
          <h4 class="siz15">Safe House</h4></router-link
        >
        <router-link
          to="Threat"
          tag="button"
          class="btn nBtn Gp0m0 blkgry w-100 p-2 my-1"
          ><i class="fas fa-theater-masks"></i><br />
          <h4 class="siz15">Threat</h4></router-link
        >
      </div>
      <div class="col-8 Gp0m0 bdr1">
        <div class="row Gp0m0 blkgry p-1">
          <div class="col-9">
            <h4 class="subtitlefnt">
              Position in Leader Board
              <h6>from 100 Mafias</h6>
            </h4>
          </div>
          <div class="col-3">
            <div class="nBtn nBbg blkgry mt3 p-1">
              <i class="fas fa-sync-alt"></i>
            </div>
          </div>
        </div>

        <div class="row Gp0m0 blkgry mt-1 p-1">
          <div class="col-4 p-1">
            <div class="nBtn nBbg blkgry mt3">
              <img
                class="card-img p-2"
                src="../../assets/img/item/1.gif"
                alt=""
              />
              <h5 class="siz8">MR Leader</h5>
            </div>
          </div>
          <div class="col-8">
            <h4 class="subtitlefnt">
              MR Leader
              <h6>No Possition</h6>
            </h4>
          </div>
        </div>

        <div class="row Gp0m0 blkgry mt-1 p-1">
          <div class="col-4 p-1">
            <div class="nBtn nBbg blkgry mt3">
              <img
                class="card-img p-2"
                src="../../assets/img/item/1.gif"
                alt=""
              />
              <h5 class="siz8">Arena Leader</h5>
            </div>
          </div>
          <div class="col-8">
            <h4 class="subtitlefnt">
              Arena Leader
              <h6>No Possition</h6>
            </h4>
          </div>
        </div>

        <div class="row Gp0m0 blkgry mt-1 p-1">
          <div class="col-4 p-1">
            <div class="nBtn nBbg blkgry mt3">
              <img
                class="card-img p-2"
                src="../../assets/img/item/1.gif"
                alt=""
              />
              <h5 class="siz8">Assassin Leader</h5>
            </div>
          </div>
          <div class="col-8">
            <h4 class="subtitlefnt">
              Assassin Leader
              <h6>No Possition</h6>
            </h4>
          </div>
        </div>

        <div class="row Gp0m0 blkgry mt-1 p-1">
          <div class="col-4 p-1">
            <div class="nBtn nBbg blkgry mt3">
              <img
                class="card-img p-2"
                src="../../assets/img/item/1.gif"
                alt=""
              />
              <h5 class="siz8">Bounty Leader</h5>
            </div>
          </div>
          <div class="col-8">
            <h4 class="subtitlefnt">
              Bounty Leader
              <h6>No Possition</h6>
            </h4>
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
      th: {
        fl: 25,
        al: 35,
        tmstrt: "",
        tmend: "",
      },
      chk: false,
      hlvl: "0",
      bnty: 100,
      sr: 1524,
      asr: 459,
      arncnt: "",
      fghtcnt: "",
      arlvl: "",
      flvl: "",
      htlst: "",
    };
  },
  beforeCreate() {
    this.$mgo.gt("fight/alllist", (rs) => {
      console.log(rs);
      if (rs.sts == "ldr") {
        (this.arncnt = rs.arenacnt),
          (this.fghtcnt = rs.fghtcnt),
          (this.arlvl = rs.arnlvl),
          (this.flvl = rs.fghtlvl),
          (this.htlst = rs.hitlist);
        (this.chk = rs.chk),
          (this.tmstrt = rs.stm),
          (this.tmend = rs.etm),
          console.log(this.tmstrt, "here is start timer");
        console.log(this.tmend, "here is End timer");
        console.log(new Date()).getFullYear();
        this.htlst = rs.hitlist;
      }
    });
  },
};
</script>