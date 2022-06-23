<template id="bdy" >
    <div class="header jaldi"  @click=" md()">


        <div class="row Gp0m0 hdbg  no-gutters" id='hdrvp10'>
            <div class="col-1 py-0">
                <img class="logimg losdo my-2 ml-2" @click="$gm.bar();" src="../assets/img/logo.png">
            </div>

            <div class="col-7 py-0 mt-2 " style="margin-left:10%;"  >
                <div class="row Gp0m0">
                    <div class="col-6 Gp0m0">
                        <h6 class="text-left"><span class="siz20">Level: </span>{{ Th.lvl }}</h6>
                    </div>

                    <div class="col-6 p-0 ">
                        <span class="incb1 float-right iC-home ml-1"></span>
                        <span class="incb1 float-right iC-heart ml-1"></span>
                        <span class="incb1 float-right iC-rage ml-1"></span>
                    </div>
                </div>
                <div class="progress n_bar-a" style="height:8px;">
                    <div class="progress-bar clRBppl bgD0" id="itmBr" :style="{width: Th.expW+'%'}" ></div>
                </div>
                  <!--  <progress-bar bg-color="linear-gradient( #999, #000)" size="8" :bar-border-radius="10" bar-transition="width 0.6s ease;" bar-color="linear-gradient(0deg, rgba(42, 1, 69, 1) 0%, rgba(75, 6, 117, 1) 55%, rgba(50, 2, 65, 1) 100%)" ref="saha"  :val=Th.expW  >
                  </progress-bar> -->
                <h6 class="text-left">Exp:{{Th.expst}}/{{Th.exped}} </h6>
            </div>
            <div class="col-1 py-0 text-center  mt-2 Gp0m0 no-gutters" style="margin-left:1%;" >
                <div class=" rounded  bgD8" @click="ntf=!ntf,lnk(ntf)">
                    <i class="fas fa-bell mt-1 siz20 text-white"></i>   
                    <span class="bg-danger rounded-circle sizv10 bgpstn">11</span> 
                </div>    
            </div>

            <div class="col-1 py-0 text-center  mt-2 Gp0m0 no-gutters" style="margin-left: 3%;">
                <div class="rounded bgD8"  @click="growDiv()"  >
                <i class="fas fa-cogs mt-1 siz20 text-white"></i>
                <span class="bg-danger rounded-circle sizv10 bgpstn">12</span> 
                </div>        
            </div>
        </div>


