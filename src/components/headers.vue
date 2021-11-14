<template>
    <div class="header jaldi ">
        <div class="row Gp0m0 hdbg  no-gutters" id='hdrvp10'>
            <div class="col-1 py-0">
                <img class="logimg losdo mt-2 ml-2" @click="$gm.bar();" src="../assets/img/logo.png">
            </div>

            <div class="col-7 py-0 mt-2 " style="margin-left:11%;"  >
                <div class="row Gp0m0">
                    <div class="col-4 Gp0m0">
                        <h6 class="text-left">Level: {{ Th.lvl }}</h6>
                    </div>

                    <div class="col-8 ">
                        <span class="incb1 float-right iC-home ml-1"></span>
                        <span class="incb1 float-right iC-heart ml-1"></span>
                        <span class="incb1 float-right iC-rage ml-1"></span>
                    </div>
                </div>
                <div class="progress n_bar-a" style="height:10px;">
                    <div class="progress-bar clRBred bgD0" id="itmBr" :style="{width: Th.expW+'%'}" ></div>
                </div>
                <h6 class="text-left">Exp:{{Th.expst}}/{{Th.exped}} </h6>
            </div>
            <div class="col-1 py-0 text-center  mt-2 Gp0m0 no-gutters" style="margin-left:3%;" @click="ntf=!ntf,lnk(ntf)">
                <div class=" rounded  bgD8">
                    <i class="fas fa-bell mt-1 siz20 text-white"></i>
                    <span class="bg-danger rounded-circle sizv10 bgpstn">11</span> 
                </div>    
            </div>

            <div class="col-1 py-0 text-center  mt-2 Gp0m0 no-gutters" style="margin-left: 1%;" @click="stngs = !stngs">
                <div class=" rounded  bgD8  ">
                <i class="fas fa-cogs mt-1 siz20 text-white "></i>
                </div>        
            </div>
        </div>
        <!-- sticky top start  -->
        <v-touch id='StkinHmnu' @doubletap="hdrdbltp()"  class="container Gp0m0 itmbg" style="z-index:+1030"> 
            <div class="row Gp0m0" >
                <div class="col-4 p-1 itmbg">
                    <h6 class='hrtl'>Enargy: <span class="hdricnpsn float-right iC-energy incb3"></span> <br></h6>
                    <div class="progress n_bar-a w-100" style="height:5px;">
                        <div class="progress-bar clRBblue bgD0" id="itmBr" :style="{width: Th.engW+'%'}"></div>
                    </div>
                    <h6 class="text-left">{{Th.engst}}/{{Th.enged}}</h6>
                </div>

                <div class="col-4 p-1 itmbg" >
                    <h6 class='hrtl'>Stamina:<span class="hdricnpsn float-right iC-rage incb3"> </span></h6>
                    <div class="progress n_bar-a w-100" style="height:5px;">
                        <div class="progress-bar clRBgreen bgD0" id="itmBr" :style="{width:Th.RagW+'%'}"></div>
                    </div>
                    <h6 class="text-left">{{Th.Ragst}}/{{Th.Raged}}</h6>
                </div>

                <div class="col-4 p-1  itmbg">
                    <h6 class='hrtl'>Health:<span class="hdricnpsn float-right iC-heart incb3"></span></h6> 
                    <div class="progress n_bar-a w-100" style="height:5px;">
                        <div class="progress-bar clRBrd bgD0" id="itmBr" :style="{width:Th.hltW+'%'}"></div>
                    </div>
                    <h6 class="text-left">{{Th.hltst}}/{{Th.hlted}}  </h6>
                </div>
            
                <div class="col-6 Gp0m0 itmbg">
                    <div class="row no-gutters ">
                        <div class="col-2 Gp0m0"><span class="incb3 iC-cash ml-1 mt-1 "></span></div>
                        <div class="col-10 Gp0m0"> <h6 class="float-left mt-1 hrtl text-success siz13"> Cash : {{Th.mcash}}</h6></div>
                    </div>
                </div>
                <div class="col-6 Gp0m0 itmbg ">
                    <div class="row no-gutters ">
                        <div class="col-2 Gp0m0"><span class="incb3 iC-gold ml-1 mt-1"></span> </div>
                        <div class="col-10 Gp0m0">  <h6 class=" float-left hrtl text-warning mt-1 siz13"> Gold : {{Th.mgold}}</h6></div>
                    </div>
                </div>
            </div>
        </v-touch>
        <div class="container Gp0m0 jaldi mnbg"></div>
        <div class="btn-group rounded jaldi bw100 p-1 m-1"  role="group" aria-label="..." v-show="stngs">
            <div class="row no-gutters">
                <router-link to="/game/alerts" tag="button"  class="btn col px-1 nBtn blkgry Gp0m0  " ><i class="fas fa-bell"></i><br> <h6 class="siz15">Alerts </h6></router-link>
                <router-link to="/game/editprofile" tag="button"  class="btn col px-1 nBtn blkgry Gp0m0   "><i class="fas fa-user"></i><br> <h6 class="siz15">Edit profile</h6> </router-link>
                <div tag="button"  class="btn col px-1 nBtn blkgry Gp0m0" @click="stngs=true"><i v-bind:class="{'fas fa-volume-down' :tog === true, 'fas fa-volume-mute': tog === false}" v-on:click="toggle()"></i>
                    <h6 class="siz15">Music</h6></div>
                <div tag="button" @click="Lotsw(),stngs=true" class="btn col px-1 nBtn blkgry Gp0m0"><i class="fas fa-sign-out-alt"></i><br> <h6 class="siz15">Logout</h6> </div>
                <router-link to="/game/alerts" tag="button"  class="btn col px-1 nBtn blkgry Gp0m0"><i class="fas fa-people-arrows"></i><br><h6 class="siz15"> Social Connect</h6> </router-link>
                <router-link to="/game/alerts" tag="button"  class="btn col px-1 nBtn blkgry Gp0m0"><i class="fab fa-acquisitions-incorporated"></i><br><h6 class="siz15"> Hints</h6> </router-link>
                <router-link to="/game/alerts" tag="button"  class="btn col px-1 nBtn blkgry Gp0m0"><i class="far fa-envelope"></i><br> <h6 class="siz15">Mail </h6></router-link>
                <router-link to="/game/forumlist" tag="button"  class="btn col px-1 nBtn blkgry Gp0m0"><i class="fab fa-wpforms"></i><br> <h6 class="siz15">Forum</h6> </router-link>
                <router-link to="/game/notification/pchat" tag="button"  class="btn col px-1 nBtn blkgry Gp0m0"><i class="fab fa-facebook-messenger"></i><br><h6 class="siz15"> Message </h6></router-link>
            


                <modal name="nrbpup" :width="330" :height="450" class="bdr4 blksdo rounded  mblr" >
                    <div class="card">
                        <div class="card-header blkgry">
                            <h2 class="text-left">Record book<h3 class="float-right"><i class="fas fa-times text-danger"  @click="nrbpuphd()"></i></h3></h2>
                        </div>
                        <div class="card-body bg-transparent" style="height: 400px; overflow: scroll;" v-if="nrcd==''">
                            <h6>{{ nrcd }}</h6>
                            
                        </div>
                        
                        <div class="card-body bg-transparent" style="height: 400px; overflow: scroll;" v-else>
                                <ul class="list-group tmibg" v-for="(rlst,i) in rcdlst" :key="i" style="overflow:scroll;">
                                <li class="list-group-item py-2 my-1 blkd75"><h6>{{rlst.msg}}</h6><p class="btmrt">{{rlst.dttm}}</p></li>
                                </ul>
                                <div class="bg-transparent"> 
                                    <div class="btn nBtn btn-lg btn-block px-2 tmibg">Show More...</div>
                                </div>
                        </div>
                    </div>    
                </modal>



                <modal name="Lotsw" :width="330" :height="300" class="bdr4 blksdo rounded  mblr" style="height:300px">
                    <div class="card" style="height:300px">
                        <div class="card-header blkgry">
                            <h2 class="text-center">LOGOUT <h3 class="float-right"><i class="fas fa-times text-danger"  @click="Lothd()"></i></h3></h2>
                        </div>
                        <div class="card-body tmibg">
                            <h3 class="mb-2 subtitlefnt">Do you really want to Logout?</h3>
                            <div class=" row no-gutters rounded mt-5">
                                <div class="col-6 p-1"><div class="btn nBtn btn-block btn-lg btnbfnt button5" @click="Lothd()"> No</div></div>
                                <div class="col-6 p-1"><div class="btn nBtn btn-block btn-lg btnbfnt blkredbtn" @click="logout()">Yes</div></div>
                            </div>
                        </div>
                    </div>
                </modal>
            </div> 
        </div>
  </div>
