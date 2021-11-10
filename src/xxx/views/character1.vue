<template>
    <div class="container Gp0m0 texture1 charbg smlttlfnt3">
                <div class="StryCntnr">
                    <!--header content start-->
                    <tops></tops>
                    <!-- Sticky top end -->

                    <div class="mrgnbtm">
                    <div class="row tipl">
                        <div class="col-4"><img class="card-img carousel" src="img/agent/character1.png" alt="">
                            <br>
                            <button onclick="myFunction('dshbd')" class="btn-block btn-lg nBtn button4 mt-2" @click="srtpfl ^= true">Profile </button>
                        </div>
                        <div class="col-8 mt-5">
                            <h2 class="text-danger">Welcome Boss!</h2>
                            <h5 class="jaldi">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum dignissimos voluptas optio labore odio esse, at minus minima laudantium porro placeat debitis deserunt praesentium? Deserunt modi facere illo quo!</h5>
                        </div>
                    </div>

                    <div class="bar p-3" v-show="srtpfl">

                        <div class="dscrptn">
                            <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, adipisci deleniti! Voluptas, doloremque sit ipsum tenetur explicabo, quaerat assumenda voluptatem voluptate saepe ex ipsam amet, mollitia laboriosam soluta hic
                                iusto?
                            </h5>
                        </div>

                    </div>


                    <div id="dshbd" style="display: none;">

                        <div class="row">

                            <div class="col-4">
                                <img class="card-img" src="img/agent/character1.png" alt="">
                            </div>
                            <div class="col-8">
                                <table class="border text-white">
                                    <thead>
                                        <tr>
                                            <th>Mission</th>
                                            <th>Active hours</th>
                                            <th>Cheated</th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, adipisci deleniti! Voluptas, doloremque sit ipsum tenetur explicabo, quaerat assumenda voluptatem voluptate saepe ex ipsam amet, mollitia laboriosam soluta
                                    hic iusto?</h5>
                            </div>
                        </div>

                    </div>

                </div>

              <foots></foots>
                    <!--footer content start-->


                </div>
            </div>
</template>

<script>
export default{
data(){
return{
    srtpfl:false
}
}
}
</script>