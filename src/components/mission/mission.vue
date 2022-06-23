<template>
    <div class="container Gp0m0 blkbg jaldi" style='margin-bottom:40px;' >
        <div class="row Gp0m0">
            <img class="card-img img-fluid p-1" src="../../assets/img/land/colombia.png" alt="">
        </div>
        <div class="row Gp0m0 tmibg p-2" v-for="(MmnDtlsts, i) in MmnDtlst" :key="i">
            <div class="card blkbg mb-3 ">
                <div class="card-header tmibg">
                    <h3 class="titlefnt text-center">{{MmnDtlsts.ttl}} </h3> 
                </div>
                <div class="card-body bMbg3">
                    <div class="col-12 Gp0m0 text-left ">
                        <h5 class="Gp0m0 dtlsfnt">level 10 <br></h5>  <h6 class="Gp0m0 float-right">{{bh.hpst}}/{{bh.hped}}</h6>
                        <div class="progress n_bar-a" style="height:12px;"  min="20" max="1000">
                            <div class="progress-bar clRBrd bgD0" id="itmBr" :style="{width:bh.hpW+'%'}"></div>
                        </div>
                        <h6 class="text-info dtlsfnt"><br> {{MmnDtlsts.dscrptn}}</h6>
                    </div>
                    <div class="row Gp0m0">
                        <div class="col-6 Gp0m0 p-1 text-left">
                            <div class="rounded bMbg4 bdr1">
                                <h4 class="text-center subtitlefnt">Requirments</h4>
                                <div class="row Gp0m0  my-2 " v-for="(reqr, i) in MmnDtlsts.req" :key="i">
                                    <div class="col-5">
                                        <img  class="card-img" :src="require('/src/assets/img/'+reqr.mr)" alt="">
                                    </div>
                                    <div class="col-7"> <h6 class="text-danger float-left dtlsfnt">{{ reqr.mrt }}</h6></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6  Gp0m0 p-1 text-left">
                            <div class="rounded bMbg4 bdr1">
                                <h4 class="text-center subtitlefnt ">Rewards</h4>
                                <div class="row Gp0m0 my-2  " v-for="(itmrcv, i) in MmnDtlsts.itmrcv" :key="i">
                                    <div class="col-5 ">
                                        <img  class="card-img" :src="require('/src/assets/img/'+itmrcv.mr)" alt="">
                                    </div>
                                    <div class="col-7"> <h6 class="text-success dtlsfnt">{{ itmrcv.mrt }}</h6></div>
                                </div>
                            </div>
                        </div>
                <!-- Expense area -->
                        <div class="row no-gutters px-1 py-3 mlr1  w-100 tmibg">
                            <div class="col-4">
                                <h5 class="text-success siz18" ><i class="fab fa-expeditedssl"></i>&nbsp;Exp:+4 &nbsp; </h5>
                            </div>
                            <div class="col-4 ">
                                <i class="fas fa-burn"></i>&nbsp;<strong class="text-danger siz18">Blood:210</strong> &nbsp;
                            </div>
                            <div class="col-4 text-success siz18">
                                <i class="far fa-lightbulb"></i>&nbsp;Energy:-3 
                            </div>
                        </div>
                <!-- Expense area -->
                <!-- Income area -->
                        <div class="row Gp0m0 w-100 my-1">
                            <div class="col-6 Gp0m0"><div class="mlr1 border bMbg4 blksdo rounded"><h6 class="p-2"><i class="fab fa-expeditedssl"></i> &nbsp;Exp:00000000{{MmnDtlst.ex}}</h6></div> </div>
                            <div class="col-6 Gp0m0"><div class="mlrd5 border bMbg4 blksdo rounded"><h6 class="p-2"><i class="far fa-lightbulb text-secondary"></i> &nbsp;Energy:0000000{{MmnDtlst.enrgy}}</h6></div></div>
                            <div class="col-12 text-center Gp0m0 mt-1 "><div class="mlr1 border bMbg4 blksdo rounded"><h6 class="p-2"><i class="fas fa-burn text-danger"></i> &nbsp;Blood:0000000{{MmnDtlst.bld}}</h6></div></div>
                        </div>
                    </div>
                <!-- Income area -->
                    <div class="row Gp0m0 mb-5 mt-2">
                        <div class="col-6 Gp0m0 px-0 ">
                     <!--    <router-link :to="{name:'missionintro'}"> <div class="btn  blkgry btn-lg btn-block nBtn nBbg py-1">Go back</div></router-link> -->
                        </div>
                        <div class="col-6 Gp0m0 px-1 ">
                         <!-- claa="button4&button5" as button color -->   
                         <div class="btn  button_here btn-lg btn-block nBtn py-1" @click="demoV1(MmnDtlsts.uid)">Do Job</div>
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
                    <div class="row Gp0m0 tmibg dtlsfnt" style="height:300px; width:340px; overflow-y: scroll;" >
                        <h4 class="text-center siz18 dtlsfnt p-3">
                            You have successfully Done with this mission.
                        </h4>
                    </div>
                </div>
            </div>
        </modal> 
    </div>
