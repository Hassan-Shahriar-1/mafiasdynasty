<template>
    <div class="section rounded tmibg border p-2">
        <!-- trophics section start -->
        <div class="container Gp0m0 " style="word-break: break-all;">
            <h3 class="w-100 dark50 text-center py-1"> Trophies <i @click="tropiesinfo ^= true" class="fas fa-question-circle float-right sizv35 p-2"></i></h3>
             <h6 class="p-1 blk50 m-1 scale-up-center" style="border: 1px solid rgb(131 124 124);" v-show="tropiesinfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio similique nulla aliquam,
                    amet asperiores nam minima odio iusto officiis 
                    voluptatem eveniet natus. Atque quidem, voluptate numquam laborum accusantium architecto?</h6>
            <div class="row Gp0m0 w-100">
                <h4 class="hr-sect subtitlefnt">Introduction</h4>
                <div class="col-4 Gp0m0" v-for="(itmg, i) in trplst" :key="i"><div class=" m-1 border rounded"><img :src="itmg.img" class="card-img" alt=""> <br> <h6 class="sizv13 blkred p-2 dtlsfnt">{{itmg.name}}</h6></div></div>
            </div>
            <div class="row Gp0m0 w-100">
                <h4 class="hr-sect subtitlefnt">Introduction2</h4>
                <div class="col-4 Gp0m0" v-for="(itmg, i) in trplst" :key="i"><div class=" m-1 border rounded"><img :src="itmg.img" class="card-img" alt=""> <br> <h6 class="sizv13 blkred p-2 dtlsfnt">{{itmg.name}}</h6></div></div>
            </div>
            <div class="row Gp0m0 w-100">
                <h4 class="hr-sect subtitlefnt">Introduction3</h4>
                <div class="col-4 Gp0m0" v-for="(itmg, i) in trplst" :key="i"><div class=" m-1 border rounded"><img :src="itmg.img" class="card-img" alt=""> <br> <h6 class="sizv13 blkred p-2 dtlsfnt">{{itmg.name}}</h6></div></div>
            </div>
            <div class="row Gp0m0 w-100">
                <h4 class="hr-sect subtitlefnt">Introduction4</h4>
                <div class="col-4 Gp0m0" style="opacity:0.4;" v-for="(itmg, i) in trplst" :key="i"><div class=" m-1 border rounded"><img :src="itmg.img" class="card-img" alt=""> <br> <h6 class="sizv13 blkred p-2 dtlsfnt">{{itmg.name}}</h6></div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{

            tropiesinfo:false,
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
                iaga:[
                    {
                        mg:"1.gif",
                        agdtls:"hashfoagsd"
                    },
                    {
                        mg:"1.gif",
                        agdtls:"hashfoagsd"
                    },
                    {
                        mg:"1.gif",
                        agdtls:"hashfoagsd"
                    },
                
                ],
                imatha:[
                    {
                        mg:"1.gif",
                        mdtls:"hashfoagsd"
                    },
                    {
                        mg:"1.gif",
                        mdtls:"hashfoagsd"
                    },
                    {
                        mg:"1.gif",
                        mdtls:"hashfoagsd"
                    },
                 
                ],
                ises:[
                    {
                        mg:"1.gif",
                        sdtls:"hashfoagsd"
                    },
                    {
                        mg:"1.gif",
                        sdtls:"hashfoagsd"
                    },
                    {
                        mg:"1.gif",
                        sdtls:"hashfoagsd"
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