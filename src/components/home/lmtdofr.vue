<template>
    <div class="container Gp0m0 ptnbg text-white">
        <div class="row Gp0m0 tmibg">
            <h3 class="subtitlefnt siz25 p-2"><i class="fab fa-buffer"></i>limited time Offer</h3>
        </div>

        <div class="row Gp0m0 pt-2">
            <div class="col-6 Gp0m0 " v-for="(ofrs, i) in ofr" :key="i">
                <div class="m-1 p-1 tmibg blksdo" >
                    <div class="row Gp0m0 ">
                        <div class="col-4 Gp0m0">
                            <img :src="require('../../assets/img/'+ofrs.ofrimg)" class="card-img " alt="">
                        </div>
                        <div class="col-8 Gp0m0 px-1">
                            <h6 class="sizv13 dtlsfnt"> {{ofrs.ofrdtls}}</h6>
                        </div>
                    </div>
                    <div class="col-12 Gp0m0 pt-2 "><div class="btn  nBtn px-1 btn-block no-gutters blkgry sizv13">{{ofrs.ofrb1}}</div></div>
                    <div class="col-12 Gp0m0 pt-2 "><div class="btn   px-1 nBtn btn-block no-gutters blkd75 sizv13">{{ofrs.ofrb2}}</div></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ofr:[
                {
                    ofrimg:"1.png",
                    ofrdtls:"Lorem ipsum temp oribus corporis quo!",
                    ofrb1:"buy",
                    ofrb2:"Sell"
                },
                 {
                    ofrimg:"1.png",
                    ofrdtls:"Lorem ipsum temp oribus corporis quo!",
                    ofrb1:"buy",
                    ofrb2:"Sell"
                },
                 {
                    ofrimg:"1.png",
                    ofrdtls:"Lorem ipsum temp oribus corporis quo!",
                    ofrb1:"buy",
                    ofrb2:"Sell"
                },
                 {
                    ofrimg:"1.png",
                    ofrdtls:"Lorem ipsum temp oribus corporis quo!",
                    ofrb1:"buy",
                    ofrb2:"Sell"
                },
                 {
                    ofrimg:"1.png",
                    ofrdtls:"Lorem ipsum temp oribus corporis quo!",
                    ofrb1:"buy",
                    ofrb2:"Sell"
                },
                 {
                    ofrimg:"1.png",
                    ofrdtls:"Lorem ipsum temp oribus corporis quo!",
                    ofrb1:"buy",
                    ofrb2:"Sell"
                },
                 {
                    ofrimg:"1.png",
                    ofrdtls:"Lorem ipsum temp oribus corporis quo!",
                    ofrb1:"buy",
                    ofrb2:"Sell"
                },
                 {
                    ofrimg:"1.png",
                    ofrdtls:"Lorem ipsum temp oribus corporis quo!",
                    ofrb1:"buy",
                    ofrb2:"Sell"
                },
              

            ]           
        }
    }
}
</script>
