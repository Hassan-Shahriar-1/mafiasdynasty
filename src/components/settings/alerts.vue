<template>
    <div>
        <div class="card border-0 p-2">
            <div class="card-header blkgry"><h4 class="titlefnt text-center">In-Game-Alerts</h4></div>
            <div class="card-body tmibg">
                    <div class="row Gp0m0  rounded blkd75 mt-1 p-2">
                        <div class="col-9"><h5 class="subtitlefnt">Fight Alerts</h5></div>
                        <div class="col-3">    
                            <label class="switch">
                            <input type="checkbox" v-model="fltrt" >
                            <span class="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <div class="row Gp0m0  rounded blkd75 mt-1 p-2">
                        <div class="col-9"><h5 class="subtitlefnt">Syndicate Quest Alerts</h5></div>
                        <div class="col-3">    
                            <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                      <div class="row Gp0m0  rounded blkd75 mt-1 p-2">
                        <div class="col-9"><h5 class="dtlsfnt"> Battle pass</h5></div>
                        <div class="col-3">    
                            <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                            </label>
                        </div>
                    </div>  
                  
            </div>
        </div>  

      <div class="card mt-2 border-0 p-2">

        <div class="card-header blkgry"><h4 class="titlefnt text-center">Push notifications</h4></div>

            <div class="card-body tmibg">       
                  <div class="row Gp0m0  rounded blkd75 mt-1 p-2">
                      <div class="col-9"><h5 class="subtitlefnt">Mafias Notification</h5></div>
                      <div class="col-3">    
                          <label class="switch">
                          <input type="checkbox" checked>
                          <span class="slider round"></span>
                          </label>  
                      </div>
                  </div> 
                  <div class="row Gp0m0  rounded blkd75 mt-1 p-2">
                      <div class="col-9"><h5 class="subtitlefnt">Social Notification</h5></div>
                      <div class="col-3">    
                          <label class="switch">
                          <input type="checkbox" checked>
                          <span class="slider round"></span>
                          </label>
                      </div>
                  </div> 
                  <div class="row Gp0m0  rounded blkd75 mt-1 p-2">
                      <div class="col-9"><h5 class="subtitlefnt">Syndicate Notifications</h5></div>
                      <div class="col-3">    
                          <label class="switch">
                          <input type="checkbox" checked>
                          <span class="slider round"></span>
                          </label>
                      </div>
                  </div> 
                  <div class="row Gp0m0  rounded blkd75 mt-1 p-2">
                      <div class="col-9"><h5 class="subtitlefnt">Flight Notifications</h5></div>
                      <div class="col-3">    
                          <label class="switch">
                          <input type="checkbox" checked>
                          <span class="slider round"></span>
                          </label>
                      </div>
                  </div> 
              </div>
              </div>

    </div>        

</template>

<script>
export default {
    data() {
        return{
            fltrt:true
        }
    },
    updated(){
        console.log(this.fltrt);
    }
}
</script>
<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(141, 1, 1);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 1px;
  bottom: 1px;
  background-color: rgb(255, 255, 255);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #02a541;
}

input:focus + .slider {
  box-shadow: 0 0 1px #004e18;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>