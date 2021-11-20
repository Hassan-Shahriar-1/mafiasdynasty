<template>
    <div>
        <div class="card Gp0m0">
            <div class="card-header blkgry"><h2 class="titlefnt">Avater Shop <span> <i class="fas fa-info-circle siz25 float-right"></i></span></h2> </div>
            <div class="card-body Gp0m0">
                <div class="row Gp0m0">
                    <div class="col-9 Gp0m0">
                        <div class="card Gp0m0">
                            <div class="card-header blkgry"><h1 class="titlefnt Gp0m0 siz15">RED Female set of Dynasty</h1></div>
                            <div class="card-body Gp0m0">
                                <div class="row Gp0m0 pt-2">
                                    <div class="col-5 Gp0m0">
                                        <img class="card-img" src="../../assets/img/custom profile/01.jpg"  alt="">
                                        <h4 class="subtitlefnt"> Gold 25 </h4>
                                            <div class="row Gp0m0 pt-2  ">
                                                <div class="col-12 px-1 mt-1"><div class="btn nBtn nBbg blkgry px-1 siz15">Buy Now</div></div>
                                                <div class="col-12 px-1 mt-1"><div class="btn nBtn nBbg blkgry px-1 siz15">Gift Clan</div></div>
                                            </div>
                                    </div>

                                    <div class="col-7 px-1 ">
                                        <div class="btn-group rounded jaldi bw100 mb-2  w-100"  role="group" aria-label="..." >
                                            <div   class="btn nBtn tmibg Gp0m0 "><i class="fab fa-galactic-senate"></i> <br> <h4 class="siz10">Male</h4></div>
                                            <div  class="btn nBtn tmibg Gp0m0 "><i class="fas fa-dragon"></i> <br><h4 class="siz10">Female</h4></div>                                           
                                        </div>
                                        <div class="card Gp0m0 blkgry">
                                            <div class="card-header p-2 blkgry"><h2 class="titlefnt siz15">White tank 2</h2></div>
                                            <div class="card-body Gp0m0">
                                                <img class="card-img" src="../../assets/img/item/1.gif" alt="">
                                                <h4 class="subtitlefnt"> Gold 25 </h4>
                                                <div class="row Gp0m0 mt-2">
                                                    <div class="col-6 Gp0m0"><div class="btn mr-4 nBtn nBbg blkgry">Buy</div></div>
                                                    <div class="col-6 Gp0m0"><div class="btn ml-2 nBtn nBbg blkgry">Gift</div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3 Gp0m0">
                            <router-link to="gtns"  class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="far fa-newspaper"></i> <br> News</router-link>
                            <router-link to="blab" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"> <i class="fas fa-comments"></i><br> blab 2</router-link>
                            <router-link to="lmtdofr" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="fab fa-buffer"></i><br> offers</router-link>
                            <router-link to="update" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="fas fa-edit"></i> <br> Updates</router-link>
                            <router-link to="bonus" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="fas fa-money-check-alt"></i> <br>  Bonus</router-link>
                    </div>
                </div>
                <div class="card Gp0m0 pt-5">
                    <div class="card-header blkgry"> <h2 class="subtitlefnt">Avater Sets</h2> </div>
                    <div class="card-body">
                        <div class="slider pb-3">  
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
</template>

<script>
export default {
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
            
            ]
        }
        
    },
}
</script>