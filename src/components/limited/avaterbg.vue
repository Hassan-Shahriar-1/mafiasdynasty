<template>
    <div>


        <div class="row Gp0m0 blkgry m-1"  v-for="(abg,i) in avtrbg" :key="i">
                <div class="col-4 pr-0">
                    <div class="mt-4"><img  :src="require('/src/assets/img/bannar/'+abg.img)" class="card-img"></div>
                </div>
                <div class="col-8">
                    <h5 class="subtitlefnt" style="border-bottom:solid #fff 1px;">{{abg.ttl}}</h5> 
                    <h5>Jewels {{abg.jwls}}</h5>
                    <div class="row Gp0m0 my-2 ">
                        <div class="col-6 Gp0m0"> <button  type="button" class="nBtn mlr1 Anm-outln15si btn btn-lg button4 w-100"> <h6><strong>Buy</strong></h6></button></div> 
                        <div class="col-6 Gp0m0 "> <button type="button" class="nBtn   Anm-outln15si btn btn-lg button5 w-100"> <h6><strong>Gift</strong></h6></button> </div>
                    </div>
                </div>

        </div>  
        
    </div>
</template>


<script>
export default {
    data() {


        return{


            avtrbg:[
                {
                    img:"2.jpg",
                    ttl:"Avater bg title",
                    jwls:"75",    
                },
                  {
                    img:"2.jpg",
                    ttl:"Avater bg title",
                    jwls:"75",    
                },
                  {
                    img:"2.jpg",
                    ttl:"Avater bg title",
                    jwls:"75",    
                },
                  {
                    img:"2.jpg",
                    ttl:"Avater bg title",
                    jwls:"75",    
                },
                  {
                    img:"2.jpg",
                    ttl:"Avater bg title",
                    jwls:"75",    
                },
                  {
                    img:"2.jpg",
                    ttl:"Avater bg title",
                    jwls:"75",    
                },


            ]
        }
        
    },
}
</script>