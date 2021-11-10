<template>
                            
                            
                            <div> <section >

                                    <div class="row Gp0m0">
                                        <div class="col-6 Gp0m0 "><div class="btn nBtn btn-lg  btn-block blkred Gp0m0"><i class="fas fa-user-plus"></i> <br> Invite clan</div></div>
                                        <div class="col-6 Gp0m0 pl-1"><div class="btn nBtn btn-lg  btn-block blkred Gp0m0 "><i class="fas fa-sign-out-alt"></i> <br> Leave</div></div>

                                    </div>


                                    <div class="blk" v-for="(mbr,i) in mmbr" :key="i">

                                      

                                        <div class="row text-center">
                                            <h4 class='hr-sect'>{{mbr.admn}}</h4>
                                        </div>

                                        <div class="row Gp0m0 blkred jaldi">

                                            <div class="col-4 Gp0m0" @click="tog ^= true"><img :src="mbr.mimg" class="card-img p-3 rounded" alt=""><h6>{{mbr.mbrnm}}</h6>  </div>
                                            <div class="col-4 Gp0m0" @click="tog ^= true"><img :src="mbr.mimg" class="card-img p-3 rounded" alt=""><h6>{{mbr.mbrnm}}</h6>  </div>
                                            <div class="col-4 Gp0m0" @click="tog ^= true"><img :src="mbr.mimg"  class="card-img p-3 rounded" alt=""><h6>{{mbr.mbrnm}}</h6>  </div>
                                        </div>

                                          <div class="row " v-show="tog">
                                            <div class="col-6 Gp0m0 "><div class="btn nBtn btn-lg  btn-block blkred Gp0m0"><i class="fas fa-ban"></i> <br>Ban</div></div>
                                        <div class="col-6 Gp0m0 pl-1"><div class="btn nBtn btn-lg  btn-block blkred Gp0m0 "><i class="fas fa-sign-out-alt"></i> <br> Leave</div></div>
                                        </div>

                                        <div class="row text-center">
                                            <h4 class='hr-sect'>{{mbr.gmbr}}</h4>
                                        </div>

                                        <div class="row Gp0m0 blkred jaldi">

                                            <div class="col-4 Gp0m0" @click="tog ^= true"><img :src="mbr.mimg" class="card-img p-3 rounded" alt=""><h6>{{mbr.mbrnm}}</h6>  </div>
                                            <div class="col-4 Gp0m0" @click="tog ^= true"><img :src="mbr.mimg" class="card-img p-3 rounded" alt=""><h6>{{mbr.mbrnm}}</h6>  </div>
                                            <div class="col-4 Gp0m0" @click="tog ^= true"><img :src="mbr.mimg" class="card-img p-3 rounded" alt=""><h6>{{mbr.mbrnm}}</h6>  </div>
                                        </div>


                                    </div>

                        </section>

                        </div>
</template>

<script>
export default {
    data() {

        return{
             tog: false,

             mmbr:[

                {
                 mimg:"/src/assets/img/1.png",
                 admn:"Admin(1)",
                 gmbr:"Members(1)",
                 mbrnm:"Habibur rahman"

                 }

             ]
        }     
    },
}
</script>