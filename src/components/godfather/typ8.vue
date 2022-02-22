<template>
    <div>
        <div class="row py-2 text-center Gp0m0"><h4 class="hr-sect jaldi">Task Traveller</h4></div>
        <div class="card bg-transparent border  Gp0m0">
            <div class="card-header blkgry text-center"><h4 class="titlefnt">Sophia Sharon <i @click="t8nws ^= true" class="float-right siz20 fas fa-question-circle"></i></h4>
                
            </div>

            <h6 class="p-2 m-2 text-justify dtlsfnt blkgry scale-up-center" v-show="t8nws">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio similique nulla aliquam,
                    amet asperiores nam minima odio iusto officiis 
                    voluptatem eveniet natus. Atque quidem, voluptate numquam laborum accusantium architecto?
                </h6>
            <div class="card-body Gp0m0 bg-transparent">
                <div class="card">
                    <img class="card-img p-2" src="../../assets/img/bannar/1.jpg" alt="">
                    <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                        <h6 class="card-title dtlsfnt " style="margin-right: 25%;box-shadow: inset 0px 0px 150px #330000, 0px 0px 20px #000033;padding: 2%;text-align: justify;"> 
                            Time was standing between me and them.The dark side brings them to life again and again. I am the first person who is fearlessly diving into the ocean of terror to put an end of the dark side. I can take you in that dimension to fight with them. If you can prove yourself through powers will get a robust ability. </h6>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-transparent p-4">
            <h4 class="titlefnt">Boss fight
            <router-link to="gfight"><div class="btn nBbg nBtn float-right btnfnt button4">Lets Go!</div></router-link></h4>
        </div>
        
        <div class="card-header blkgry"><h3 class="titlefnt"> Door WAY</h3></div>
        <div class="card-body  Gp0m0  pt-2">
            <carousel :autoplay="true" :height="250" :dots="false" :autoplayTimeout="2000" :nav="false" :items='1' class="px-2"> 
                <div class="card blkgry w-100 bdr1"  v-for="(hbimg, i) in bimg" :key="i">
                    <img class="card-img" style="height:150px; padding:2px;" 
                    :src="require('/src/assets/img/bannar/'+hbimg.img)">
                    <div class="row blkd75 Gp0m0">
                        <div class="col-3"> </div>             
                        <div class="col-6 p-3"> <div class="btn nBtn button4 nBbg text-center btn-block">Hi Button </div></div>
                        <div class="col-2"> </div>  
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