<template>
    <div>
        <div class="card border-0 blk50  p-2">
            <img class="card-img" src="../../../assets/img/bannar/2.jpg" alt="">
            <div class="row mx-1 mt-5">
                <div class="col-10 p-2">
                <h2 class="Dtlsfnt">Warkos Health</h2>
                <div class="progress n_bar-a  mx-1" style="height:12px;"  min="20" max="1000">
                    <div class="progress-bar clRBrd bgD0" id="itmBr" :style="{width:bh.hpW+'%'}"></div>
                </div>
                </div>
                <div class="col-2 bMbg p-2">
                    <img class="card-img" src="../../../assets/img/item/1.gif" alt="">
                </div>
            </div>

            <div class="row Gp0m0 w-100 text-center my-1 mt-3">
            <div class="col-4"> <img  class="card-img" src="../../../assets/img/item/1.gif" alt=""> </div>

            <div class="col-5">
                <div class="pb-1 "><div class="mlr2 border blkred rounded"><h6 class="py-2">Exp:{{MmnDtlst.ex}}</h6></div> </div>
                <div class="pb-1 "><div class="mlr2 border blkred rounded"><h6 class="py-2">Blood:{{MmnDtlst.bld}}</h6></div></div>
                <div class="pb-1 "><div class="mlr2 border blkred rounded"><h6 class="py-2">Energy:{{MmnDtlst.enrgy}}</h6></div></div><br> 
            </div>
        
            <div class="col-3"> <div class="blkgry rounded py-1"><p class="siz15" >Item Found</p>  <img  class="card-img p-2" src="../../../assets/img/item/1.gif" alt=""> <p class="siz15" > 6X Puff perfume </p></div>  </div>
             <div class="col-12 p-4 px-5">
                    <div class="btn btn-block nBtn nBbg blkgry p-1" @click="demoV1()">Attack</div>
                </div>
            </div>
        </div>

        <modal name="hdsg" :width='300'   :isAutoHeight="true"  class="mblr bdr p-1 rounded-2">
            <div class="row Gp0m0 card bMbg bnrbxsdo rounded-0" style="height:300px">
                <div class="card border-0">
                   <div class="card-header tmibg2 p-1">
                        <h4 class="rounded-0 text-center py-1 w-100" style="position:sticky;">Boss Fight
                        <span class="float-right" style="margin-right:2%;" @click="hide();"><div class="crossbtn"><i class="fas fa-times "></i></div></span></h4>
                   </div>

                    <div class="card-body">
                        <h2 class="dtlsfnt mt-2">Successfully Killed Boss Name</h2>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script> 
export default {

   data(){
       return {
             bh:{
                 hpW:100,
                },
                    MmnDtlst:{ 
                        ttl:"Feast on Human's Blood",
                        dscrptn:"Lorem ipsum dolor quisquam incidunt placeat velit. Suscipit!",
                        ex:"+56",
                        bld:"-52",
                        enrgy:"+13",
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
            this.bh.hpW
        },
        demoV1(){
            if(this.bh.hpW!=0){
            this.bh.hpW = this.bh.hpW-5;

            console.log(this.bh.hpW);
            }
            if(this.bh.hpW==0){
                this.$modal.show('hdsg');
            }
        },
        hide(){
            this.$modal.hide('hdsg');
        }
    },
}
</script>