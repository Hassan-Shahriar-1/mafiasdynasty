<template>
<div class='card border-0'>
        <div class="card-header p-1 blkgry">
          <div class='card-title  titlefnt text-center'> Discussion Board </div>
        </div>
         <div class="card-body p-1 tmibg3">
          
        <div class="row no-gutters mx-2">
            <div class="col-12"> <textarea v-model="Gmessage" @keyup.enter="insrtMsg" class="w-100 form-control form-control-lg"  name="" id="" cols="10" rows="3" placeholder="Type here..." style="height:40px;"></textarea></div>
            <div class="col-12 pt-2"> <div class="btn nBtn blkgry py-2 w-100 jaldi"  @click="insrtMsg()">Send <span><i class="fas fa-paper-plane"></i></span> </div></div>

        </div>
        <div class="hr-sect w-100"></div>
  

     <div class="mx-2 contain" v-for="(MsgsLt, i) in MsgsLts" :key="i">
       
            <div class="row no-gutters mb-1">  
                    <img src="../../assets/img/item/1.gif" alt="Avatar" style="width:100%;">
                    <div class="header">
                    <strong class="text-white subtitlefnt"><h5>{{MsgsLt.nm}}</h5></strong> <small class="text-right text-muted"></small> 
                    </div>
            </div>

            <div class="p-1" >
                <h6 class="mb-2 dtlsfnt">{{ MsgsLt.msg }}</h6>
            </div> 

            <div class="row no-gutters">
                <div class="col-5">
                 <i class="fas fa-thumbs-up btn  p-1 bgmn ">100&nbsp;</i>
                 <i class="fas fa-thumbs-down btn  p-1 bgmn mlr3 ">100</i>
                </div>

                <div class="col-7">
                     <span class="float-right "><i class="fas fa-flag btn py-1 px-2 bgmn"></i></span>
                       <h6 class="mt-2 mlr2 siz13 float-right"> <i class="fas fa-clock"></i>  
                            <vue-moments-ago prefix="" suffix="ago" :date="MsgsLt.rtm" lang="en" /> 
                       </h6>  
                </div>
            </div>  
        </div>    
    </div>
</div>

</template>

<script>
import VueMomentsAgo from 'vue-moments-ago'
export default{
    name:'Family',
     components: {
        VueMomentsAgo
    },
    destroyed(){
        
    },
    beforeDestroy(){
        this.socket.emit('rmvFrmGlbm'); 
         this.socket.removeListener('RspForPushGblbMsg');         
         this.socket.removeListener('RspForGetGblbMsg');
    }, 
    data(){
        return {
            Gmessage:"",
            MsgsLtslstd:0,
            MsgsLts:[]            
        }
    },   
  
    created() {
        this.socket.emit('callForGetGblbMsg');
        this.socket.on('RspForGetGblbMsg', (msglst)=> {                   
                    this.MsgsLts = msglst
        }); 
        this.socket.on('RspForPushGblbMsg', (msg)=> {         
             msg.tm = msg.rtm;
            this.MsgsLts.unshift(msg);          
        });
    },  

    methods:{
        insrtMsg:function(){ 
            this.socket.emit('pshGlbmsg', this.Gmessage);
            this.Gmessage = "";
        }
    }
}
</script>>