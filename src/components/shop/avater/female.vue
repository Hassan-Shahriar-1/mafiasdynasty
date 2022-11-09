<template>
  <div class="row Gp0m0 p-1">
    <div class="col-6 p-1" v-for="(fshop, i) in femaleshop" :key="i">
      <router-link :to="{ name: 'dfemale' }">
        <div class="card btn nBtn nBbg bgD8 m-1">
          <img
            :src="require('../../../assets/img/avatar/female/' + fshop.img)"
            alt=""
          />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      femaleshop: [
        {
          img: "fhead.png",
        },
        {
          img: "ftorso.png",
        },
        {
          img: "flegs.png",
        },
        {
          img: "ffeets.png",
        },
        {
          img: "fothers.png",
        },
      ],
    };
  },
};
</script>