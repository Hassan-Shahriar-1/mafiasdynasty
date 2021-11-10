

<template>
    <div class="section rounded tmibg border p-2">
         <div><h4 class="text-center titlefnt pb-2">Attack weapon</h4></div>
        <!-- trophics section start -->
        <div class="container Gp0m0 " style="word-break: break-all;">

            <div class="row Gp0m0 w-100">
    
                <div class="col-4 Gp0m0" v-for="(itmg, i) in trplst" :key="i"><div class=" m-1 border rounded"><img :src="itmg.img" class="card-img" alt=""> <br> <h6 class="sizv13 blkred p-2 dtlsfnt">{{itmg.name}}</h6></div></div>
            </div>
    
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{

            Trophy:{
            iitm:[
                    {
                        mg:"1.gif",
                        idtls:"hashfoagsd"
                    },
                    {
                        mg:"1.gif",
                        idtls:"hashfoagsd"
                    },
                    {
                        mg:"1.gif",
                        idtls:"hashfoagsd"
                    },
                   
                ],
                },
            trplst:[]
        }
        
    },
    beforeCreate(){
        this.$mgo.gt('itminvtry/trophielist',(rs)=>{
            if(rs.sts=='trpy'){
                rs.list.forEach((dt)=>{
                    this.trplst.push(dt)
                })
            }
        })
    }
}
</script>