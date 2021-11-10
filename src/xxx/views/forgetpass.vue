<template>
    <div class='mainC'>
        <div class='mainCp mnbg'>
           
            <form >
                <div class="signup-form bgfrm rounded ">

                    
                    <div class="lgnFromIcn">
                        <div class="row justify-content-sm-center">
                            <div class="col"> <img src="../assets/img/logo.png" class='img-thumbnail'></div>
                        </div>
                    </div>
                  
                    <p class="text-center desfnt">Enter your mail-address to recover password </p> <br>

                    <div class="form-group">
                          <div class="alert blkgu py-1 Gp0m0 mb-3"  v-show="code" >
                       <h5 class="text-danger"> *Email Address Error</h5>
                        <div  type="button" class="close btn eremsg" aria-label="Close" style="margin-top: -5%; margin-right: -6%;">
                      <span aria-hidden="true"  class="text-white" style=" position:absolute; top:0px; right:10px;" @click="code ^=true">&times;</span>
                    </div>
                    </div>
                    </div>
                        <div class="position-relative has-icon-right">
                            <input class="form-control form-control-lg text-left rounded " name="email" type="email" placeholder="Email" required>
                            <div class="form-control-position">
                                <i class="fas fa-envelope-open" style="font-size: large;"></i>
                            </div>
                        </div>
                        <div class="form-group mt-5">
                            <button type="submit" class="bgD2 nBtn nBbg btn-lg btn-block">Recover Password</button>
                        </div>
                    </div>

                    
                    <div class="text-center ttlfnt2"> <router-link to="/signup"> Sign Up Here</router-link> </div>
                    <div class="or-seperator text-center">
                        <h5>or</h5>
                    </div>
                    <p class="text-center desfnt">Signup with your social media account</p> <br>
                   
                    <div class="row text-center Gp0m0">
                        <div class="col-4 px-0"><a href="https://facebook.com" class="btn-lg button3 nBtn d-block"><i class="fab fa-facebook"></i></a></div>
                        <div class="col-4 px-0"><a href="#" class="btn-lg button6 nBtn d-block"><i class="fab fa-twitter"></i></a></div>
                        <div class="col-4 px-0"><a href="#" class="btn-lg button7 nBtn d-block"><i class="fab fa-google"></i></a></div>
                    </div>
                    
               
            </form>
            

        </div>
    </div>

    
</template>

<script>
export default {
   
    data(){
        return{
             code: true,
         
        }
    },
    

}

</script>