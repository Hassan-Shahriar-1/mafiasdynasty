<template>
    <div class="section rounded tmibg border p-2">
        <!-- trophics section start -->
        <div class="container Gp0m0 " >
            <h3 class="w-100 dark50 text-center py-1"> Intellegence <i @click="intellegenceinfo ^= true" class="fas fa-question-circle float-right sizv35 p-2"></i></h3>
             <h6 class="p-1 blk50 m-1 scale-up-center" style=" border: 1px solid rgb(131 124 124);" v-show="intellegenceinfo">All the Intellegence that are achievable from the game are enlisted here. The dark ones are those Intellegence that are still to be achieved and the highlighted ones are the Intellegence that are already achieved.</h6>
            <div class="row Gp0m0 w-100 mt-2">
              
                <div class="col-4 Gp0m0" style="opacity:0.4;" v-for="(itmg, i) in trplst" :key="i"><div class=" m-1 border rounded"><img :src="itmg.img" class="card-img" alt=""> <br> <h6 class="sizv13 blkred p-2 dtlsfnt">{{itmg.name}}</h6></div></div>
            </div>
            <div class="row Gp0m0 w-100 mt-2">
               
                <div class="col-4 Gp0m0" v-for="(itmg, i) in iitm" :key="i"><div class=" m-1 border rounded"><img :src="require('../../assets/img/'+itmg.mg)" class="card-img" alt=""> <br> <h6 class="sizv13 blkrds p-2 dtlsfnt">{{itmg.idtls}}</h6></div></div>
            </div>

               <div class="row Gp0m0 w-100 mt-2">
               
                <div class="col-4 Gp0m0" v-for="(itmg, i) in iaga" :key="i"><div class=" m-1 border rounded"><img :src="require('../../assets/img/item/'+itmg.mg)" class="card-img" alt=""> <br> <h6 class="sizv13 blkred btn nBtn btn-block p-2 dtlsfnt">{{itmg.agdtls}}</h6></div></div>
            </div>

              <div class="row Gp0m0 w-100 mt-2">
               
                <div class="col-6 tmibg bnrbxsdo " v-for="(itmg, i) in ises" :key="i">
                    <div class="row Gp0m0"> 
                        <div class=" col-4 p-1 border rounded">
                            <img :src="require('../../assets/img/'+itmg.mg)" class="card-img" alt="">
                        </div><br>
                        <div class="col-8 p-0"> <h6 class="sizv15 p-1 dtlsfnt">{{itmg.sdtls}}</h6></div>
                    </div>
            </div>
            </div>
            
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return{

            intellegenceinfo:false,
         
            iitm:[
                    {
                        mg:"1.png",
                        idtls:"need 1X Giant's Milk"
                    },
                    {
                        mg:"1.png",
                        idtls:"need 1X Giant's Milk"
                    },
                    {
                        mg:"1.png",
                        idtls:"need 1X Giant's Milk"
                    },
                   
                ],
                iaga:[
                    {
                        mg:"1.gif",
                        agdtls:"buy now"
                    },
                    {
                        mg:"1.gif",
                        agdtls:"buy now"
                    },
                    {
                        mg:"1.gif",
                        agdtls:"buy now"
                    },
                
                ],
          
                ises:[
                    {
                        mg:"1.png",
                        sdtls:"Need 2X bagher chamra"
                    },
                    {
                        mg:"1.png",
                        sdtls:"Need 2X bagher chamra"
                    },
                    {
                        mg:"1.png",
                        sdtls:"Need 2X bagher chamra"
                    },
                      {
                        mg:"1.png",
                        sdtls:"Need 2X bagher chamra"
                    },
                 
                 
                ],
                
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