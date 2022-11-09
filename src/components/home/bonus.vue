<template>
  <div>
    <div class="section">
      <div class="w-100">
        <h3 class="w-100 tmibg py-1 text-center subtitlefnt">Gold Shop</h3>
        <div class="px-2 dtlsfnt blkgry">
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad
            odit impedit perferendis, excepturi velit quo corporis tenetur, esse
            pariatur molestias?
          </h6>
          <h4>3D-8Hr-4 Min-30 Sec</h4>
        </div>

        <div
          class="row no-gutters px-1 py-2 mt-1 tmibg2 blksdo"
          v-for="(bns, i) in bonus"
          :key="i"
        >
          <div class="col-3 p-2">
            <img
              :src="require('../../assets/img/item/' + bns.img)"
              class="card-img"
              alt=""
            />
          </div>
          <div class="col-5">
            <h5 class="subtitlefnt">
              <del>{{ bns.t1 }}</del>
            </h5>
            <h6 class="dtlsfnt">{{ bns.t2 }}</h6>
            <h6 class="dtlsfnt">{{ bns.am }}</h6>
          </div>
          <div class="col-4 pt-2">
            <div class="btn nBtn btn-block blkgldn p-2">
              <h6 class="sizv13 text-gold">Purchase</h6>
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
      bonus: [
        {
          img: "Gold-bar.jpg",
          t1: "habib is",
          t2: "is a good boy",
          am: "BDT:5000",
        },
        {
          img: "Gold-bar.jpg",
          t1: "habib is",
          t2: "is a good boy",
          am: "BDT:10000",
        },
        {
          img: "Gold-bar.jpg",
          t1: "habib is",
          t2: "is a good boy",
          am: "BDT:15000",
        },
        {
          img: "Gold-bar.jpg",
          t1: "habib is",
          t2: "is a good boy",
          am: "BDT:20000",
        },
        {
          img: "Gold-bar.jpg",
          t1: "habib is",
          t2: "is a good boy",
          am: "BDT:25000",
        },
      ],
    };
  },
};
</script>