<template>
    <div class="row Gp0m0">
        <div class="col-12 blkgry">
            <h2 class="text-center subtitlefnt">World</h2>
        </div>
        <table class=" table Gp0m0" width="100%">
            <thead class="blkgry text-left">
                <tr class="subtitlefnt text-center">
                    <th width="10%">Rank</th>
                    <th>Team</th>
                    <th>Country</th>
                    <th>Energy</th>
                    <th>Level</th>
                </tr>
            </thead>
            <tbody>
                <tr class="my-3 py-2" v-for="fdta in fdata" :key="fdta.rnk"  :class="cngclr(fdta.rnk)"  >
                    <td><!-- <img class="card-img " :src="require('../../assets/img/item/'+fdta.limg)" alt=""> --> 
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
            <tbody>
                <!-- Load SCRIMcom Leaderboard Ranings -->
            </tbody>
        </table>
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
                    cntry:"Youga Master",
                    enrg:"46",
                    lvl:"4556"
                },
                {
                    rnk:2,
                    limg:"Gold-bar.jpg",
                    nm:"Hasan Shahriar",
                    cntry:"Youga Master",
                    enrg:"456",
                    lvl:"456"
                    
                },
                {
                    rnk:3,
                    limg:"Gold-bar.jpg",
                    nm:"Newaz Sharif",
                    cntry:"Youga Master",
                    enrg:"456",
                    lvl:"456"
                    
                },
                {
                    rnk:4,
                    limg:"Gold-bar.jpg",
                    nm:"Abdullah Al Baqi",
                    cntry:"brazil Master",
                    enrg:"456",
                    lvl:"456"
                    
                }
            ]
        }
        
    },    
    methods:{

        cngclr:function(i){
            console.log(i);
           /*  return
            if(i % 2==0){
                    'tmibg'
            }else{
                 'blkblue'
            } */
            return ((i % 2) !==0) ? `blkgry`:'blkd75';
        }
         
    }
}
</script>
    
