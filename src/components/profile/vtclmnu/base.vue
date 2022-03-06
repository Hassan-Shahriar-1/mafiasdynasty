<template>
    <div><h4 class="text-center">Base Defense</h4>
    <h6 class="blkgry px-1 py-2"> You can't have more than 5 Item in a single Slot</h6>

    <div class="row Gp0m0">
        <div class="col-3 Gp0m0 bdr1 " @click="show(0);"><img v-if="img[0]!=''" class="card-img" src="../../../assets/img/1.png" alt="" ></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(1);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(2);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(3);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(4);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        
        <div class="col-3 Gp0m0 bdr1 " @click="show(5);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(6);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(7);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(8);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(9);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        
        <div class="col-3 Gp0m0 bdr1 " @click="show(10);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(11);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(12);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(13);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(14);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-3 Gp0m0 bdr1 " @click="show(15);"><img   class="card-img" src="../../../assets/img/1.png" alt=""></div>
        <div class="col-2"></div>
        <div class="col-8 mt-2" ><div class="btn nBtn nBbg bgD8 px-5" @click="save()">Save</div></div>
        <div class="col-2"></div>
    </div>
    



        <modal name="atk" :width='300'   :height='550'   @before-open="beforeOspen" class="mblr bdr p-1 rounded-2">
            <div class="row Gp0m0 blkgry" style="width:300px; height:550px;"  >
                <div class="card blkgry w-100">
                    <div class="card-header tmibg2 p-1 ">
                        <h4 class=" rounded-0 text-center py-1 w-100 " style="position:sticky;">Chose Your Weapon
                        <span class="float-right" style="margin-right:2%;"  @click="hide();"><div class="crossbtn"><i class="fas fa-times "></i></div></span></h4>
                    </div>
                    <div class="card-body bg-transparent p-0"  style="height:500px; overflow:scroll;">
                        <div class=" row w-100  Gp0m0" >   
                            <div class="col-6 Gp0m0 bdr1"  v-for="(atkitms,i) in atkitm" :key="i" >
                                <div class="card">
                                    <div class="card-header blkgry">Name Here</div>
                                <img class="card-img img-fluid" :src="require('/src/assets/img/item/'+atkitms.img)" @click="attacks(atkitms.itid);"  alt=""/>
                                <div class="card-footer px-0 blkgry"><div class="row Gp0m0">
                                    <div class="col-6 p-0">Attack-10</div>
                                    <div class="col-6 p-0">attack+10</div>
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
            attk:[],
            img:[],
            index:0,
             atkitm:[
               
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
            this.$modal.show('atk'); 
            this.index=ind;  
            console.log(ind)         
        },
        hide () {
            this.$modal.hide('atk');
        },
        attacks(itid){
            console.log(itid);
            
            this.attk[this.index]=itid;
            this.$modal.hide('ban');
            console.log('Attack value',this.attk)
        },
        save(){
            
            var serializedArr = JSON.stringify( this.attk );
            if(this.attk.some(el => el !== null)!=false && this.attk.length==16){
                this.$mgo.gt('/mp/attack/'+serializedArr,(rs)=>{
                console.log(rs)
            })
            }else{
                this.err='You need to Colmplete all the slot to save your Attack Power'
                console.log(this.err);
            }
            
        }
    }

}
</script>