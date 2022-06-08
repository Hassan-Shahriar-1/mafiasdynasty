<template>
    <div class="no-gutters w-100 ">
     
            <h5 class=" tmibg  py-2 px-1 subtitlefnt">Game news  <a href="">View all</a></h5>
            <div class="rounded bMbg3 bnrbxsdo px-1 py-2 my-1" v-for="(gmnws,i) in gm" :key="i">
                <h5 class="text-success subtitlefnt">{{gmnws.nttl}}<h6>{{gmnws.nsttl}}</h6></h5>
            </div>

            <!-- <div class="rounded blk50 p-1 " v-for="(gmnws,i) in gm" :key="i">
                <h5 class="text-success subtitlefnt rounded blkd75 p-2">{{gmnws.nttl}}<h6>{{gmnws.nsttl}}</h6></h5>
            </div> -->
      
    </div>
</template>

<script>
export default {
    data(){
        return{
            gm:[
                {
                    nttl:"Back to lab",
                    nsttl:"dolor periam temporibus vitae itaque."
                },
                {
                    nttl:"Back to lab",
                    nsttl:"dolor periam temporibus vitae itaque."
                },
                {
                    nttl:"Back to lab",
                    nsttl:"dolor periam temporibus vitae itaque."
                },
                {
                    nttl:"Back to lab",
                    nsttl:"dolor periam temporibus vitae itaque."
                },
                {
                    nttl:"Back to lab",
                    nsttl:"dolor periam temporibus vitae itaque."
                },
                {
                    nttl:"Back to lab",
                    nsttl:"dolor periam temporibus vitae itaque."
                },
              
            ]
        }
    }
}
</script>