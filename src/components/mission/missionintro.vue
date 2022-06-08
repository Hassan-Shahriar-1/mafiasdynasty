<template>
  <div>
    <div class="container-fluide">
         <div class="card-body p-0 tmibg">
            <div class="card blksdo">
              <img class="card-img img-fluid" style="height:130px;" src='../../assets/img/land/colombia.png' alt="" />
              <div class="card-img-overlay">
                <h4 class="card-text titlefnt text-center">
                    Land Name
                </h4>
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
              <h6 class="p-1 px-1 dtlsfnt " v-show="msndtls">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio similique nulla aliquam,
                    amet asperiores nam minima odio iusto officiis 
                    voluptatem eveniet natus. Atque quidem, voluptate numquam laborum accusantium architecto?
                </h6>
          <router-link :to="{name:'missionlist'}">
              <div class="card-body p-1 tmibg">
                <div class="card border-0  p-2 blksdo" v-for="(mnms, i) in mname" :key="i">
                  <img class="card-img img-fluid  my-2 rounded bdr1" style="height:120px;" :src="require('../../assets/img/land/' + mnms.mimg)" alt=""/>
                  <div class="card-img-overlay">
                    <h4 class="card-text titlefnt">
                      {{ mnms.mttl }}
                      <span class="float-right" style="opacity: 0.5;">
                        <i class="fas fa-lock"></i>
                      </span>
                      <span class="float-right">
                        <i class="fas fa-lock-open"></i>
                      </span>
                    </h4>
                    <h6 class="card-text subtitlefnt">{{ mnms.mstl }}</h6>
                  </div>
                </div>
              </div>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        msndtls:false,
        props: ["lanmsndid"],
   
      mname: [
        {
          mimg: "colombia.png",
          mttl: "This is a wider",
          mstl: "Last updated",
        },
        {
          mimg: "colombia.png",
          mttl: "This is a wider",
          mstl: "Last updated",
        },
        {
          mimg: "colombia.png",
          mttl: "This is a wider",
          mstl: "Last updated",
        },
        {
          mimg: "colombia.png",
          mttl: "This is a wider",
          mstl: "Last updated",
        },
        {
          mimg: "colombia.png",
          mttl: "This is a wider",
          mstl: "Last updated",
        },
      ],
    };
  },

  created(){
    console.log('props data',this.$route.params.lanmsndid)

    this.$mgo.gt('/mission/landmission/'+this.$route.params.lanmsndid,(response)=>{
      console.log(response)
    })

   
  }
};
</script>
