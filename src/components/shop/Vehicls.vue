<template>
    <div>
        <div class="row py-2 text-center Gp0m0">
            <h4 class='hr-sect jaldi'>{{ tl }}</h4>
        </div>
        <div class="row Gp0m0">
            <div class="col-4 Gp0m0 p-1" v-for="(sitm,i) in itm" :key='i'>
                <div class="card bg-transparent btn nBtn nBbg p-2 jaldi Gp0m0" @click="show(sitm.name,sitm.img,sitm.id,sitm.cst)">
                    <div class="card-header Gp0m0 "><p class="subtitlefnt siz15 chbrk">{{sitm.name}}</p></div>
                    <div class="card-body Gp0m0 p-2"> 
                    <img class="card-img" :src="itmallimg+sitm.img" alt=""></div>
                    <div class="card-footer Gp0m0"><h6 class="dtlsfnt" ><span data-v-7a13c6a6="" class="incb4 iC-gold " v-if="sitm.tp=='g'">
                        </span><span data-v-7a13c6a6="" class="incb4 iC-cash " v-else ></span>{{sitm.cst}}</h6>
                    </div>
                    
                </div>
            </div>   
        </div>


        <modal name="vhcls"  :width='300' :height='271'   :isAutoHeight="true"   @before-open="beforeOspen" class="mblr">
                <div class="row Gp0m0 tmibg  bdr3 p-3 blksdout rounded" id='gtmhyHt'  style=" height:271px; overflow: scroll;">
                    <div class="col-12 text-center"><h4>{{mnm}}</h4></div>
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
                    <h6 class="text-white pl-5" >Cost:{{ vcst*amnt}}</h6>
                </div>
                <notifications group="txt" position="top center" style="height:300px;"/>
                <div class="col-12 Gp0m0 pr-1"><div class="btn nBtn btn-lg text-center btnbfnt btn-block button5 sizv35" @click="buy(mid),purchase(mid,amnt)">Buy Now</div></div>
            </div> 
        </modal> 
   </div>
</template>




<script>
export default {

    data(){
        return{
            tl:'',
            itmallimg:'http://mrdemo.com/item/',
            itm:[],
            mid:'',
            mnm:'',
            mimg:'',
            vcst:'',
            amnt:1,
               
        }
    },
    beforeCreate(){
        this.$mgo.gt('itminvtry/vhcl',(rs)=>{
            if(rs.sts=='ok'){
                this.tl=rs.tl
                rs.data.forEach((dt)=>{
                    this.itm.push(dt);
                })
            }
        })
    },


    mounted(){
        this.$notify();
  
       
       
    },
    methods:{

        beforeOspen(){
            setTimeout(()=>{ 
                 window.jq('.v--modal').height(window.jq('#gtmhyHt').outerHeight());
            }, 10);
        },
        
        onChange(event){
            this.amnt=event.target.value;
            console.log(this.amnt);

        },
        purchase(id,amnt){
            console.log(id,amnt);
           
           this.$mgo.gp("/itminvtry/add/"+id+'/'+amnt, {}, (rspp) => {
               if(rspp.sts=='success' || rspp.sts=='required'){
                   this.$notify({
                    title:'',
                    group: 'txt',
                    text: rspp.msg,
                    });
                    
               }
               this.hide()
           })
           
        },
         show(itmnm,itmimg,itid,cst) {
          this.mnm=itmnm,
          this.mimg=this.itmallimg+itmimg,
          this.mid=itid,
          this.vcst=cst,
          this.$modal.show('vhcls',  { height: 'auto' });        
        },
        hide() {
            this.$modal.hide('vhcls');
        },
        buy(id){
            console.log(id)
            console.log(this.$notify())
            /* this.$mgo.gt('itminvtry/add'+itmid,(res)=>{
                console.log(res);
            }) */
        }
    }
}
</script>