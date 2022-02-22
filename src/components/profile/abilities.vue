<template>
    <div class="section bMbg5">
           <!-- abilities start -->
        <div class="container Gp0m0 rounded p-2  border" style="word-break: break-all;">
            <h3 class="text-center subtitlefnt">Abilities</h3>
            <div class="row Gp0m0">
                <div class="col-4 Gp0m0" v-for="(ablts,i) in ablits" :key="i">
                    <div class=" m-1 border rounded">
                        <img :src="require('/src/assets/img/item/'+ablts.mg)" class="card-img" alt=""> <br> <h6 class="sizv35 bMbg py-1 text-center dtlsfnt">{{ablts.des}}</h6></div></div>
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
                    mg:"1.gif",
                    des:"description"
                },
                {
                    mg:"1.gif",
                    des:"description"
                },
                {
                    mg:"1.gif",
                    des:"description"
                },
                 {
                    mg:"1.gif",
                    des:"description"
                },
                {
                    mg:"1.gif",
                    des:"description"
                },
                {
                    mg:"1.gif",
                    des:"description"
                },
                 {
                    mg:"1.gif",
                    des:"description"
                },
                {
                    mg:"1.gif",
                    des:"description"
                },
                {
                    mg:"1.gif",
                    des:"description"
                },
                 {
                    mg:"1.gif",
                    des:"description"
                },
                {
                    mg:"1.gif",
                    des:"description"
                },
                {
                    mg:"1.gif",
                    des:"description"
                },
            ]
        }
    }
}
</script>