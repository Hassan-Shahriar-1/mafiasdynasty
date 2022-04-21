<template>    
    <div class="container Gp0m0">
        <div class="row Gp0m0  blksdo">
            <h3 class=" px-1 w-100 tmibg subtitlefnt">Player updates <br></h3><h6 class=" px-1 dtlsfnt">[Invite your Friends Now] <i class="fab fa-wpbeginner"></i></h6>
            <div class="row Gp0m0  blkgry text-white w-100 my-1" v-for="(Th, k) in Ths" :key="k">
                <div class="col-2 Gp0m0 p-1"><img :src="require('../../assets/img/'+Th.pictr)" class="card-img" alt=""></div>
                <div class="col-2 Gp0m0 p-1"><img :src="require('../../assets/img/'+Th.pictr)" class="card-img" alt=""></div>
                <div class="col-8 Gp0m0 p-1 dtlsfnt">{{ Th.des }}</div>
            </div>
        </div>

        <div class="row Gp0m0 bMbg mt-2 blksdo2">
            <h3 class="tmibg py-2 px-1 w-100 subtitlefnt">Don updates</h3><br>
            <div class="Gp0m0 w-100 dtlsfnt ">
                <ul class="list-group w-100  text-white ">
                    <li class="list-group-item blkgry  Gp0m0 p-2"> <h5 class="float-left">&nbsp;ahshasigdfj</h5> <h6 class="float-right">11</h6></li>
                    <li class="list-group-item blkgry my-1 Gp0m0 p-2"> <h5 class="float-left">&nbsp;ahshasigdfj</h5> <h6 class="float-right">11</h6></li>
                    <li class="list-group-item blkgry my-1 Gp0m0 p-2"> <h5 class="float-left">&nbsp;ahshasigdfj</h5> <h6 class="float-right">11</h6></li>
                    <li class="list-group-item blkgry my-1 Gp0m0 p-2"> <h5 class="float-left">&nbsp;ahshasigdfj</h5> <h6 class="float-right">11</h6></li>
                    <li class="list-group-item blkgry my-1 Gp0m0 p-2"> <h5 class="float-left">&nbsp;ahshasigdfj</h5> <h6 class="float-right">11</h6></li>
                </ul>
                <h6 class="blkgry px-1 ">uptatibus, unde beatae saepe omnis magni ipsa at ducimus veritatis.</h6>
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
                 des:' Hellow I am 1Hellow I am 1Hellow I am 1',
                 pictr:"1.png",
                },
                {
                 des:' Hellow I am 2Hellow I am 1Hellow I am 1Hellow I am 1',
                 pictr:"1.png",
                },
                 {
                 des:' Hellow I am 3Hellow I am 1Hellow I am 1',
                 pictr:"1.png",
                },
                 {
                 des:' Hellow I am 4Hellow I am 1Hellow I am 1',
                 pictr:"1.png",
                },
             ]
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);

    },
    updated(){
         
    },
    mounted:function(){
       
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