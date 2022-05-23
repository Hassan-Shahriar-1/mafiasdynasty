<template>
    <div>
        <div class="row py-2 text-center Gp0m0"><h4 class="hr-sect jaldi">Reporter</h4></div>
        <div class="card Gp0m0" style="min-height:700px;">
            <div class="card-header blkgry text-center"><h4 class="titlefnt">Lucy Montana</h4></div>
            <div class="card-body p-1">
                <div class="card p-0">
                    <img class="card-img " src="../../assets/img/bannar/1.jpg" alt="">
                   <div class="card-img-overlay p-2">
                       <div style="margin-right:30%; box-shadow:inset 0px 0px 150px #000; padding: 4%;">    
                        <h6>I have gathered all the knowledge and items for ages. To be updated with 
                            the upcoming news, come to pay a visit. My knowledge adroitness is unrevealed which will be revealed very soon. <br> 
                            </h6>
                     </div>
                 </div>
                </div>


                <div class="row Gp0m0 px-1">
                    <div class="col-12 Gp0m0 ">
                        <div v-if="btn!=''"> <router-link to="/adminnews">  <div class="btn nBtn nBbg btn-lg btn-block text-center blkgry">Post a new topic</div></router-link></div>
                     
                        <br>
                        <div class="bw100 w-100 rounded jaldi blkgry" role="group" aria-label="...">
                            <div class="btn-group  bw100 w-100  sizv13">
                                <div tag="button" class="btn nBtn siz15 p-1 Gp0m0 blkgry" @click="tog('news')">  <i class="fas fa-award"></i> <br>News</div>
                                <div tag="button" class="btn nBtn siz15 p-1 Gp0m0 blkgry" @click="tog('gift')" >  <i class="fas fa-award"></i> <br>Gift</div>
                                <div tag="button" class="btn nBtn siz15 p-1 Gp0m0 blkgry" @click="tog('help')">  <i class="fas fa-award"></i> <br>Help</div>
                                <div tag="button" class="btn nBtn siz15 p-1 Gp0m0 blkgry" @click="tog('tips')">  <i class="fas fa-award"></i> <br>Tips</div>
                            </div>
                        </div>
                    </div> 

                    <div class="col-12 Gp0m0">
                        <div class="row Gp0m0 dtlsfnt" v-show="t7nws">
                            <div class="card  Gp0m0 broder-0">
                                <div class="card-header blkgry"><h4 class="text-center titlefnt">{{gnews.nm}}</h4></div>
                                <div class="card-body bnrbxsdo tmibg my-2">
                                        <h5>
                                        {{gnews.dtls}}
                                        </h5>
                                        <div class="col-12 mt-3"><i class="fas fa-thumbs-up btn  p-1 bgmn float-left ">100&nbsp;</i><i class="fas fa-thumbs-down btn  p-1 bgmn mlr3 float-right ">100</i></div>
                                </div>
                                <div class="card-footer blkgry"><div class="btn nBtn nBbg btn-lg btn-block button4 px-3 text-center">Close</div></div>
                            </div>
                        </div>
                        <div class="col-12 dtlsfnt mt-3 tmibg bnrbxsdo rounded Gp0m0" v-show="t7gft">
                            <div v-if="giftopen=true" class="row Gp0m0">
                                <div class="col-4"><img  class="card-img " src="../../assets/img/item/1.gif" alt=""></div>
                                <div class="col-8">
                                    <h6>   You have come on the right time. I have a gift for you. </h6>
                                    <div class="btn nBtn nBbg button4 siz15 float-right">Grab It</div>
                                </div>
                            </div>
                <!-- if else here to set time to collect gif or this will show the 2nd one initially -->
                            <div v-else class="row Gp0m0">
                                <div class="col-4"><img  class="card-img " src="../../assets/img/watch.png" alt=""></div>
                                <div class="col-8">
                                    <h6>  <span>Wait for <span id="GspH83042">1</span> hour <span id="GspM83042">59</span>
                                    Minutes <span id="GspS83042">40</span> Seconds </span>. Something special is coming for you.</h6>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 dtlsfnt tmibg bnrbxsdo" v-show="t7hlp">
                            <div class="dtlsfnt"><h3>How to play</h3><h5>
                                To be a part of Dynasty every player must sign up first after that player will be able to enter into Dynasty.<br><br>
                                *Level: Level shows the current stats of players which will be increase by gaining experience. <br><br>
                                *Exp: Experience is players achievements which will be collected by doing missions and other game
                                tasks. It shows how many they have compared to how many they need to reach the next level. <br><br>
                                *Energy: Energy is players' stamina which will be used in missions. A timer will appear next to
                                players' energy when it's not full showing how long until they earn more.<br><br>
                                *Blood: Blood is the most important element for surviving in the Dynasty which will be needed 
                                to keep a good number of abilities for doing missions and to keep a healthy life. . Earn blood 
                                by doing Missions and sometimes also through Fight. A timer will appear next to it showing when 
                                their next payload comes in.
                                <br><br>
                                *Minions: Minions increase players' blood flow every hour. They are absolutely essential to
                                maintaining upkeep costs and overall status. They may dominate minions by spending blood in
                                order for them to earn blood for them, or they may release them if they no longer require their
                                services. It's a good idea to keep all their minions, though, seeing as they pay a one-time fee 
                                for them and they'll continue to earn blood for them every hour—even when you're not playing. 
                                Progressively better minions will be unlocked as they level up.<br>  <br><br> <br> </h5>
                            </div>
                        </div>
                        <div class="col-12 dtlsfnt tmibg bnrbxsdo" v-show="t7tps">
                            <div id="dtlsfnt">
                                    <h5>1.	Double tap on the VD logo. It will work like reloading the game.</h5><br>
                                    <h5>2.	Double tap on the bar which shows Energy, Rage, Health, Jewels and Experience. It will reload the 
                                        stat and will show your current stats if there were any laggy. </h5><br>
                                    <h5>3.	If the loader stays much longer, double tap on the stat bar. </h5><br>
                                    <h5>4.	Always keep your flow rate positive in blood flow.</h5><br>
                                    <h5>5.	Keep as much minions as you can.</h5><br>
                                    <h5>6.	Use your skill points carefully. </h5><br>
                                    <h5>7.	Complete all the missions. It won't disappoint you later. If you skip one you should do it now.</h5><br>
                                    <h5>8.	Always challenge your luck by visiting Lyssa.</h5><br>
                                    <h5>9.	Visit Horkos twice or thrice in a day. .</h5><br>
                                    <h5>10.	Blood from shop follows your income. So the more you have blood income the more you can buy bloods from shop 
                                        at same cost.</h5><br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
        btn:'nesw',
        t7nws:true,
        t7gft:false,
        t7hlp:false,
        t7tps:false,
        giftopen:true,
            gnews:{
                    nm:"Maintanance Break",
                    dtls: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
                },
}
    },
    created() {
        this.$mgo.gt('elders/get/7',(rs)=>{
            console.log(rs);
          /*   this.btn=rs.btn; */
        })
    },

    methods:{
        tog(val){
            if(val=='tips'){
                this.t7nws=false,
                this.t7gft=false,
                this.t7hlp=false,
                this.t7tps=true
            }else if(val=='news'){
                this.t7nws=true,
                this.t7gft=false,
                this.t7hlp=false,
                this.t7tps=false
            }else if(val=='gift'){
                this.t7nws=false,
                this.t7gft=true,
                this.t7hlp=false,
                this.t7tps=false

            }else if(val=='help'){
                this.t7nws=false,
                this.t7gft=false,
                this.t7hlp=true,
                this.t7tps=false
            }

        }
    }
}
</script>