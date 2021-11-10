<template>
    <div class="container Gp0m0 texture1 ">
        <div class="StryCntnr">
            <div class="mrgnbtm" >

                <div class="row adtsk no-gutters">
                    <div class="col-12">
                        <h1 class="text-center ttlfnt font-weight-bold ">Organization Name</h1>
                    </div>

                </div>
                <div class="row Gp0m0 btn-group bw100 rounded jaldi" role="group" aria-label="...">
                    <div type="button" class="btn nBtn blkgry ">Left</div>
                    <div type="button" class="btn nBtn blkgry ">Middle</div>
                    <div type="button" class="btn nBtn blkgry ">Right</div>
                    <div type="button" class="btn nBtn blkgry ">Right</div>
                </div>
                <div class="row Gp0m0  border bg-white   rounded ">

                    <div class=" col-12 card-header text-center">
                        <h3 class="text-dark text-center">Global Chat</h3>
                    </div>
                   <msgrcv></msgrcv>
                   <msgsend></msgsend>
                   <msgrcv></msgrcv>
                   <msgsend></msgsend>
                   <msgrcv></msgrcv>
                   <msgsend></msgsend>
                   <msgrcv></msgrcv>
                   <msgsend></msgsend>
                   <msgrcv></msgrcv>
                   <msgsend></msgsend>
                        
                    <div class=" card-footer  w-100">
                        <form action="#">
                            <div class="input-group">
                                <div class="input-group-append">
                                    <!-- <span class="input-group-text attach_btn"><input type="file"><i class="fas fa-paperclip"></i> </span> -->
                                    <div class="image-upload">
                                        <div class="d-none"> <input id="file-input" type="file" />
                                        </div>
                                        <div class="input-group-append d-flex">
                                            <span class="input-group-text attach_btn"><i class="fas fa-paperclip" onclick="document.getElementById('file-input').click();"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <input  class="form-control type_msg" placeholder="Type your message..." />
                                <div class="input-group-append ">
                                    <span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>                  
            </div>
        </div>
    </div>
</template>

<script>
import msgrcv from '../components/msgrcv.vue'
import Msgsend from '../components/msgsend.vue'
export default{
  components: { msgrcv, Msgsend },

}
</script>