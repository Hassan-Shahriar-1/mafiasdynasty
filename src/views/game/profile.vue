<template>
    <div class="container Gp0m0 jaldi">
        <div class="StryCntnr">
  
                <div class="container-fluid  no-gutters Gp0m0 ">
                    <div class="row Gp0m0  blksdout rounded bdr3 tmibg"> 
                        <div class="col-4 p-1 ">
                                <img class="card-img rounded p-1" :src="require('../../assets/img/item/'+MmnDtlst.mimg)" alt="">
                        </div>
                        <div class="col-8 p-1">
                            <h3 class="Gp0m0 titlefnt ">{{userdtls.name}} </h3> <br>
                                <h6 class="Gp0m0 dtlsfnt">Level:{{userdtls.lvl}}</h6>
                                <h6 class="Gp0m0 dtlsfnt">Attack:{{userdtls.atk}} </h6>
                                <h6 class="Gp0m0 dtlsfnt">defense:{{userdtls.def}} </h6>
                                <h6 class="Gp0m0 dtlsfnt">Age:{{userdtls.age}}</h6>
                                <h6 class="Gp0m0 dtlsfnt">Org:{{userdtls.org}}</h6>
                                <h6 class="Gp0m0 dtlsfnt">Skill:{{userdtls.skl}}  <button class="btn nBtn button3 float-right sizv25" ><i class="fas fa-share-alt" ></i> <br> Share</button></h6>
                        </div>    
                    </div>
                    
            <modal name="ppup" :width="330" :height="550" class="bdr4 blksdo rounded mblr" >
                <div class="card tmibg">
                <div class="card-header blkgry p-1">
                        <h4 class=" rounded-0 text-center py-1 w-100 " style="position:sticky;">Total Skill Point {{ tlskl }}
                        <span class="float-right" style="margin-right:2%;"  @click="pphd()"><div class="crossbtn"><i class="fas fa-times "></i></div></span></h4>
                </div>   

                    <div class="card-body p-1">
                        <div class="section tmibg pb-5" style="height:550px; width:330px;  overflow-y: scroll;">
                        <div class="tmibg  m-2 rounded">
                                <div class="row no-gutters">
                                <div class="col-9 px-1"><h4 class="subtitlefnt">Energy:101</h4>
                                <input type="range" v-model="skp.eng" class="form-range w-100 px-2" min="0" :max="tlskl" step="1">
                                </div>
                                <div class="col-3  pl-1"><div class="btn py-0 nBtn">{{ skp.eng }}<br>Add</div></div>
                            </div>
                            <div class="row no-gutters mt-2">
                                <div class="col-6"><h5 class="dtlsfnt">Energy Details </h5></div>
                                <div class="col-6 pl-4 "> <div class="btn  btn-lg nBtn" @click="sub('eng')"><i class="fas fa-minus-square"></i></div>
                                <div class="btn  btn-lg nBtn" @click="add('eng')" ><i class="fas fa-plus-square"></i></div></div>
                            </div>
                        </div>
                            <div class="tmibg  m-2 rounded mt-2">
                                <div class="row no-gutters">
                                <div class="col-9 px-1"><h4 class="subtitlefnt">Stamina:100</h4>
                                <input type="range" v-model="skp.stmn" class="form-range w-100 px-2" min="+0" :max="tlskl" step="2">
                                </div>
                                <div class="col-3  pl-1"><div class="btn py-0 nBtn"> {{skp.stmn}}<br>Add</div></div>
                                
                            </div>

                            <div class="row no-gutters mt-2">
                                <div class="col-6"><h5 class="dtlsfnt">Stamina Details</h5></div>
                                <div class="col-6 pl-4 "> <div class="btn  btn-lg nBtn" @click="sub('stmn')"><i class="fas fa-minus-square"></i></div>
                                <div class="btn  btn-lg nBtn" @click="add('stmn')" ><i class="fas fa-plus-square"></i></div></div>
                            </div>
                        </div>


                            <div class="tmibg  m-2 rounded mt-2">
                                <div class="row no-gutters">
                                <div class="col-9 px-1"><h4 class="subtitlefnt">Health:200</h4>
                                <input type="range" v-model="skp.hlth" class="form-range w-100 px-2" min="0" :max="tlskl" step="1">
                                </div>
                                <div class="col-3  pl-1"><div class="btn py-0 nBtn">{{skp.hlth}} <br>Add</div></div>
                                
                            </div>

                            <div class="row no-gutters mt-2">
                                <div class="col-6"><h5 class="dtlsfnt">health details</h5></div>
                                <div class="col-6 pl-4 "> <div class="btn  btn-lg nBtn" @click="sub('hlth')"><i class="fas fa-minus-square"></i>
                                </div> <div class="btn  btn-lg nBtn" @click="add('hlth')" ><i class="fas fa-plus-square"></i></div></div>
                            </div>
                        </div>
                    <div class="tmibg  m-2 rounded mt-2">
                                <div class="row no-gutters">
                                <div class="col-9 px-1"><h4 class="subtitlefnt">Attack:452</h4>
                                <input type="range" v-model="skp.atck" class="form-range w-100 px-2" min="0" :max="tlskl" step="1" @click="prgs(skp.atck)">
                                </div>
                                <div class="col-3  pl-1" ><div class="btn py-0 nBtn">{{skp.atck}} <br>Add</div></div>
                                
                            </div>

                            <div class="row no-gutters mt-2">
                                <div class="col-6"><h5 class="dtlsfnt">Attack Details</h5></div>
                                <div class="col-6 pl-4 "> <div class="btn  btn-lg nBtn" @click="sub('atck')"><i class="fas fa-minus-square"></i></div> <div class="btn  btn-lg nBtn" @click="add('atck')" ><i class="fas fa-plus-square"></i></div></div>
                            </div>
                    </div>

                            <div class="tmibg  m-2 rounded mt-2">
                                <div class="row no-gutters">
                                <div class="col-9 px-1"><h4 class="subtitlefnt">Defence:352</h4>
                                <input type="range" v-model="skp.defnc" class="form-range w-100 px-2" min="0" :max="tlskl" step="1">
                                </div>
                                <div class="col-3  pl-1"><div class="btn py-0 nBtn"> {{skp.defnc}}<br>Add</div></div>
                                
                            </div>

                            <div class="row no-gutters mt-2">
                                <div class="col-6"><h5 class="dtlsfnt">Defence Details</h5></div>
                                <div class="col-6 pl-4 "> <div class="btn  btn-lg nBtn" @click="sub('defnc')"><i class="fas fa-minus-square"></i></div> <div class="btn  btn-lg nBtn" @click="add('defnc')" ><i class="fas fa-plus-square"></i></div></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </modal>

                <div class="bw100 w-100 rounded jaldi blkgry" role="group" aria-label="...">
                    <div class="btn-group  bw100 w-100  sizv13">
                        <router-link to="abilities" tag="button" class="btn nBtn Gp0m0 blkgry">  <i class="fas fa-gopuram"></i> <br><h4 class="siz15">Abilities</h4></router-link>
                        <router-link to="items" tag="button" class="btn nBtn Gp0m0 blkgry"><i class="fas fa-sitemap"></i> <br> <h4 class="siz15">Items</h4> </router-link>
                        <router-link to="trophies" tag="button" class="btn nBtn Gp0m0 blkgry"><i class="fas fa-trophy"></i><br><h4 class="siz15">Trophies</h4></router-link>
                        <router-link to="property" tag="button" class="btn nBtn Gp0m0 blkgry"><i class="fas fa-glass-cheers"></i> <br><h4 class="siz15">Properties</h4></router-link>

                        </div>
                    </div>

                    <div class="row Gp0m0 mx-1  itmbg rounded ">
                        <div class="col-3 Gp0m0  p-1">
                            <router-link to="recordbook"><div class="btn nBtn btn-block my-1 "><i class="fas fa-book-open"></i> <br> <h4 class="siz13">Record <br> book</h4></div></router-link>
                            <router-link to="eprofile"><div class="btn nBtn btn-block my-1 "><i class="fas fa-edit"></i> <br><h4 class="siz13">Edit <br>Profile </h4></div></router-link>
                            <router-link to="/game/profile/eavatar"><div class="btn nBtn btn-block my-1 "><i class="fas fa-user-edit"></i> <br><h4 class="siz13">Edit <br>Avatar</h4></div></router-link>
                            <router-link to="about"> <div class="btn nBtn btn-block my-1 "><i class="fas fa-address-card"></i> <br><h4 class="siz13">About</h4></div></router-link>
                            <div class="btn nBtn btn-block my-1" @click="ppup(userdtls.skl)"><i class="fas fa-award"></i> <br><h4 class="siz13">Skill <br>Allocation</h4></div>
                            <router-link to="base"><div class="btn nBtn btn-block my-1 "><i class="fas fa-biohazard"></i> <br> <h4 class="siz13">Base <br> defense</h4></div></router-link>
                            <router-link to="dfncwpn"><div class="btn nBtn btn-block my-1 "><i class="fas fa-fist-raised"></i> <br><h4 class="siz13">defense <br>Weapon </h4></div></router-link>
                        </div>


                        <div class="col-9 Gp0m0 tmibg">
                        <div class="bw100 w-100 rounded jaldi blkgry" role="group" aria-label="...">
                            <div class="btn-group  bw100 w-100  sizv13">
                                 
                                    <router-link to="wall" tag="button" class="btn nBtn Gp0m0 blkgry"><i class="fa fa-user"></i> <br> <h4 class="siz15">Wall</h4> </router-link>
                                    <router-link to="badge" tag="button" class="btn nBtn Gp0m0 blkgry"><i class="fas fa-certificate"></i><br><h4 class="siz15">Badge</h4></router-link>
                                    <router-link to="closet" tag="button" class="btn nBtn Gp0m0 blkgry"><i class="fas fa-glass-cheers"></i> <br><h4 class="siz15">Closet</h4></router-link>

                            </div>
                        </div>
                            <router-view class="rounded m-1"></router-view>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Body Content End -->  
        </div>
