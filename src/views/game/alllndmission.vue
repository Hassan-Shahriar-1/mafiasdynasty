<template>
  <div>
    <div class="blkd75 p-2">
      <h2 class="titlefnt text-center">All lands Mission</h2>
    </div>
    <div class="container-fluide">
      <div class="card-body p-0 tmibg" v-for="(ndta, i) in lnd" :key="i">
        <div class="card blksdo" @click="lndpth(ndta.mid)">
          <img
            class="card-img img-fluid py-2"
            style="height: 130px"
            :src="imglk + ndta.img"
          />
          <div class="card-img-overlay">
            <h4 class="card-text titlefnt text-center">
              {{ ndta.name }}
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
      lnd: [],
      imglk: "https://mafiasrival.com/land/",
      rtpth: "land/",
    };
  },
  beforeCreate() {
    this.$mgo.gt("mission/allland", (res) => {
      if (res.status_code == 200) {
        res.data.forEach((val) => {
          this.lnd.push(val);
        });
      }
      console.log(res);
    });
  },

  methods: {
    lndpth(landid) {
      this.$router.push("/game/missionintro/" + landid);
    },
  },
};
</script>