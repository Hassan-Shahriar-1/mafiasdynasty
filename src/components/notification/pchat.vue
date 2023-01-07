<template>
  <div>
    <div>
      <h3
        v-if="chtmsg != ''"
        class="text-center text-white dtlsfnt center siz25"
      >
        {{ chtmsg }}
      </h3>

      <div v-else>
        <ul class="list-group blkgry" v-for="(mlist, i) in chtlst" :key="i">
          <router-link :to="{ path: '/game/chat/' + i }">
            <li class="list-group-item Gp0m blk50 Gp0m0 py-2 my-1">
              <div class="row no-gutters">
                <div class="col-2 p-2">
                  <img
                    src="../../assets/img/item/1.gif"
                    class="card-img BORDER rounded-circle"
                    alt=""
                  />
                  <div class="card-img-overlay">
                    <p class="bg-success dot"></p>
                  </div>
                </div>
                <div class="col-10 px-2">
                  <h4 class="subtitlefnt">{{ mlist.mnm }}</h4>
                  <h6 class="dtlsfnt">{{ mlist.mdtls }}</h6>
                </div>
              </div>
            </li>
          </router-link>
        </ul>
      </div>
    </div>

    <!-- <router-view></router-view> -->
  </div>
</template>

<style scoped>
.dot {
  height: 12px;
  width: 12px;
  background-color: rgb(0, 255, 42);
  border: 1px solid green;
  border-radius: 50%;
  position: absolute;
  left: 25%;
  top: 30%;
}
</style>

<script>
export default {
  data() {
    return {
      chtmsg: "",
      chtlst: Array,
    };
  },

  created() {
    this.$mgo.gt("mp/message/list", (resp) => {
      if (resp.status_code == "chtlst") {
        this.chtlst = resp.list;
        console.log(resp.list);
      } else {
        this.chtmsg = "You didnt Chat With Anyone";
      }
    });
  },
};
</script>