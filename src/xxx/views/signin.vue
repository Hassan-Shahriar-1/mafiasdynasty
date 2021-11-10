<template>
<div class="mainC">
    <div class="mainCp ptnbg">
  <div class="signup-form ">

                <div class="lgnFromIcn">
                    <div class="row justify-content-sm-center">
                        <div class="col"> <img src="../assets/img/logo.png" class=' img-thumbnail'></div>
                    </div>
                </div>

                <h4 class="text-center ttlfnt">Log in</h4>
                <div class="alert blkgu py-1 Gp0m0 mb-3"  v-show="code" >
                       <h5 class="text-danger"> * user name Error</h5>
                        <div  type="button" class="close btn eremsg" aria-label="Close" style="margin-top: -5%; margin-right: -6%;">
                      <span aria-hidden="true"  class="text-white" style=" position:absolute; top:0px; right:10px;" @click="code ^=true">&times;</span>
                    </div>
                    </div>
                <form>


                    <div class="form-control rounded p-0">
                        <div class="position-relative has-icon-right">
                            <input class="form-control form-control-lg text-left rounded-0 " name="email" type="email" placeholder="Email" required>
                            <div class="form-control-position">
                                <i class="fas fa-envelope-open"></i>
                            </div>
                        </div>
                        <div class="position-relative has-icon-right">
                            <input class="form-control form-control-lg text-left rounded-0 " id="myInput" name="password" :type="showInput ? 'text' : 'password'" placeholder="Password" required>
                            <div class="form-control-position">
                                <i class=" fas fa-eye" @click="showPasswd('showInput')" ></i>
                            </div>
                        </div>
                    </div>


                    <div class="form-group pt-5">
                        <div class="icheck-material-white">
                            <input type="checkbox" id="user-checkbox" checked="">
                            <label for="user-checkbox bg-red">Remember me</label>
                        </div>
                    </div>

                    <div class="form-group text-center">
                        <button type="submit" class="button mt-5  bgD2 nBtn nBbg btn-lg btn-block ">Log In</button>
                        <!-- bg-dark btn-lg btn-block signup-btn -->
                    </div>

                </form>


                <div class="or-seperator text-center">
                    <h5>or</h5>
                </div>
                <p class="text-center desfnt">Log in with your social media account</p> <br>

                <div class="row text-center">
                    <div class="col-4 px-0"><a href="#" class="btn-lg button3 nBtn d-block"><i class="fab fa-facebook"></i></a></div>
                    <div class="col-4 px-0"><a href="#" class="btn-lg button6 nBtn d-block"><i class="fab fa-twitter"></i></a></div>
                    <div class="col-4 px-0"><a href="#" class="btn-lg button7 nBtn d-block"><i class="fab fa-google"></i></a></div>
                </div>
                <br>

                <div class="text-center "> <router-link :to="{name:'forget'}">Forget Password? </router-link>  | <router-link :to="{name:'signup'}" >Sign Up Here</router-link>  </div>




            </div>
            </div>
            </div>
</template>




<script>
//import jQuery from '../assets/js/lib/jquery-min.js'
export default {
    
   
    data(){
        return{
             code: true,
             showInput:false,
         
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
    

}

</script>