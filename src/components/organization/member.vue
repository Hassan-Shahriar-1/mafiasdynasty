<template>                     
    <div>
        <section >
            <div class="row Gp0m0 dtlsfnt">
                <div class="col-6 Gp0m0 "  @click="imfsw()"><div class="btn nBtn btn-lg  btn-block blkgry Gp0m0"><i class="fas fa-user-plus"></i> <br> Invite Organization</div></div>
                <div class="col-6 Gp0m0 pl-1"> <router-link to="/game/orgmbrpg"> <div class="btn nBtn btn-lg  btn-block blkgry Gp0m0 " ><i class="fas fa-tools"></i> <br> Settings</div></router-link></div>
            </div>
            <h5 class="text-center text-white dtlsfnt" v-if="err">{{err}}</h5>
            <div class="blk" >
                    <div class="row no-gutters text-center">
                        <h4 class='hr-sect subtitlefnt'>Admin</h4>
                    </div>
                    <div class="row Gp0m0  jaldi">
                        <div class="col-3 Gp0m0" v-for="(ad,i) in admnn" :key="i">
                            <div class="m-1  blksdo2" @click="show(ad)">
                                <img :src="require('/src/assets/img/1.png')" class="card-img  rounded-0" alt=""><div class="dtlsfnt bMbg5"><h5 class="px-1  sizv20 ">{{ad.name}}<h6 class="sizv13">LVL:{{ad.lvl}}</h6></h5> </div> </div>
                        </div>
                    </div>
                    <div class="row no-gutters text-center">
                        <h4 class='hr-sect Gp0m0 subtitlefnt'>Members</h4>
                    </div>

                    <div class="row Gp0m0 ">
                        <div class="col-3 Gp0m0 " v-for="(mbr,i) in member" :key="i">
                            <div class="m-1  blksdo2" @click="show(mbr)">
                                <img :src="require('/src/assets/img/1.png')" class="card-img rounded-0  " alt=""><div class="dtlsfnt bMbg5"><h5 class="px-1  sizv20 ">{{mbr.name}}<h6 class="sizv13">LVL: {{mbr.lvl}}</h6></h5></div>
                            </div>
                        </div>                     
                    </div>
                <div class="col" v-if="this.blcklst"> <router-link to="blockmember"><div class="btn nBtn btn-lg btn-block text-center">Blocklist</div></router-link></div>
            </div>
        </section>
            <modal name="mdlMempsts"  :width='300' :height='271' :isAutoHeight="true"   @before-open="beforeOspen" class="mblr" >
                <div class="row Gp0m0 tmibg  bdr3 p-3 blksdout rounded" id='gtmhyHt' style=" height:271px; overflow: scroll;">
                    <div class="col-12 p-0 pb-2">
                        <h4 class="subtitlefnt">{{mdl.nm}}</h4> <br>
                        <h6 class="dtlsfnt"> {{ mdl.stl  }}</h6>
                    </div>
                    <div class="col-12 Gp0m0 pr-1" v-for="(btn, i) in mdl.btns" :key="i">
                        <div class="btn nBtn btn-lg text-center btnbfnt btn-block sizv35" :class="btn.cls" @click="fncCal(btn)">{{ btn.tl }}</div></div>                        
                    <div class="col-12 Gp0m0 pr-1"><div class="btn nBtn btn-lg text-center btnbfnt btn-block blkredbtn sizv35" @click="hide()">Close</div></div>
                </div> 
                <h1>Hellow</h1>
            </modal> 

            <modal name="orginvmbr" :width="350"   :height="550"  class="mblr " id="gtmhyHt"  >
                    <div class="card-header  w-100 blkgry text-center">
                         <h4 class="subtitlefnt">Invite Your Friends  <span class="float-right" style="margin-right:2%;"  @click="imfhd();"><div class="crossbtn"><i class="fas fa-times "></i></div></span></h4>
                        <div class="col-2">
                        </div>
                    </div>
                <div class="row no-gutters blkgry  w-100" style=" height:500px; overflow: scroll;" >
                    <ul class="list-group w-100" v-for="(masrc,i) in mafia" :key="i" >
                        <li class="list-group-item blk50 p-1 "> 
                            <div class="row Gp0m0  rounded blkd75 p-2">
                                <div class="col-2 Gp0m0 p-1"><img :src="require('../../assets/img/'+masrc.mfaimg)"  class="card-img bdrblk2" alt=""></div>
                                <div class="col-6"> <h5 class="text-info subtitlefnt siz25">{{masrc.mfattl}}</h5> <h6 class="subtitlefnt siz20">{{masrc.mfades}}</h6></div>
                                <div class="col-4 "> <div class=" button4 nBtn mt-2 border py-2 rounded"><h6 class="text-center"><i class="fas fa-plus-square"></i>&nbsp;Invite</h6></div></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </modal> 
