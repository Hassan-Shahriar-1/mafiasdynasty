<!-- <template>
    <div class=" Gp0m0 smlttlfnt3 ptnbg ">
        <div class="container text-center trtbg   trt">
            <h5 class="dtlsfnt">Lorem ipsum dolor sit amet consectetur,Laborum harum fuga sequi laboriosam quidem! 
                Nulla voluptatibus voluptatum tenetur
                quasi, maiores dicta dolorum deleniti veritatis alias magni dolore magnam voluptate quidem.</h5> 
            <div class="btn btn-lg button4 nBtn nBbg jaldi center">Cntr Thread </div> 
        </div>        
    </div>
</template> -->


<template>
    <div>

        <h4 class="p-4 blkgry text-center titlefnt">Threat Someone</h4>
        
        <div class="row no-gutters w-100">
            <ul class="list-group w-100" v-for="(masrc,i) in mafia" :key="i">
                <li class="list-group-item blk50 p-1 "> 
                    <div class="row Gp0m0  rounded blkd75 p-2">
                        <div class="col-2 Gp0m0"><img :src="require('../../assets/img/item/'+masrc.mfaimg)"  class="card-img grnbdr rounded-circle" alt=""></div>
                        <div class="col-6"> <h5 class="text-info subtitlefnt siz25">{{masrc.mfattl}}</h5> <h6 class="subtitlefnt siz20">{{masrc.mfades}}</h6></div>
                        <div class="col-4 "> <div class=" button4 nBtn mt-2 border py-2 rounded"><h6 class="text-center"><i class="fas fa-theater-masks"></i>&nbsp;Threat</h6></div></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
 data(){
        return{
                 mafia:[
                        {
                           mfaimg:'1.gif',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.gif',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.gif',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.gif',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.gif',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.gif',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                          {
                           mfaimg:'1.gif',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.gif',
                           mfattl:'Habibur',
                           mfades:'Level'
                        }
                    ]

            }
    }
}
</script>