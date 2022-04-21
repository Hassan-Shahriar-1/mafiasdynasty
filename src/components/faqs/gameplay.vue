<template>
    <div class="tmibg">
        <div class="row Gp0m0 mt-1 p-1">
        <ul class="list-group w-100" v-for="(gfq,i) in st" :key="i">
            <li class="list-group-item blk50 p-1 "> 
                <div class="row Gp0m0  rounded blkd75 mt-1 p-2"  @click="faqshwr(gfq, gfq.und)">
                    <div class="col-10"> <h5 class=" subtitlefnt">{{gfq.title}}</h5> </div>
                    <div class="col-2 "> <div class=" rounded" ><i class="fas fa-chevron-down siz20 text-secondary"></i></div></div>
                    <div class="col-12 p-2 dtlsfnt" v-show="gfq.shwsts">
                        <h6>{{ gfq.dtls }}</h6>
                    </div>
                </div>
            </li>          
         </ul>
       </div>
    </div>
</template>

<script>
export default {
 data(){
        return{ 
            st:[
               {und:1, shwsts:false, title:'Title1', dtls:'dtls lorem lipsum isbasgfuijasdfsjaofg asgdfhasdcfgc badcgasdjkchngujfvjh bhqa jhmnqwg jkq fhqm,f fvqr bhqgwefg hujjajif ujbhqj mgbqa gqgb fvq a'},
               {und:2, shwsts:false, title:'Title2', dtls:'dtls lorem lipsum isbasgfuijasdfsjaofg asgdfhasdcfgc badcgasdjkchngujfvjh bhqa jhmnqwg jkq fhqm,f fvqr bhqgwefg hujjajif ujbhqj mgbqa gqgb fvq b'},
               {und:3, shwsts:false, title:'Title3', dtls:'dtls lorem lipsum isbasgfuijasdfsjaofg asgdfhasdcfgc badcgasdjkchngujfvjh bhqa jhmnqwg jkq fhqm,f fvqr bhqgwefg hujjajif ujbhqj mgbqa gqgb fvq c'},
               {und:4, shwsts:false, title:'Title4', dtls:'dtls lorem lipsum isbasgfuijasdfsjaofg asgdfhasdcfgc badcgasdjkchngujfvjh bhqa jhmnqwg jkq fhqm,f fvqr bhqgwefg hujjajif ujbhqj mgbqa gqgb fvq d'},
                ],
            gfqlst:[{
                    nme:"faltu",
                        },
                        {
                    nme:"faltu",
                        }
                    ],
            }
    },
methods:{
            faqshwr(Shwt, oi){ 
                Object.keys(this.st).forEach((value) => {
                    if(this.st[value]['und'] != oi){
                    this.st[value]['shwsts'] = false;
                    }
                });  
            
                if(Shwt.shwsts){
                    Shwt.shwsts = false;
                }else{
                    Shwt.shwsts = true;
                } 
            }
        }
}
</script>