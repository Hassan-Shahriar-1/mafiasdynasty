<template>
 <div class="container-fluide">
         <div class="card-body p-0 tmibg">
            <div class="card blksdo">
              <img v-if="lndinf"
                class="card-img img-fluid"
                style="height:130px;"
               :src="imgnm"
              />
              <div class="card-img-overlay">
                <h4 class="card-text titlefnt text-center">
                    {{lndinf.name}}
                </h4>
                <!-- <h6 class="card-text subtitlefnt text-center">{{subtl}}</h6> -->
              </div>
            </div>
            <div class="row no-gutters blkd75 p-1">
            <h6 class="dtlsfnt">Lorem ipsum dolor sit amet consectetur, adieligendi doloribus illum,
               recusandae quae in optio blanditiis exercitationem voluptatibus expedita sed ab sunt.</h6>
          </div>
          </div>


          <div class="row Gp0m0">
            <div class="col-6 p-1"> 

              <router-link :to="{name:'shop'}">
              <div class="card bdr1 opcty blksdo">
              <img
                class="card-img img-fluid"
                style="height:130px;"
                src='../../assets/img/land/colombia.png'
                alt=""
              />
              <div class="card-img-overlay">
                <h4 class="card-text titlefnt text-center">
                    Shop Name
                </h4>
                <h6 class="card-text subtitlefnt text-center">Subtitle here</h6>
              </div>
            </div>
            </router-link>
            </div>
            <div class="col-6 p-1">

              <router-link :to="{name:'missionintro'}">
               <div class="card bdr1 opcty blksdo">
              <img
                class="card-img img-fluid"
                style="height:130px;"
                src='../../assets/img/land/colombia.png'
                alt=""
              />
              <div class="card-img-overlay">
                <h4 class="card-text titlefnt text-center">
                    Mission Name
                </h4>
                <h6 class="card-text subtitlefnt text-center">Subtitle here</h6>
              </div>
            </div>
            </router-link>
            </div>
          </div>


          <div class="row Gp0m0">
            <div class="col-6  p-1">
              <router-link :to="{name:'lndactvty'}">
                 <div class="card bdr1 opcty  blksdo">
              <img
                class="card-img img-fluid"
                style="height:130px;"
                src='../../assets/img/land/colombia.png'
                alt=""
              />
              <div class="card-img-overlay">
                <h4 class="card-text titlefnt text-center">
                    Activity Name
                </h4>
                <h6 class="card-text subtitlefnt text-center">Subtitle here</h6>
              </div>
            </div>
            </router-link>
            </div>
            <div class="col-6 p-1">
              <router-link :to="{name:'propertynew'}">
               <div class="card bdr1 opcty blksdo">
              <img class="card-img img-fluid" style="height:130px;" src='../../assets/img/land/colombia.png' alt=""/>
              <div class="card-img-overlay">
                <h4 class="card-text titlefnt text-center">
                    property Name
                </h4>
                <h6 class="card-text subtitlefnt text-center">Subtitle here</h6>
              </div>
            </div>
            </router-link>
            </div>
            
          </div>
          
  </div>


</template>
<script>

export default ({
 data(){
   return {
     
      subtl:'ujggduiogfiod',
      imgnm:'',
      lndinf:[],
   }
 },
 created() {

   this.$mgo.gt('mission/lndinf/'+this.$route.params.lndid,(res)=>{
     if(res.sts=='ok'){
       this.lndinf=res.data
       this.imgnm='http://mrdemo.com/land/'+res.data.img
       console.log(this.imgnm)
        
     }
   })
   
 },  
})
</script>



