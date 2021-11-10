<template>
    <div class="container Gp0m0 bMbg jaldi" style='margin-bottom:40px;' >
            <div class="row Gp0m0">
                <img class="blksdo card-img img-fluid bdr3" style="height:90px;" src="../assets/img/item/Gold-bar.jpg" alt="">
            </div>
                <div class="row Gp0m0 bMbg px-2">
                    <h3 class="text-danger">{{MmnDtlst.ttl}} </h3> 
                    <div class="col-12 Gp0m0 text-left ">
                        <h5 class="Gp0m0">level 10 <br></h5>  <h6 class="Gp0m0">{{bh.hpst}}/{{bh.hped}}</h6>
                    <div class="progress n_bar-a" style="height:12px;" >
                                    <div class="progress-bar clRBrd bgD0" id="itmBr" :style="{width:bh.hpW+'%'}"></div>
                                </div>
                                
                           
                    </div> 
                        <h6 class="text-info"><br> {{MmnDtlst.dscrptn}}</h6>
                   
                        
                </div>
                    <div class="row Gp0m0">
                        <div class="col-6 Gp0m0  ">
                            <div class="bMbg">
                                <h5>Requirments <br></h5>
               
                           <div style="height:280px; overflow:auto">

                        <div class="row Gp0m0 bMbg " v-for="(reqr, i) in MmnDtlst.req" :key="i">
                            <div class="col-5 Gp0m0 px-1">
                                <img  class="card-img" :src="reqr.mr" alt="">
                            </div>
                            <div class="col-7  px-2"> <h6 class="text-danger float-left">{{ reqr.mrt }}</h6></div>
                        </div>
                       </div>
                        
                        </div>
                        <div>
                        </div>
                        </div>
                        <div class="col-6 bMbg Gp0m0 text-left">
                             <div class="bMbg">

                                   <h6 class="px-3 text-success sizv35" ><i class="fab fa-expeditedssl"></i>&nbsp;Exp:+4 <br><i class="fas fa-burn"></i>&nbsp;Blood:(210-490) <br><i class="far fa-lightbulb"></i>&nbsp;Energy:-3 <br></h6>
                            <h5 class="text-center">Items you will found</h5>

                            <div style="height:229px; overflow:auto">
                        <div class="row Gp0m0 bMbg " v-for="(itmrcv, i) in MmnDtlst.itmrcv" :key="i">
                            <div class="col-5">
                                <img  class="card-img" :src="itmrcv.mr" alt="">
                            </div>
                            <div class="col-7"> <h6 class="text-success">{{ itmrcv.mrt }}</h6></div>
                        </div>
                      
                       </div>
                       </div>
                      </div>
                        <div class="row Gp0m0 w-100">
                        <div class="col-4 Gp0m0 border blkred"><h6 class="py-2 mlr1">Exp:{{MmnDtlst.ex}}</h6></div>
                        <div class="col-4 Gp0m0 border blkred"><h6 class="py-2 mlr1">Blood:{{MmnDtlst.bld}}</h6></div>
                        <div class="col-4 Gp0m0 border blkred"><h6 class="py-2 mlr1">Energy:{{MmnDtlst.enrgy}}</h6></div><br> 
                         </div>

                         <div class="row Gp0m0 mb-5">
                             <div class="col-6  ">
                                 <div class="btn Gp0m0 blkred btn-lg btn-block nBtn nBbg py-1">Close it</div>
                            </div>
                             <div class="col-6 ">
                                 <div class="btn Gp0m0 button5 btn-lg btn-block nBtn nBbg py-1" @click="demoV1()">Do Mission</div>
                            </div>
                         </div>
                    </div>
                 </div>
</template>
<script> 
export default {
   name : 'mission',
   data(){
       return {
             bh:{
                 hpW:0,
                 hpst:20,
                 hped:1000,  
             },
           MmnDtlst:{ 

                        ttl:"Feast on Human's Blood",
                        dscrptn:"Lorem ipsum dolor quisquam incidunt placeat velit. Suscipit!",
                        ex:"+56",
                        bld:"-52",
                        enrgy:"+13",
             bp:[
                        {
                            clk:"/src/assets/img/1.png",
                            nm:"habib",
                        },
                        {
                            clk:"/src/assets/img/1.png",
                            nm:"habib",
                        },
                        {
                            clk:"/src/assets/img/1.png",
                            nm:"habib",
                        },
                        {
                            clk:"/src/assets/img/1.png",
                            nm:"habib",
                        },
                        {
                            clk:"/src/assets/img/1.png",
                            nm:"habib",
                        },
                        {
                            clk:"/src/assets/img/1.png",
                            nm:"habib",
                        },
                         {
                            clk:"/src/assets/img/1.png",
                            nm:"habib",
                        },
                        {
                            clk:"/src/assets/img/1.png",
                            nm:"habib",
                        },
                    ],
                   req:[
                       {
                           mr:"/src/assets/img/1.png",
                           mrt:"4 habib"
                       },
                        {
                           mr:"/src/assets/img/1.png",
                           mrt:"4 habib"
                       },
                        {
                           mr:"/src/assets/img/1.png",
                           mrt:"4 habib"
                       },
                        {
                           mr:"/src/assets/img/1.png",
                           mrt:"4 habib"
                       }, {
                           mr:"/src/assets/img/1.png",
                           mrt:"4 habib"
                       },
                   ] ,
                        itmrcv:[
                       {
                           mr:"/src/assets/img/1.png",
                           mrt:"4 rings"
                       },
                        {
                           mr:"/src/assets/img/1.png",
                           mrt:"4 rings"
                       },
                        {
                           mr:"/src/assets/img/1.png",
                           mrt:"4 rings"
                       },
                        {
                           mr:"/src/assets/img/1.png",
                           mrt:"4 rings"
                       }, {
                           mr:"/src/assets/img/1.png",
                           mrt:"4 rings"
                       },
                   ] 
                    }
       }
   },

     updated(){
        this.TptrgrBr();
    },
    mounted:function(){
        this.TptrgrBr();
    },
    methods: {
          TptrgrBr(){
            this.bh.hpW = 100 / this.bh.hped * this.bh.hpst;
           
        },
        demoV1(){
            this.bh.hpst = this.bh.hpst+10;
        },
    },
}
</script>