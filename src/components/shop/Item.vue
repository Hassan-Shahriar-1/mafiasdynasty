<template>
    <div>
        <div class="row py-2 text-center Gp0m0">
            <h4 class='hr-sect titlefntnew'>Item Shop</h4>
        </div>
        <div class="row Gp0m0">
            <div class="col-4 Gp0m0 p-1" v-for="(sitm,i) in spitm" :key='i'>
                <div class="card bg-transparent btn nBtn nBbg p-2 jaldi Gp0m0" @click="show(sitm.name,sitm.img,sitm.id)">
                    <div class="card-header Gp0m0 "><h5 class="subtitlefnt siz15 ">{{sitm.name}}</h5></div>
                    <div class="card-body Gp0m0 p-2"> <img class="card-img" :src="itmallimg+sitm.img" alt=""></div>
                    <div class="card-footer Gp0m0"><h6 class="dtlsfnt"><span data-v-7a13c6a6="" class="incb4 iC-gold "></span><span data-v-7a13c6a6="" class="incb4 iC-cash "></span>{{sitm.cst}}</h6></div>
                </div>
            </div>   
        </div>
        <modal name="spitmmdl"  :width='300'  :height='271' :isAutoHeight="true"   @before-open="beforeOspen" class="mblr">
            <div class="row Gp0m0 tmibg  bdr3 p-3 blksdout rounded" id='gtmhyHt'>
                <div class="col-12 text-center"><h4>{{itmnm}}</h4></div>
                    <div class="col-6 p-0 pb-2">
                        <img :src="itmallimg+itmimg"  class="card-img p-2" alt="">
                    </div>
                    <div class="col-6 p-0 pb-2 mt-2 text-dark">
                        <select name="" id="" class="w-100 form-control form-control-lg  dtlsfnt">
                            <option value="1">1</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="7">7</option>
                            <option value="10">10</option>
                        </select>
                    </div>              
                <div class="col-12 Gp0m0 pr-1"><div class="btn nBtn btn-lg text-center btnbfnt btn-block button5 sizv35" @click="buy(itmid)">Buy Now</div></div>
            </div> 
        </modal> 
        <div class="row py-2 text-center Gp0m0">
            <h4 class='hr-sect titlefntnew'>Super Shop</h4>
        </div>
        
        <div class="row py-2 text-center Gp0m0">
        <h4 class='hr-sect titlefntnew'>Agora Shop</h4>
        </div>
   </div>
</template>

<script>
export default {

    data(){
        return{
            itmnm:'',
            itmimg:'',
            itmallimg:'http://mrdemo.com/item/',
            spitm:[],
            itmid:'',
               
        }
    },
    beforeCreate(){
        this.$mgo.gt('itminvtry/itmlist',(rs)=>{
            if(rs.sts=='ok'){
                rs.data['wpn'].forEach((dt)=>{
                    this.spitm.push(dt)
                })
            }
            console.log(rs);
        })
    },
    methods:{
               beforeOspen(){
            setTimeout(()=>{ 
                 window.jq('.v--modal').height(window.jq('#gtmhyHt').outerHeight());
            }, 10);
        },
         show(itmnm,itmimg,itid) {
          this.itmnm=itmnm,
          this.itmimg=itmimg,
          this.itmid=itid,
           this.$modal.show('spitmmdl',  { height: 'auto' });        
        },
        hide() {
            this.$modal.hide('spitmmdl');
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