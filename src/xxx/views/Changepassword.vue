<template>
          <div class="container Gp0m0 ">
                <div class="StryCntnr">
                    <!--header content start-->
                    <tops></tops>

                    <!-- Sticky top end -->


                    <!-- body Content Start -->
                    <div class="signup-form bgfrm text-dark rounded ">

                        <div class="lgnFromIcn">
                            <div class="row justify-content-sm-center">
                                <div class="col htwit"> <img src="../assets/img/logo.png" class='img-thumbnail'></div>
                            </div>
                        </div>
                        <h2 class="text-center text-white ttlfnt">Update Your Password</h2>
                        <br>
                        <form action="#">



                            <div class="form-control rounded p-0 ">
                                <div class="position-relative has-icon-right ">
                                    <input class="form-control form-control-lg text-left " id="myInpt" name="password" :type="showInput0 ? 'text' : 'password'" placeholder="Old Password" required>
                                    <div class="form-control-position">
                                        <i class=" fas fa-eye"  @click="showPasswd('showInput0')"></i>

                                    </div>
                                </div>
                        

                         
                                <div class="position-relative has-icon-right">
                                    <input class="form-control form-control-lg text-left" id="myInput" name="password"  :type="showInput1 ? 'text' : 'password'" placeholder="New Password" required>
                                    <div class="form-control-position">
                                        <i class=" fas fa-eye" @click="showPasswd('showInput1')"></i>
                                    </div>
                                </div>
                          


                          
                                <div class="position-relative has-icon-right">
                                    <input class="form-control form-control-lg text-left  " id="myInput2" name="password"  :type="showInput2 ? 'text' : 'password'" placeholder="Confirm password" required>
                                    <div class="form-control-position">
                                        <i class=" fas fa-eye" @click="showPasswd('showInput2')"></i>
                                    </div>
                                </div>
                            </div>


                            <div class=" text-center mt-5">
                                <button type="submit" class="bgD2 nBtn nBbg btn-lg btn-block">Update Password</button>
                            </div>
                            </form>
                        </div>

              

                    <!-- Body Content End -->


                    <!--footer content start-->

                   <foots></foots>




                </div>
            </div>
            
            
         
</template>
<script>


export default{
    data(){
     return  {
        showInput0:false,
        showInput1:false,
        showInput2:false,
       } 
    },
    created () {
        
    },
    methods: {
        showPasswd:function(vvf){          
            if(this[vvf]){
                 this[vvf] = false;
            }else{
              this[vvf] = true;
            }
        }
    }
/*    function myFunction(v) {
            var x = document.getElementById(v);
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }

        } */
}
</script>