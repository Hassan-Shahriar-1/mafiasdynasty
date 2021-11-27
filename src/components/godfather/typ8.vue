<template>
    <div>
        <div class="row py-2 text-center Gp0m0"><h4 class="hr-sect jaldi">Task Traveller</h4></div>
        <div class="card bg-transparent border  Gp0m0">
            <div class="card-header blkgry text-center"><h4 class="titlefnt">Sophia Sharon <i @click="t8nws ^= true" class="float-right siz20 fas fa-question-circle"></i></h4>
                <h6 class="p-1 dtlsfnt" v-show="t8nws">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio similique nulla aliquam,
                    amet asperiores nam minima odio iusto officiis 
                    voluptatem eveniet natus. Atque quidem, voluptate numquam laborum accusantium architecto?
                </h6>
            </div>
            <div class="card-body Gp0m0 bg-transparent">
                <div class="card">
                    <img class="card-img p-2" src="../../assets/img/bannar/1.jpg" alt="">
                    <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                        <h4 class="card-title dtlsfnt siz20 ">Lets Go! <br> Hurry to collect some item and abilities here to for a development process and go to grab the things</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-transparent p-4">
            <h4 class="titlefnt">Boss fight
            <div class="btn nBbg nBtn float-right btnfnt button4">Lets Go!</div></h4>
        </div>
        
        <div class="card-header blkgry"><h4 class="titlefnt"> Door WAY</h4></div>
        <div class="card-body  Gp0m0 ">
            <carousel :autoplay="true"  :height="120" :dots="false" :nav="false" :items='1' class="p-2"> 
                <div class="card blkgry w-100 "  v-for="(hbimg, i) in bimg" :key="i">
                    <img class="card-img  bdr1 " style="height:80px; padding:5px;" 
                    :src="require('/src/assets/img/bannar/'+hbimg.img)">
                    <div class="row blkgry Gp0m0">
                        <div class="col-2 "> </div>             
                        <div class="col-8 p-3"> <div class="btn nBtn button4 nBbg text-center btn-block">Hi Button </div></div>
                        <div class="col-2 "> </div>  
                    </div>
                </div>
            </carousel>
        </div>    
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
      components: { carousel },
    data(){
        return{
            t8nws:false,
              bimg:[
                 {
                     img:"1.jpg"
                 },
                 {
                     img:"2.jpg"
                 },
                 {
                     img:"3.jpg"
                 },
                 {
                     img:"4.jpg"
                 },
                 {
                     img:"5.jpg"
                 },
                 {
                     img:"6.jpg"
                 },
                 {
                     img:"1.jpg"
                 },
                 {
                     img:"2.jpg"
                 },
                 {
                     img:"3.jpg"
                 },
                 {
                     img:"4.jpg"
                 },
             ]
        
        }
    }
}
</script>