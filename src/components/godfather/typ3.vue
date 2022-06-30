<template>
    <div class="mb-2">
        <div class="row py-2 text-center Gp0m0"><h4 class="hr-sect jaldi">Exchanger</h4></div>
        <div class="card Gp0m0 bg-transparent border-0">
            <div class="card-header p-1 blkgry text-center"><h4 class="titlefnt">Key Adams</h4>
                <div class="card">
                    <img class="card-img" :src="require('/src/assets/img/bannar/'+excngrcvr)" alt="">
                    <div class="card-img-overlay text-white d-flex flex-column justify-content-end ">
                        <h6 class="blktexr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit nostrum minus a, odio quis quae doloribus,
                            animi maxime quia ratione exercitationem alias iste sapiente praesentium asperiores quidem accusantium perspiciatis.</h6>
                    </div>
                </div>
            </div>
               
            <div class="card-body">
                    <div class="row Gp0m0 mt-2">
                    <div class="col-3  p-0" v-for="(mainitem,i) in mainitemr " :key="i">               
                        <div class="m-1 border rounded" @click="mainbind(mainitem)">
                        <img :src="require('/src/assets/img/item/'+mainitem.img)" class="card-img blkgry" alt=""> <br> <h6 class="sizv35 blkd50 py-1 text-center dtlsfnt">{{mainitem.nm}}</h6>
                        </div>
                    </div>
                </div>
                <div class="row Gp0m0">
                    
                    <div class="row" id="excngitem">
                        <div class="col-6" v-if="mainsrc!=''">
                            <div class="m-2 p-0 tmibg rounded">
                                <img class="card-img" :src="require('/src/assets/img/item/'+mainsrc)" alt="">
                                <div class="card-image-overlay">
                                    <div class="card-img-overlay text-white d-flex flex-column justify-content-center"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6" v-if="imgsrc!=''">
                            <div class="m-2 p-0 tmibg rounded">
                                <img class="card-img" :src="require('/src/assets/img/item/'+imgsrc)" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- build item section start here  -->
                    <div class="col- card p-0" style="display:none;" id="getitem" v-if="mainsrc!=''">
                        <div class="m-2 p-0 tmibg rounded">
                            <img class="card-img" :src="require('/src/assets/img/item/'+this.mainsrc)" alt="">
                        </div>
                    </div>
                    <!-- build item section End here  -->
                    <div class="col-12 text-center mt-2"><div class="btn nBtn nBbg button4 titlefnt" @click="excng()">Exchange Now</div></div>
                </div>

                <div class="row Gp0m0 mt-2">
                    <div class="col-3  p-0" v-for="(Exchange,i) in Exchanger " :key="i">               
                       <!--  <div class=" m-2 p-0 btn nBtn nBbg blkgry card " @click="imgbind('1.gif')">
                            <img class="card-img" :src="require('/src/assets/img/item/'+Exchange.img)" alt="">
                          <br> <h6 class="sizv35 bMbg py-1 text-center dtlsfnt">{{Exchange.nm}}</h6>
                            <div class="card-footer blk50 p-0 siz13"  style="word-break:break-all;">
                                {{Exchange.nm}}
                            </div>
                        </div> -->
                        <div class="m-1 border rounded" @click="imgbind(Exchange)">
                        <img :src="require('/src/assets/img/item/'+Exchange.img)" class="card-img blkgry" alt=""> <br> <h6 class="sizv35 blkd50 py-1 text-center dtlsfnt">{{Exchange.nm}}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgsrc:'',
            mainsrc:'',
            baseitem:'shortgun.png',
            excngrcvr:'6.jpg',
            mainitemr:[
                {
                    img:'knuckle.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'rpg.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'45-pistol.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'ak47.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'automatic-rifle.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'baseball-bat.png',
                    nm:"hassan shahriar"
                }, {
                    img:'baton.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'chain-gun.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'crowbar.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'hand-pistol.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'knife.png',
                    nm:"hassan shahriar"
                }, {
                    img:'tommy-gun.png',
                    nm:"hassan shahriar"
                },

            ],

            Exchanger:[
                {
                    img:'knuckle.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'rpg.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'45-pistol.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'ak47.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'automatic-rifle.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'baseball-bat.png',
                    nm:"hassan shahriar"
                }, {
                    img:'baton.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'chain-gun.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'crowbar.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'hand-pistol.png',
                    nm:"hassan shahriar"
                },
                 {
                    img:'knife.png',
                    nm:"hassan shahriar"
                }, {
                    img:'tommy-gun.png',
                    nm:"hassan shahriar"
                },

            ]
        }
    },
    mounted(){
       this.imgbind()
       this.mainsrc()
    },
    methods:{
    imgbind(imgnm){
        this.imgsrc=imgnm.img

    },
    mainbind(imgnm){
        this.mainsrc=imgnm.img
    },
    excng(){
       document.getElementById("excngitem").style.display = "none";
       document.getElementById("getitem").style.display = "block";
       

    }
    }


}
</script>