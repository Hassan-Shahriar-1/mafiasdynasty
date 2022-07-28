<template>
    <div class="no-gutters w-100 card tmibg">     
           <div class="card-header px-0"> <h5 class="p-1 subtitlefnt">Game news  <a class="float-right" href="">View all</a></h5></div>
            <div class="rounded blkgry px-1 py-2 mt-1" v-for="(gmnws,i) in gm" :key="i">   <!-- bMbg3 bnrbxsdo -->
                <h5 class="text-success subtitlefnt">{{gmnws.nttl}}<h6>{{gmnws.nsttl}}</h6></h5>
            </div>
                <div class="card blkgry">
        <div class="row Gp0m0">
            <div class="col-12 py-3 blkgry rounded-0">
                <h5>You need 7503 Exp to reach the next Level</h5>
                <div class="progress n_bar-a w-100" style="height:12px;">
                    <div class="progress-bar clRBrd bgD0" id="head" :style=" {width:Th.head+'%'}"></div>
                </div>
            </div>
                <div class="col-12 p-2">
                    <h6 class="float-left">Cash flow</h6>
                    <h6 class="float-right">10:45</h6>
                </div>
                <div class="col-4 justify-content-center p-2"><h6> Income <br>5465</h6></div>
                <div class="col-4 justify-content-center p-2"><h6> Upkeep <br>58554</h6></div>
                <div class="col-4 justify-content-center p-2"><h6> flowrate <br>58545</h6></div>
                <div class="col-6 bdr1 text-center p-2"><h6>jhdfg <br>5275/444</h6></div>
                <div class="col-6 bdr1 text-center p-2"><h6>jhdfg <br>5275/444</h6></div>
                <div class="col-6 bdr1 text-center p-2"><h6>jhdfg <br>5275/444</h6></div>
                <div class="col-6 bdr1 text-center p-2"><h6>jhdfg <br>5275/444</h6></div>
        </div>
        <div class="row Gp0m0 my-2">
            <div class="col-10 px-0">
                <h5 class="blkgry bdr1 text-center">Trophies 45/7</h5>
                     <div class="card bg-secondary ">
            <div class="card-body blkgry p-0">
                <carousel :autoplay="true" :height="50" :dots="false" :nav="false" :items='4' class="p-2"> 
                    <img v-for="(mnons, i) in mnon" :key="i" class="card-img  px-1 " style="height:50px;" :src="require('/src/assets/img/item/'+mnons.mg)">
                </carousel>
            </div>
        </div>
            </div>
            <div class="col-2 tmibg p-0 d-flex align-items-center"><div class="bg-transparent px-1 border-0"><img style="height:50px;" class="card-img" src="../../assets/img/item/1.gif" alt=""></div></div>
        </div>
    </div>
            <!-- <div class="rounded blk50 p-1 " v-for="(gmnws,i) in gm" :key="i">
                <h5 class="text-success subtitlefnt rounded blkd75 p-2">{{gmnws.nttl}}<h6>{{gmnws.nsttl}}</h6></h5>
            </div> -->
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
components: { carousel },

    data(){
        return{
            Th:
                {   
                    head:50,   
                },
            gm:[
                {
                    nttl:"Back to lab",
                    nsttl:"dolor periam temporibus vitae itaque."
                },
                {
                    nttl:"Back to lab",
                    nsttl:"dolor periam temporibus vitae itaque."
                },
                {
                    nttl:"Back to lab",
                    nsttl:"dolor periam temporibus vitae itaque."
                },
                {
                    nttl:"Back to lab",
                    nsttl:"dolor periam temporibus vitae itaque."
                },
                {
                    nttl:"Back to lab",
                    nsttl:"dolor periam temporibus vitae itaque."
                },
                {
                    nttl:"Back to lab",
                    nsttl:"dolor periam temporibus vitae itaque."
                },
              
            ],
             mnon:[
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                    {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },   
            ]
        }
    }
}
</script>