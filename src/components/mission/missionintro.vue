<template>
  <div>
    <div class="container-fluide">
      <div class="card-body p-0 tmibg">
        <div class="card blksdo">
          <img
            class="card-img img-fluid"
            style="height: 130px"
            src="../../assets/img/land/colombia.png"
            alt=""
          />
          <div class="card-img-overlay">
            <h4 class="card-text titlefnt text-center">Land Name</h4>
            <h6 class="card-text subtitlefnt text-center">Subtitle here</h6>
          </div>
        </div>
      </div>

      <div class="card border-0">
        <div class="card-header blkgry p-3">
          <h4 class="text-center titlefnt">
            Mission
            <span class="float-right"
              ><i class="fas fa-info-circle" @click="msndtls ^= true"></i
            ></span>
          </h4>
        </div>
        <div class="p-2 siz15 text-center px-1 dtlsfnt" v-show="msndtls">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          distinctio similique nulla aliquam, amet asperiores nam minima odio
          iusto officiis voluptatem eveniet natus. Atque quidem, voluptate
          numquam laborum accusantium architecto?
        </div>
        <div v-for="(mnms, i) in chapter" :key="i">
          <router-link
            :to="{ name: 'mission', params: { list: mnms } }"
            v-if="mnms.active != false"
          >
            <div class="card-body p-1 tmibg">
              <div class="card border-0 p-2 blksdo">
                <img
                  class="card-img img-fluid my-2 rounded bdr1"
                  style="height: 120px"
                  :src="imgsrc + mnms.img"
                  alt=""
                />
                <div class="card-img-overlay">
                  <h4 class="card-text titlefnt">
                    {{ mnms.cpname }}

                    <span class="float-right">
                      <i class="fas fa-lock-open"></i>
                    </span>
                  </h4>
                  <h6 class="card-text subtitlefnt">{{ mnms.mstl }}</h6>
                </div>
              </div>
            </div>
          </router-link>
          <div v-else>
            <!-- for open locked misssion -->
            <div class="card-body p-1 tmibg">
              <div class="card border-0 p-2 blksdo">
                <img
                  class="card-img img-fluid my-2 rounded bdr1"
                  style="height: 120px"
                  :src="imgsrc + mnms.img"
                  alt=""
                />
                <div class="card-img-overlay">
                  <h4 class="card-text titlefnt">
                    {{ mnms.cpname }}
                    <span class="float-right" style="opacity: 0.5">
                      <i class="fas fa-lock"></i>
                    </span>
                  </h4>
                  <h6 class="card-text subtitlefnt">{{ mnms.mstl }}</h6>
                </div>
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
      msndtls: false,
      props: ["lanmsndid"],

      chapter: "",
      imgsrc: "https://mafiasrival.com/land/",
    };
  },

  created() {
    // console.log('props data',this.$route.params.lanmsndid)

    this.$mgo.gt(
      "/mission/landmission/" + this.$route.params.lanmsndid,
      (response) => {
        if (response.status_code == 200) {
          this.chapter = response.data;
          console.log("mission by land", this.chapter);
        }
      }
    );
  },
};
</script>