</div>
</template>

<script>
export default {
    data(){
        return{

            mafia:[
                        {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        }

                    ],
             admnn:[],
             member:[],
             blcklst:'',
             err:'',
             mdl:{
                 nm:'',
                 stl:'Habibur rahman is now doing this card',
                 btns:[
                     {tl:'Funcion 1', cls:'button5', act:'fncCal'},
                     {tl:'Funcion 2', cls:'blkredbtn', act:'fncCal'}
                 ]
             } 
        }
    },           
    created() {  
        this.getAllmembrs();
    },
   mounted() {
       this.socket.on('ntmsg',(data)=>{
           console.log('i am notification data'+data);
       })
   },
  

   methods:{     


       
       getAllmembrs(){
             this.member = []; this.admnn = [];
             this.$mgo.gt('/gang/mbrlist', (response)=>{
                 console.log(response);
                if(response.sts=='ok'){
                    if(response.data.btn=='blklst'){
                        this.blcklst='Block List'
                    }
                 response.data.mbr.forEach((val)=>{
                    if(val.pstn == 1 || val.pstn==2){
                        this.admnn.push(val)
                    }
                    else{
                        this.member.push(val)
                    }
                })
                }else{
                    this.err=response.msg
                }   
         });    
       },
        beforeOspen(){
            setTimeout(()=>{ 
                 window.jq('.v--modal').height(window.jq('#gtmhyHt').outerHeight());
            }, 10);
        },
        fncCal(dt){
            console.log(dt.act)
            switch(dt.act){
                case 'kick':
                     this.axios.post('gangmember/remove/'+dt.mid).then(respn=>{
                        console.log(respn);
                        this.socket.emit('ntfymsg',respn.msg);
                      this.getAllmembrs();
                    })
                break;
                case 'vwprfl':
                     this.$router.push('/game/otrprofile/about'+dt.mid)
                break;
                case 'pmtldr':
                    this.axios.post('gangmember/prmtldr/'+dt.mid).then(respn=>{
                        console.log(respn);
                       this.getAllmembrs();
                    })
                    
                break;

                case 'pmtcoldr':
                    this.axios.post('gangmember/prmtcoldr/'+dt.mid).then(respn=>{
                        console.log(respn);
                        this.socket.emit('ntfymsg',respn.msg);
                        this.getAllmembrs();
                    })
                    
                break;

                case 'ban':
                 this.axios.post('gangmember/banmbr/'+dt.mid).then(rsdata=>{
                     console.log(rsdata);
                     this.socket.emit('ntfymsg',rsdata.msg)
                      this.getAllmembrs();
                 })
                 
                break;
                case 'dmtco':
                     this.axios.post('gangmember/demote/'+dt.mid).then(respn=>{
                        console.log(respn);
                        this.socket.emit('ntfymsg',respn.msg);
                        this.getAllmembrs();
                    })
                    
                    break;
            }
        },

        imfsw(){
              this.$modal.show('orginvmbr')
          },
            imfhd(){
               
             this.$modal.hide('orginvmbr')
            },
        show(dt) {
            this.mdl.nm=dt.name;
            this.mdl.btns=dt.btn;
            console.log(dt.btn);
           this.$modal.show('mdlMempsts',  { height: 'auto' });        
        },
        hide() {
            this.$modal.hide('mdlMempsts');
        },

   }
   
}
</script>