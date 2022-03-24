<template>
<div>
    <div class="card-body p-0 tmibg">
        <div class="card blksdo">
            <img class="card-img img-fluid" style="height:130px;" src='../../assets/img/land/colombia.png' alt=""/>
            <div class="card-img-overlay">
                <h4 class="card-text titlefnt text-center">
                    Land Name <router-link to="missionintro"><span class="float-left"><i class="fas fa-arrow-circle-left siz25"></i></span></router-link>
                </h4>
                <h6 class="card-text subtitlefnt text-center">Subtitle here</h6>
            </div>
        </div>
    </div>


    <div class="card  m-2 bdr1" v-for="(mlst,i) in msnlst" :key="i">
            <div class="card-header px-1 blkgry">
                <h4 class="titlefnt">{{mlst.msnnm}}</h4>
            </div>

        <div class="card-body p-1 blkd50">
            <div class="row no-gutters">
                <div class="col-6"><h4 class="subtitlefnt">Requirments</h4> <br> <h6 class="dtlsfnt "> <div class=" iC-rage incb1"></div>1</h6></div>
                <div class="col-6"><h4 class="subtitlefnt">Rewards</h4> <br> <h6 class="dtlsfnt "> <div class=" iC-cash incb1"></div> 100</h6>  <br> <h6 class="dtlsfnt "><div class=" iC-energy incb1"></div>101</h6></div>
            </div>
            <div class="row Gp0m0 mt-2">
                <div class="col-8 px-1">
                    <div class="progress n_bar-a w-100" style="height:10px;">
                        <div class="progress-bar clRBgreen bgD0 "  role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> 
                    </div>
                    <h6 class="text-left text-white">100% complete</h6>
                </div>
                <div class="col-4 px-1"><router-link to="/game/mission"><div class="btn  py-2 nBtn btn-block button4 btnbfnt sizv20">Do job</div></router-link></div>
            </div>
        </div>
    </div>
</div>   

</template>
<script>
export default ({
    data() {
        return{
            msnlst:[
                    {
                        msnnm:"Pock Someone",
                    },
                     {
                        msnnm:"Rape Someone",
                    },
                     {
                        msnnm:"Kill Someone",
                    },
                     {
                        msnnm:"kidnap Someone",
                    },
                     {
                        msnnm:"Drug dealing",
                    }
            ]
        }
    },
})
</script>
