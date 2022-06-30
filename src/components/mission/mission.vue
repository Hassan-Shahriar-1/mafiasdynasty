<template>
    <div class="container Gp0m0 blkbg jaldi" style='margin-bottom:40px;' >
        <div class="row Gp0m0">
            <img class="card-img img-fluid p-1" src="../../assets/img/land/colombia.png" alt="">
        </div>
        <div class="row Gp0m0 tmibg" v-for="(MmnDtlsts, i) in chapter_mission.mission" :key="i">
            <div class="card w-100 blkbg">
                <div class="card-header tmibg bdr1">
                    <h3 class="titlefnt text-center">{{MmnDtlsts[0].tl}}  </h3> 
                </div>
                <div class="card-body bMbg3">
                    <div class="col-12 Gp0m0 text-left ">
                        <h5 class="Gp0m0 dtlsfnt">Level: {{lvl=MmnDtlsts['lvl'][0]}}<br></h5> 
                       <progress-bar bg-color="linear-gradient( #999, #000)" size="15" :bar-border-radius="10" bar-color="linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgb(224, 5, 5 ,84)  55%, rgb(224 5 5) 100%)"
                        :ref="'prg'+i" :id="'prg'+i" :val="MmnDtlsts['lvl'][1]"  :max="100">
                        </progress-bar> <h6 class="Gp0m0 float-right">{{MmnDtlsts['lvl'][1]}}/{{bh.hped}}</h6>
                        <h6 class="text-info dtlsfnt"><br> description holla</h6>
                    </div>
                    <div class="row Gp0m0">
                        <div class="col-6 Gp0m0 p-1 text-left" v-if="MmnDtlsts[0].rq!=''" >
                                
                            <div class="rounded bMbg4 bdr1" >
                                <h4 class="text-center subtitlefnt">Requirments</h4>
                                <div class="col-6 card bg-transparent px-1" v-if="MmnDtlsts[0].gngCnt"><img class="card-img" src="../../assets/img//gng.png" /><div class="card-footer py-0">{{MmnDtlsts[0].gngCnt[0]}}</div></div>
                                <div class="row Gp0m0  my-2 " v-for="(reqr, iq) in MmnDtlsts[0].rq" :key="iq" > <!-- item for each loop -->
                                        <div class="col-6 "  >
                                            <img   class="card-img " v-if="reqr[1]=false" :src="itm_src+(iq+'.png')" alt="" />
                                            <img   class="card-img bnrbxsdo" v-else :src="itm_src+(iq+'.png')" alt=""> <!-- item image here -->
                                            <div class="card-footer d-flex">{{reqr[0]}}</div>
                                        </div>
                                        <div class="col-5 ">{{reqr[2]}}</div><!-- item name here -->
                                      
                                    
                                    </div>
                            </div>
                        </div>
                        <div class="col-6  Gp0m0 p-1 text-left">
                            <div class="rounded bMbg4 bdr1"  v-if="MmnDtlsts[0].get!=null">
                                <h4 class="text-center subtitlefnt ">Item May Found</h4>
                                <div class="rounded bMbg4 bdr1" ></div>
                                <div class="row Gp0m0 my-2" v-for="(reqrr , ii) in MmnDtlsts[0].get" :key="ii">
                                    <div class="col-5 ">
                                        <img  class="card-img" :src="itm_src+(ii+'.png')" alt="">
                                    </div>
                                    
                                   
                                </div>
                            </div>
                                <div class="row no-gutters px-1 py-3 w-100 tmibg">
                                <div class="col-12 text-center ">
                                    <h5 class="text-success siz18" ><i class="fab fa-buffer"></i>&nbsp;Exp:+{{MmnDtlsts[0].exps}} &nbsp; </h5>
                                </div>
                                <div class="col-12 text-center ">
                                    <i class="far fa-money-bill-alt siz15"></i>&nbsp;<strong v-if="cash!=''" class="text-danger siz18">Cash:{{cash}}</strong>  <strong v-else class="text-danger siz18">Cash:</strong>&nbsp;
                                </div>
                                <div class="col-12 text-center text-success siz18">
                                    <i class="fas fa-bolt"></i>&nbsp;Energy:-{{MmnDtlsts[0].eng}} 
                                </div>
                                
                                <div class="col-12 Gp0m0 px-1 " v-if="btn!=false">
                                    <div class="btn  button5 btn-lg btn-block nBtn py-1" @click="domission(i)">Do Job</div>
                                </div>
                            </div>
                        </div>
                            <div class="rounded bMbg4 bdr1" >
                                <h4 class="text-center subtitlefnt ">Item found</h4>
                                <div class="rounded bMbg4 bdr1"></div>
                                <div class="row Gp0m0 my-2" :id="i">   
                                </div>
                            </div>

                        
                    </div>
               


                    
                </div>
            </div>
        </div>

        <modal name="donemsn" :width="350" :height="300" class=" blksdo mblr" >
            <div class=" border-0 tmibg" style="height:300px; width:340px; overflow-y: scroll;">
                <div class=" blkgry p-1">
                    <h4 class=" rounded-0 text-center py-1 w-100 " style="position:sticky;">{{msg}}
                        <span class="float-right" style="margin-right:2%;"  @click="hide()">
                            <div class="crossbtn"><i class="fas fa-times "></i></div>
                        </span>
                    </h4>
                </div>   
                          
                <div class="p-1">
                    <div class="row Gp0m0 tmibg dtlsfnt" v-if="rq_data!=''"  >
                    <div class="col-4 p-0 card "  v-for="(data,i) in rq_data" :key="i">
                     <div class="card-footer blkgry">{{data}}</div>
                        <div class="card-body">
                            <img class="card-img" :src="itm_src+(i+'.png')"/>
                        </div>
                        <div class="card-footer blkgry">{{data}}</div>
                    </div>
                    </div>
                </div>
            </div>
        </modal> 
    </div>