<!-- =====================================================================================================================
     *** This section is modified in pixel perfection for the vulnerability in the header section after scroll*** 
     ===================================================================================================================== -->

      
        <!-- sticky top start  -->
        <v-touch id='StkinHmnu' @doubletap="hdrdbltp()"  class="container Gp0m0 itmbg" style="z-index:+1030; max-width:575.98px;"> 
            <div class="row Gp0m0" >
                <div class="col-4 p-1 itmbgbdr blkgry">
                    <h6 class='hrtl'>Enargy  <span class="hdricnpsn float-right iC-energy incb3"></span> <br></h6>
                    <div class="progress n_bar-a w-100" style="height:5px;">
                        <div class="progress-bar clRBblue bgD0" id="itmBr" :style="{width: Th.engW+'%'}"></div>
                    </div>
                    <!-- <progress-bar bg-color="linear-gradient( #999, #000)" size="5" :bar-border-radius="10" bar-transition="width 0.6s ease;" bar-color="linear-gradient(180deg, rgba(54 ,19 ,209) 0%, rgba(15,3,122,1) 50%, rgba(15,1,77,1) 100%)" ref="saha"  :val=Th.engW  >
                  </progress-bar> -->
                    <h6 class="text-left">{{Th.engst}}/{{Th.enged}}</h6>
                </div>

                <div class="col-4 p-1 itmbgbdr blkgry" >
                    <h6 class='hrtl  '>Stamina<span class="hdricnpsn float-right iC-rage incb3"> </span></h6>
                    <div class="progress n_bar-a w-100" style="height:5px;">
                        <div class="progress-bar clRBgreen bgD0" id="itmBr" :style="{width:Th.RagW+'%'}"></div>
                    </div>
                    <!-- <progress-bar bg-color="linear-gradient( #999, #000)" size="5" :bar-border-radius="10" bar-transition="width 0.6s ease;" bar-color="linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(2, 161, 23, 0.8435749299719888) 55%, rgba(5, 224, 27, 1) 100%)" ref="saha"  :val=Th.engW  >
                  </progress-bar> -->
                    <h6 class="text-left">{{Th.Ragst}}/{{Th.Raged}}</h6>
                </div>

                <div class="col-4 p-1   blkgry">
                    <h6 class='hrtl' >Health<span class="hdricnpsn float-right iC-heart incb3"></span></h6> 
                    <div class="progress n_bar-a w-100" style="height:5px;">
                        <div class="progress-bar clRBrd bgD0" id="itmBr" :style="{width:Th.hltW+'%'}"></div>
                    </div>
                     <!-- <progress-bar bg-color="linear-gradient( #999, #000)" size="5" :bar-border-radius="10" bar-transition="width 0.6s ease;" bar-color="linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgb(224, 5, 5 ,84)  55%, rgb(224 5 5) 100%)" ref="saha"  :val=Th.hltW  >
                  </progress-bar> -->
                    <h6 class="text-left">{{Th.hltst}}/{{Th.hlted}}  </h6>
                </div>
            
                <div class="col-6 Gp0m0 itmbg">
                    <div class="row no-gutters ">
                        <div class="col-2 Gp0m0"><span class="incb3 iC-cash ml-1 mt-1 "></span></div>
                        <div class="col-10 Gp0m0"> <h6 id="mcash" class="float-left mt-1 hrtl text-success  siz13"> Cash : {{Th.mcash}}</h6></div>
                    </div>
                </div>
                <div class="col-6 Gp0m0 itmbg ">
                    <div class="row no-gutters ">
                        <div class="col-2 Gp0m0"><span class="incb3 iC-gold ml-1 mt-1"></span> </div>
                        <div class="col-10 Gp0m0">  <h6 id="mgold" class=" float-left hrtl  mt-1 siz13"> Gold : {{Th.mgold}}</h6></div>
                    </div>
                </div>
            </div>
        </v-touch>
        <div class="container Gp0m0 jaldi mnbg"></div>
        <div class="btn-group rounded jaldi bw100"  role="group" aria-label="..." >
         <div  id='grow'>
            <div class="measuringWrapper" >
                <div class=" row no-gutters blkgry" @click="handleClick">
                    <div class="col-4 p-1"> <router-link to="/game/alerts"><div @click="stnghd()"  tag="button"  class="btn btn-block  nBtn blkgry my-1 Gp0m0"><i    class="fas fa-exclamation-triangle"></i><br> <h6 class="siz15">Alerts </h6></div></router-link></div>
                    <div class=" col-4 p-1"><div tag="button"  class="btn btn-block  nBtn blkgry my-1 Gp0m0" v-on:click="toggle2()" @click="stngs=true"><i v-bind:class="{'fas fa-bell' :tgle === true, 'fas fa-bell-slash': tgle === false}" ></i><h6 class="siz15">notification</h6></div></div>
                    <div class="col-4 p-1"><router-link to="/game/editprofile"><div @click="stnghd()"  tag="button"  class="btn btn-block  nBtn blkgry my-1 Gp0m0 "><i class="fas fa-user"></i><br> <h6 class="siz15">Edit profile</h6></div> </router-link></div> 
                    <div class="col-4 p-1"><div  tag="button"  class="btn btn-block   nBtn blkgry my-1 Gp0m0" v-on:click="toggle()" @click="stngs=true"><i v-bind:class="{'fas fa-volume-down' :tog === true, 'fas fa-volume-mute': tog === false}" ></i><audio ref="audioElm"  loop="true" preload="auto" src="https://file-examples.com/storage/fee788409562ada83b58ed5/2017/11/file_example_WAV_5MG.wav"></audio><h6 class="siz15">Music</h6></div></div>
                    <div class="col-4 p-1"><div  tag="button" @click="sconnectshow() ,stnghd()"  class=" btn btn-block  nBtn blkgry my-1 Gp0m0"><i class="fas fa-share-alt"></i><br><h6 class="siz15"  > Social Connect</h6> </div></div>
                    <div class="col-4 p-1"><div  tag="button"  @click="bmsho(),stnghd()" class=" btn btn-block  nBtn blkgry my-1 Gp0m0"><i class="fas fa-lightbulb"></i><br><h6 class="siz15"> Hints</h6> </div></div>
                    <div class="col-4 p-1"><router-link to="/gmail"><div @click="stnghd()" tag="button"  class="btn btn-block  nBtn blkgry my-1 Gp0m0"><i class="far fa-envelope"></i><br> <h6 class="siz15">Mail </h6></div></router-link></div>     
                    <div class="col-4 p-1"><router-link to="/game/forumlist"><div @click="stnghd()" tag="button"  class="btn btn-block  nBtn blkgry my-1 Gp0m0"><i class="fab fa-wpforms"></i><br> <h6 class="siz15">Forum</h6></div> </router-link></div> 
                    <div class="col-4 p-1"><router-link to="/messenger"><div @click="stnghd()" tag="button"  class="btn btn-block  nBtn blkgry my-1 Gp0m0"><i class="fab fa-facebook-messenger"></i><br><h6 class="siz15"> Message </h6></div></router-link></div> 
                    <div class="col-4 p-1"><div tag="button" @click="Lotsw(),stnghd(),stngs=true" class=" btn btn-block  nBtn blkgry my-1 Gp0m0"><i class="fas fa-sign-out-alt"></i><br> <h6 class="siz15">Logout</h6> </div></div>
                </div>
            </div>
        </div>

            <modal name="sconnect"  :width="330" :isAutoHeight="true" @before-open="beforeOspen"  class="bdr4 blksdo  rounded mblr"  >
                         <div class="card tmibg" id="fds" >
                        <div class="card-header ">
                            <h2 class="text-left">Social Connect<h3 class="float-right"><i class="fas fa-times text-danger"  @click="sconnecthd()"></i></h3></h2>
                        </div>
                         <div class="row  mt-3 w-100 no-guttersb3px   p-2 m-0  rounded" >
                    <div class="col-3"><a href="https://www.facebook.com/mafiasrivalgame" class="btn nBtn btn-block btn-lg button3 mlr2 "><i class="fab fa-facebook"></i></a></div>
                    <div class="col-3"><a href="https://mafiasrival.com/" class="btn nBtn btn-block btn-lg button5 mlr2"><i class="fab fa-firefox-browser"></i></a></div>
                    <div class="col-3"><router-link to="/gmail"><div class="btn nBtn btn-block btn-lg button7 mlr2"><i class="fas fa-envelope"></i></div></router-link></div>
                    <div class="col-3"><div class="btn nBtn btn-block btn-lg button6 mlr2"><i class="fas fa-external-link-square-alt"></i></div></div>
                </div>
                  </div>
            </modal>
          
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

                   <modal name="bmsho"  :width='300'   :height='550' class="bdr4 blksdo rounded  mblr">
                    <div class="card" style="width:300px; height:550px;" >
                        <div class="card-header blkgry p-2">
                            <h2 class="text-center">Hints and Tips <h3 class="float-right"><i class="fas fa-times text-danger"  @click="bmshd()"></i></h3></h2>
                        </div>
                        <div class="card-body blk" style="height:500px; overflow:scroll;">
                            <h5>1.	Double tap on the VD logo. It will work like reloading the game.</h5><br>
                            <h5>2.	Double tap on the bar which shows Energy, Rage, Health, Jewels and Experience. It will reload the stat and will show your current stats if there were any laggy. </h5><br>
                            <h5>3.	If the loader stays much longer, double tap on the stat bar. </h5><br>
                            <h5>4.	Always keep your flow rate positive in blood flow.</h5><br>
                            <h5>5.	Keep as much minions as you can.</h5><br>
                            <h5>6.	Use your skill points carefully. </h5><br>
                            <h5>7.	Complete all the missions. It won't disappoint you later. If you skip one you should do it now.</h5><br>
                            <h5>8.	Always challenge your luck by visiting Lyssa.</h5><br>
                            <h5>9.	Visit Horkos twice or thrice in a day. .</h5><br>
                            <h5>10.	Blood from shop follows your income. So the more you have blood income the more you can buy bloods from shop at same cost.</h5><br>
                        </div>
                    </div>
                </modal>
        </div>
  </div>
