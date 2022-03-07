<template>
    <div class="">
            <h5 class="text-center dtlsfnt text-white" v-if="errmsg">{{errmsg}}</h5>
            <h5 class="text-center dtlsfnt text-white" v-if="sucmsg">{{sucmsg}}</h5>
            <div class="row Gp0m0 tmibg py-2 rounded">
                <div class="col-3 Gp0m0"></div>
                <div class="col-6"><h4 class="rounded py-1 blk50 text-center subtitlefnt border">Hihahsdyi:3</h4></div>
                <div class="col-3"></div>
                <div class="col-12 Gp0m0 mt-1"><h6 class="text-center dtlsfnt">Hihahsdsdlhfioisdofisdiofgisifughyi</h6></div>
                <div class="col-3"></div>
                <div class="col-6 text-center mt-2"><div class="btn nbtn button6 rounded text-center" @click="invfndshow();">Invite friends</div></div>
                <div class="col-3"></div>
            </div>

            <div class="row Gp0m0 tmibg no-guttersb3px">
                <div class="col-6"><div class="btn nBtn button4 btn-block"  @click="show()"><i class="fas fa-user-plus"></i>Input code</div></div>
                <div class="col-6"><div class="btn nBtn blkgry btn-block"  @click="sho()"><i class="fas fa-share-alt-square"></i>Share code</div></div>
            </div>

            <div class="blkd75 border mt-1 p-2">
                <div class="">
                    <h6 class="dtlsfnt">Lorem natus in quibusdam eaque mollitia.</h6> <br>
                    <div class="progress n_bar-a " style="height:12px;">
                        <div class="progress-bar clRBrd bgD0" id="itmBr" style="width:50%"></div>
                    </div>
                </div>
            </div>

            <div class="row Gp0m0 blkgry mt-2 p-2">
                    <div class="col-2 Gp0m0 p-1"><img src="../../assets/img/1.png" class="card-img" alt=""></div>
                    <div class="col-6"> <h4 class="text-warning subtitlefnt">Habibur</h4> <h6 class="dtlsfnt">aghsfiohasygfiua</h6></div>
                    <div class="col-4 "> <div class=" blk50 mt-1 border py-3 rounded"><h6 class="text-center dtlsfnt">100</h6></div></div>
            </div>

            <div class="blkd75 border py-2 mt-1 rounded">
                <div class="px-2">
                    <h6 class="dtlsfnt">Lorem natus in quibusdam eaque mollitia.</h6> <br>
                    <div class="progress n_bar-a " style="height:12px;">
                        <div class="progress-bar clRBrd bgD0" id="itmBr" style="width:50%"></div>
                    </div>
                </div>
            </div>


                <ul class="list-group" v-for="(invt,i) in invite" :key="i">
                    <li class="list-group-item  Gp0m0 blk50 ">
                        <div class="row Gp0m0 blkd50 grysdo rounded m-2 p-2">
                            <div class="col-2 Gp0m0 p-1"><img :src="require('../../assets/img/1.png')" class="card-img" alt=""></div>
                            <div class="col-6"> <h5 class="text-info subtitlefnt">{{invt.name}}</h5> <h6 class="dtlsfnt">Level: {{invt.lvl}}</h6></div>
                            <div class="col-4 ">
                                <div class=" button4 nBtn mt-1 border btn-block py-2 rounded">
                                    <h6 class="text-center p-1" @click="reqsnd(invt.id)"> <i class="fas fa-plus-square"></i> &nbsp;Invite</h6>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>


        <modal name="lt" :width="350" :height="300" class=" blksdo mblr" >
            <div class="card border-0 tmibg">
                <div class="card-header blkgry p-1">
                    <h4 class=" rounded-0 text-center py-1 w-100 " style="position:sticky;">ADD FRIENDS
                        <span class="float-right" style="margin-right:2%;"  @click="hide()">
                            <div class="crossbtn"><i class="fas fa-times "></i></div>
                        </span>
                    </h4>
                </div>             
                <div class="card-body p-1">
                    <div class="row Gp0m0 tmibg blksdo dtlsfnt" style="height:300px; width:350px; overflow-y: scroll;" >
                        <div class="w-100 ">
                            <div class="form-group p-2">
                                <h6 class="siz20 dtlsfnt">fugiat porro accusantium iusto vel esse? Voluptatum neque dolor doloribus distinctio.</h6>
                                <input type="text" class="form-control mt-2 text-center" v-model="fndcyp" placeholder="Submit code">
                                <div class="btn nBtn btn-lg mt-2 btn-block blkgry"  @click="hide(),sendReq()">Submit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal>

        <modal name="invfnd" :width="300" :height="300"  :isAutoHeight="true"  @before-open="beforeOspen" class="mblr bdr p-1 rounded-2">
      
                <div class="card blkgry" style="width:300px" >
                    <div class="card-header tmibg2 p-1">
                    <h4 class=" rounded-0 text-center py-1 w-100 " style="position:sticky;">Invite friends
                        <span class="float-right" style="margin-right:2%;"  @click="invfndhide();"><div class="crossbtn"><i class="fas fa-times "></i></div></span></h4>
                    </div>
                    <div class="card-body bg-transparent p-0"  style="height:250px; overflow:scroll;">
                            <ul class="list-group" v-for="(invt,i) in invite" :key="i">
                    <li class="list-group-item  Gp0m0 blk50 ">
                        <div class="row Gp0m0 blkd50 grysdo rounded m-2 p-2">
                            <div class="col-2 Gp0m0 p-1"><img :src="require('../../assets/img/1.png')" class="card-img" alt=""></div>
                            <div class="col-6 Gp0m0"> <h5 class="text-info subtitlefnt">{{invt.name}}</h5> <h6 class="dtlsfnt">Level: {{invt.lvl}}</h6></div>
                            <div class="col-4 Gp0m0 ">
                                <div class=" button4 nBtn mt-1 border btn-block py-2 rounded">
                                    <h6 class="text-center p-1" @click="reqsnd(invt.id)"> <i class="fas fa-plus-square"></i> &nbsp;Invite</h6>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                    </div>
                </div>
      
        </modal> 


        <modal name="rt" :width="350" :height="300" class=" mblr" >
            <div class="card border-0 tmibg">
                <div class="card-header blkgry p-1">
                            <h4 class=" rounded-0 text-center py-1 w-100 " style="position:sticky;">SHARE CODE
                                <span class="float-right" style="margin-right:2%;"  @click="hd()"><div class="crossbtn"><i class="fas fa-times "></i></div></span></h4>
                </div>
                <div class="card-body p-1"> 
                    <div class="row Gp0m0 px-3 tmibg4 blksdo dtlsfnt" style="height:250px; width:350px; overflow-y: scroll;" >
                        <div class="w-100 ">
                            <div class="form-group p-2 mt-2">
                                <h6 class="siz20 px-1 dtlsfnt">fugiat porro accusantium iusto vel esse? Voluptatum neque dolor doloribus distinctio.</h6>
                                <div class="row Gp0m0 no-guttersb3px mt-2">
                                    <div class="col-6 Gp0m0 "><div class=" bg-white text-dark rounded text-center btn-block p-2 siz20" > {{copym}} </div>
                                        <input type="text" class="py-2 text-dark" :value="copym"  id="test">
                                    </div>
                                    <div class="col-6 Gp0m0"> <div class=" btn nBtn blkred btn-block" @click="cpy()"> <i class="fas fa-copy"></i> copy</div></div>
                                </div>
                                <div class="btn nBtn btn-lg mt-2 btn-block blkgry"  @click=" hd()">Share in chat</div>
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
                return {
                    copym:'456dsd781',
                    gngcrt:false,
                    fndcyp:'',
                    sucmsg:'',
                    errmsg:'',


                    invite:[ ]
                       
                }
            },
            beforeCreate(){
                this.axios.get('mp/rndmmplist').then(resx=>{
                    if(resx.sts=='ok'){
                        this.invite=resx.data
                    }
                })

            },
        methods: {
                sendReq(){
                    
                    this.axios.get('/mp/add/'+this.fndcyp ).then(response=>{
                        if(response.sts=='ok'){
                            this.errmsg=response.msg
                        }else{
                            this.errmsg=response.msg
                        }
                    })
                },

                reqsnd(id){
                    this.axios.get('/mp/add/'+id ).then(response=>{
                        if(response.sts=='ok'){
                            this.errmsg=response.msg
                        }else{
                            this.errmsg=response.msg
                        }
                    })
                },




            invfndshow () {
            this.$modal.show('invfnd');            
        },
        invfndhide () {
            this.$modal.hide('invfnd');
        },
    
                show () {
                    this.$modal.show('lt');
                    
                },
                hide () {
                    this.$modal.hide('lt');
                },

                sho() {
                    this.$modal.show('rt');
                    
                },
                hd() {
                    this.$modal.hide('rt');    
                },
                cpy(){
                        var copyText = document.getElementById("test"); 
                        copyText.select();
                        copyText.setSelectionRange(0, 99999); 
                        document.execCommand("copy");

                }
            
        }
}

</script>


