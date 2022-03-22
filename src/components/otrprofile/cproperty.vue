<template>
    <div class="tmibg">
          <div class="bMbg5">
               <h4 class="d-flex justify-content-center mt-2 py-2 titlefnt w-100">Property List</h4>
               <div class="row Gp0m0  py-2 ">
                    <div class="col-4 p-1   " v-for="(pdta,i) in pdta" :key="i"> 
                        <div class="blk nBbg"> 
                              <img :src="require('../../assets/img/'+pdta.pImg)" class="card-img rounded-0 pb-1" alt="">
                              <div class="card-img-overlay p-1 center pl-3">
                                   <h6 class="card-title subtitlefnt">{{pdta.pnm}}</h6>
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
        return {
            pdt:{
                ppImg:"colombia.png", 
            },

            pdta:[
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                 {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
                 {
                     pImg:"1.png",
                     pnm:"property"
                },
                {
                     pImg:"1.png",
                     pnm:"property"
                },
            ]
        }
    }
}
</script>