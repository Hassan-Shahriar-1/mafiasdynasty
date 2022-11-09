<template>
  <div>
    <div class="blk50 p-1" v-for="(bg, i) in background" :key="i">
      <div class="row Gp0m0 rounded blkd75 p-2">
        <div class="col-4 p-0">
          <!--  <img :src="require('../../../assets/img/item/'+bg.img)" alt=""> -->
          <img
            class="card-img"
            :src="require('/src/assets/img/item/' + bg.img)"
            alt=""
          />
        </div>
        <div class="col-8">
          <h2 class="titlefnt siz25">
            <u>{{ bg.ttl }}</u>
          </h2>
          <h5>{{ bg.gold }} Gold</h5>
          <div class="row Gp0m0">
            <div class="col-6 p-0">
              <div class="p-1 w-100 mlr2 btn nBtn blkgry Anm-outln15si">
                Buy
              </div>
            </div>
            <div class="col-6 p-0">
              <div class="p-1 w-100 mlr2 btn nBtn blkgry Anm-outln15si">
                Gift
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
      background: [
        {
          ttl: "Title One",
          img: "1.gif",
          gold: 45,
        },
        {
          ttl: "Title One",
          img: "1.gif",
          gold: 45,
        },
        {
          ttl: "Title One",
          img: "1.gif",
          gold: 45,
        },
        {
          ttl: "Title One",
          img: "1.gif",
          gold: 45,
        },
        {
          ttl: "Title One",
          img: "1.gif",
          gold: 45,
        },
        {
          ttl: "Title One",
          img: "1.gif",
          gold: 45,
        },
        {
          ttl: "Title One",
          img: "1.gif",
          gold: 45,
        },
      ],
    };
  },
};
</script>