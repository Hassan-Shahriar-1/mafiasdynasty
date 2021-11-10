<template>
    <div>
        <div class="row no-gutters w-100  p-2 my-2" v-if="errmsg">
            <div class="col-12">
                <h5 class="text-center text-white subtitlefnt siz20">{{errmsg}}</h5>
            </div>
       </div>
       <div class="row no-gutters blkgry p-2 my-2" v-else v-for="(pndng,i) in list" :key="i">
           <div class="col-2"><img  class="card-img" src="../../assets/img/1.png" alt=""></div>
           <div class="col-8 px-1"><h4 class="subtitle">{{pndng.name}}</h4> <h6 class="dtlsfnt">Level:{{pndng.lvl}}</h6> <h6 class="dtlsfnt">Time:{{pndng.tm}}</h6> </div>
           <div class="col-2"><div class="btn nBtn btn-block  mt-2" @click="dltpnd(pndng.id)"><i class="fas fa-times-circle text-danger" ></i></div></div>
       </div>
    </div>
</template>
<script>
export default {
        data() {
            return {
            list:[],
            errmsg:'',
            smsg:'',
            }
        },
    beforeCreate() {
    this.axios.get('/mp/pending').then(response=>{
        console.log(response);
        if(response.sts=='errormsg'){
            this.errmsg=response.msg
        }else{
                this.list=response.data
        } 
    })    
    },
    methods: {
        dltpnd:function(id){
            this.axios.post('/mp/dlt/'+id).then(response=>{
            console.log(response);
            })
        }
    },
}
</script>
