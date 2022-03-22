<template>

<div> 
    <div class="row  Gp0m0" style="position:sticky;">
        <div class="col-10 Gp0m0">       
            <textarea  v-model="Gmessage" @keyup.enter="insrtMsg"  class="form-control overflow-scroll jaldi" style="height:40px;"> </textarea>
        </div>
        <div class="col-2 Gp0m0 btn btn-lg blkrds nBtn  rounded" @click="insrtMsg"><i class="fas fa-paper-plane text-white"></i>
        </div>       
                  
    </div>
    <div id="Gmsg"  class="jaldi bMbg3" style="height:570px; overflow-y:scroll;">
        <section>
            <div v-for="(MsgsLt, i) in MsgsLts" :key="i">


<!-- container that contain the card gif data -->
  <div class="d-flex justify-content-start p-2 " v-if="MsgsLt.typ=='mAskrqst'" style="word-break:break-all;">
      <div class="card rounded-1 clr711 grybdr2">
        <div class="card-header blkrds p-1">
          <h4 class="rounded-0 text-center py-1 w-100" style="position: sticky">
            Member Request
            <span class="float-right" style="margin-right: 2%"
              ><i class="fas fa-info-circle siz20 text-secondary"></i>
            </span>
          </h4>
        </div>
        <div class="card-body Gp0m0 pb-2">
          <div class="row Gp0m0">
            <div class="col-2 p-1">
              <img src="../../assets/img/item/1.gif" class="img-thumbnail" alt="" />
            </div>
            <div class="col-10 Gp0m0">
              <div class="row no-gutters mt-1">
                <div class="col-8 Gp0m0">

                    <div class="rounded blk bdr1 py-1 mlr2">
                  <h4 class="text-center text-white ">{{MsgsLt.nm}}</h4>
                  <h6 class="text-center text-white ">Level:{{mlvl}}</h6>
                </div>
                </div>
                <div class="col-4 Gp0m0 mt-1"><button class=" Gp0m0  btn nBtn btn-block btn-lg py-3 blkgry siz13">View profile</button> </div>
              </div>

         
            </div>
          </div>

               <div class="row no-gutters px-1 mt-1">
                <div class="col-6 pl-1 ">

                <h6 class="text-left mt-4">Time:52656565656</h6>
                </div>
                <div class="col-3">
                  <div class="btn nBtn btn-block siz20  button4">Return</div>
                </div>
           
                <div class="col-3" @click="reqacpt(MsgsLt.rmid,MsgsLt.uid,MsgsLt.id)">
                  <div class="btn nBtn btn-block siz20 mlr2 button5">Recive</div>
                </div>
              </div>

        </div>
      </div>
    </div>
 <div  class="d-flex justify-content-start py-2" v-else-if="MsgsLt.typ=='mJr'" >
        <div class="container">
      <div class="card rounded-1 clr711">
        <div class="card-header blkrds p-0">
          <div class="rounded-0 text-center py-1 w-100" style="position: sticky">
            <h5 class="titlefnt">Habibur Rahman </h5>
            <h6 class="dtlsfnt">Request for Item Name</h6>
          </div>
        </div>
        <div class="card-body Gp0m0">
          <div class="row Gp0m0">
            <div class="col-2 p-1">
              <img src="../../assets/img/item/1.gif" class="card-img" alt="" />
            </div>
            <div class="col-10 p-1">
              <div class="row Gp0m0">
                <div class="col-8 Gp0m0">

                    <div class="rounded blk bdr mlr2 p-1">
                  <h6 class="text-center text-white ">Donate 6/5454</h6>
                </div>
                </div>
                <div class="col-4  p-0 btn nBtn btn-block button4 siz20" @click="toggle = !toggle">Donate</div>
              </div>

              <h6 class="text-center">You have:56 items</h6>
             <div class="progress n_bar-a bg-secondary" style="height:10px;">
                    <div class="progress-bar  bg-danger" id="itmBr" style="width: 50%;"> 1/4</div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>

            
                <div class="d-flex justify-content-start py-2" v-else-if="MsgsLt.typ=='l'" >
                                <img class="card-img rounded-circle img_cont_msggsp " src="../../assets/img/logo.png" alt="">
                                <div class="msg_cotainergsp w-100 ">
                                <div class=" Gp0m0 siz20 subtitlefnt "> {{MsgsLt.nm}}</div>
                                 <h6 class="dtlsfnt mt-1">  {{ MsgsLt.msg }}</h6>
                                <span class="msg_timegsp text-white dtlsfnt">{{ MsgsLt.Tm }}</span>
                                </div>
                </div>
                
                <div class="d-flex justify-content-end py-2" v-else-if="MsgsLt.typ=='r'" >
                                <div class="msg_cotainer w-100">
                                   <h3 class=" Gp0m0 siz20 subtitlefnt" > {{MsgsLt.nm}}</h3>
                                   <h6 class="text-left mt-1 dtlsfnt">{{ MsgsLt.msg }}</h6>
                                    <span class="msg_time text-white dtlsfnt">{{ MsgsLt.Tm }}</span>
                                </div>
                                <img class="card-img rounded-circle img_cont_msg " src="../../assets/img/logo.png" alt="">
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
 
export default{
    name:'Family',
    data(){
        return {
            Gmessage:"",
            MsgsLts:[], 
            msgCntrlr:[],
            rspmsgid:[],
            mlvl:"500"
        }
    },
    created() {       
        this.socket.emit('inroom');  
        
        this.socket.on('gtRmMsg',(dt)=>{
              this.msgCntrlr[0] = dt[0]; 
              this.MsgsLts=[]; 
              dt[1].forEach((dtas)=>{

                if(dtas.tp==1){ 
                  if(dtas.uid == this.msgCntrlr[0]){
                    dtas.typ = 'r';
                  }else{
                    dtas.typ = 'l';
                  }
                 }else if(dtas.tp==3){
                  dtas.typ='mJr'
                } else{
                  dtas.typ='mAskrqst'
                }
                   this.MsgsLts.push(dtas); 
              });
          });  
    },
    beforeMount() {         
      
          this.socket.on('respnpushRMmsg', (data)=>{ 
            console.log(data[1]['uid'])
            this.rspmsgid[0]=data[0]
            console.log(this.rspmsgid[0],data[1].uid,'typ',data[1].tp);
           
           if(data[1]['tp']==1){
                  if(data[1]['uid'] == this.msgCntrlr[0]){
                    data[1].typ = 'r';
                  }else{
                    data[1].typ = 'l';
                  }
            }else if(data[1]['tp']==2){
                    data[1].typ='mAskrqst'
            }else if(data[1]['tp']==3){
                data[1].typ='mJr'
                
            }
             
             
              this.MsgsLts.unshift(data[1])      
          }) 
             
    },
    beforeDestroy(){
        this.MsgsLts=[];
        this.socket.emit('orgRmv'); 
        this.socket.removeListener('respnpushRMmsg');
    }, 
    
    methods:{
        insrtMsg:function(){ 
          let data={
            msg:this.Gmessage,
            typ:1
          } 
         
            this.socket.emit('pushRmsg', data); 
            this.Gmessage = "";
        },
        reqacpt(gngid,usrid,mngoid){
          
          //let gng=gngid.substring(3)
          console.log(gngid,usrid,mngoid)
          this.axios.post('gang/reqacpt/'+gngid+'/'+usrid+'/'+mngoid).then(respn=>{
            console.log(respn)
          })
          console.log(gngid,usrid,mngoid);
        }
    }
}
</script>