</template>


<style scoped>

.slide-enter-active {
   -moz-transition-duration: 0.4s;
   -webkit-transition-duration: 0.4s;
   -o-transition-duration: 0.4s;
   transition-duration: 0.4s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.4s;
   -webkit-transition-duration: 0.4s;
   -o-transition-duration: 0.4s;
   transition-duration: 0.4s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 120px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 120px;
}
</style>

<script>  
export default {   
    data(){
        return{             
             Th:{
                 lvl:0,
                 expst:500,
                 exped:1000,
                 expW:0,
                 engst:0,
                 enged:500,
                 engW:0,
                 Ragst:0,
                 Raged:100,
                 RagW:0,
                 hltst:0,
                 hlted:100,
                 hltW:0,
                 mcash:100,
                 mgold:0
                },
             tog: false,
             stngs:false,
             ntf:false,


                 
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
             clg:"Close",
             rcdlst:[],
             nrcd:'',
            
             
        
        }
    }, 
    
   
    beforeCreate() {        
        window.addEventListener('scroll', this.handleScroll);       
    },
    updated(){
        this.TptrgrBr();
        
    },
    mounted(){
        this.TptrgrBr();  
        window.addEventListener('scroll', this.handleScroll);
        /* this.socket.on('popupntf',(data)=>{
        console.log(data);
       

        })    */ 
         this.hgtdt()
    
    },  
  
       /*  beforeUpdate(){
           this.$mgo.gt('mp/hrtbt', (rsp)=>{  
                if(rsp.sts == 'ok'){
                    const imr = rsp.data;
                    for (const [key] of Object.entries(this.Th)) {
                        if(imr[key]){  this.Th[key] = imr[key]; }         
                    }    
                }        
            })
        }, */
    
    methods: {
        lnk(vl){
            console.log(vl);
            if(vl==true){
                this.$router.push('/game/notification/news')
            }else{
    
               if(this.$router.currentRoute.path=='/game/notification/pchat'){
                     this.$router.replace('/game/home/gtns') 
               }else if(this.$router.currentRoute.path=='/game/notification/request'){
                    this.$router.replace('/game/home/gtns')
               }else if(this.$router.currentRoute.path=='/game/notification/activity'){
                   this.$router.replace('/game/home/gtns')
               }else{
                this.$router.go(-1)
                    
                }
            }

        },
        logout(){
            this.$mgo.gt('auth/logout',(rs)=>{
                console.log(rs)
                
            })
        },

    toggle: function() {
      this.tog = !this.tog
    },
        hdrdbltp(){
           // alert('called');
           this.hgtdt();
           // this.hdrFrsh();
        },
        show(){
            this.$modal.show('ntfctn');
            
        },
        hide(){
            this.$modal.hide('ntfctn');
        },
         Lotsw(){
            this.$modal.show('Lotsw');
            
        },
        Lothd(){
            this.$modal.hide('Lotsw');
        },
           
        hgtdt(){
            this.$mgo.gt('mp/hrtbt', (rsp)=>{  
                if(rsp.sts == 'ok'){
                    const imr = rsp.data;
                    for (const [key] of Object.entries(this.Th)) {
                        if(imr[key]){  this.Th[key] = imr[key]; }         
                    }    
                }        
            })


        },
        handleScroll () {
           var isPositionFixed = (window.jq('#StkinHmnu').css('position') == 'fixed');
         //   on Screoll down
            if (window.jq(window).scrollTop() >= window.jq('#hdrvp10').height() && !isPositionFixed){          
               window.jq('#StkinHmnu').css({'position': 'fixed', 'top': '0px', 'max-width':'532px'}); 
                let sthgt = window.jq('#StkinHmnu').height();
                  window.jq('#Ingks').css('marginTop', sthgt+'px');
            }
             //   on Screoll Top
            if (window.jq(window).scrollTop() <  window.jq('#hdrvp10').height() &&  isPositionFixed){
                window.jq('#StkinHmnu').css({'position': 'static', 'top': '0px'}); 
                 window.jq('#Ingks').css('marginTop', '0px');
            } 
        },
         TptrgrBr(){
            this.Th.engW = 100 / this.Th.enged  * this.Th.engst;
            this.Th.RagW = 100 / this.Th.Raged  * this.Th.Ragst;
            this.Th.hltW = 100 / this.Th.hlted  * this.Th.hltst;
            this.Th.expW = 100 / this.Th.exped  * this.Th.expst;
           
        },

        hdrFrsh(){         
              
            this.Th.engst=this.Th.enged;
            this.Th.Ragst=this.Th.Raged;
            this.Th.hltst=this.Th.hlted;
            this.Th.expst=this.Th.exped;
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
        },
        
    
    },

}
</script>
<style scoped>
.hrtl{
    font-size: 1.1rem;
}
h6{
    font-size: 0.9rem;
}
.hdricnpsn{
    margin-top:-1px;
}
/* #StkinHmnu{
    min-height: 9vh; 
} */
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
 

