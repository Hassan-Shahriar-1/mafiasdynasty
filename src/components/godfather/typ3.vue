<template>
    <div>
        <div class="row py-2 text-center Gp0m0"><h4 class="hr-sect jaldi">Exchanger</h4></div>
        <div class="card Gp0m0 bg-transparent">
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
                    <div class="col-3 p-0">               
                        <div class=" m-2 p-0 btn nBtn nBbg blkgry " @click="imgbind('1.gif')">
                            <img class="card-img" src="../../assets/img/item/1.gif" alt="">
                            <div class="card-image-overlay">
                                <div class="card-img-overlay text-white d-flex flex-column justify-content-center"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3 p-0">               
                            <div class=" m-2 p-0 btn nBtn nBbg blkgry " @click="imgbind('1.gif')">
                            <img class="card-img" src="../../assets/img/item/1.gif" alt="">
                            <div class="card-image-overlay">
                                <div class="card-img-overlay text-white d-flex flex-column justify-content-center"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3 p-0">               
                        <div class=" m-2 p-0 btn nBtn nBbg blkgry " @click="imgbind('1.gif')">
                            <img class="card-img" src="../../assets/img/item/1.gif" alt="">
                            <div class="card-image-overlay">
                                <div class="card-img-overlay text-white d-flex flex-column justify-content-center"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3 p-0">               
                        <div class=" m-2 p-0 btn nBtn nBbg blkgry " @click="imgbind('1.gif')">
                            <img class="card-img" src="../../assets/img/item/1.gif" alt="">
                            <div class="card-image-overlay">
                                <div class="card-img-overlay text-white d-flex flex-column justify-content-center"></div>
                            </div>
                        </div>
                    </div>

                        <div class="col-3 p-0">               
                        <div class=" m-2 p-0 btn nBtn nBbg blkgry " @click="imgbind('1.gif')">
                            <img class="card-img" src="../../assets/img/item/1.gif" alt="">
                            <div class="card-image-overlay">
                                <div class="card-img-overlay text-white d-flex flex-column justify-content-center"></div>
                            </div>
                        </div>
                    </div>

                        <div class="col-3 p-0">               
                        <div class=" m-2 p-0 btn nBtn nBbg blkgry " @click="imgbind('1.gif')">
                            <img class="card-img" src="../../assets/img/item/1.gif" alt="">
                            <div class="card-image-overlay">
                                <div class="card-img-overlay text-white d-flex flex-column justify-content-center"></div>
                            </div>
                        </div>
                    </div>

                        <div class="col-3 p-0">               
                        <div class=" m-2 p-0 btn nBtn nBbg blkgry " @click="imgbind('1.gif')">
                            <img class="card-img" src="../../assets/img/item/1.gif" alt="">
                            <div class="card-image-overlay">
                                <div class="card-img-overlay text-white d-flex flex-column justify-content-center"></div>
                            </div>
                        </div>
                    </div>

                        <div class="col-3 p-0">               
                        <div class=" m-2 p-0 btn nBtn nBbg blkgry " @click="imgbind('1.gif')">
                            <img class="card-img" src="../../assets/img/item/1.gif" alt="">
                            <div class="card-image-overlay">
                                <div class="card-img-overlay text-white d-flex flex-column justify-content-center"></div>
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
    data(){
        return{
            imgsrc:'',
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