<template>
  <div class="section rounded tmibg border p-2">
    <!-- trophics section start -->
    <div class="container Gp0m0">
      <h3 class="w-100 dark50 text-center py-1 titlefntnew">
        Intellegence
        <i
          @click="intellegenceinfo ^= true"
          class="fas fa-question-circle float-right sizv35 p-2"
        ></i>
      </h3>
      <div
        class="p-1 siz15 rounded blk50 m-1 scale-up-center"
        style="border: 1px solid rgb(131 124 124)"
        v-show="intellegenceinfo"
      >
        All the Intellegence that are achievable from the game are enlisted
        here. The dark ones are those Intellegence that are still to be achieved
        and the highlighted ones are the Intellegence that are already achieved.
      </div>
      <div class="row Gp0m0 w-100 mt-2">
        <div v-for="(inint, i) in intilligence" :key="i" class="col-4 Gp0m0">
          <div v-if="inint.have == false" style="opacity: 0.4">
            <div class="m-1 border rounded">
              <img :src="link + inint.img" class="card-img" alt="" /> <br />
              <h6 class="sizv13 blkred p-2 dtlsfnt">{{ inint.name }}</h6>
            </div>
          </div>
          <div v-else>
            <div class="m-1 border rounded">
              <img :src="link + inint.img" class="card-img" alt="" /> <br />
              <h6 class="sizv13 blkred p-2 dtlsfnt">{{ inint.name }}</h6>
            </div>
          </div>
        </div>
      </div>
      <!-- 
            <div class="row Gp0m0 w-100 mt-2">
                <div class="col-6 tmibg bnrbxsdo " v-for="(inint, i) in ises" :key="i">
                    <div class="row Gp0m0"> 
                        <div class=" col-4 p-1 border rounded">
                            <img :src="require('../../assets/img/'+inint.mg)" class="card-img" alt="">
                        </div><br>
                        <div class="col-8 p-0"> <h6 class="sizv15 p-1 dtlsfnt">{{inint}}</h6></div>
                    </div>
                </div>
            </div>
             -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intellegenceinfo: false,
      link: "https://mafiasrival.com/intilligence/",
      intilligence: [],
    };
  },
  beforeCreate() {
    this.$mgo.gt("intiligence/list", (rs) => {
      if (rs.status_code === 200) {
        this.intilligence = rs.data;
      }
    });
    /* comment from main */
  },
};
</script>