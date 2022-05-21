<template>
    <div class="tmibg">
          <h4 class="d-flex justify-content-center py-2 titlefnt">Colambia</h4>
          <div class="card bg-dark text-white">
               <img :src="require('../../assets/img/land/'+pdt.ppImg)" class="card-img w-100 " alt="" style="height:100px;">
               <div class="card-img-overlay">
                    <h5 class="card-title subtitlefnt siz25">Kingdom of mafias</h5>
                    <h6 class="card-text dtlsfnt">Properties of this land will show here</h6>
               </div>
          </div>

        <div class="bMbg3">
            <h4 class="d-flex justify-content-center mt-2 py-2 titlefnt w-100">Property List</h4>
               <div class="row Gp0m0  py-2 ">
                    <div class="col-4 px-1" style="padding:3px 0px;" v-for="(pdta,i) in pdta" :key="i"> 
                         <div class="blk nBbg"> 
                              <router-link to="/game/propertynewin"> <img :src="require('../../assets/img/'+pdta.pImg)" class="card-img rounded-0 pb-1" alt="">
                                   <div class="card-img-overlay p-1 center pl-3">
                                        <h6 class="card-title  siz20 dtlsfnt op5">{{pdta.pnm}}</h6>
                                   </div>
                              </router-link>
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