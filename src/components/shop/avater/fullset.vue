<template>
    <div>
        <div class="card Gp0m0">
            <div class="card-header blkgry"><h1 class="titlefnt Gp0m0 siz15">RED Female set of Dynasty</h1></div>
                <div class="card-body Gp0m0">
                    <div class="row Gp0m0 pt-2">
                        <div class="col-5 Gp0m0">
                            <img class="card-img" src="../../../assets/img/custom profile/01.jpg"  alt="">
                            <h4 class="subtitlefnt"> Gold 25 </h4>
                                <div class="row Gp0m0 pt-2  ">
                                    <div class="col-12 px-1 mt-1"><div class="Anm-outln15si btn nBtn nBbg blkgry px-1 mr-4">Buy Now</div></div>
                                    <div class="col-12 px-1 mt-1"><div class="Anm-outln15si btn nBtn nBbg blkgry px-1 mr-4">Gift Clan</div></div>
                                </div>
                        </div>

                        <div class="col-7 px-1 ">
                            <div class="btn-group rounded jaldi bw100 mb-2  w-100"  role="group" aria-label="..." >
                                <div   class="btn nBtn tmibg Gp0m0 "><i class="fab fa-galactic-senate"></i> <br> <h4 class="siz10">Male</h4></div>
                                <div  class="btn nBtn tmibg Gp0m0 "><i class="fas fa-dragon"></i> <br><h4 class="siz10">Female</h4></div>                                           
                            </div>
                            <carousel :autoplay="true" :height="200" :dots="false" :nav="false" :items='1'> 
                                <div class="card Gp0m0  py-1 blkgry" v-for="(avtrsp, i) in avtrshop" :key="i" >
                                    <div class="card-header p-2 blkgry"><h2 class="titlefnt text-center siz15">{{avtrsp.title}}</h2></div>
                                    <div class="card-body Gp0m0">
                                        <img class="card-img" style="height:180px;" :src="require('/src/assets/img/bannar/'+avtrsp.img)">
                                        <h4 class="subtitlefnt"> Gold 25 </h4>
                                        <div class="row Gp0m0 mt-2">
                                            <div class="col-6 px-1"><div class=" Anm-outln15si float-left btn-block btn mr-4 nBtn nBbg blkgry">Buy</div></div>
                                            <div class="col-6 px-1"><div class=" Anm-outln15si float-right btn-block btn  nBtn nBbg blkgry">Gift</div></div>
                                        </div>
                                    </div>
                                </div>
                            </carousel>
                        </div>
                    </div>

                    <div class="row Gp0m0">
                        <div class="card Gp0m0 pt-2">
                            <div class="card-header blkgry"> <h2 class="subtitlefnt">Avater Sets</h2> </div>
                            <div class="card-body h-100 py-1">
                                <div class="slider" style="height:150px;">  
                                    <div class="col-3 Gp0m0 slide" v-for="(avtrs, i) in avtr" :key="i" >
                                        <div class=" m-1 border rounded">
                                            <img :src="require('/src/assets/img/custom profile/'+avtrs.mg)" class="card-img" alt=""> <br>
                                        </div>
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
import carousel from 'vue-owl-carousel'
export default {
  components: { carousel },
    data() {
        return{


       
            avtr:[
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
              {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
                        {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
              {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            
            ],

                      avtrshop:[
                 {
                     img:"1.jpg",
                     title:"Black Tanker 2"
                 },
                 {
                     img:"2.jpg",
                     title:"Black Tanker 2"
                 },
                 {
                     img:"3.jpg",
                     title:"Black Tanker 2"
                 },
                 {
                     img:"4.jpg",
                     title:"Black Tanker 2"
                 },
                 {
                     img:"5.jpg",
                     title:"Black Tanker 2"
                 },
                 {
                     img:"6.jpg",
                     title:"Black Tanker 2"
                 }
            
             ]
        }
        
    },
}
</script>