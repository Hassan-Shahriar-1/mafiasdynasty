<template>
  <div>
    <div class="card tmibg2 bdr1">
      <div class="card-header Gp0m0">
        <h3 class="text-center mb-1">Badges</h3>
      </div>
      <div class="card-body">
        <div class="row Gp0m0">
          <div class="col-4 Gp0m0" v-for="(obg, i) in obadge" :key="i">
            <div class="m-1 border rounded">
              <img
                :src="require('/src/assets/img/item/' + obg.img)"
                class="card-img"
                alt=""
              />
              <br />
              <h6 class="sizv35 blkgry p-1 text-center dtlsfnt text-white">
                {{ obg.nm }}
              </h6>
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
      obadge: [
        {
          img: "1.gif",
          nm: "Habibur",
        },
        {
          img: "1.gif",
          nm: "Habibur",
        },
        {
          img: "1.gif",
          nm: "Habibur",
        },
        {
          img: "1.gif",
          nm: "Habibur",
        },
        {
          img: "1.gif",
          nm: "Habibur",
        },
        {
          img: "1.gif",
          nm: "Habibur",
        },
        {
          img: "1.gif",
          nm: "Habibur",
        },
        {
          img: "1.gif",
          nm: "Habibur",
        },
        {
          img: "1.gif",
          nm: "Habibur",
        },
      ],
    };
  },
};
</script>