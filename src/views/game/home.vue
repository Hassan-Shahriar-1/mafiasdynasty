<template>
    <div class="container px-0  ">
        <div class="StryCntnr" style="margin-bottom:1vh;">  
            <div class="card tmibg bnrbxsdomn">     
                <carousel :autoplay="true" :height="200" :dots="false" :nav="false" :items='1' class=""> 
                <img v-for="(hbimg, i) in bimg" :key="i" class="card-img" style="height:200px; " 
                :src="require('/src/assets/img/bannar/'+hbimg.img)">
                </carousel>
            </div>
            <div class="row Gp0m0 bg-dark  p-2">                       
                <div class="col-9 Gp0m0"><h2 class=" siz30 titlefnt">Filght for Colambia</h2></div>
                <div class="col-3 Gp0m0"><div class="btn nBtn Gp0m0  btn-block bgD8 btn-lg siz10" style="padding:12px 0px;" @click="show()"><i class="fas fa-plane text-info siz15"></i>Fly now</div></div>
            </div>
            <div class="row Gp0m0 px-1">
                <div class="col-3 Gp0m0 jaldi">

                        <router-link to="gtns"  class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="fas fa-globe-americas"></i> <br> News</router-link>
                        <router-link :to="{name:'blab'}" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"> <i class="fas fa-comment-alt"></i><br> blab 2</router-link>
                        <router-link to="lmtdofr" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="fab fa-buffer"></i><br> offers</router-link>
                        <router-link :to="{name:'limited'}" class="btn btn-lg p-1  btn-block text-light Anm-outln15si incb4 button4 " v-if="lmtd!=''"> <img  style="height:60px; width:60px;" src="../../assets/img/icon/Hi-habib-vai.png"  alt=""> </router-link>
                        <router-link to="update" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="fas fa-edit"></i> <br> Updates</router-link>
                        <router-link to="dailytask" class="btn btn-lg py-1 px-0  btn-block text-danger  nBtn bgD8"><i class="fas fa-tasks"></i> <br>Daily<br>task</router-link>
                        <router-link to="bonus" class="btn btn-lg p-1  btn-block text-light Anm-outln15si incb4 button4" v-if="bns!=''"><i class="fas fa-money-check-alt"></i> <br>  Bonus</router-link>
                        <router-link to="publicchest" class="btn btn-lg py-1 px-0  btn-block text-danger  nBtn bgD8"><i class="fas fa-vest-patches"></i> <br>  Public <br>Chest</router-link>
                        <router-link to="clanchest" class="btn btn-lg py-1 px-0  btn-block text-danger  nBtn bgD8"><i class="fas fa-vest-patches"></i> <br>  Clan <br>Chest</router-link>
                </div>
                <div class="col-9 Gp0m0 pl-2  overflow-scroll">
                    <router-view></router-view>
                </div>
                <div class="card my-1">
                    <img src="../../assets/img/bannar/mbnr.gif" class="card-img ">
                    <div class="card-img-overlay">
                        <div class="text-left">
                            <div class="row ">
                                <div class="col-8"> 
                                    <h5 class="b1-h2">The Burning Fate<br></h5>
                                    <h6 class="siz13"><br>
                                        Vampires are awakened by a voice from the beyond.<br>They all must protect their realm.<br>This time, survival is the biggest crisis. <br><br></h6>
                                </div>  
                                <div class="col-4">
                                    <div class="text-center" style="background-image: radial-gradient(rgba(51, 0, 0, 1), rgba(51, 0, 0, 0.8), rgba(51, 0, 0, 0.01));"><!--style="margin-top: -20px;"-->
                                        <h6 class="text-center "> 
                                            <span>10</span>D -   <span id="GspH96029">15</span>H -  <span>33</span>M  - <span>33</span>S Left to Close</h6>
                                            <img src="../../assets/img/bannar/ptl-ic1.png"  class="card-img rotAnimate-x">  															 						
                                            <h4 onclick="game.page.Portal.list(21)" class="nC-pdTB-5p nC-mgTB-5p  "> Enter </h4>
                                    </div> 
                                </div>  
                            </div>  
                        </div> 
                    </div>     
                </div>

        <!--     <div class="blkgry w-100 p-2 "><h3 class="titlefnt text-center"> News</h3></div>
        <div class="card p-2 bMbg3 bnrbxsdo Gp0m0">
            <carousel :autoplay="true" :height="300" :dots="true" :autoplayTimeout="3000" :nav="false" :items='1' > 
                <div class="card border-0 w-100 bg-transparent"  v-for="(news, i) in newsdtls" :key="i">
                  <h6 class="dtlsfnt" style="height:150px;">{{news.name}}</h6>
                </div>
            </carousel>
        </div>  -->
