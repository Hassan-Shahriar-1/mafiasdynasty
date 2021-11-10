<template>
    <div class="section rounded bMbg5 border p-2">
        <!-- trophics section start -->
        <div class="container Gp0m0 " style="word-break: break-all;">
            <h3 class="w-100 dark50 text-center py-1"> Trophies <i class="fas fa-question-circle float-right sizv35 p-2"></i></h3>
            <div class="row Gp0m0 w-100">
                <h4 class="hr-sect subtitlefnt">Introduction</h4>
                <div class="col-4 Gp0m0" v-for="(itmg, i) in Trophy.iitm" :key="i"><div class=" m-1 border rounded"><img :src="require('/src/assets/img/item/'+itmg.mg)" class="card-img" alt=""> <br> <h6 class="sizv13 blkred p-2 dtlsfnt">{{itmg.idtls}}</h6></div></div>
                
            </div>

            <div class="row Gp0m0">
                <h4 class="hr-sect subtitlefnt">aga</h4>
                <div class="col-4 Gp0m0" v-for="(iag, i) in Trophy.iaga" :key="i"><div class=" m-1 border rounded"><img :src="require('/src/assets/img/item/'+iag.mg)" class="card-img" alt=""> <br> <h6 class="sizv13 blkred p-2 dtlsfnt">{{iag.agdtls}}</h6></div></div>
            </div>

            <div class="row Gp0m0">
                <h4 class="hr-sect subtitlefnt">matha</h4>
                <div class="col-4 Gp0m0" v-for="(imath, i) in Trophy.imatha" :key="i"><div class=" m-1 border rounded"><img :src="require('/src/assets/img/item/'+imath.mg)" class="card-img" alt=""> <br> <h6 class="sizv13 blkred p-2 dtlsfnt">{{imath.mdtls}}</h6></div></div>
            </div>

            <div class="row Gp0m0">
                <h4 class="hr-sect subtitlefnt">ses</h4>
                <div class="col-4 Gp0m0" v-for="(ise, i) in Trophy.ises" :key="i"><div class=" m-1 border rounded"><img :src="require('/src/assets/img/item/'+ise.mg)" class="card-img" alt=""> <br> <h6 class="sizv13 blkred p-2 dtlsfnt">{{ise.sdtls}}</h6></div></div>
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
                }
            
        }
        
    },
}
</script>