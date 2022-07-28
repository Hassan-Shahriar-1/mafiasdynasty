<template>
    <div>
        <div class="row py-2 text-center Gp0m0">
            <h4 class='hr-sect titlefntnew'>{{ tl }}</h4>
        </div>
    
        <div class="row Gp0m0">
            <div class="col-4 Gp0m0 p-1" v-for="(aitm,i) in itm" :key='i'>
                <div class="card bg-transparent btn nBtn nBbg p-2 jaldi Gp0m0" @click="show(aitm.name,aitm.img,aitm.cst,aitm.id)">
                    <div class="card-header Gp0m0 " style="white-space: normal;"><h5 class="subtitlefnt siz15 ">{{aitm.name}}</h5></div>
                    <div class="card-body Gp0m0 p-2"><img class="card-img"  :src="imglk+aitm.img" alt=""> </div>
                    <div class="card-footer Gp0m0"><h6 class="dtlsfnt" ><span data-v-7a13c6a6="" class="incb4 iC-gold " v-if="aitm.tp=='g'">
                        </span><span class="incb4 iC-cash " v-else ></span>{{aitm.cst}}</h6>
                    </div>
                </div>       
            </div>  
        </div>

        <modal name="vhcls"  :width='300' :height='271' :isAutoHeight="true"   @before-open="beforeOspen" :delay="10" class="mblr" >
            <div class="row Gp0m0 tmibg  bdr3 p-3 blksdout rounded" id='ghhg' style=" height:271px; overflow: scroll;">
                <div class="col-12 text-center"><h4>{{ mnm }}</h4></div>
                    <div class="col-6 p-0 pb-2">
                            <img :src="mimg"  class="card-img p-2" alt=""> 
                    </div>
                    <div class="col-6 p-0 pb-2 mt-2 text-dark">
                            <select name="" id="" class="w-100 form-control form-control-lg  dtlsfnt" @change="onChange($event)">
                                <option value="1">1</option>
                                <option value="3">3</option>
                                <option value="5">5</option>
                                <option value="7">7</option>
                                <option value="10">10</option>
                            </select>
                    </div>
                    <div>
                        <h6 class="text-white">cost:{{ mcst*amnt}}</h6>
                    </div>                       
                    <div class="col-12 Gp0m0 pr-1"><div class="btn nBtn btn-lg text-center btnbfnt btn-block button5 sizv35" @click="hide(),purchase(mitmid,amnt)" > <div> Buy Now</div></div></div>
            </div> 
        </modal> 
<!--     <popover name="foo">
    hi this is popover
    </popover> -->

   </div>

     
</template>





<script>
export default {
    data(){
        return{

            tl:'',
            itm:[],
            mnm:'',
            mimg:'',
            mcst:'',
            mitmid:'',
            
            amnt:1,
            isAutoHeight:"false",
            imglk:'https://mafiasrival.com/item/',
 
        }
    },

     beforeCreate(){
         this.$mgo.gt('itminvtry/wpn',(rs)=>{
             if(rs.sts=='ok'){
                 this.tl=rs.tl
                 rs.data.forEach((dt)=>{
                     this.itm.push(dt);
                 })
                 console.log(rs);
             }
         })
     },
    
           
        
        methods:{
               beforeOspen(){
            setTimeout(()=>{ 
            //  console.log(this.modal.renderedHeight); 
                 window.jq('.v--modal.v--modal-box.vm--modal').height(window.jq('#ghhg').outerHeight());


            }, 10);
        },
        onChange(event){
            this.amnt=event.target.value;
            

        },
        purchase(id,amnt){
            console.log(id,amnt);
            /* this.$mgo.gp('itminvtry/add/'+id+'/'+amnt,{},(rsp)=>{
                console.log(rsp);
            }) */
           this.$mgo.gp("/itminvtry/add/"+id+'/'+amnt, {}, (rspp) => {
               console.log(rspp)
           })
        },
         show(nm,img,cst,id) {
             this.mnm=nm;
             this.mimg=this.imglk+img;
             this.mcst=cst;
             this.mitmid=id;
           this.$modal.show('vhcls',  { height: 'auto' });        
        },
        hide() {
            this.$modal.hide('vhcls');
        },
        buy(id){
            console.log(id)
            /* this.$mgo.gt('itminvtry/add'+itmid,(res)=>{
                console.log(res);
            }) */
        }
    }
}
</script>