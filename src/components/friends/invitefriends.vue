<template>
    <div>
        <div class="row no-guttersb3px blkgry p-2 m-0  rounded">
            <div class="w-100"><h2 class="text-center py-2 w-100 text-golden subtitlefnt">Invite for Apps</h2> <br></div>
            <div class="col-3"><div class="btn nBtn btn-block btn-lg button3 mlr2 "><i class="fab fa-facebook"></i></div></div>
            <div class="col-3"><div class="btn nBtn btn-block btn-lg button5 mlr2"><i class="fab fa-whatsapp"></i></div></div>
            <div class="col-3"><div class="btn nBtn btn-block btn-lg button7 mlr2"><i class="fas fa-envelope"></i></div></div>
            <div class="col-3"><div class="btn nBtn btn-block btn-lg button6 mlr2"><i class="fas fa-external-link-square-alt"></i></div></div>
        </div>
        <div class="row no-gutters w-100">
            <ul class="list-group w-100" v-for="(masrc,i) in mafia" :key="i">
                <li class="list-group-item blk50 p-1 "> 
                    <div class="row Gp0m0  rounded blkd75 p-2">
                        <div class="col-2 Gp0m0 p-1"><img :src="require('../../assets/img/'+masrc.mfaimg)"  class="card-img bdrblk2" alt=""></div>
                        <div class="col-6"> <h5 class="text-info subtitlefnt  siz25">{{masrc.mfattl}}</h5> <h6 class="subtitlefnt siz20">{{masrc.mfades}}</h6></div>
                        <div class="col-4 "> <div class="button4 nBtn mt-2 border py-2 rounded" ><h6 class="text-center"><i class="fas fa-plus-square"></i>&nbsp;Invite</h6></div></div>
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
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
                        },
                         {
                           mfaimg:'1.png',
                           mfattl:'Habibur',
                           mfades:'Level'
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