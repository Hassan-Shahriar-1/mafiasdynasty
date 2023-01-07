<template>
  <div>
    <div class="section ptnbg">
      <div class="card">
        <div class="card-header p-0">
          <div class="w-100 blkgry">
            <h2 class="text-center text-golden py-2 blk75 subtitlefnt">
              Limited Edition
            </h2>
          </div>
        </div>
        <div class="card-body p-0">
          <div
            class="btn-group rounded jaldi bw100 mb-2"
            role="group"
            aria-label="..."
          >
            <div @click="loadcomponent('abl')" class="btn nBtn tmibg Gp0m0">
              <i class="fab fa-galactic-senate"></i> <br />
              <h4 class="siz10">Abilities</h4>
            </div>
            <div @click="loadcomponent('fmlr')" class="btn nBtn tmibg Gp0m0">
              <i class="fas fa-dragon"></i> <br />
              <h4 class="siz10">Familiers</h4>
            </div>
            <div @click="loadcomponent('avtbg')" class="btn nBtn tmibg Gp0m0">
              <i class="far fa-image"></i> <br />
              <h4 class="siz10">Avater BG</h4>
            </div>
            <div @click="loadcomponent('lavt')" class="btn nBtn tmibg Gp0m0">
              <i class="fas fa-users fa"></i> <br />
              <h4 class="siz10">Avater set</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div v-if="lmtd['abl'] == true"><ltdablty></ltdablty></div>
      <div v-if="lmtd['lavt'] == true"><ltdavtr></ltdavtr></div>
      <div v-if="lmtd['avtbg'] == true"><ltdavtrbg></ltdavtrbg></div>
      <div v-if="lmtd['fmlr'] == true"><ltdfmlrs></ltdfmlrs></div>
      <!--  <div v-else><ltdavtrbg></ltdavtrbg></div> -->
    </div>
  </div>
</template> 
<script>
import ltdablty from "../limited/abilities";
import ltdavtr from "../limited/avater";
import ltdavtrbg from "../limited/avatorbg.vue";
import ltdfmlrs from "../limited/fimiliers";

export default {
  components: {
    ltdablty,
    ltdavtr,
    ltdfmlrs,
    ltdavtrbg,
  },
  data() {
    return {
      limited_data: "",
      itm: [],
      abl: [],
      fml: [],
      avtst: [],
      bg: [],
      tmr: "",
      end: "",
      lmtd: {
        abl: true,
        fmlr: false,
        lavt: false,
        avtbg: false,
        avtbg2: false,
      },
    };
  },
  beforeCreate() {
    this.$mgo.gt("/mp/limited/edition", (res) => {
      this.limited_data = res.data;
      console.log("limited", res);
    });
  },
  methods: {
    loadcomponent(valu) {
      Object.keys(this.lmtd).forEach((val) => {
        if (valu in this.lmtd) {
          this.lmtd[valu] = true;
          this.lmtd[val] = false;
        } else {
          console.log("not found");
        }
      });
    },
  },
};
</script>