


<template>
    <div class="tmibg2" >
        <div class="row Gp0m0  blkgry">
            <div class="col-9"><h4 class="subtitlefnt">Daily Quest Chalange 1 <!-- <i class="fas fa-info-circle float-right"></i> --></h4>
<hr>
          <!--   <h6 class="dtlsfnt">1 Hou 30 minutes and 10 seconds</h6> -->
                <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack('event ended')"
      :start-time="'2021-12-05 00:00:00'"
      :end-time="'2021-12-18 00:00:00'"
      :interval="1000"
      :start-label="'Until start:'"
      :end-label="' End Until:'"
      label-position="begin"
      :end-text="'Event ended!'"
      :day-txt="'days'"
      :hour-txt="'hours'"
      :minutes-txt="'minutes'"
      :seconds-txt="'seconds'">
    </vue-countdown-timer>
            
            </div>
            <div class="col-3 p-0 py-2">

                <div class="card" >
                <img class="card-img" src="../../assets/img/item/1.gif" alt="Card image cap">
                <div class="card-body p-1 blkgry">
                    <p class="card-text">Some content</p>
                </div>
                </div>
            </div>
        </div>

        <div class="row Gp0m0 mt-2 py-1 blkgry ">
            <div class="col-8"><h6>Task:0/4</h6></div>
            <div class="col-4"><span class="float-right"><i class="  rounded px-2  fas fa-sort-down siz25" @click="t8nws ^= true"></i></span></div>
            <div class="  mt-3 progress n_bar-a w-100" style="height: 10px;"><div  class="progress-bar clRBrd bgD0" style="width: 10%;"></div></div>
        </div>


        <div class="row Gp0m0 mt-2" v-show="t8nws" >
            <ul class="list-group w-100 rounded-1" >
 
            <li class="list-group-item blk50 p-1  ">
                <div class="row Gp0m0  rounded blkd75 px-2 py-3"> 
                    <div class="col-8">Cras justo odio </div> 
                    <div class="col-4"><i class="float-right fas fa-redo"></i></div>
                    <div class="mt-1  progress n_bar-a w-100" style="height: 8px;">
                        <div  class="progress-bar clRBrd bgD0" style="width: 10%;"></div>
                    </div>
                </div>
            </li>

                    <li class="list-group-item blk50 p-1  ">
                <div class="row Gp0m0  rounded blkd75 px-2 py-3"> 
                    <div class="col-8">Cras justo odio </div> 
                    <div class="col-4"><i class="float-right fas fa-redo"></i></div>
                    <div class="mt-1  progress n_bar-a w-100" style="height: 8px;">
                        <div  class="progress-bar clRBrd bgD0" style="width: 10%;"></div>
                    </div>
                </div>
            </li>
                    <li class="list-group-item blk50 p-1  ">
                <div class="row Gp0m0  rounded blkd75 px-2 py-3"> 
                    <div class="col-8">Cras justo odio </div> 
                    <div class="col-4"><i class="float-right fas fa-redo"></i></div>
                    <div class="mt-1  progress n_bar-a w-100" style="height: 8px;">
                        <div  class="progress-bar clRBrd bgD0" style="width: 10%;"></div>
                    </div>
                </div>
            </li>
                    <li class="list-group-item blk50 p-1  ">
                <div class="row Gp0m0  rounded blkd75 px-2 py-3"> 
                    <div class="col-8">Cras justo odio </div> 
                    <div class="col-4"><i class="float-right fas fa-redo"></i></div>
                    <div class="mt-1  progress n_bar-a w-100" style="height: 8px;">
                        <div  class="progress-bar clRBrd bgD0" style="width: 10%;"></div>
                    </div>
                </div>
            </li>
            </ul>
        </div>

        
    </div>
</template>


<script>
export default {
      name: 'Timer',
  methods: {
    startCallBack: function(x) {
      console.log(x);
    },
    endCallBack: function(x) {
      console.log(x);
    },
  },
    data() {

        

        return{

            t8nws:true,
        }
        
    },
}
</script>