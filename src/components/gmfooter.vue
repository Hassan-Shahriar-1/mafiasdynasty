<template>
  <div @focus="handleFocus" @focusout="handleFocusOut" tabindex="0">
    <section class="fixed-bottom Gp0m0 jaldi" style="max-width: 575.98px">
      <div
        class="mInMenu w-100"
        v-for="(ssb, i) in MmnDtlst.sb"
        :key="i"
        v-show="btmenusStl[ssb.name]"
      >
        <div class="row sMnMnubg text-center Gp0m0" id="Habib1">
          <div
            v-for="(ssbY, bi) in ssb.ta"
            :key="bi"
            type="button"
            @click="tcrtr(ssbY.clk, ssb.name)"
            class="col justify-content-between btn blkgry rounded-0 nBtn fixed"
          >
            <span v-html="ssbY.icn"></span>
            <h6 class="sizv10">{{ ssbY.nm }}</h6>
          </div>
        </div>
      </div>

      <div
        class="row Gp0m0 btn-group bw100 sMnMnubg text-center jaldi"
        role="group"
        aria-label="..."
      >
        <div
          v-for="(smn, i) in MmnDtlst.mn"
          :key="i"
          type="button"
          @click="bMcShw(smn.clk)"
          class="btn clmsz2 nBtn rounded-0 blkgry Gp0m0 p-2"
        >
          <span v-html="smn.icn"></span>
          <h6 class="sizv10 pt-1">{{ smn.nm }}</h6>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btmenusStl: {
        home: false,
        combat: false,
        mission: false,
        Godfather: false,
        Stats: false,
        Shop: false,
      },
      MmnDtlst: {
        mn: [
          {
            nm: "Home",
            icn: "<i class='fab fa-fort-awesome'></i>",
            clk: "home",
          },
          {
            nm: "Stats",
            icn: "<i class='fas fa-dragon'></i>",
            clk: "Stats",
          },

          {
            nm: "Mission",
            icn: "<i class='fas fa-box'></i>",
            clk: "mission",
          },
          {
            nm: "Combat",
            icn: "<i class='fas fa-people-carry'></i>",
            clk: "combat",
          },
          {
            nm: "Godfather",
            icn: "<i class='fas fa-couch'></i>",
            clk: "Godfather",
          },

          {
            nm: "Shop",
            icn: "<i class='fas fa-store'></i>",
            clk: "Shop",
          },
        ],
        sb: [
          {
            name: "home",
            ta: [
              {
                nm: "Mafia Home",
                icn: "<i class='fab fa-fort-awesome'></i>",
                clk: "/game/home/gtns",
              },

              {
                nm: "Blab",
                icn: "<i class='fas fa-comment-alt'></i>",
                clk: "/game/home/blab",
              },

              {
                nm: "Discussion",
                icn: "<i class='far fa-comments'></i>",
                clk: "/game/discussion",
              },

              {
                nm: "Organization",
                icn: "<i class='fas fa-users-cog'></i>",
                clk: "/game/organization/gossipe",
              },

              {
                nm: "bank",
                icn: "<i class='fas fa-university'></i>",
                clk: "bank",
              },

              /*  {
                                            nm:"Notification", 
                                            icn:"<i class='fas fa-bell'></i>",
                                            clk:'/game/notification/activity'
                                        }, */
              {
                nm: "FAQ",
                icn: "<i class='fas fa-question-circle'></i>",
                clk: "/game/faq/general",
              },
            ],
          },
          {
            name: "combat",
            ta: [
              {
                nm: "combat",
                icn: "<i class='fas fa-igloo'></i>",
                clk: "/game/combat",
              },
            ],
          },

          {
            name: "mission",
            ta: [
              {
                nm: "mission",
                icn: "<i class='fas fa-box'></i>",
                clk: "/game/missionintro",
              },
            ],
          },
          {
            name: "Godfather",
            ta: [
              {
                nm: "Godfathers",
                icn: "<i class='fas fa-box'></i>",
                clk: "/game/Godfathers",
              },
            ],
          },
          {
            name: "Stats",
            ta: [
              {
                nm: "Property",
                icn: "<i class='fab fa-accusoft'></i>",
                clk: "/game/propertynew",
              },

              {
                nm: "Profile",
                icn: "<i class='fas fa-user-tie'></i>",
                clk: "/game/profile/about",
              },
              {
                nm: "Friends",
                icn: "<i class='fas fa-user-friends'></i>",
                clk: "/game/friends/mafias",
              },

              {
                nm: "Itemlist",
                icn: "<i class='fas fa-box'></i>",
                clk: "/game/profile/items",
              },

              {
                nm: "Customize Avater",
                icn: "<i class='fab fa-atlassian'></i>",
                clk: "/game/profile/eavatar",
              },

              {
                nm: "Trophies",
                icn: "<i class='fas fa-trophy'></i>",
                clk: "/game/profile/trophies",
              },
              {
                nm: "Abilities",
                icn: "<i class='fas fa-dumbbell'></i>",
                clk: "/game/profile/abilities",
              },
              {
                nm: "Gift",
                icn: "<i class='fas fa-gift'></i>",
                clk: "/game/gift",
              },

              {
                nm: "Land",
                icn: "<i class='fas fa-grip-horizontal'></i>",
                clk: "/game/alllands",
              },

              {
                nm: "loot",
                icn: "<i class='fas fa-user-ninja'></i>",
                clk: "/game/loot",
                /* <i class="fas fa-mask"></i> */
              },

              {
                nm: "Spy",
                icn: "<i class='fas fa-user-secret'></i>",
                clk: "/game/spy",
              },
            ],
          },
          {
            name: "Shop",
            ta: [
              {
                nm: "Weapon",
                icn: "<span class='incbicn iC-wpn'></span>",
                clk: "/game/shop/weapon",
              },
              {
                nm: "Vehicls",
                icn: "<i class='fas fa-truck-monster'></i>",
                clk: "/game/shop/vehicls",
              },
              {
                nm: "Item",
                icn: "<i class='fas fa-box'></i>",
                clk: "/game/shop/item",
              },
              {
                nm: "Avater",
                icn: "<i class='fab fa-atlassian'></i>",
                clk: "/game/shop/avater/fullset",
              },

              {
                nm: "Regular weapon",
                icn: "<i class='fas fa-bomb'></i>",
                clk: "/game/shop",
              },

              {
                nm: "Blackmarket",
                icn: "<i class='fas fa-store-slash'></i>",
                clk: "/game/blackmarket/buys",
              },

              {
                nm: "Intellegence",
                icn: "<i class='fas fa-brain'></i>",
                clk: "/game/shop/intellegence",
              },
              {
                nm: "Gold",
                icn: "<i class='fas fa-coins'></i>",
                clk: "/game/shop/gold",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    closeall: function () {
      Object.keys(this.btmenusStl).forEach((value) => {
        this.btmenusStl[value] = false;
      });
    },

    bMcShw: function (sth) {
      if (sth == "mission") {
        this.$router.replace("/game/alllndmission"), this.closeall();
      } else if (sth == "combat") {
        this.$router.replace("/game/combat");
        this.closeall();
      } else if (sth == "Godfather") {
        this.$router.replace("/game/Godfathers");
        this.closeall();
      } else {
        if (this.btmenusStl[sth] == true) {
          this.btmenusStl[sth] = false;
          return;
        } else {
          this.btmenusStl[sth] = false;
        }
        Object.keys(this.btmenusStl).forEach((value) => {
          this.btmenusStl[value] = false;
        });

        if (this.btmenusStl[sth] == false) {
          this.btmenusStl[sth] = true;
        } else {
          this.btmenusStl[sth] = false;
        }
      }
    },

    handleFocus: function () {},
    handleFocusOut: function () {
      Object.keys(this.btmenusStl).forEach((value) => {
        this.btmenusStl[value] = false;
      });
    },
    tcrtr: function (route, sth) {
      //   console.log(route);
      //   console.log(this.$route.path);
      if (this.$route.path == route) {
        //  this.$router.push(this.$route.path);
        return;
      }
      this.$router.replace(route);
      this.btmenusStl[sth] = false;
      //    if(this.MmnDtlst[route] == false){
      //     this.MmnDtlst[route] = true;
      // }else{
      //     this.MmnDtlst[route] = false;
      // }
    },
  },
};
</script>

