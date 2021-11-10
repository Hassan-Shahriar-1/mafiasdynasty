<template>
    <div class="section">
                 <!-- Minions start -->
        <div class="container Gp0m0 bMbg5 border p-2 rounded" style="word-break: break-all;">
            <h3 class="text-center subtitlefnt">Minions</h3>
            <div class="slider pb-3">  
                <div class="col-4 Gp0m0 slide" v-for="(mnons, i) in mnon" :key="i" >
                    <div class=" m-1 border rounded">
                        <img :src="require('/src/assets/img/item/'+mnons.mg)" class="card-img" alt=""> <br>
                        <h6 class="sizv13 bMbg p-1 text-center dtlsfnt">{{mnons.des}}</h6>
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
            mnon:[
            {
                mg:"1.gif",
                des:"gasdfhash"
            },
            {
                mg:"1.gif",
                des:"gasdfhash"
            },
            {
                mg:"1.gif",
                des:"gasdfhash"
            },
            {
                mg:"1.gif",
                des:"gasdfhash"
            },
              {
                mg:"1.gif",
                des:"gasdfhash"
            },
            {
                mg:"1.gif",
                des:"gasdfhash"
            },
            {
                mg:"1.gif",
                des:"gasdfhash"
            },
            {
                mg:"1.gif",
                des:"gasdfhash"
            },
            
            ]
        }
        
    },
}
</script>