<template>
    <div class="tmibg" >


        <div class="row no-gutters">
            <div>
                <h3 v-if="chtmsg!=''">{{chtmsg}}</h3>
            
            <div v-else>

            
            <ul class="list-group blkgry" v-for="(mlist, i) in ctdta" :key="i">
                <router-link :to="{path:'/game/chat/'+i}"> 
                    <li class="list-group-item Gp0m blk50 Gp0m0 py-2 my-1" >
                        <div class="row no-gutters ">
                            <div class="col-2 p-2"> <img :src="require('../../assets/img/'+mlist.mpic)" class="card-img BORDER rounded-circle" alt=""> 
                                <div class="card-img-overlay">
                                <p class="bg-success dot"></p></div>
                            </div>      
                            <div class="col-10 px-2">
                                <h4 class="subtitlefnt">{{mlist.mnm}}</h4>
                                <h6 class="dtlsfnt">{{mlist.mdtls}}</h6>
                            </div>
                        </div>
                    </li>
                </router-link>
            </ul>
            </div>
        </div> 
        </div>     <!-- <router-view></router-view> -->
    </div>
</template>

<style scoped>
.dot {
  height: 12px;
  width: 12px;
  background-color: rgb(0, 255, 42);
  border:1px solid green;
  border-radius: 50%;
 position: absolute;
    left: 25%;
    top: 30%;
}
</style>

<script>
export default {
    data() {
        return{
                chtmsg:'',
                ctdta:[
                    {
                        mpic:'1.png',
                        mnm:'Habibur Rahman',
                        mdtls:"abahsdfkag lorme lisdyn is non"
                    },
                     {
                        mpic:'1.png',
                        mnm:'Habibur Rahman',
                        mdtls:"abahsdfkag lorme lisdyn is non"
                    },
                     {
                        mpic:'1.png',
                        mnm:'Habibur Rahman',
                        mdtls:"abahsdfkag lorme lisdyn is non"
                    },
                     {
                        mpic:'1.png',
                        mnm:'Habibur Rahman',
                        mdtls:"abahsdfkag lorme lisdyn is non"
                    },
                     {
                        mpic:'1.png',
                        mnm:'Habibur Rahman',
                        mdtls:"abahsdfkag lorme lisdyn is non"
                    },
                     {
                        mpic:'1.png',
                        mnm:'Habibur Rahman',
                        mdtls:"abahsdfkag lorme lisdyn is non"
                    },
                ]
        }        
    },

    created() {
        this.$mgo.gt('mp/chatlst',(resp)=>{
            if(resp.sts=='chtlst'){
                console.log('null')
            }else {
                this.chtmsg='You didnt Chat With Anyone'
            }
        })
    },
}
</script>