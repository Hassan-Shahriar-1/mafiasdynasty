<template>
    <div class="container Gp0m0 texture1 ">
                <div class="StryCntnr">
                    <!--header content start-->
                        <tops></tops>


                    <!-- Sticky top end -->

                    <div class="mrgnbtm">
                    <div class="container Gp0m0">

                        <div class="row Gp0m0 "><img class="card-img" src="../assets/img/bannar/Bannar.jpg" alt=""></div>
                        <div class="row Gp0m0 justify-content-sm-center bMbg">
                            <div class="col-4">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repudiandae similique corporis in!</p>
                            </div>
                            <div class="col-4 mmb">
                                <img src="../assets/img/logo.png" class='card-img rounded' style="border: 4px solid rgb(37, 37, 37);">

                            </div>
                            <div class="col-4">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repudiandae similique corporis in!</p>
                            </div>

                        </div>

                        <div class="container Gp0m0 bg-dark bMbg">
                            <div class="row  ">
                                <div class="col-6 float-left text-dark jaldi">
                                    <h5>Habib</h5>
                                </div>
                                <div class="col-6 float-end  text-dark">
                                    <h5 class="float-right">ujaghsdg</h5>
                                </div>
                            </div>

                            <div class="row Gp0m0">
                                <div class="col-3 px-0 mt-2"><img class="card-img Gp0m0" src="../assets/img/logo.png" alt=""></div>

                                <div class="col-9 Gp0m0">

                                    <div class="row Gp0m0">
                                        <div class="col-6">
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribusquas aspernatur perferendis? Deserunt rem.</p>


                                        </div>
                                        <div class="col-6 Gp0m0 mt-2">
                                            <div class="row Gp0m0">
                                          
                                            <input  class="form-control" placeholder="Amount" v-model="counter" type="number"  id=demoInput  min=0 max=100>
                                            
                                        </div>
                                            <div class="row Gp0m0 w-100">
                                                <div class="col-6">
                                                <div class="btn nBtn button4 py-0 float-right" @click="decrease()" ><i class="fas fa-folder-minus"></i></div>
                                            </div>
                                            <div class="col-6">
                                            <div class="btn nBtn button5 py-0 float-left" @click="increase()" ><i class="fas fa-cart-plus"></i></div>
                                        </div>
                                            </div>
                                            


                                        </div>
                                    </div>

                                    <div class="row Gp0m0">
                                        <div class="col-6">
                                            <div class="btn btn-block btn-lg nBtn nBbg button4"> btn</div>

                                        </div>
                                        <div class="col-6 ">


                                            <div class="btn btn-block btn-lg nBtn nBbg button6"> btn</div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="container Gp0m0 bMbg">
                            <div class="row ">
                                <div class="col-6 float-left text-dark jaldi">
                                    <h5>Habib</h5>
                                </div>
                                <div class="col-6 float-end  text-dark">
                                    <h5 class="float-right">ujaghsdg</h5>
                                </div>
                            </div>

                            <div class="row Gp0m0">
                                <div class="col-3 px-0 mt-2"><img class="card-img " src="../assets/img/logo.png" alt=""></div>
                                <div class="col-9 Gp0m0">

                                    <div class="row Gp0m0">
                                        <div class="col-6">
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quas aspernatur perferendis? Deserunt rem.</p>
                                        </div>
                                        <div class="col-6 mt-2">
                                        </div>
                                    </div>

                                    <div class="row Gp0m0">
                                        <div class="col-6">
                                            <div class="btn btn-block btn-lg nBtn nBbg button6"> btn</div>

                                        </div>
                                        <div class="col-6 ">

                                            <div class="btn btn-block btn-lg nBtn nBbg button6"> btn</div>

                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <!-- body content End -->




                <!-- footer content start -->

                    <foots></foots>
                    <!--footer content start-->


                </div>
            </div>
</template>
<script>

export default{
data(){
    return{
     counter: 0,
     }
  },
  methods: {
    increase: function() {
      this.counter++;
      if(this.counter>=100){this.counter = 100;}
    },
    decrease:  function() {
      this.counter--;
    }
 
  }
}

 

//hubib();
</script>