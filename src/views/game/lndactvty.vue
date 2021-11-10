<template>
    <div>
        <div class="row Gp0m0">
            <div class="col-12 Gp0m0">
                <div class="card " style="width: 100%;">
                    <img class="card-img-top" src="../../assets/img/bannar/1.jpg" alt="Card image cap">
                    <div class="card-body  blkgry mx-1">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-text dtlsfnt">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                        <br>
                         <h6 class="card-text dtlsfnt">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                    </div>
                </div>
            </div>
            <div class="col-9 p-1">
                <h4 class="subtitlefnt">0/9 left</h4>
                <div class="blk50 rounded">
                    <h4 class="siz13 p-2" >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dolore debitis fugit consequuntur animi error odio,
                            incidunt excepturi dolorem reiciendis soluta illo veniam vel eius doloremque saepe nulla ullam ipsa?
                    </h4>
                </div>
                <div class="mt-2 progress n_bar-a w-100" style="height:10px;">
                        <div class="progress-bar clRBrd bgD0" id="itmBr" :style="{width:hltW+'%'}"></div>
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
                <div class="btn nBtn nBbg button4 ">shift</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return{
        
            hltW:10,
        
    }
    },
}
</script>