<!-- Godfathers Section start -->
        <div class="row Gp0m0">
            <div class="col-6 card">
                <router-link :to="{name:'typ1'}">
                    <img class="card-img" style="opacity:0.7;" src="../../assets/img/bannar/1.jpg" alt="">
                    <div class=" p-0 card-img-overlay text-center">
                        <h5 class="card-title-top">Fabrizio Carlos</h5>
                        <p class="m-0">Collector</p>
                        <div class="btn nBbg nBtn siz15 blkred">Collect</div>
                    </div> 
                </router-link>
            </div>
            <div class="col-6 card">
                <router-link :to="{name:'typ2'}"><img class="card-img" style="opacity:0.7;" src="../../assets/img/bannar/1.jpg" alt="">
                    <div class=" p-0 card-img-overlay text-center">
                        <h5 class="card-title-top">Sandra Corleone</h5>
                        <p class="m-0">Spinner</p>
                        <div class="btn nBbg nBtn siz15 blkred">Spin</div>
                    </div>
                </router-link> 
             </div>
            <div class="col-6 card">
                <router-link :to="{name:'gfight'}" >
                    <img class="card-img" style="opacity:0.7;" src="../../assets/img/bannar/1.jpg" alt="">
                    <div class=" p-0 card-img-overlay text-center">
                        <h5 class="card-title-top">Boss name</h5>
                        <div class="btn nBbg nBtn siz15 blkred btn-block">Boss Fight</div>
                    </div>
                </router-link>
             </div>
            <div class="col-6 card">
                 <router-link :to="{name:'typ5'}" > <img class="card-img" style="opacity:0.7;" src="../../assets/img/bannar/1.jpg" alt="">
                <div class=" p-0 card-img-overlay text-center">
                        <h5 class="card-title-top">Robert and Linda</h5>
                    </div> 
                </router-link>
            </div>
        </div>
            </div> 
        </div>
<!-- godfathers Section End -->
        <modal name="ban" :width='300' :isAutoHeight="true" v-if="alllnd"  @before-open="beforeOspen" class="mblr bdr p-1 rounded-2">
            <div class="row Gp0m0 card blkgry">
                    <div class="card-header tmibg2 p-1">
                    <h4 class=" rounded-0 text-center py-1 w-100 " style="position:sticky;">Welcome To the flight
                        <span class="float-right" style="margin-right:2%;"  @click="hide()"><div class="crossbtn"><i class="fas fa-times "></i></div></span></h4>
                    </div>
                    <div class="card-body bg-transparent p-0"  style="height:250px; overflow:scroll;">
                        <div class="w-100  Gp0m0" >   
                            <ul class="list-group Gp0m0"  >
                                <!-- <img :src="lndimg+lnd.img" />
                                <h5>{{lnd.name}} <div class="btn btn-lg float-right p-1 button6 nBtn">Just fly</div></h5> -->
                                <li class="list-group-item bMbg5  p-0 m-1" v-for="(lnd,i) in alllnd" :key="i">
                                    <div class="card blksdo p-0">
                                        <img class="card-img img-fluid" :src="lndimg+lnd.img" alt=""/>
                                        <div class="card-img-overlay px-1">
                                            <h4 class="card-text titlefnt ">
                                                {{lnd.name}} <div class="btn nBtn btn-lg float-right p-2 mt-3 button5 nBtn  siz13" @click="fly(lnd.mid)">Just fly</div>
                                            </h4>
                                            <h6 class="card-text subtitlefnt">Subtitle here</h6>
                                        </div>
                                    </div>                      
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </modal> 
    </div>
</template>
<script>
import carousel from 'vue-owl-carousel'
export default ({
  components: { carousel },
    data() {
        return{
            alllnd:[],
            slide:[1,2,3,4,5],
            lndimg:'https://mafiasrival.com/land/',
            bh:{
                 incm:500,
                 upkp:1000,
                 flwrt:55,
                 ablts:10,
                 mnons:50,
                 clan:55,
                 srd:90,
                 hpW:0,
                 hpst:20,
                 hped:1000,  
             },
                lmtd:'',
                bns:'',
         /*    newsdtls:[
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                              {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                            {
                                name:"lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc lorem lipasgh du asgcujhhs x fashcyix f fdtasufas rfasdtxfyuasd dfatysxcf jascfryfc"
                            },
                        ], */
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
    },
    created() {
       this.$mgo.gt('mission/allland',(rss)=>{
       
              if(rss.sts=='ok'){
                  this.lmtd=rss.lmtd;
                  this.bns=rss.sale;
                  
                rss.data.forEach((val)=>{
                    this.alllnd.push(val)
                })
           }
         console.log(rss)
       })
    },
    updated(){
        this.TptrgrBr();
    },
    mounted:function(){
        this.TptrgrBr();
      // this.swiper.slideTo(3, 1000, false)    
    },
    methods: {
         beforeOspen(){
            setTimeout(()=>{ 
                 window.jq('.v--modal').height(window.jq('#gtmhyHt').outerHeight());
            }, 10);
        },
        TptrgrBr(){
            this.bh.hpW = 100 / this.bh.hped * this.bh.hpst;
        },
        demoV1(){
            this.bh.hpst = this.bh.hpst+10;
        },
        show () {
            this.$modal.show('ban');            
        },
        hide () {
            this.$modal.hide('ban');
        },
        fly(mid){
            this.$router.push('/game/land/'+mid)
        }
    },
})
</script>
<style scoped>
.swiper-slide{
    height: 4rem;
    text-align: center;
    padding-top: 3rem;
    border-bottom: 1px solid #0000;
}
</style>


