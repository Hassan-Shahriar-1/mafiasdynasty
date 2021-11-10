<template>
<div class="mainC">
    <div class="mainCp ptnbg ">


  <div class="signup-form  rounded">

                <div class="lgnFromIcn">
                    <div class="row justify-content-sm-center">
                        <div class="col htwit"> <img  src="../assets/img/logo.png" class='img-thumbnail'></div>
                    </div>
                </div>
                <h2 class="text-center text-white ttlfnt">Create an Account</h2>
                <p class="text-center desfnt">Sign up with your social media account or email address</p> <br>


                <div class=" social-btn text-center">
                    <div class="alert blkgu py-1 Gp0m0 mb-3"  v-show="code" >
                       <h5 class="text-danger"> * user name Error</h5>
                        <div  type="button" class="close btn eremsg" aria-label="Close" style="margin-top: -5%; margin-right: -6%;">
                      <span aria-hidden="true"  class="text-white" style=" position:absolute; top:0px; right:10px;" @click="code ^=true">&times;</span>
                    </div>
                    </div>


            
                    <div class="row">
                        <div class="col-4 px-0"><a href="#" class="btn-lg button3 nBtn d-block"><i class="fab fa-facebook"></i></a></div>
                        <div class="col-4 px-0"><a href="#" class="btn-lg button6 nBtn d-block"><i class="fab fa-twitter"></i></a></div>
                        <div class="col-4 px-0"><a href="#" class="btn-lg button7 nBtn d-block"><i class="fab fa-google"></i></a></div>
                    </div>
                    <br>
                </div>



                <div class="or-seperator text-center">
                    <h5>or</h5>
                </div>

                <form action="#">
                    <div class="form-control rounded p-0">
                        <div class="position-relative has-icon-right">
                            <input type="text" class="form-control form-control-lg text-left" name="username" placeholder="Username" required>
                            <div class="form-control-position">
                                <i class=" fas fa-user"></i>
                            </div>
                        </div>
                  
                        <div class="position-relative has-icon-right">
                            <input type="email" class="form-control form-control-lg text-left" name="email" placeholder="Email Address" required>
                            <div class="form-control-position">
                                <i class="fas fa-envelope-open"></i>
                            </div>
                        </div>
                  
                   
                        <div class="position-relative has-icon-right">
                            <input class="form-control form-control-lg text-left rounded-0 " id="myInput" name="password" :type="showInput1 ? 'text' : 'password'" placeholder="Password" required>
                            <div class="form-control-position">
                                <i class=" fas fa-eye" @click="showPasswd('showInput1')"></i>
                            </div>
                        </div>
                   
                   
                        <div class="position-relative has-icon-right">
                            <input class="form-control form-control-lg text-left rounded-0 " id="myInput2" name="password" :type="showInput2 ? 'text' : 'password'" placeholder="Confirm password" required>
                            <div class="form-control-position">
                                <i class=" fas fa-eye" @click="showPasswd('showInput2')"></i>
                            </div>
                        </div>
                    </div>
                </form>
                   
                    <div class=" text-center mt-5">
                        <button type="submit" class="bgD2 nBtn nBbg btn-lg btn-block">Sign Up</button>
                    </div>
               
                <div class="text-center desfnt">
                    <p>Already have an account? </p> <router-link to="/" > Login here</router-link> </div>

                <!-- <div class="row ">
                    <a href="#" class="  d-block btn nBbg nBtn button2"><i class="fab fa-facebook">Facebook</i></a>
                    <a href="#" class=" d-block btn nBbg nBtn button3"><i class="fab fa-facebook">Facebook</i></a>
                    <a href="#" class="  d-block btn nBbg nBtn button4"><i class="fab fa-facebook">Facebook</i></a>
                </div> -->
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
    },
  name:'signup'
}
</script>