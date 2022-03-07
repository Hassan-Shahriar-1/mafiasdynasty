<template>
    <div class="card border-0 ptnbg">
        <div class="card-header blkgry">
            <h4 class="titlefnt text-center">Property Name:</h4>
        </div>
        <div class="card-body px-1 blksdo blk50">
            <div class="card bg-dark text-white border-0 bnrbxsdo" >
                <img src='../../assets/img/property/p1.jpg' class="card-img w-100" style="height:200px; filter: drop-shadow(0 0 0.75rem rgb(58, 52, 53));"  alt="">
            </div>
            <div class="row Gp0m0  tmibg4 my-2 rounded ">
                <div class=" col-12 d-flex justify-content-center">
                    <h5 class="text-center blkrds  rounded sizv20 mb-2 p-2 titlefnt mt-1">Requirments <br></h5>
                    <br> <br>
                </div>
                <div class="slider">
                    <div class="col-2  px-1 rounded bmsdo slide"><img :src="require('../../assets/img/item/'+pimg.pm)" class="card-img rounded-0" alt=""><h6 class="text-center blkrds">x2</h6></div>
                    <div class="col-2  px-1 rounded bmsdo slide"><img :src="require('../../assets/img/item/'+pimg.pm)" class="card-img rounded-0" alt=""><h6 class="text-center blkrds">x2</h6></div>
                    <div class="col-2  px-1 rounded bmsdo slide"><img :src="require('../../assets/img/item/'+pimg.pm)" class="card-img rounded-0" alt=""><h6 class="text-center blkrds">x2</h6></div>
                    <div class="col-2  px-1 rounded bmsdo slide"><img :src="require('../../assets/img/item/'+pimg.pm)" class="card-img rounded-0" alt=""><h6 class="text-center blkrds">x2</h6></div>
                    <div class="col-2  px-1 rounded bmsdo slide"><img :src="require('../../assets/img/item/'+pimg.pm)" class="card-img rounded-0" alt=""><h6 class="text-center blkrds">x2</h6></div>
                    <div class="col-2  px-1 rounded bmsdo slide"><img :src="require('../../assets/img/item/'+pimg.pm)" class="card-img rounded-0" alt=""><h6 class="text-center blkrds">x2</h6></div>
                    <div class="col-2  px-1 rounded bmsdo slide"><img :src="require('../../assets/img/item/'+pimg.pm)" class="card-img rounded-0" alt=""><h6 class="text-center blkrds">x2</h6></div>
                    <div class="col-2  px-1 rounded bmsdo slide"><img :src="require('../../assets/img/item/'+pimg.pm)" class="card-img rounded-0" alt=""><h6 class="text-center blkrds">x2</h6></div>
                    <div class="col-2  px-1 rounded bmsdo slide"><img :src="require('../../assets/img/item/'+pimg.pm)" class="card-img rounded-0" alt=""><h6 class="text-center blkrds">x2</h6></div>
                    <div class="col-2  px-1 rounded bmsdo slide"><img :src="require('../../assets/img/item/'+pimg.pm)" class="card-img rounded-0" alt=""><h6 class="text-center blkrds">x2</h6></div>
                    <div class="col-2  px-1 rounded bmsdo slide"><img :src="require('../../assets/img/item/'+pimg.pm)" class="card-img rounded-0" alt=""><h6 class="text-center blkrds">x2</h6></div>
                    <div class="col-2  px-1 rounded bmsdo slide"><img :src="require('../../assets/img/item/'+pimg.pm)" class="card-img rounded-0" alt=""><h6 class="text-center blkrds">x2</h6></div>
                </div>
                <div class="col-12">
                        <h5 class="text-center accid text-success dtlsfnt"> <div class=" mt-3 iC-cash incb1"></div> Cash:{{bcash}}</h5>
                        <div class="d-flex justify-content-center ">
                            <h6 class="btn nBtn button3 px-5 text-center sizv20 mb-1">Built</h6>
                        </div>
                </div>
            </div>
            <div class="row Gp0m0 my-2 p-2 tmibg6 rounded">
                    <h5 >level:12</h5>
                <div class="col-12 Gp0m0">
                        <div class="progress n_bar-a" style="height:10px;">
                        <div class="progress-bar clRBppl bgD0" id="itmBr" style="width:20%"></div>
                    </div>
                </div>
                <div class="col-9 Gp0m0">
                  
                 
                        <div class="card tmibg6 px-1 " >
                            <div class="card-body p-0 ">
                                <carousel :autoplay="true" :height="100" :dots="false" :nav="false" :items='4' > 
                                    <img v-for="(mnons, i) in mnon" :key="i" class="card-img  p-1 " style="height:90px;" :src="require('/src/assets/img/item/'+mnons.mg)">
                                </carousel>
                            </div>
                        </div>
                    </div>
  
                <div class="col-3 Gp0m0 px-1">
                    <h5 class="sizv30 text-success "><div class="iC-cash incb1" style="margin-right:1%;" ></div>Cash:{{upcash}}</h5>
                    <div class="btn nBtn dpgenbtn sizv13 mt-1 button5">Upgrade</div>
                </div>
            </div>
        </div>
    </div>             
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
    components: { carousel },
    data() {
        return{
                pimg:{
                    pm:"1.gif",
                },
                bcash:1000,
                upcash:500,
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
    },
}
</script>
<style scoped>
.slideover {
  overflow-x: scroll;
}
</style>


