<template>
    <div class="mb-2">
        <div class="row py-2 text-center Gp0m0"><h4 class="hr-sect jaldi">Exchanger</h4></div>
        <div class="card Gp0m0 bg-transparent border-0">
            <div class="card-header blkgry text-center"><h4 class="titlefnt">Key Adams</h4></div>
            <div class="card-body">
                <div class="row Gp0m0">
                    <div class="col-6">
                        <div class=" m-2 p-0 btn nBtn nBbg blkgry " >
                            <img class="card-img" src="../../assets/img/item/1.gif" alt="">
                            <div class="card-image-overlay">
                                <div class="card-img-overlay text-white d-flex flex-column justify-content-center"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6" v-if="imgsrc!=''">
                        <div class=" m-2 p-0 btn nBtn nBbg blkgry bdr3 " >
                            <img class="card-img" :src="require('/src/assets/img/item/'+imgsrc)" alt="">
                        </div>
                    </div>
                    <div class="col-12 text-center mt-2"><div class="btn nBtn nBbg button4">Exchange Now</div></div>
                </div>

                <div class="row Gp0m0 mt-2">
                    <div class="col-3 p-0" v-for="(Exchange,i) in Exchanger " :key="i">               
                       <!--  <div class=" m-2 p-0 btn nBtn nBbg blkgry card " @click="imgbind('1.gif')">
                            <img class="card-img" :src="require('/src/assets/img/item/'+Exchange.img)" alt="">
                          <br> <h6 class="sizv35 bMbg py-1 text-center dtlsfnt">{{Exchange.nm}}</h6>
                            <div class="card-footer blk50 p-0 siz13"  style="word-break:break-all;">
                                {{Exchange.nm}}
                            </div>
                        </div> -->

                        <div class=" m-1 border rounded">
                        <img :src="require('/src/assets/img/item/'+Exchange.img)" class="card-img" alt=""> <br> <h6 class="sizv35 blkd50 py-1 text-center dtlsfnt">{{Exchange.nm}}</h6>
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

            Exchanger:[
                {
                    img:'1.gif',
                    nm:"hassan shahriar"
                },
                 {
                    img:'1.gif',
                    nm:"hassan shahriar"
                },
                 {
                    img:'1.gif',
                    nm:"hassan shahriar"
                },
                 {
                    img:'1.gif',
                    nm:"hassan shahriar"
                },
                 {
                    img:'1.gif',
                    nm:"hassan shahriar"
                },
                 {
                    img:'1.gif',
                    nm:"hassan shahriar"
                }, {
                    img:'1.gif',
                    nm:"hassan shahriar"
                },
                 {
                    img:'1.gif',
                    nm:"hassan shahriar"
                },
                 {
                    img:'1.gif',
                    nm:"hassan shahriar"
                },
                 {
                    img:'1.gif',
                    nm:"hassan shahriar"
                },
                 {
                    img:'1.gif',
                    nm:"hassan shahriar"
                }, {
                    img:'1.gif',
                    nm:"hassan shahriar"
                },

            ]
        }
    },
    mounted(){
       this.imgbind()
    },
    methods:{
    imgbind(imgnm){
        this.imgsrc=imgnm
    }
    }


}
</script>