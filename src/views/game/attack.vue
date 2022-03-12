<template>
    <div class="fightbg card">
        <h1 class="text-center subtitlefnt mb-0">Attack</h1>
        <div class="container-fluid Gp0m0">
            <div class="row no-gutters ">
                <div class="col-12"><h4 class='hr-sect titlefnt text-center'>Fight</h4> </div>
                <div class="col-6 p-2 px-3">
                    <div class="row  p-2 ">
                        <div class="progress n_bar-a w-100" style="height:8px;">
                            <div class="progress-bar clRBrd bgD0" id="itmBr" style="width:50%;"></div>
                        </div>
                    </div>
                </div>

                <div class="col-6 p-2 px-3">
                    <div class="row p-2  ">
                        <div class="progress n_bar-a w-100" style="height:8px;">
                            <div class="progress-bar clRBrd bgD0" id="itmBr" style="width:50%;"></div>
                        </div>
                    </div>
                </div>
                <div class="col-5 Gp0m0 px-2"> <h6 class="blkgry bdr25 px-2 py-2 ">HRHHabib</h6> </div>
                <div class="col-2 Gp0m0"><h2 class="subtitlefnt text-center">VS</h2></div>
                <div class="col-5 Gp0m0 px-2 "><h6 class="blkgry bdr25 px-2 py-2">Set buffer things</h6></div>

                <div class="col-6 Gp0m0"><img class="card-img" src="../../assets/img/fight/mlbdy.png" alt=""></div>
                <div class="col-6 Gp0m0"><img class="card-img" src="../../assets/img/fight/fmbdy.png" alt=""></div>
            
                <div class="col-3 Gp0m0"><div class="mx-1 blkgry"><h6 class="text-center  "> Level:53 <br>Clan:45</h6></div></div>
                <div class="col-3 Gp0m0"><div class="mx-1 blkgry"><h6 class="text-center  ">Skill Rank <br>1562</h6> </div></div>
                <div class="col-3 Gp0m0"><div class="mx-1 blkgry"><h6 class="text-center  "> Level:53 <br>Clan:455</h6></div></div>
                <div class="col-3 Gp0m0"><div class="mx-1 blkgry"><h6 class="text-center  ">Skill Rank <br>155562</h6> </div></div>

                <div class="card-img-overlay text-white d-flex flex-column justify-content-center " >
                    <div class=" opcty5 blkgry rounded-1" style="width:100px;">
                        <h4 class="card-title  mb-0 text-center p-1">Gone</h4>
                        <img class="card-img p-2" src="../../assets/img/item/1.gif" alt="">
                        <!-- <div class="btn nBtn blkred text-center"> attack</div> -->
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>
<script>
export default {
     props: ['who'],
    created(){
        console.log(this.$props.who);
    }
}
</script>

