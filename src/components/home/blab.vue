<template>
    <div>
        <div class="section mt-1 tmibg">
            <div class="row no-gutters">
                <textarea v-model="Gmessage" @keyup.enter="insrtMsg" class="w-100 form-control"  name="" id="" cols="10" rows="1" placeholder="Type here" style="height:40px;"></textarea>
            </div>
            <div class="btn nBtn blkgry w-100 mt-1  mb-2"  @click="insrtMsg()">Blab here</div>
            <div class="contain Gp1m1 my-1" v-for="(MsgsLt, i) in MsgsLts" :key="i">
                <div class="row no-gutters mb-1">  
                        <img src="../../assets/img/item/1.gif" alt="Avatar" style="width:100%;">
                        <div class="header">
                        <strong class="text-white "><h3 class="subtitlefnt">{{MsgsLt.nm}}</h3></strong> <small class="text-right text-muted"></small> 
                        </div>
                </div>
                <div class="dtlsfnt">
                    <div class="row no-gutters" style="word-break:break-all;">
                        <h6 class="mb-2 ">{{ MsgsLt.msg }}</h6>
                    </div> 
                    <div class="row no-gutters">
                        <div class="col-6">
                            <i class="fas fa-thumbs-up bgmn ">100&nbsp;</i>
                            <i class="fas fa-thumbs-down bgmn mlr3 ">100</i>
                        </div>
                        <div class="col-6">
                            <span class="float-right "><i class="fas fa-flag bgmn"></i></span>
                            <h6 class="mt-2 mlr2 siz13 float-right"><i class="fas fa-clock"></i> {{MsgsLt.Tm}} </h6>     
                        </div>
                    </div>  
                </div>  
            </div>
        </div>
    </div>
</template>


<script>
 
export default{
    name:'Family',
    data(){
        return {
            Gmessage:"",
            MsgsLts:[
              
            ]
        }
    },
    created() {
  
    },
    beforeCreate() {
                
                
    },
    mounted() {
        this.socket.on('gblrcv', (sckt)=> {
                    console.log(sckt);   
                    this.MsgsLts = sckt
        }); 
        
    },
    methods:{
        insrtMsg:function(){           
             this.MsgsLts.push({
                   msg:this.Gmessage,
                   Tm:Date.now(),
                   nm:"Hasan Shahriar"
            }); 
            console.log(this.MsgsLts);
            this.MsgsLts = this.MsgsLts.reverse();
            this.socket.emit('gblmsg',this.Gmessage);
            this.Gmessage = "";
        }
    }
}
</script>