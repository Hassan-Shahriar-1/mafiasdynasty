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
                            <div class="btn btn-block btn-lg nBtn button5 Gp0m0 p-1" @click="gngcrt ^= true">
                                Create Gang
                            </div>
                        </div>
                        <div class="row Gp0m0 p-3 bMbg jaldi"  v-show="gngcrt">
                            <form class="w-100 ">
                                    <div class="form-group">
                                        <input type="email" class="form-control"   placeholder="Gang Name">
                                        
                                    </div>
                                       <select class="form-select bg-white py-2 pl-3 w-100" aria-label="Default select example">
                                        <option selected>Chose Gang type</option>
                                        <option value="1">Public</option>
                                        <option value="2">Private</option>
                                        <option value="3">Secret</option>
                                     </select>   
                                    <button type="submit" class="btn btn-primary mt-2" @click="gngcrt^=false">Submit</button>
                            </form>
                        </div>

                        <div class="row Gp0m0 text-center bMbg d-flex justify-content-center"> <h4 >Family name:XYZ</h4></div>
                         <div class="btn-group rounded jaldi bw100"  role="group" aria-label="...">
                            <button type="button"  class="btn nBtn blkgry px-0 "><router-link to="/gang/"><i class="fas fa-comments"></i>Gossip</router-link></button>
                            <button type="button"  class="btn nBtn blkgry px-0"> <router-link to="/gang/family">Family</router-link></button>
                            <button type="button"   class="btn nBtn blkgry px-0"> <router-link to="/gang/member"><i class="fas fa-users"></i>Members</router-link></button>
                            <button type="button"  class="btn nBtn blkgry px-0"><router-link to="/gang/leave"><i class="fas fa-sign-out-alt"></i>Leave</router-link></button>
                        </div>  
                         <router-view></router-view>
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
                    gngcrt:false
                }
            },
}
</script>





