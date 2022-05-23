<template>
    <div class="tmibg">
        <div class="row Gp0m0">
            <div class="col-12 Gp0m0">
                <div class="card tmibg" style="width: 100%;">
                    <img class="card-img-top" src="../../assets/img/bannar/1.jpg" alt="Card image cap">
                    <div class="card-body mx-1">
                        <h5 class="card-title text-center">Activity name</h5>
                        <h6 class="card-text dtlsfnt">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                        <br>
                         <h6 class="card-text dtlsfnt">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                    </div>
                </div>
            </div>
            </div>
            <div class="row Gp0m0 tmibg">
            <div class="col-9 p-1">
                <h4 class="subtitlefnt text-center">{{bh.hpst}}/{{bh.hped}} left</h4>
                <div class="blk50 rounded">
                    <h4 class="siz13 p-2" >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dolore debitis fugit consequuntur animi error odio,
                            incidunt excepturi dolorem reiciendis soluta illo veniam vel eius doloremque saepe nulla ullam ipsa?
                    </h4>
                </div>
                <div class="mt-2 mb-2 progress n_bar-a w-100" style="height:10px;">
                        <div class="progress-bar clRBrd bgD0" id="itmBr" :style="{width:bh.hltW+'%'}"></div>
                </div>
                <div class="row Gp0m0">
                    <div class="col-6">
                        <h5 class=" p-2 blk50 text-center subtitlefnt">
                            Exp <br> +35
                        </h5>
                    </div>
                    <div class="col-6">
                        <h5 class=" p-2 blk50 text-center subtitlefnt">
                            Energy <br> -35
                        </h5>
                    </div>
                    <div class="blk50 rounded m-1">
                        <h4 class="siz13 p-2" >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dolore debitis fugit consequuntur animi error odio,
                                incidunt excepturi dolorem reiciendis soluta illo veniam vel eius doloremque saepe nulla ullam ipsa?
                        </h4>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <h6 class="dtlsfnt">Require</h6>
                <img class="card-img" src="../../assets/img/item/1.gif" alt="">
                <h6 class="siz15 text-center">X16</h6>
                <div class="btn nBtn nBbg button4" @click="shift()" >shift</div>
            </div>
             <modal name='sdone' :delay="10" :width='300'   :isAutoHeight="true"  @before-open="beforeOspen" class="mblr bdr p-1 rounded-2">
            <div class="card Gp0m0" style="height:300px">
                <div class="card-header blkgry p-1" >
                    <h4 class=" rounded-0 text-center py-1 w-100 " style="position: sticky;">Item Found <span class="float-right" style="margin-right: 2%;" @click="hide()">
                    <div class="crossbtn"><i class="fas fa-times "></i></div></span></h4>
                </div>
                <div class="card-body Gp0m0 tmibg">
                    <h4>You are done with this shifting</h4>
                </div>
            </div>
        </modal> 
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return{
    bh:{
        hltW:0,
        hpst:0,
            hped:100,
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
    this.bh.hltW = 100/this.bh.hped * this.bh.hpst;
    },
    shift(){
            if(this.bh.hpst!=this.bh.hped){
            this.bh.hpst = this.bh.hpst+1;
            }

            if(this.bh.hpst>=this.bh.hped){
            this.$modal.show('sdone')
            }
           },
    hide(){
        this.$modal.hide('sdone')
    }
    }
}
</script>