</template>

<style>
.button_here{
    background: linear-gradient(0deg, rgb(54 12 12) 0%, rgb(153 10 10 / 92%) 39%, rgb(173 14 14 / 85%) 100%);
}
</style>
<script>
export default {
   name : 'mission',
   data(){
       return {
             bh:{
                 hpW:0,
                 hpst:0,
                 hped:100,  
             },
           MmnDtlst:[{ 
                        uid:1,
                        ttl:"Feast on Human's Blood",
                        dscrptn:"Lorem ipsum dolor quisquam incidunt placeat velit. Suscipit!",
                        ex:+56,
                        bld:-52,
                        enrgy:+13,
                     bp:[
                        {
                            clk:"/src/assets/img/1.png",nm:"habib",
                        },
                        {
                            clk:"/src/assets/img/1.png",nm:"habib",},
                         ],
                   req:[
                       {
                           mr:"1.png", mrt:"4 habib"
                       },
                        {
                           mr:"1.png",mrt:"4 habib"
                       },
                        ] ,
                        itmrcv:[
                       {
                           mr:'1.png', mrt:"4 rings"
                       },
                        {
                           mr:"1.png",mrt:"4 rings"
                       },
                   ] 
                    },
                    { 
                        uid:2,
                        ttl:"Feast on Human's Blood",
                        dscrptn:"Lorem ipsum dolor quisquam incidunt placeat velit. Suscipit!",
                        ex:+56,
                        bld:-52,
                        enrgy:+13,
                     bp:[
                        {
                            clk:"/src/assets/img/1.png",nm:"habib",
                        },
                        {
                            clk:"/src/assets/img/1.png",nm:"habib",},
                         ],
                   req:[
                       {
                           mr:"1.png", mrt:"4 habib"
                       },
                        {
                           mr:"1.png",mrt:"4 habib"
                       },
                        ] ,
                        itmrcv:[
                       {
                           mr:'1.png', mrt:"4 rings"
                       },
                        {
                           mr:"1.png",mrt:"4 rings"
                       },
                   ] 
                    },
                    { 
                        uid:3,
                        ttl:"Feast on Human's Blood",
                        dscrptn:"Lorem ipsum dolor quisquam incidunt placeat velit. Suscipit!",
                        ex:+56,
                        bld:-52,
                        enrgy:+13,
                     bp:[
                        {
                            clk:"/src/assets/img/1.png",nm:"habib",
                        },
                        {
                            clk:"/src/assets/img/1.png",nm:"habib",},
                         ],
                   req:[
                       {
                           mr:"1.png", mrt:"4 habib"
                       },
                        {
                           mr:"1.png",mrt:"4 habib"
                       },
                        ] ,
                        itmrcv:[
                       {
                           mr:'1.png', mrt:"4 rings"
                       },
                        {
                           mr:"1.png",mrt:"4 rings"
                       },
                   ] 
                    },
                    { 
                        uid:4,
                        ttl:"Feast on Human's Blood",
                        dscrptn:"Lorem ipsum dolor quisquam incidunt placeat velit. Suscipit!",
                        ex:+56,
                        bld:-52,
                        enrgy:+13,
                     bp:[
                        {
                            clk:"/src/assets/img/1.png",nm:"habib",
                        },
                        {
                            clk:"/src/assets/img/1.png",nm:"habib",},
                         ],
                   req:[
                       {
                           mr:"1.png", mrt:"4 habib"
                       },
                        {
                           mr:"1.png",mrt:"4 habib"
                       },
                        ] ,
                        itmrcv:[
                       {
                           mr:'1.png', mrt:"4 rings"
                       },
                        {
                           mr:"1.png",mrt:"4 rings"
                       },
                   ] 
                    },
                    { 
                        uid:5,
                        ttl:"Feast on Human's Blood",
                        dscrptn:"Lorem ipsum dolor quisquam incidunt placeat velit. Suscipit!",
                        ex:+56,
                        bld:-52,
                        enrgy:+13,
                     bp:[
                        {
                            clk:"/src/assets/img/1.png",nm:"habib",
                        },
                        {
                            clk:"/src/assets/img/1.png",nm:"habib",},
                         ],
                   req:[
                       {
                           mr:"1.png", mrt:"4 habib"
                       },
                        {
                           mr:"1.png",mrt:"4 habib"
                       },
                        ] ,
                        itmrcv:[
                       {
                           mr:'1.png', mrt:"4 rings"
                       },
                        {
                           mr:"1.png",mrt:"4 rings"
                       },
                   ] 
                    },
                    ]
       }
   },
   created(){
       console.log(this.$route.params.mid)
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
        demoV1(oid){
             console.log(this.MmnDtlst.uid)
            if(this.bh.hpst!=this.bh.hped&&this.MmnDtlst.uid==oid){   
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