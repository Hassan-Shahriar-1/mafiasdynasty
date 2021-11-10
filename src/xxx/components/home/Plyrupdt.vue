<template>
    
                        <div class="container Gp0m0 ptnbg">
                            <div class="row Gp0m0">

                                <div class="col-7 Gp0m0 blk border">
                                     <h3 class="blkred pl-2">Player updates <br></h3><h6 class="text-warning">[Invite your Friends Now] <i class="fab fa-wpbeginner"></i></h6>
                                
                                <div class="row Gp0m0 bMbg text-white" v-for="Th in Ths" :key="Th">
                                    <div class="col-2 Gp0m0 p-1"><img :src="Th.pictr" class="card-img" alt=""></div>
                                    <div class="col-2 Gp0m0 p-1"><img :src="Th.pictr" class="card-img" alt=""></div>
                                    <div class="col-8">{{ Th.des }}</div>
                                </div>
                                 
                                </div>
                                <div class="col-5 Gp0m0 bMbg border">
                                     <h3 class="blkred pl-2">Don updates</h3><br>
                                     <div class="row blk w-100 Gp0m0 jaldi blk">
                                    <ul class="list-group w-100  text-white jaldi">
                                    <li class="list-group-item blk Gp0m0 py-1 "> <h5 class="float-left"><i class="fas fa-poop  text-warning"></i>&nbsp;ahshasigdfj</h5> <h6 class="float-right">11</h6></li>
                                    <li class="list-group-item blk Gp0m0 py-1 "> <h5 class="float-left"><i class="fas fa-poop  text-warning"></i>&nbsp;ahshasigdfj</h5> <h6 class="float-right">11</h6></li>
                                    <li class="list-group-item blk Gp0m0 py-1 "> <h5 class="float-left"><i class="fas fa-poop  text-warning"></i>&nbsp;ahshasigdfj</h5> <h6 class="float-right">11</h6></li>
                                    <li class="list-group-item blk Gp0m0 py-1 "> <h5 class="float-left"><i class="fas fa-poop  text-warning"></i>&nbsp;ahshasigdfj</h5> <h6 class="float-right">11</h6></li>
                                    <li class="list-group-item blk Gp0m0 py-1 "> <h5 class="float-left"><i class="fas fa-poop  text-warning"></i>&nbsp;ahshasigdfj</h5> <h6 class="float-right">11</h6></li>
                                    </ul>

                                    <hr>
                                    <h6 class="bMbg">uptatibus, unde beatae saepe omnis magni ipsa at ducimus veritatis. </h6>
                                </div>
                                </div>

                               
                            </div>
                        </div>
</template>
<script>
export default {
    data(){
        return{         
             Ths:[
                {
                 des:' Hellow I am 1',
                 pictr:"/src/assets/img/1.png",
                },
                {
                 des:' Hellow I am 2',
                 pictr:"/src/assets/img/1.png",
                },
                 {
                 des:' Hellow I am 3',
                 pictr:"/src/assets/img/1.png",
                },
                 {
                 des:' Hellow I am 4',
                 pictr:"/src/assets/img/1.png",
                },
             ]
             
        
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);

    },
    updated(){
        this.TptrgrBr();
    },
    mounted:function(){
        this.TptrgrBr();
    },  
    methods: {
        demoV1(){
            this.Th.engst=this.Th.engst+5;
        },
        demoV2(){
            this.Th.Ragst=this.Th.Ragst+10;
        },
        demoV3(){
            this.Th.hltst=this.Th.hltst+100;
        },
        demoV4(){
            this.Th.expst=this.Th.expst+2;
        }
    },
   

}
</script>