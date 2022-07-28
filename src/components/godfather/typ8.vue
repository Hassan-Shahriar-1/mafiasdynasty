<template>
    <div class="mb-5">
        <div class="row py-2 text-center Gp0m0"><h4 class="hr-sect jaldi">Task Traveller</h4></div>
        <div class="card bg-transparent border  Gp0m0">
            <div class="card-header blkgry text-center"><h4 class="titlefnt">Sophia Sharon <i @click="t8nws ^= true" class="float-right siz20 fas fa-question-circle"></i></h4>                
            </div>
                <h6 class="p-2 bdr2 text-justify dtlsfnt blkgry scale-up-center" v-show="t8nws">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio similique nulla aliquam,
                    amet asperiores nam minima odio iusto officiis 
                    voluptatem eveniet natus. Atque quidem, voluptate numquam laborum accusantium architecto?
                </h6>
            <div class="card-body Gp0m0 bg-transparent">
                <div class="card">
                    <img class="card-img p-2" src="../../assets/img/bannar/1.jpg" alt="">
                   <div class="card-img-overlay p-2">
                       <div style="margin-right:30%; box-shadow:inset 0px 0px 150px #000; padding: 4%;">    
                        <h6>I have gathered all the knowledge and items for ages. To be updated with 
                            the upcoming news, come to pay a visit. My knowledge adroitness is unrevealed which will be revealed very soon. <br> 
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bg-transparent p-4">
            <h4 class="titlefnt">Boss fight
            <router-link to="gfight"><div class="btn nBbg nBtn float-right btnfnt2 button4">Lets Go!</div></router-link></h4>
        </div>

        
        <div class="card-header blkgry"><h3 class="titlefnt"> Door WAY</h3></div>
        <div class="card-body blkd50 p-2 Gp0m0">
            <!-- Carousel Slider start  -->
            <carousel :autoplay="true" :height="300" :dots="false" :autoplayTimeout="3000" :nav="false" :items='1' > 
                <div class="card blkgry w-100 bdr1"  v-for="(hbimg, i) in bimg" :key="i">
                    <img class="card-img" style="height:150px;" 
                    :src="require('/src/assets/img/bannar/'+hbimg.img)">
                    <div class="row tmibg justify-content-center Gp0m0">
                        <div class="col-6 p-3"> <div class="btn nBtn nBbg blkgry btn-block">Hi Button </div></div>
                    </div>
                </div>
            </carousel>
            <!-- Carousel Slider End  -->
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