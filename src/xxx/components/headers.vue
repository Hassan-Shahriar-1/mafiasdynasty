<template>

        <div class="header">
                        <div class="row Gp0m0 jaldi itmbg no-gutters" id='hdrvp10'>
                            <div class="col-1 py-0">
                                <img class="logimg shadow mt-2 ml-2" src="../assets/img/logo.png">

                            </div>
                            <div class="col-7 py-0 mt-2 jaldi" style="margin-left:10%;"  @click="demoV4()" >
                                <div class="float-right">
                                    <span class="incb1 iC-home ml-1"></span>
                                    <span class="incb1 iC-heart ml-1"></span>
                                    <span class="incb1 iC-rage ml-1"></span>
                                </div>
                                <h6 class="text-left">Level:500</h6>
                                <div class="progress n_bar-a" style="height:10px;">
                                    <div class="progress-bar clRBred bgD0" id="itmBr" :style="{width: Th.expW+'%'}"></div>
                                </div>
                                <h6 class="text-left">Exp: {{ Th.expst }}/{{ Th.exped }}</h6>

                            </div>

                            <div class="col-2 py-0 text-center  mt-2 Gp0m0 no-gutters" style="margin-left: 6%;">
                                <div class=" rounded  bgD8 ">
                                    <i class="fas fa-bell mt-1 siz30 text-white" @click="tog ^= true"></i>
                                    <span class="bg-danger rounded-circle bgpstn">1</span> 
                                </div>
                       
                            </div>

                            

                        </div>
                   

                    <!-- sticky top start  -->
                    <div id='StkinHmnu' class="container Gp0m0 " style="z-index:+1030">
                           <div class="row Gp0m0" >
                                <div class="col-4 py-0 itmbg jaldi" @click="demoV1()">
                                <h6>Enargy <span class=" float-right iC-energy incb1"></span> <br></h6>


                                <div class="progress n_bar-a" style="height:5px;">
                                    <div class="progress-bar clRBblue bgD0" id="itmBr" :style="{width: Th.engW+'%'}"></div>
                                </div>
                                <h6>{{Th.engst}}/{{Th.enged}}</h6>

                            </div>

                           


                            <div class="col-4 py-0 itmbg jaldi"  @click="demoV2()">
                                <h6>Rage<span class=" float-right iC-rage incb1"> </span></h6>
                                <div class="progress n_bar-a" style="height:5px;">
                                    <div class="progress-bar clRBgreen bgD0" id="itmBr" :style="{width:Th.RagW+'%'}"></div>
                                </div>
                                <h6> {{ Th.Ragst }} /{{ Th.Raged }}</h6>

                            </div>

                             <div class="col-4 py-0 itmbg jaldi" @click="demoV3()">
                                <h6>Health <span class=" float-right iC-heart incb1"></span></h6>

                                <div class="progress n_bar-a" style="height:5px;">
                                    <div class="progress-bar clRBrd bgD0" id="itmBr" :style="{width:Th.hltW+'%'}"></div>
                                </div>
                                <h6>{{ Th.hltst }} /{{ Th.hlted }}</h6>

                            </div>


                           
                        </div>


                        <div class="row Gp0m0" style="margin-top:-10px;">
                            <div class="col-6 py-0 itmbg jaldi">
                                <h6 class="float-left">Blood: <span class="float-right">454</span> </h6>
                            </div>



                            <div class="col-6 py-0 itmbg jaldi">
                                <h6 class="float-left">Jewels:<span class="float-right">454</span></h6>
                            </div>


                           


                        </div>
                    </div>


                      <div class="row Gp0m0  jaldi fadeInDown blk py-4 " role="group" aria-label="..." v-show="tog">
                                            <div class="row Gp0m0 w-100" v-for="(mnu,i) in mnus" :key="i">
                                            <div type="button"  class="btn nBtn col-3 Gp0m0  "><span class="incb2  iC-navHome"></span><h6>{{mnu.hm}}</h6></div>
                                            <div type="button"  class="btn nBtn col-3 Gp0m0  "><span class="incb2  iC-navHome"></span><h6>{{mnu.cd}}</h6></div>
                                            <div type="button"  class="btn nBtn col-3 Gp0m0  "><span class="incb2  iC-navHome"></span><h6>{{mnu.abt}}</h6></div>
                                            <div type="button"  class="btn nBtn col-3 Gp0m0  "><span class="incb2  iC-navHome"></span><h6>{{mnu.cntc}}</h6></div>
                                            </div> 

                                             

                                            <div class=" row Gp0m0 d-flex justify-content-center"> <div class="btn btn-lg  blkred px-5 text-white"  @click="tog ^= true">{{clg}}</div></div>



                         </div>


    </div>
                    

</template>
<script> 
// import jQuery from '../assets/js/lib/jquery-min.js'
export default {
    data(){
        return{         
             tog: false,
             Th:{
                 expst:500,
                 exped:1000,
                 expW:0,
                 engst:10,
                 enged:50,
                 engW:0,
                 Ragst:0,
                 Raged:1000,
                 RagW:0,
                 hltst:0,
                 hlted:10000,
                 hltW:0,
                 
                 
             },

             mnus:[
                 {
                 hm:"Home",
                 cd:"Code",
                 abt:"About",
                 cntc:"Contact"
                 },
                  {
                 hm:"Home",
                 cd:"Code",
                 abt:"About",
                 cntc:"Contact"
                 },
                  {
                 hm:"Home",
                 cd:"Code",
                 abt:"About",
                 cntc:"Contact"
                 },
                  {
                 hm:"Home",
                 cd:"Code",
                 abt:"About",
                 cntc:"Contact"
                 },
                  {
                 hm:"Home",
                 cd:"Code",
                 abt:"About",
                 cntc:"Contact"
                 },
                  {
                 hm:"Home",
                 cd:"Code",
                 abt:"About",
                 cntc:"Contact"
                 }
             ],
             clg:"Close"
             
        
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);

    },
    updated(){
        this.TptrgrBr();
    },
    mounted:function(){
        this.TptrgrBr();
        window.addEventListener('scroll', this.handleScroll);
    },  
    methods: {
        handleScroll () {
           var isPositionFixed = (('#StkinHmnu').css('position') == 'fixed');
         //   console.log('Im in '+isPositionFixed+' '+$(window).scrollTop());
            if ((window).scrollTop() >= ('#hdrvp10').height() && !isPositionFixed){          
               ('#StkinHmnu').css({'position': 'fixed', 'top': '0px', 'max-width':'532px'}); 
            }
            if ((window).scrollTop() <  ('#hdrvp10').height() &&  isPositionFixed){
                ('#StkinHmnu').css({'position': 'static', 'top': '0px'}); 
            } 
        },
        TptrgrBr(){
            this.Th.engW = 100 / this.Th.enged  * this.Th.engst;
            this.Th.RagW = 100 / this.Th.Raged  * this.Th.Ragst;
            this.Th.hltW = 100 / this.Th.hlted  * this.Th.hltst;
            this.Th.expW = 100 / this.Th.exped  * this.Th.expst;
           
        },
        demoV1(){
            this.Th.engst=this.Th.engst+5;
        },
        demoV2(){
            this.Th.Ragst=this.Th.Ragst+10;
        },
        demoV3(){
            this.Th.hltst=this.Th.hltst+100;
        },
        demoV4(){
            this.Th.expst=this.Th.expst+2;
        }
    },
   

}
</script>
<style scoped>

.fadeInDown {

    position: relative;
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 0.7s;
  animation-duration: 0.7s;
  
  }
  @-webkit-keyframes fadeInDown {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes fadeInDown {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  } 
</style>
 

