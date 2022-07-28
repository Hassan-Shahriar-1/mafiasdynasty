<template>
    <div class="section bMbg5">
           <!-- abilities start -->
        <div class="container Gp0m0 rounded p-2  border" style="word-break: break-all;">
            <h3 class="text-center subtitlefnt">Abilities</h3>
        <div class="row Gp0m0">
            <div class="col-4 px-0" @click="offencive()"><div class="btn nBbg nBtn btn-block tmibg justify-content-center siz13">Offensive</div></div>
            <div class="col-4 px-0" @click="defensive()"><div class="btn nBbg nBtn btn-block tmibg justify-content-center siz13">Difensive</div></div>
            <div class="col-4 px-0" @click="movement()"><div class="btn nBbg nBtn btn-block tmibg justify-content-center siz13">Movement</div></div>
        </div>
            <div class="row Gp0m0">
                <div class="col-4 Gp0m0" v-for="(ablts,i) in ablits" :key="i">
                    <div class=" m-1 border rounded">
                        <img :src="require('/src/assets/img/item/'+ablts.mg)" class="card-img" alt=""> <br> <h6 class="siz15 bMbg py-1 text-center dtlsfnt">{{ablts.des}}</h6></div>
                </div>
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
                    des:"description big big one"
                },
                {
                    mg:"1.gif",
                    des:"description big big one"
                },
                {
                    mg:"1.gif",
                    des:"description big big one"
                },
                 {
                    mg:"1.gif",
                    des:"description big big one"
                },
                {
                    mg:"1.gif",
                    des:"description big big one"
                },
                {
                    mg:"1.gif",
                    des:"description big big one"
                },
                 {
                    mg:"1.gif",
                    des:"description big big one"
                },
                {
                    mg:"1.gif",
                    des:"description big big one"
                },
                {
                    mg:"1.gif",
                    des:"description big big one"
                },
                 {
                    mg:"1.gif",
                    des:"description big big one"
                },
                {
                    mg:"1.gif",
                    des:"description big big one"
                },
                {
                    mg:"1.gif",
                    des:"description big big one"
                },
            ]
        }
    }
}
</script>