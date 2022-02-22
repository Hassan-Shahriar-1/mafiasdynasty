<template>
    <div>
        <div class="card bg-transparent border  Gp0m0">
            <div class=" card-header blkgry text-center">
                <h4 class="titlefnt">Sophia Sharon <router-link to="typ8">
                    <span class="float-left"><i class="fas fa-arrow-circle-left siz25"></i></span></router-link> 
                    <i @click="t8nws ^= true" class="float-right siz25 fas fa-question-circle"></i>
                </h4>
            </div>

            <h6 class="p-2 m-2 text-justify dtlsfnt blkgry scale-up-center" v-show="t8nws">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio similique nulla aliquam,
                amet asperiores nam minima odio iusto officiis 
                voluptatem eveniet natus. Atque quidem, voluptate numquam laborum accusantium architecto?
            </h6>

            <div class=" card-body Gp0m0 bg-transparent">
                <div class="pagination">
                    <a class="blkgry btn nBtn" href="#">1</a>
                    <a class="blkgry btn nBtn" href="#">2</a>
                    <a class="blkgry btn nBtn" href="#">3</a>
                    <a class="blkgry btn nBtn" href="#">4</a>
                    <a class="blkgry btn nBtn" href="#">5</a>
                    <a class="blkgry btn nBtn" href="#">6</a>
                    <a class="blkgry btn nBtn" href="#">7</a>
                    <a class="blkgry btn nBtn" href="#">8</a>
                    <a class="blkgry btn nBtn" href="#">9</a>
                    <a class="blkgry btn nBtn" href="#">10</a>
                    <a class="blkgry btn nBtn" href="#">11</a>
                    <a class="blkgry btn nBtn" href="#">12</a>  
                    <a class="blkgry btn nBtn" href="#">13</a>
                    <a class="blkgry btn nBtn" href="#">14</a>
                    <a class="blkgry btn nBtn" href="#">15</a>
                    <a class="blkgry btn nBtn" href="#">16</a>
                    <a class="blkgry btn nBtn" href="#">17</a>
                    <a class="blkgry btn nBtn" href="#">18</a>  
                    <a class="blkgry btn nBtn" href="#">19</a>
                    <a class="blkgry btn nBtn" href="#">20</a>
                    <a class="blkgry btn nBtn" href="#">21</a>
                    <a class="blkgry btn nBtn" href="#">22</a>
                    <a class="blkgry btn nBtn" href="#">23</a>
                    <a class="blkgry btn nBtn" href="#">24</a>  
                    <a class="blkgry btn nBtn" href="#">25</a>
                    <a class="blkgry btn nBtn" href="#">26</a>
                    <a class="blkgry btn nBtn" href="#">27</a>
                    <a class="blkgry btn nBtn" href="#">28</a>
                    <a class="blkgry btn nBtn" href="#">29</a>
                    <a class="blkgry btn nBtn" href="#">30</a>  
                </div>
            </div>
        </div>
    
            <carousel :autoplay="false" :height="250"  :dots="false" :autoplayTimeout="2000" :nav="false" :items='1' class="px-2 mt-5"> 
                <div class="card blk50 w-100 bdr1"  v-for="(hbimg, i) in bimg" :key="i">
                    <div class="card-header text-center blkgry"><h4>{{hbimg.nm}}</h4>
                        <img class="card-img" 
                            :src="require('/src/assets/img/bannar/'+hbimg.img)">
                        <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                            <h6 class="card-title dtlsfnt " style=" box-shadow: rgb(54, 53, 53) 0px 0px 150px inset, rgb(0, 0, 51) 0px 0px 20px; margin-top:-35%; padding: 2%; text-align: justify;">
                                    I am the first person who is fearlessly diving into the ocean of terror to put an end of the dark side. 
                                    I can take you in that dimension to fight with them. If you can prove yourself through powers will get a robust ability. 
                            </h6>  
                        </div>
                    </div>
                    
                    <div class="card-body p-1">
                        <div class="row Gp0m0">
                            <div class="col-8 p-0">
                                <h6>Requirement</h6>
                            <div class="row Gp0m0"> 
                                <div class="col-4 text-center p-0">                          	
                                    <img class="card-img p-1" src="https://www.vampiredynasty.com/vd/s4/src/item/306.gif" alt="66 X Muleta">
                                    <h6>66 Muleta </h6>  
                                </div>
                                <div class="col-8">  
                                    <h6><i class="fa fa-bolt"></i> &nbsp;Energy:26<br></h6> 
                                    <h6 ><i class="fa fa-bookmark"></i> &nbsp;Exp:120</h6>
                                    <h6><i class="fa fa-tint"></i> &nbsp;Blood: + ( 22,575 - 37,625 )</h6>
                                </div>
                            <button type="button" style="margin: 5%;" class="w-100 nBtn blkgry"><h5 class="p-2"><strong>Lets Go</strong></h5></button>
                             </div>
                            </div>
                                <div class="col-4">
                                <h6 class="text-center">Killed:0</h6> 
                                    <div class="bgD2 mt-1 mlr2 p-2 text-center vk-bdr-tpm1">
                                        Reward <img class="card-img " src="https://www.vampiredynasty.com/vd/s4/src/abilities/216.gif"><h6>1 X Summon Colossus</h6> 
                                    </div>
                                </div>
                        </div>
                     </div>
                </div>
            </carousel>
    </div>
</template>


<style>
.pagination {
  display: inline-block;
}

.pagination a {
  color: rgb(255, 255, 255);
  float: left;
  padding: 6px 12px;
  text-decoration: none;
  margin: 0.20rem;
}</style>
<script>
import carousel from 'vue-owl-carousel'

export default {
      components: { carousel },
    data(){
        return{
            t8nws:false,
              bimg:[
                 {
                     img:"1.jpg",
                     nm:"divas Secret"
                 },
                 {
                     img:"2.jpg",
                     nm:"divas Secret"
                 },
                 {
                     img:"3.jpg",
                     nm:"divas Secret"
                 },
                 {
                     img:"4.jpg",
                     nm:"divas Secret"
                 },
                 {
                     img:"5.jpg",
                     nm:"divas Secret"
                 },
                 {
                     img:"6.jpg",
                     nm:"divas Secret"
                 },
                 {
                     img:"1.jpg",
                     nm:"divas Secret"
                 },
                 {
                     img:"2.jpg",
                     nm:"divas Secret"
                 },
                 {
                     img:"3.jpg",
                     nm:"divas Secret"
                 },
                 {
                     img:"4.jpg",
                     nm:"divas Secret"
                 },
             ]
        
        }
    }
}
</script>