</template>

<style>
.button_here{
    background: linear-gradient(0deg, rgb(54 12 12) 0%, rgb(153 10 10 / 92%) 39%, rgb(173 14 14 / 85%) 100%);
}
</style>
<script>
export default {
    
   name : 'mission',
   start:0,
   
   data(){
       return {
           cash:'',
           response_data:'',
           progress_data:'',
           lvl:'',
           msg:'',
           btn:Boolean,
           rq_data:'',
           drp_itm:[],
         
           chapter_mission:'',
           itm_src:'http://mrdemo.com/item/',
             bh:{
                 hpW:0,
                 hpst:0,
                 hped:100,  
             },  
                    
       }
   },
   created(){
    //console.log('dd',JSON.parse(this.$route.params.list))
       this.chapter_mission=this.$route.params.list
       console.log('mission',this.chapter_mission)
   },
   mounted() {
    this.drp_itm
   
   },
   
 

    
   
    methods: {
          TptrgrBr(){
            this.bh.hpW = 100 / this.bh.hped * this.start;
           
        },
        domission(oid){
            
                  this.axios.get('/mission/domsn/'+oid).then((res)=>{
                       console.log(res)
                        if(res.sts=='ok'){
                            this.progress_data=res.ok['msnd'][1]
                            this.lvl=res.ok['msnd'][0]
                            if( res.get !=false){
                                this.drp_itm.push(res.get);
                                window.jq('#'+oid).prepend( ' <div class="col-3 card p-1" ><img  class="card-img" src="http://mrdemo.com/item/'+res.get['itid']+'.png"'+'alt=""/><div class="card-footer py-1 text-center blkgry">'+res.get['cnt']+'</div> </div>')
                            }
                        }else if(res.sts=='rq'){
                            this.msg='required Item are'
                            this.rq_data=res.rsp
                            this.$modal.show('donemsn')

                        }

                         
                         console.log('array',this.drp_itm)
                          
                        
                    })
          
                  
                this.$refs['prg'+oid][0]['val']=parseInt(this.progress_data)   
        },

        hide(){
                this.msg=''
                this.$modal.hide('donemsn');
        },
            
    },
}
</script>