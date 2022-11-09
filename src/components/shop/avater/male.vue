<template>
  <div class="row Gp0m0 p-1">
    <div class="col-6 p-1" v-for="(mshop, i) in maleshop" :key="i">
      <router-link :to="{ name: 'dmale' }">
        <div class="card btn nBtn nBbg bgD8 m-1">
          <img
            :src="require('../../../assets/img/avatar/male/' + mshop.img)"
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
      maleshop: [
        {
          img: "mhead.png",
        },
        {
          img: "mtorso.png",
        },
        {
          img: "mlegs.png",
        },
        {
          img: "mfeets.png",
        },
        {
          img: "mothers.png",
        },
      ],
    };
  },
};
</script>