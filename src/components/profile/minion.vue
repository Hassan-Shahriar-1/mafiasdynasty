<template>
    <div>
        <h3 class="text-center subtitlefnt">weaponshop</h3>
        <!--<div class="slider pb-3">  
                <div class="col-4 Gp0m0 slide" v-for="(mnons, i) in mnon" :key="i" >
                    <div class=" m-1 border rounded">
                        <img :src="require('/src/assets/img/item/'+mnons.mg)" class="card-img" alt=""> <br>
                        <h6 class="sizv13 bMbg p-1 text-center dtlsfnt">{{mnons.des}}</h6>
                    </div>
                </div>  
            </div> -->
        <div class="card bg-secondary ">
            <div class="card-body p-0">
                <carousel :autoplay="true" :height="100" :dots="false" :nav="false" :items='4' class="p-2"> 
                    <img v-for="(mnons, i) in mnon" :key="i" class="card-img  px-1 " style="height:100px;" :src="require('/src/assets/img/item/'+mnons.mg)">
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
components: { carousel },
    data() {
        return{
        mnon:[
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                    {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },
                {
                    mg:"1.gif",
                },   
            ]
        }
    },
}
</script>