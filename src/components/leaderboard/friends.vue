<template>
<div>
    <div class="row bg-secondary Gp0m0"> 
        <div class="col-12 blkgry">
            <h2 class="text-center subtitlefnt">Friends</h2>
        </div>
        <table class=" table Gp0m0" width="100%">
            <thead class=" text-left blkgry">
                <tr class="subtitlefnt text-center p-4">
                    <th width="5%">nk</th>
                    <th>Team</th>
                    <th>Country</th>
                    <th>Energy</th>
                    <th>Level</th>
                </tr>
            </thead>

            <tbody>
                <tr class="my-3 py-2" v-for="fdta in fdata" :key="fdta.rnk"  :class="cngclr(fdta.rnk)">
                    <td >    <!-- <img class="card-img " :src="require('../../assets/img/item/'+fdta.limg)" alt=""> --> 
                    {{fdta.rnk}}</td>
                    <td>
                        <h6 class="subtitlefnt">{{fdta.nm}}</h6>
                    </td>
                    <td>
                        <h6 class="subtitlefnt">{{fdta.cntry}}</h6>
                    </td>
                    <td>
                        <h6 class="ml-1 dtlsfnt">Energy:{{fdta.enrg}}</h6>
                    </td>
                    <td>
                        <h6 class="ml-1 dtlsfnt">level:{{fdta.lvl}}</h6>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>


</template>

<script>
export default {
    data() {
        return{
            fdata:[
                {
                    rnk:1,
                    limg:"Gold-bar.jpg",
                    nm:"Abul Mall",
                    cntry:"Bangladesh",
                    enrg:"46",
                    lvl:"4556"
                },
                {
                    rnk:2,
                    limg:"Gold-bar.jpg",
                    nm:"Hasan Shahriar",
                    cntry:"Bangladesh",
                    enrg:"456",
                    lvl:"456"
                    
                },
                {
                    rnk:3,
                    limg:"Gold-bar.jpg",
                    nm:"Newaz Sharif",
                    cntry:"Bangladesh",
                    enrg:"456",
                    lvl:"456"
                    
                },
                {
                    rnk:4,
                    limg:"Gold-bar.jpg",
                    nm:"Abdullah Al Baqi",
                    cntry:"chaina",
                    enrg:"456",
                    lvl:"456"
                    
                },
                   {
                    rnk:1,
                    limg:"Gold-bar.jpg",
                    nm:"Abul Mall",
                    cntry:"Bangladesh",
                    enrg:"46",
                    lvl:"4556"
                },
                {
                    rnk:2,
                    limg:"Gold-bar.jpg",
                    nm:"Hasan Shahriar",
                    cntry:"Bangladesh",
                    enrg:"456",
                    lvl:"456"
                    
                },
                {
                    rnk:3,
                    limg:"Gold-bar.jpg",
                    nm:"Newaz Sharif",
                    cntry:"Bangladesh",
                    enrg:"456",
                    lvl:"456"
                    
                },
                {
                    rnk:4,
                    limg:"Gold-bar.jpg",
                    nm:"Abdullah Al Baqi",
                    cntry:"chaina",
                    enrg:"456",
                    lvl:"456"
                    
                }
            ]
        }
        
    },    
    methods:{

        cngclr(i){
            
            return ((i % 2) !==0) ? `blkgry`:'blkgry';
        }
         
    }
}
</script>