<template>
    <div><h4 class="text-center">Defense weapon</h4>
    <h6 class="blkgry px-1 py-2" v-if="err==''"> You can't have more than 5 Item in a single Slot</h6>
     <h6 class="blkgry px-1 py-2" v-else> {{ err }}</h6>
    <div class="row Gp0m0">
        <div class="col-3 Gp0m0 bdr1 " @click="show(0);"><img v-if="attck.length!=0" :src="imglnk+attck[0]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(1);"><img v-if="attck.length!=0" :src="imglnk+attck[1]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(2);"><img v-if="attck.length!=0" :src="imglnk+attck[2]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(3);"><img v-if="attck.length!=0" :src="imglnk+attck[3]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(4);"><img v-if="attck.length!=0" :src="imglnk+attck[4]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        
        <div class="col-3 Gp0m0 bdr1 " @click="show(5);"><img v-if="attck.length!=0" :src="imglnk+attck[5]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(6);"><img v-if="attck.length!=0" :src="imglnk+attck[6]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(7);"><img v-if="attck.length!=0" :src="imglnk+attck[7]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(8);"><img v-if="attck.length!=0" :src="imglnk+attck[8]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(9);"><img v-if="attck.length!=0" :src="imglnk+attck[9]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        
        <div class="col-3 Gp0m0 bdr1 " @click="show(10);"><img v-if="attck.length!=0" :src="imglnk+attck[10]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(11);"><img v-if="attck.length!=0" :src="imglnk+attck[11]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(12);"><img v-if="attck.length!=0" :src="imglnk+attck[12]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(13);"><img v-if="attck.length!=0" :src="imglnk+attck[13]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(14);"><img v-if="attck.length!=0" :src="imglnk+attck[14]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(15);"><img v-if="attck.length!=0" :src="imglnk+attck[15]+'.png'" class="card-img" alt="" ><img  v-else class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-2"></div>
        <div class="col-8 mt-2" ><div class="btn nBtn nBbg bgD8 px-5" @click="save()">Save</div></div>
        <div class="col-2"></div>
    </div>
    



        <modal name="ban" :width='300'   :height='550'   @before-open="beforeOspen" class="mblr bdr p-1 rounded-2">
            <div class="row Gp0m0 blkgry" style="width:300px; height:550px;"  >
                <div class="card blkgry w-100">
                    <div class="card-header tmibg2 p-1 ">
                        <h4 class=" rounded-0 text-center py-1 w-100 " style="position:sticky;">Chose Your Weapon
                        <span class="float-right" style="margin-right:2%;"  @click="hide();"><div class="crossbtn"><i class="fas fa-times "></i></div></span></h4>
                    </div>
                    <div class="card-body bg-transparent p-0"  style="height:500px; overflow:scroll;">
                        <div class=" row w-100  Gp0m0" >   
                            <div class="col-6 Gp0m0 bdr1"  v-for="(dfnitms,i) in dfnitm" :key="i" >
                                <div class="card">
                                    <div class="card-header blkgry">Name Here</div>
                                <img class="card-img img-fluid" :src="require('/src/assets/img/item/'+dfnitms.img)" @click="defenses(dfnitms.itid);"  alt=""/>
                                <div class="card-footer px-0 blkgry"><div class="row Gp0m0">
                                    <div class="col-6 p-0">Attack-10</div>
                                    <div class="col-6 p-0">Defense+10</div>
                                    </div></div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </modal> 
    </div>
</template>


<script>
export default {
    data() {

        return{
            defense:[],
            attck:[],
            err:'',
            imglnk:'https://mafiasrival.com/item/',
            index:0,
            dfltimg:'../../assets/img/1.png',
             dfnitm:[
               
                {
                    img:'1.gif',
                    itid:10001
                },{
                    img:'1.gif',
                    itid:10002
                },{
                    img:'1.gif',
                    itid:10003
                },{
                    img:'1.gif',
                    itid:10004
                },{
                    img:'1.gif',
                    itid:10005
                },{
                    img:'1.gif',
                    itid:10006
                },{
                    img:'1.gif',
                    itid:10007
                },{
                    img:'1.gif',
                    itid:10008
                },{
                    img:'1.gif',
                    itid:10009
                },{
                    img:'1.gif',
                    itid:10010
                },{
                    img:'1.gif',
                    itid:10011
                },{
                    img:'1.gif',
                    itid:10012
                },
             ]
          
        }

    },
    beforeCreate(){
        this.$mgo.gt('threat/attack',(res)=>{
            if(res.sts=='ok'){
                this.attck=res.data
            }
            console.log(this.attck)
        })
    },
    methods: {
                     beforeOspen(){
            setTimeout(()=>{ 
                 window.jq('.v--modal').height(window.jq('#gtmhyHt').outerHeight());
            }, 10);
        },

        show (ind) {
            this.$modal.show('ban'); 
            this.index=ind;  
            console.log(ind)         
        },
        hide () {
            this.$modal.hide('ban');
        },
        defenses(itid){
            console.log(itid);
            
            this.defense[this.index]=itid;
            this.$modal.hide('ban');
            console.log('defense value',this.defense)
        },
        save(){
            
            var serializedArr = JSON.stringify( this.defense );
            if(this.defense.some(el => el !== null)!=false && this.defense.length==16){
                this.$mgo.gt('/mp/defense/'+serializedArr,(rs)=>{
                console.log(rs)
            })
            }else{
                this.err='You need to Colmplete all the slot to save your defense'
                console.log(this.err);
            }
            
        }
    }

}
</script>