</template>
<script>
export default {
    data(){


    return{
            userdtls:[],
            itmlst:[],
             skp:{
                eng:0,
                stmn:0,
                hlth:0,
                atck:0,
                defnc:0                
            },
            tlskl:Number,


       MmnDtlst:{

                mname:"HRhabib",
                mststs:"Modern Vampire",
                mgndr:"Gender:male",
                mage:"Age:25",
                mimg:"1.gif",
                

                    mn:[
                         { 
                            clk:"1.png",
                            nm:"habib",
                            mu:"pare", 
                            icn:"naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",                  
                            }, 
                            {
                            
                            clk:"1.png",
                            nm:"habib",
                            mu:"pare", 
                            icn:"naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",                  
                            }, 
                            {
                            
                            clk:"1.png",
                            nm:"habib",
                            mu:"pare", 
                            icn:"naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",                  
                            },
                             {
                            
                            clk:"1.png",
                            nm:"habib",
                            mu:"pare", 
                            icn:"naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",                  
                            }, 
                             {
                            
                            clk:"1.png",
                            nm:"habib",
                            mu:"pare", 
                            icn:"naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",                  
                            }, 
                             {
                            
                            clk:"1.png",
                            nm:"habib",
                            mu:"pare", 
                            icn:"naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",                  
                            },  
                    ],

                    bp:[
                        {
                            clk:"1.png",
                            nm:"habib",
                        },
                        {
                            clk:"1.png",
                            nm:"habib",
                        },
                        {
                            clk:"1.png",
                            nm:"habib",
                        },
                        {
                            clk:"1.png",
                            nm:"habib",
                        },
                        {
                            clk:"1.png",
                            nm:"habib",
                        },
                        {
                            clk:"1.png",
                            nm:"habib",
                        },
                    ],
                    

       },


       
            }
       
    },
    watch:{
        'skp.atck':function(val){
               
                    this.tlskl=this.tlskl-val;
                
                    
                
            console.log(val)
        }
    },
    beforeCreate() {
        this.$mgo.gt('mp/profile',(res)=>{
            this.userdtls=res.data;
            console.log(res);
        })
    console.log(this.axios.defaults.headers.Authorization);
    },
    mounted(){
        this.tlskl
    },
    
        methods: {
        ppup(val) {
            this.$modal.show('ppup');
            this.tlskl=val
            
        },
        prgs(val){
            console.log(val)

        },
        pphd() {
            this.$modal.hide('ppup');
        },

            add (val) {
                if(val=='stmn'){
                    this.skp[val] = parseInt(this.skp[val])+1;  
                    if(this.tlskl!=1){
                        
                        this.tlskl=this.tlskl-2 
                    }  
                      
                }else{
                this.skp[val] = parseInt(this.skp[val])+1;
                if(this.tlskl >=0){    
                this.tlskl=this.tlskl-1 
                }
                }       
            },
            sub (val) {
                if(this.skp[val]!=0){
                this.skp[val] = parseInt(this.skp[val])-1;
                if(val=='stmn'){
                    this.tlskl=this.tlskl+2
                }else{
                    this.tlskl=this.tlskl+1
                }
                
            }
            
            },

        rbpupso(){
            this.$modal.show('rbpup')
        },
        rbpuphd(){
            this.$modal.hide('rbpup')
        }    


            },

}
</script>