</template>


<style scoped>

#more-button {
  border-style: none;
  background: none;
  font: 16px Serif;
  color: blue;
  margin: 0 0 10px 0;
}

#grow input:checked {
  color: red;
}

#more-button:hover {
  color: black;
}

#grow {
  -moz-transition: height .5s;
  -ms-transition: height .5s;
  -o-transition: height .5s;
  -webkit-transition: height .5s;
  transition: height .5s;
  height: 0;
  overflow: hidden;
}

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
             tgle:false,
             sconnect:false,
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
      /*   this.growDiv();  */
       window.addEventListener('scroll', this.handleScroll);
        
    },
    mounted(){
        this.TptrgrBr();  
        window.addEventListener('scroll', this.handleScroll);
         this.toggle()

        /* this.socket.on('popupntf',(data)=>{
        console.log(data);
        })    */
         this.hgtdt()
        /* var audio = new Audio('https://file-examples.com/storage/fee788409562ada83b58ed5/2017/11/file_example_WAV_5MG.wav');
        audio.play(); */
          
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

           beforeOspen() {
      setTimeout(() => {
        window.jq(".vm--modal").height(window.jq("#fds").outerHeight());
      }, 0);
    },
        lnk(vl){
            console.log(vl);
            
            if(vl==true){
                this.$router.push('/game/notification/news')
                 var md = document.getElementById('grow');
                 md.style.height = 0;
            }else{
    
               if(this.$router.currentRoute.path=='/game/notification/pchat'){
                     this.$router.replace('/game/home/gtns') 
               }else if(this.$router.currentRoute.path=='/game/notification/request'){
                    this.$router.replace('/game/home/gtns')
               }else if(this.$router.currentRoute.path=='/game/notification/activity'){
                   this.$router.replace('/game/home/gtns')
               }
               else{
                this.$router.go(-1) 
                }
            }
        },
        logout(){
            this.$mgo.gt('auth/logout',(rs)=>{
                console.log(rs)
            })
        },

    toggle() {
        this.tog =!this.tog
        var a = this.$refs.audioElm;
        a.volume = 0.5;
        a.currentTime = 0;
        if (a.paused) {
            a.play();
        } 
        else {
            a.pause();
        }
        },

    toggle2: function() {
      this.tgle = !this.tgle
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
           bmsho(){
            this.$modal.show('bmsho');  
        },
        bmshd(){
            this.$modal.hide('bmsho');
        },

        sconnectshow(){
            this.$modal.show('sconnect');
        },
          sconnecthd(){
            this.$modal.hide('sconnect');
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
               window.jq('#StkinHmnu').css({'position': 'fixed', 'top': '0px', 'max-width':'575.98px'}); /* max-width':'532px' */
                let sthgt = window.jq('#StkinHmnu').height();
                  window.jq('#Ingks').css('marginTop', sthgt+'px');
                  window.jq('#Ingks').css('marginTop', sthgt+'px');
            }
             //   on Screoll Top
            if (window.jq(window).scrollTop() <  window.jq('#hdrvp10').height() &&  isPositionFixed){
                window.jq('#StkinHmnu').css({'position': 'static', 'top': '0px'}); 
                 window.jq('#Ingks').css('marginTop', '0px');
                 window.jq('#Ingks').css('ScrollBehaviour', 'smooth');
            } 
        },
         TptrgrBr(){
            this.Th.engW = 100 / this.Th.enged  * this.Th.engst;
            this.Th.RagW = 100 / this.Th.Raged  * this.Th.Ragst;
            this.Th.hltW = 100 / this.Th.hlted  * this.Th.hltst;
            this.Th.expW = 100 / this.Th.exped  * this.Th.expst;
        },

        growDiv() {

        var growDiv = document.getElementById('grow');
        if (growDiv.clientHeight) {
            growDiv.style.height = 0;
 }
        

   
        else {
            var wrapper = document.querySelector('.measuringWrapper');
            growDiv.style.height = wrapper.clientHeight + "px";
            //window.jq('#grow').css('position', 'fixed' );
            window.jq('#grow').css({'position':'fixed','z-index':'+1500'});
            this.ntf==false;
        }
   
      
        },


        md(){
            var growDiv = document.getElementById('grow');
        if (growDiv.clientHeight) {
            growDiv.style.height = 0;
 }

        },

handleClick() {
    var growDiv = document.getElementById('grow');
  if (growDiv) {
    this.$emit("hide"); //fires only on click outside
    console.log('this is clicked')
  }
},


        


stnghd(){
 var growDiv = document.getElementById('grow');
    growDiv.style.height = 0;
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
 

