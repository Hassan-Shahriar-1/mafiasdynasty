<template>
    <div class="container Gp0m0 blkbg jaldi" style='margin-bottom:40px;' >
        <div class="row Gp0m0">
            <img class="card-img img-fluid p-1" src="../../assets/img/land/colombia.png" alt="">
        </div>
        <div class="row Gp0m0 tmibg ">
            <div class="card blkbg">
                <div class="card-header tmibg bdr1">
                    <h3 class="titlefnt">{{MmnDtlst.ttl}} </h3> 
                </div>
                <div class="card-body bMbg3">
                    <div class="col-12 Gp0m0 text-left ">
                        <h5 class="Gp0m0 dtlsfnt">level 10 <br></h5>  <h6 class="Gp0m0 float-right">{{bh.hpst}}/{{bh.hped}}</h6>
                        <div class="progress n_bar-a" style="height:12px;"  min="20" max="1000">
                            <div class="progress-bar clRBrd bgD0" id="itmBr" :style="{width:bh.hpW+'%'}"></div>
                        </div>
                        <h6 class="text-info dtlsfnt"><br> {{MmnDtlst.dscrptn}}</h6>
                    </div>
                    <div class="row Gp0m0">
                        <div class="col-6 Gp0m0 p-1 text-left">
                            <div class="rounded bMbg4 bdr1">
                                <h4 class="text-center subtitlefnt">Requirments</h4>
                                <div class="row Gp0m0  my-2 " v-for="(reqr, i) in MmnDtlst.req" :key="i">
                                    <div class="col-5 ">
                                        <img  class="card-img" :src="require('/src/assets/img/'+reqr.mr)" alt="">
                                    </div>
                                    <div class="col-7  "> <h6 class="text-danger float-left dtlsfnt">{{ reqr.mrt }}</h6></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6  Gp0m0 p-1 text-left">
                            <div class="rounded bMbg4 bdr1">
                                <h4 class="text-center subtitlefnt ">Rewards</h4>
                                <div class="row Gp0m0 my-2  " v-for="(itmrcv, i) in MmnDtlst.itmrcv" :key="i">
                                    <div class="col-5 ">
                                        <img  class="card-img" :src="require('/src/assets/img/'+itmrcv.mr)" alt="">
                                    </div>
                                    <div class="col-7"> <h6 class="text-success dtlsfnt">{{ itmrcv.mrt }}</h6></div>
                                </div>
                            </div>
                        </div>

                        <div class="row no-gutters px-1 py-3 w-100 tmibg">
                            <div class="col-4 ">
                                <h5 class="text-success siz18" ><i class="fab fa-expeditedssl"></i>&nbsp;Exp:+4 &nbsp; </h5>
                            </div>
                            <div class="col-4 ">
                                <i class="fas fa-burn"></i>&nbsp;<strong class="text-danger siz18">Blood:210</strong> &nbsp;
                            </div>
                            <div class="col-4 text-success siz18">
                                <i class="far fa-lightbulb"></i>&nbsp;Energy:-3 
                            </div>
                        </div>

                        <div class="row Gp0m0 w-100 text-center my-1">
                            <div class="col-4 Gp0m0"><div class="mlr2 border blkred rounded"><h6 class="py-2">Exp:{{MmnDtlst.ex}}</h6></div> </div>
                            <div class="col-4 Gp0m0"><div class="mlr2 border blkred rounded"><h6 class="py-2">Blood:{{MmnDtlst.bld}}</h6></div></div>
                            <div class="col-4 Gp0m0"><div class="mlr2 border blkred rounded"><h6 class="py-2">Energy:{{MmnDtlst.enrgy}}</h6></div></div><br> 
                        </div>
                    </div>

                    <div class="row Gp0m0 mb-5 mt-2">
                        <div class="col-6 Gp0m0 px-0 ">
                        <router-link to="missionlist"> <div class="btn  blkgry btn-lg btn-block nBtn nBbg py-1">Go back</div></router-link>
                        </div>
                        <div class="col-6 Gp0m0 px-1 ">
                            <div class="btn  button5 btn-lg btn-block nBtn py-1" @click="demoV1()">Do Job</div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <modal name="donemsn" :width="350" :height="300" class=" blksdo mblr" >
            <div class="card border-0 tmibg">
                <div class="card-header blkgry p-1">
                    <h4 class=" rounded-0 text-center py-1 w-100 " style="position:sticky;">
                        <span class="float-right" style="margin-right:2%;"  @click="hide()">
                            <div class="crossbtn"><i class="fas fa-times "></i></div>
                        </span>
                    </h4>
                </div>             
                <div class="card-body p-1">
                    <div class="row Gp0m0 tmibg blksdo dtlsfnt" style="height:300px; width:340px; overflow-y: scroll;" >
                        <h4 class="text-center siz18 dtlsfnt p-3">
                            You have successfully Done with this mission.
                        </h4>
                    </div>
                </div>
            </div>
        </modal> 
    </div>
</template>





<script> 
export default {
   name : 'mission',
   data(){
       return {
             bh:{
                 hpW:0,
                 hpst:0,
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
                      
              
                    ],
                   req:[
                       {
                           mr:"1.png",
                           mrt:"4 habib"
                       },
                        {
                           mr:"1.png",
                           mrt:"4 habib"
                       },
                     
               
                   ] ,
                        itmrcv:[
                       {
                           mr:'1.png',
                           mrt:"4 rings"
                       },
                        {
                           mr:"1.png",
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
            if(this.bh.hpst!=this.bh.hped){
            this.bh.hpst = this.bh.hpst+10;
            
            }

            if(this.bh.hpst==this.bh.hped){
            this.$modal.show('donemsn');
            
            }
        },

         hide(){this.$modal.hide('donemsn');}
    },
}
</script>