<template>
        <div class='ptnbg' style=" height:100vh; margin-bottom:-60px!important;">
            <form >
                <div class="signup-form  m-0">
                    <div class="lgnFromIcn mt-3">
                        <div class="row justify-content-sm-center">
                            <div class="col"> <img src="../assets/img/logo.png" class='img-thumbnail'></div>
                        </div>
                    </div>
                  
                    <p class="text-center titlefnt">Enter your email address to recover password </p> <br>

                    <div class="form-group">
                          <div class="alert blk50 py-2 Gp0m0 my-3 rounded"  v-show="error" >
                       <h5 class="text-danger text-center"> *Email Address Error</h5>
                        <div  type="button" class="close btn eremsg" aria-label="Close" style="margin-top: -5%; margin-right: -6%;">
                      <span aria-hidden="true"  class="text-white" style=" position:absolute; top:0px; right:10px;" @click="code ^=true">&times;</span>
                    </div>
                    </div>
                    </div>
                        <div class="position-relative has-icon-right">
                            <input class="form-control form-control-lg text-left rounded" name="email" type="email" placeholder="Email" required>
                            <div class="form-control-position">
                                <i class="fas fa-envelope-open text-dark" style="font-size: large;"></i>
                            </div>
                        </div>
                        <div class="form-group mt-5">
                            <button type="submit" class="bgD2 siz25 custom6 nBtn nBbg btn-lg btn-block btnfnt">Recover Password</button>
                        </div>
               
                    
                    <div class="text-center dtlsfnt"> <router-link to="/signup"> <h3 class="text-info siz20">Sign Up Here</h3></router-link> </div>
                    <!-- <div class="or-seperator text-center ttlfnt2">
                        <p class="desfnt">or</p>
                    </div> -->
                    <h4 class="text-center dtlsfnt">Signup with your social media account</h4> <br>
                    <div class="row text-center m-0 ">
                        <div class="col-4 px-0"><a href="https://facebook.com" class="btn-lg button3 nBtn d-block"><i class="fab fa-facebook"></i></a></div>
                        <div class="col-4 px-0"><a href="#" class="btn-lg button6 nBtn d-block"><i class="fab fa-twitter"></i></a></div>
                        <div class="col-4 px-0"><a href="#" class="btn-lg button7 nBtn d-block"><i class="fab fa-google"></i></a></div>
                    </div>    

                         </div> 
            </form>
        </div>

</template>
<script>
export default {
   
    data(){
        return{
             error: false,
         
        }
    },
}

</script>