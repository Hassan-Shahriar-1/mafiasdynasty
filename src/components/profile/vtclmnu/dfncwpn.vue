<template>
    <div><h4 class="text-center">Defense weapon</h4>
    <h6 class="blkgry px-1 py-2"> You can't have more than 5 Item in a single Slot</h6>

    <div class="row Gp0m0">
        <div class="col-3 Gp0m0 bdr1 " @click="show('s0');"><img v-if="img[0]!=''" class="card-img" src="../../../assets/img/1.png" alt="" ></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show('s1');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show('s2');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show('s3');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show('s4');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        
        <div class="col-3 Gp0m0 bdr1 " @click="show('s5');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show('s6');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show('s7');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show('s8');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show('s9');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        
        <div class="col-3 Gp0m0 bdr1 " @click="show('s10');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show('s11');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show('s12');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show('s13');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show('s14');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show('s15');"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
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
            img:[],
            index:0,
             dfnitm:[
               
                {
                    img:'1.gif',
                    itid:1
                },{
                    img:'1.gif',
                    itid:2
                },{
                    img:'1.gif',
                    itid:3
                },{
                    img:'1.gif',
                    itid:4
                },{
                    img:'1.gif',
                    itid:5
                },{
                    img:'1.gif',
                    itid:6
                },{
                    img:'1.gif',
                    itid:7
                },{
                    img:'1.gif',
                    itid:8
                },{
                    img:'1.gif',
                    itid:9
                },{
                    img:'1.gif',
                    itid:10
                },{
                    img:'1.gif',
                    itid:11
                },{
                    img:'1.gif',
                    itid:12
                },
             ]
          
        }

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
            this.$mgo.gt('/mp/defense/'+serializedArr,(rs)=>{
                console.log(rs)
            })
        }
        }

}
</script>