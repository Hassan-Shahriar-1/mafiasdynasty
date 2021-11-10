<template>
    <div>
        <div class="row py-2 text-center Gp0m0"><h4 class="hr-sect jaldi">Machineman</h4></div>
        <div class="card Gp0m0 bg-transparent border-0">
            <div class="card-header blkgry text-center"><h4 class="titlefnt">Robert and Linda</h4></div>
            <div class="card-body">
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
                    
                        <div class="col-12 text-center blkgry mb-2 py-3"><h6 class="subtitlefnt">Items Need to create "Weapon name"</h6></div>
                </div>
                <div class="row Gp0m0">
                    <div class="col-7 text-center" v-if="imgsrc!=''">
                        <div class=" m-2 p-0 btn nBtn nBbg blkgry bdr3">
                            <img class="card-img" :src="require('/src/assets/img/item/'+imgsrc)" alt="">
                        </div>
                    </div>
                    <div class="col-5 float-right text-center mt-5"><div class="btn nBtn nBbg button4">Creat Now</div></div>
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