<template>
    <div>
        <div class="row Gp0m0" v-for="(ccard, i) in clancard" :key="i">
            <div class="col-3 p-1 Gp0m0"><img class="card-img" :src="require('/src/assets/img/item/'+ccard.avtr)" alt=""></div>
             <div class="col-9 p-0">
             <div class="card arrow tmibg2 p-2 bdr1"  >
            <div class="card-header blkgry Gp0m0">
                <div class="row Gp0m0 py-1">
                    <div class="col-12"><h4 class="siz15">{{ccard.name}}</h4></div>
                    <div class="col-12 Gp0m0"><p class="siz13 float-right px-2">1 day ago</p></div>
                   
                </div>
            </div>
            <div class="card-body py-1 Gp0m0 mt-2">
                <div class="row Gp0m0">
                    <div class="col-4 p-0 vertical-center"><img class="card-img animated infinite pulse delay-2s mt-3"  :src="require('/src/assets/img/item/'+ccard.img)" alt=""></div>
                    <div class="col-8">

                        <h6 class="subdtlsfnt">{{ccard.dtls}}</h6>
                         <div class="btn nBtn nBbg p-1 mb-3 button4 siz15 py-1 text-center">Open</div>  
                    </div>
                </div>
            </div>

            <div class="card-footer blkgry Gp0m0 py-2 px-0">
                <div class="row Gp0m0">
                    <div class="col-4 px-1"><div class="btn siz15 nBtn btn-block blkd75"><i class="fas fa-thumbs-up float-left"></i><h6 >&nbsp;5</h6></div></div>
                    <div class="col-4 px-1"><div class="btn siz15 nBtn btn-block blkd75"><i class="far fa-comments float-left"></i><h6 >&nbsp;0</h6></div></div>
                    <div class="col-4 px-1"><div class="btn siz15 nBtn btn-block blkd75 py-1"><i class="fas fa-share-alt-square siz20"></i></div></div>
                </div>
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
            clancard:[
                    {
                        avtr:'1.gif',
                        name:'Habibur Rahman',
                        type:'clan',
                        time:'1 day ago',
                        img:'chestClnShr.png',
                        dtls:'Title Here to go Title Here to go'
                    },
                     {
                        avtr:'1.gif',
                        name:'Habibur Rahman',
                        type:'clan',
                        time:'1 day ago',
                        img:'chestClnShr.png',
                        dtls:'Title Here to go Title Here to go'
                    },    
                     {
                        avtr:'1.gif',
                        name:'Habibur Rahman',
                        type:'clan',
                        time:'1 day ago',
                        img:'chestClnShr.png',
                        dtls:'Title Here to go Title Here to go'
                    },
                     {
                        avtr:'1.gif',
                        name:'Habibur Rahman',
                        type:'clan',
                        time:'1 day ago',
                        img:'chestClnShr.png',
                        dtls:'Title Here to go Title Here to go'
                    }
            ]
        }
        
    },
}
</script>