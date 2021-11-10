<template>
    <div>   
        <div class="card" style="margin-bottom:100px">

            <div class="card-header p-2 blkgry">
                <h3 class="text-left">Record book</h3>
            </div>
            <div class="card-body" style="height: 200px; overflow: scroll;" v-if="rcdlst.length==0">
                <h6>No Record Found</h6>
            </div>
            <div class="card-body p-2" style="height: 300px; overflow: scroll;" v-else>
                <ul class="list-group tmibg" v-for="(rlst,i) in rcdlst" :key="i" style="overflow:scroll;">
                <li class="list-group-item py-2 my-1 blkd75"><h6>{{rlst.msg}}</h6><p class="btmrt text-right"><vue-moments-ago prefix="" suffix="ago" :date="rlst.dttm" lang="en" /> </p></li>
                </ul>
                <div class="bg-transparent"> 
                    <div class="btn nBtn btn-lg btn-block px-2 tmibg" @click="handleLoadMore()" v-if="btn!=''">{{ btn }}</div>
                </div>
            </div>
        </div>                 
    </div>
</template>


<script>
import VueMomentsAgo from 'vue-moments-ago'
export default {
    components: {
        VueMomentsAgo
    },
    data(){
        return{
            rcdlst:[],  
            nrcd:'',
            page:1,
            lastpage:1,
            btn:'',
        }
    },
   mounted() {
       
         this.getdata();
                
    }, 
   
    methods:{
       getdata(){
                this.$mgo.gt('/mp/rcrdbook?page='+this.page,(rs)=>{
                    
                    if(rs.data.last_page==this.page){
                        this.btn='';
                    }else{
                            this.btn="Load More..."
                    }
                    
                    if(rs.sts=='ok'){
                    
                        rs.data.data.forEach((dt)=>{
                      this.rcdlst.push(dt)
                  })
                    
                }
                 
                })
        },
        handleLoadMore(){
            this.page=this.page+1;
            this.getdata();
        }
    }
}
</script>