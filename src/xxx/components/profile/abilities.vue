<template>
    <div class="section">
           <!-- abilities start -->

                                <div class="container Gp0m0 rounded blkred" style="word-break: break-all;">
                                    <h4 class="text-left">Abilities</h4>
                                      <div class="row Gp0m0" v-for="(ablts,i) in ablits" :key="i">
                                         
                                         <div class="col-4 Gp0m0" v-for="(ablts,i) in ablits" :key="i"><div class=" m-1 border rounded"><img :src="ablts.mg" class="card-img" alt=""> <br> <h6 class="sizv35 blkred p-2">{{ablts.des}}</h6></div></div>
                                         
                                        </div>
                                </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ablits:[
                {
                    mg:"/src/assets/img/item/1.gif",
                    des:"description"
                },
                {
                    mg:"/src/assets/img/item/1.gif",
                    des:"description"
                },
                {
                    mg:"/src/assets/img/item/1.gif",
                    des:"description"
                },
            ]
        }
    }
}
</script>