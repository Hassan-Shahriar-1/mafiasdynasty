<template>
    <div>
        <div class="card">
            <div class="card-header blkgry p-2"><div class="col-12"><h4 class="text-center titlefnt">Safe House</h4></div></div>
            <div class="card-body Gp2m2">

                <div class="row Gp0m0">
                    <divm class="col-3"></divm>
                <div class="col-6">
                <img src="../../assets/img/item/Gold-bar.png"  class="text-center rounded-0 blksdout" style="height:120px; width:150px;" alt="" >
                </div>
                    <divm class="col-3"></divm>

                </div>
                <h6 class="dtlsfnt text-center py-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ex! Expedita sed nam nulla hic 
                    in ratione rerum, libero quasi veritatis minus delectus voluptate veniam tenetur, quis ad unde consequatur!
                </h6>
                <div class="card p-1" v-for="(lst,i) in list" :key="i">
                    <div class="card-header  blkd75 p-2"><div class="col-12"><h4 class="text-center titlefntnew">{{lst[0]}}</h4></div></div>
                    <div class="card-body blkd50">
                        <div class="row Gp0m0">
                            <div class="col-3 p-0">
                                <img  src="../../assets/img/item/1.gif" class="card-img  vertical-center" alt="">
                            </div>
                            <div class="col-6"><h5 class="titlefnt2 siz17">Safe House for {{lst.drtm}} Hour Which will cost {{lst.csttp}}</h5>
                                    <h6 class="mt-2">2 Hours left to lock</h6>
                            <div class="progress n_bar-a mt-1" style="height:10px;">
                                <div class="progress-bar clRBrd  bgD0" id="itmBr" style="width:50%" ></div>
                            </div></div>
                            <div class="col-3 Gp0m0"><h6 class="dtlsfnt">Requirment</h6><h6 class="text-success dtlsfnt siz17">{{lst.cst}} {{lst.csttp}}</h6> <div class=" mt-1 btn nBbg nBtn  button5 btnfnt sizv15 btn-block p-1" @click="active(i)">Activate</div></div>
                        </div>
                    </div>
                </div>

                <!-- <div class="card p-1">
                    <div class="card-header  blkd75 p-2"><div class="col-12"><h4 class="text-center titlefnt">Safe House of East</h4></div></div>
                    <div class="card-body blkd50">
                        <div class="row Gp0m0">
                            <div class="col-8"><h5 class="titlefnt2 siz17">Safe House for 5 Hour Which will cost Gold</h5>
                            
                            
                                    <h6 class="mt-2">2 Hours left to lock</h6>
 
                            <div class="progress n_bar-a mt-1" style="height:10px;">
                                <div class="progress-bar clRBrd  bgD0" id="itmBr" style="width:50%" ></div>
                            </div>
                            </div>
                            <div class="col-4 Gp0m0"><h6 class="dtlsfnt">Requirment</h6><h6 class=" dtlsfnt siz17">1564536 Gold</h6> <div class=" mt-1 btn nBbg nBtn  button5 btnfnt siz15 btn-block p-1">Activate</div></div>
                        </div>
                    </div>
                </div> -->

              <!--   <div class="card p-1">
                    <div class="card-header  blkd75 p-2"><div class="col-12"><h4 class="text-center titlefnt">Safe House of South</h4></div></div>
                    <div class="card-body blkd50">
                        <div class="row Gp0m0">
                            <div class="col-8"><h5 class="titlefnt2 siz17">Safe House for 24 Hour Which will cost Gold</h5>
                            
                                    <h6 class="mt-2">2 Hours left to lock</h6>
 
                            <div class="progress n_bar-a mt-1" style="height:10px;">
                                <div class="progress-bar clRBrd  bgD0" id="itmBr" style="width:50%" ></div>
                            </div></div>
                            <div class="col-4 Gp0m0"><h6 class="dtlsfnt">Requirment</h6><h6 class=" dtlsfnt siz17">1564536 Gold</h6> <div class=" mt-1 btn nBbg nBtn  button5 btnfnt siz15 btn-block p-1">Activate</div></div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:Array

        }
        
    },
    beforeCreate(){
        this.$mgo.gt('/safehouse/list',(res)=>{
            console.log(res);   
            if(res.sts=='sfty'){
                this.list=res.list
            }
        })
    },
    methods:{
        active(key){
            this.$mgo.gt('/safehouse/'+key+'/active',(rs)=>{
                console.log(rs)
            })

console.log(
this.rs.this.tmstrt,'from combaT')
        }

        

        

    }
}
</script>