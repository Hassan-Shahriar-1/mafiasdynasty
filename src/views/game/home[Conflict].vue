<template>
 
<div class="container px-0  ">
    <div class="StryCntnr">
        <!--header content start-->
       

        <!-- Sticky top end -->
        <!-- menu content strat -->
         
    
  
    
    

               
    <carousel :autoplay="true" :height="120" :dots="false" :nav="false" :items='1'  >
    <img  class="card-img" src="../../assets/img/item/Gold-bar.jpg">

    <img  class="card-img" src="../../assets/img/item/Gold-bar.jpg">

    <img  class="card-img" src="../../assets/img/item/Gold-bar.jpg">

    <img  class="card-img" src="../../assets/img/item/Gold-bar.jpg">
    <img  class="card-img" src="../../assets/img/item/Gold-bar.jpg">

    <img  class="card-img" src="../../assets/img/item/Gold-bar.jpg">
    <img  class="card-img" src="../../assets/img/item/Gold-bar.jpg">

    <img  class="card-img" src="../../assets/img/item/Gold-bar.jpg">
    </carousel>

        
        
        <div class="row Gp0m0 bg-dark  p-2">
                                    
            <div class="col-9 Gp0m0"><h2 class="text-warning titlefnt">Filght for Colambia</h2></div>
            <div class="col-3 Gp0m0"><div class="btn nBtn Gp0m0 p-2 btn-block  mlr2 bgD8 btn-lg siz13" @click="show()"><i class="fas fa-plane text-info siz20"></i>Fly now</div></div>
        </div>

        <div class="row Gp0m0 px-1">

            <div class="col-3 Gp0m0 jaldi">
                    <router-link to="gtns"  class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="far fa-newspaper"></i> <br> News</router-link>
                    <router-link to="blab" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"> <i class="fas fa-comments"></i><br> blab 2</router-link>
                    <router-link to="lmtdofr" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="fab fa-buffer"></i><br> offers</router-link>
                    <router-link to="limited" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8 fnt-Hed3 Anm-outln15si"><i class="fas fa-asterisk"></i> <br> Limited</router-link>
                    <router-link to="update" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="fas fa-edit"></i> <br> Updates</router-link>
                    <router-link to="bonus" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="fas fa-money-check-alt"></i> <br>  Bonus</router-link>
            </div>
            <div class="col-9 Gp0m0 pl-2  overflow-scroll">
                <router-view></router-view>
            </div>
        </div> 
                </div>

    <modal name="ban" :width='300'   :isAutoHeight="true" v-if="alllnd"  @before-open="beforeOspen" class="mblr bdr p-1 rounded-2">
       <div class="row Gp0m0 blkgry " >
            <div class="card blkgry">
                        <div class="card-header tmibg2 p-1">
                        <h4 class=" rounded-0 text-center py-1 w-100 " style="position:sticky;">Welcome To the flight
                            <span class="float-right" style="margin-right:2%;"  @click="hide();"><div class="crossbtn"><i class="fas fa-times "></i></div></span></h4>
                        </div>
                        <div class="card-body bg-transparent p-0"  style="height:250px; overflow:scroll;">
                            <div class="w-100  Gp0m0" >   
                            <ul class="list-group Gp0m0"  >
                                <!-- <img :src="lndimg+lnd.img" />
                                <h5>{{lnd.name}} <div class="btn btn-lg float-right p-1 button6 nBtn">Just fly</div></h5> -->
                                <li class="list-group-item bMbg5  p-0 m-1" v-for="(lnd,i) in alllnd" :key="i">
                                    <div class="card blksdo p-0">
                                    <img class="card-img img-fluid" :src="lndimg+lnd.img" alt=""/>
                                    <div class="card-img-overlay px-0">
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
        </div>
    </modal> 

</div>
 
 
</template>


<script>

/* import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css' */
  /* import 'swiper/swiper.min'
  import { swiper, swiperSlide} from 'swiper'; */
  import carousel from 'vue-owl-carousel'

export default ({
  
  components: { carousel },

    data() {
        return{
            alllnd:[],
            slide:[1,2,3,4,5],
            lndimg:'http://mrdemo.com/land/',
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
             }
        }
    },
    created() {
       this.$mgo.gt('mission/allland',(rss)=>{
              if(rss.sts=='ok'){
                rss.data.forEach((val)=>{
                    this.alllnd.push(val)
                })
           }
           console.log(rss.data);
       })
        
    },
    updated(){
        this.TptrgrBr();
    },
   
    mounted:function(){
        this.TptrgrBr();
     
      console.log('Current Swiper instance object', this.swiper)
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


