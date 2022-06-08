<template>
<div>
    <div class="row bg-secondary Gp0m0"> 
        <div class="col-12 p-2">
            <h2 class="text-center subtitlefnt">World</h2>
        </div>
   </div>


        <div class="row blkgry py-3 text-center Gp0m0">
                <div class="col-2 text-left">Rank</div>
                <div class="col-4 text-left">Name</div>
                <div class="col-3 text-left">Energy</div>
                <div class="col-3 text-left">Level</div>
        </div>

        <div class="blkgry px-2 rounded  py-3">
            <div class="rounded mb-2" v-for="fdta in fdata" :key="fdta.rnk"  :class="cngclr(fdta.rnk)">
                <div class="row Gp0m0 rounded blkd75 p-2">
                    <div class="col-2 p-0"> <br>  <img class="card-img rounded-circle blksdo3" style="height:50px; width:50px; margin-top:-30%;" :src="require('../../assets/img/item/'+fdta.limg)" alt="">
                    <div class="card-img-overlay">{{fdta.rnk}} </div></div>
                    <div class="col-4 px-1">
                    <h6 class="subtitlefnt">{{fdta.nm}}</h6></div>
                    <div class="col-3 p-1"><h6 class="ml-1 dtlsfnt"><span><i class="fas fa-burn text-danger"></i></span> &nbsp;{{fdta.enrg}}</h6></div>
                    <div class="col-3 p-1"><h6 class="ml-1 dtlsfnt"><span><i class="fas fa-layer-group text-success"></i></span>&nbsp;{{fdta.lvl}}</h6></div>
                </div>
            </div>
        </div>
       <!--  <table class=" table Gp0m0" width="100%">
            <thead class=" text-left blkgry">
                <tr class="subtitlefnt  text-center p-5">
                    <th width="5%">Rank</th>
                    <th><img class="card-img rounded-circle" :src="require('../../assets/img/item/'+fdta.limg)" alt="">
                        <h6 class="subtitlefnt">{{fdta.nm}}</h6></th>
                    <th> <h6 class="ml-1 dtlsfnt">Energy:{{fdta.enrg}}</h6></th>
                    <th><h6 class="ml-1 dtlsfnt">level:{{fdta.lvl}}</h6></th>
                </tr>
            </thead>

            <tbody>
                <tr class="my-3 py-5" v-for="fdta in fdata" :key="fdta.rnk"  :class="cngclr(fdta.rnk)">
                    <td >    
                    {{fdta.rnk}}</td>
                    <td>
                        <img class="card-img rounded-circle" :src="require('../../assets/img/item/'+fdta.limg)" alt="">
                        <h6 class="subtitlefnt">{{fdta.nm}}</h6>
                    </td>
                   
                    <td>
                        <h6 class="ml-1 dtlsfnt">Energy:{{fdta.enrg}}</h6>
                    </td>
                    <td>
                        <h6 class="ml-1 dtlsfnt">level:{{fdta.lvl}}</h6>
                    </td>
                </tr>
            </tbody>
        </table> -->
 
</div>


</template>

<script>
export default {
    data() {
        return{
            fdata:[
                 {
                    rnk:"1st",
                    limg:"Gold-bar.png",
                    nm:"Abul Mall",
                    
                    enrg:"46",
                    lvl:"45556"
                },
                {
                    rnk:"2nd",
                    limg:"Gold-bar.png",
                    nm:"Hasan Shahriar",
                    
                    enrg:"456",
                    lvl:"456"
                    
                },
                {
                    rnk:"3rd",
                    limg:"Gold-bar.png",
                    nm:"Newaz Sharif",
                    
                    enrg:"456",
                    lvl:"456"
                    
                },
                {
                    rnk:"4th",
                    limg:"Gold-bar.png",
                    nm:"Abdullah Al Baqi",
                    enrg:"456",
                    lvl:"456"
                    
                },
                   {
                    rnk:"5th",
                    limg:"Gold-bar.png",
                    nm:"Abul Mall",
                    
                    enrg:"46",
                    lvl:"4556"
                },
                {
                    rnk:"6th",
                    limg:"Gold-bar.png",
                    nm:"Hasan Shahriar",
                    
                    enrg:"456",
                    lvl:"456"
                    
                },
                {
                    rnk:"7th",
                    limg:"Gold-bar.png",
                    nm:"Newaz Sharif",
                    
                    enrg:"456",
                    lvl:"456"
                    
                },
                {
                    rnk:"8th",
                    limg:"Gold-bar.png",
                    nm:"Abdullah Al Baqi",
                    enrg:"456",
                    lvl:"456"
                    
                },
                  {
                    rnk:"9th",
                    limg:"Gold-bar.png",
                    nm:"Abdullah Al Baqi",
                    enrg:"456",
                    lvl:"456"
                    
                },
                  {
                    rnk:"10th",
                    limg:"Gold-bar.png",
                    nm:"Abdullah Al Baqi",
                    enrg:"456",
                    lvl:"456"
                    
                }
            ]
        }
        
    },    
    methods:{

        cngclr(i){
            
            return ((i % 2) !==0) ? `blkd75`:'blkd75';
        }
         
    }
}
</script>