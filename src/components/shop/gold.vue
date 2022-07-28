<template>
    <div>
        <div class="card">
            <div class="card-header blkgry"><h2 class="text-center titlefntnew">Gold Shop</h2></div>
            <div class="card-body p-0"> 
                <h4 class="siz20 titlefnt2 text-center tbg p-1">Gold play a vital role in faster gameplay and to purchese Special things as Avatar,Familiars and other things what can be purchased with your country currency.</h4>
                <div class="row no-gutters w-100">
                    <ul class="list-group w-100" v-for="(masrc,i) in gold" :key="i">
                        <li class="list-group-item blk50 p-1 "> 
                            <div class="row Gp0m0  rounded blkd75 p-2">
                                <div class="col-2 Gp0m0 p-1"><img :src="require('../../assets/img/item/'+masrc.goldimg)"  class="card-img " alt=""></div>
                                <div class="col-6"> <h5 class="text-info titlefnt  siz20">{{masrc.goldqtty}}</h5> <h6 class="titlefnt siz15">{{masrc.goldprc}}</h6></div>
                                <div class="col-4 "> <div class="button4 nBtn mt-2 border py-2 rounded" ><h6 class="text-center">Purchese</h6></div></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 data(){
        return{
                 gold:[
                        {
                           goldimg:'Gold-bar.png',
                           goldqtty:'15 Gold',
                           goldprc:'4 USD'
                        },
                         {
                           goldimg:'Gold-bar.png',
                           goldqtty:'25 Gold',
                           goldprc:'15 USD'
                        },
                         {
                           goldimg:'Gold-bar.png',
                           goldqtty:'75 Gold',
                           goldprc:'21 USD'
                        },
                         {
                           goldimg:'Gold-bar.png',
                           goldqtty:'110 Gold',
                           goldprc:'60 USD'
                        },
                         {
                           goldimg:'Gold-bar.png',
                           goldqtty:'250 Gold',
                           goldprc:'105 USD'
                        },
                         {
                           goldimg:'Gold-bar.png',
                           goldqtty:'1250 Gold',
                           goldprc:'320 USD'
                        }
                    ]

            }
    },
    methods:{
            show () {
            this.$modal.show('invfnd');            
        },
        hide () {
            this.$modal.hide('invfnd');
        },
    }
}
</script>