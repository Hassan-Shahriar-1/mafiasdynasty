<template>
  <div class="section">
    <!-- items start -->
    <div
      class="container Gp0m0 bMbg4 border-0 rounded p-2"
      style="word-break: break-all"
    >
      <h3 class="text-center subtitlefnt">Items</h3>
      <div class="row Gp0m0">
        <div class="col-6 Gp0m0" v-for="(itmg, i) in itm" :key="i">
          <div @click="show()" class="m-1 tmibg border rounded">
            <h6 class="sizv13 tmibg p-2 text-center dtlsfnt">
              {{ itmg.name }}
            </h6>
            <img :src="itmg.img" class="card-img" alt="" /> <br />
            <h6 class="sizv13 tmibg p-2 text-center dtlsfnt">
              X {{ itmg.cnts }}
            </h6>
          </div>
        </div>
      </div>
    </div>

    <modal
      name="itmmdl"
      :width="300"
      :height="271"
      :isAutoHeight="true"
      class="mblr"
      id="gtmhyHt"
    >
      <div class="card w-100 Gp0m0" style="height: 271px; overflow: scroll">
        <div class="card-header blkgry text-center">
          Details
          <span class="float-right" style="margin-right: 2%"
            ><div @click="hide()" class="crossbtn">
              <i class="siz15 fas fa-times"></i></div
          ></span>
        </div>
        <div class="row Gp0m0 tmibg bdr3 blksdout rounded">
          <div class="card-body Gp0m0">
            <ul class="list-group w-100 tmibg">
              <li class="list-group-item tmibg py-2 mt-1">Attack:</li>
              <li class="list-group-item tmibg py-2 mt-1">Defense:</li>
              <li class="list-group-item tmibg py-2 mt-1">Energy:</li>
              <li class="list-group-item tmibg py-2 mt-1">Rage:</li>
              <li class="list-group-item tmibg py-2 mt-1">Experience:</li>
            </ul>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itm: [],
    };
  },

  methods: {
    beforeOspen() {
      setTimeout(() => {
        window.jq(".vm--modal").height(window.jq("#ablht").outerHeight());
      }, 10);
    },
    show() {
      this.$modal.show("itmmdl");
    },
    hide() {
      this.$modal.hide("itmmdl");
    },
  },

  beforeCreate() {
    this.$mgo.gt("inventory/item/list", (rs) => {
      console.log(rs);
      if (rs.status_code === 200) {
        rs.data.forEach((dt) => {
          this.itm.push(dt);
        });
      }
    });
  },
};
</script>