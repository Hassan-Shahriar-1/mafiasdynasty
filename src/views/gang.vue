<template>
    <div class="container Gp0m0 smlttlfnt3 blk">
        <div class="StryCntnr">
            <!--header content start-->
            <tops></tops>
            <!-- Sticky top end -->
            <!-- body Content Start -->
            <div class="mrgnbtm">
            <div class="container-fluid  no-gutters px-1 ">
                <div class="row Gp0m0 jaldi">
                    <div class="btn btn-block btn-lg nBtn blkrds Gp0m0 p-1" @click="sho ()">
                        Create Gang
                    </div>
                    <modal name="cgng" :width="300"
                        :height="150">
                    <div class="row Gp0m0 p-3 bMbg jaldi" >
                    <div class="w-100 ">
                            <div class="form-group">
                                <input type="text" class="form-control"   placeholder="Gang Name">  
                            </div>
                                <select class="form-select bg-white py-2 pl-3 w-100" aria-label="Default select example">
                                <option selected>Chose Gang type</option>
                                <option value="1">Public</option>
                                <option value="2">Private</option>
                                <option value="3">Secret</option>
                                </select>   
                            <button  class="btn  text-white mt-1 blkrds" @click="crtgng()">Submit</button>
                    </div>
                </div>
                </modal>
                </div>

                <div class="row Gp0m0 text-center bMbg d-flex justify-content-center"> <h4 >Family name:XYZ</h4></div>
                    <div class="btn-group rounded jaldi bw100"  role="group" aria-label="...">
                    <router-link to="/gang/" tag="button"  class="btn nBtn blkgry Gp0m0 "><i class="fas fa-comments"></i> <br> Gossip</router-link>
                    <router-link to="/gang/family" tag="button"  class="btn nBtn blkgry Gp0m0 "><i class="fas fa-users"></i> <br>Family</router-link>
                    <router-link to="/gang/member" tag="button"  class="btn nBtn blkgry Gp0m0 "><i class="fas fa-users"></i> <br>Members</router-link>
                    <div tag="button"   class="btn nBtn blkgry Gp0m0" @click="show ()" ><i class="fas fa-sign-out-alt"></i>  <br>Leave</div>
                </div>

                
                    <router-view></router-view>
                    <modal name="ban" :width="300"
                        :height="155">
                        <div class="row Gp0m0 blkgry p-4">
                    <div class="col-12 pb-2">
                        <h4 class="text-center ">Do you really want to leave?</h4>
                    </div>
                        <div class="col-6 Gp0m0 "><div class="btn nBtn btn-lg text-center  btn-block button5 Gp0m0 sizv30"> <br> Yes</div></div>
                <div class="col-6 Gp0m0 pl-1"><div class="btn nBtn btn-lg text-center  btn-block blkredbtn Gp0m0 sizv30 "> <br>No</div></div>
                </div>
                </modal> 
            </div>
            </div>
            <!-- Body Content End -->
            <!--footer content start-->
        <foots></foots>
            <!--footer content start-->
        </div>
    </div>
</template>
<script>
export default {   
   
      data() {
          return {
              gngcrt:false,
              gnm:'',
              gtyp:'',
              cln:'',
              clnmm:'',
          }
      },
      beforeCreate() {
          this.axios.get('/gang/list').then(response=>{

              console.log(response);
               if(response != null){
                this.clnmm=response.data.gnnm

              }else{
                  this.clnmm = 'please create your gang or join a gang'
              } 
              this.hd();
          })
      },
      methods:{
          /* @click="gngcrt^=true" */
          crtgng:function(){
              
              this.axios.post('/gang/addgang', {'name':this.gnm,'type':this.gtyp},).then(response=>{
                  if(response.data.no !=null){
                      this.cln = response.data.msg; 
                      console.log(response.data.no)
                  }
                  else{
                      this.cln=response.data.msg
                  }
              })
          },

          show () {
            this.$modal.show('ban');
            
          },
          hide () {
            this.$modal.hide('ban');
          },

          sho() {
            this.$modal.show('cgng');
            
          },
          hd() {
            this.$modal.hide('cgng');
            
          },
      }
}
</script>





