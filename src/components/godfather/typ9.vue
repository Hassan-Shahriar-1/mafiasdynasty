<template>
    <div>
        <div class="row text-center Gp0m0"><h4 class="hr-sect jaldi">traveller</h4></div>
        <div class="card bg-transparent border-0 Gp0m0">
            <div class="card-header blkgry text-center"><h4 class="titlefnt">Susan Sandra <i @click="t9nws ^= true" class="float-right siz20 fas fa-question-circle"></i></h4>
               
            </div>
             <h6 class="p-1 blkd75 m-1 scale-up-center" style="border: 1px solid rgb(131 124 124);" v-show="t9nws">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio similique nulla aliquam,
                    amet asperiores nam minima odio iusto officiis 
                    voluptatem eveniet natus. Atque quidem, voluptate numquam laborum accusantium architecto?</h6>
            <div class="card-body Gp0m0 bg-transparent">
              
                <div class="card">
                    <img class="card-img p-2" src="../../assets/img/bannar/1.jpg" alt="">
                    <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                        <h6 class="card-title dtlsfnt" style="margin-right: 25%;box-shadow: inset 0px 0px 150px #330000, 0px 0px 20px #000033;text-align: justify;"> 
                            Time was standing between me and them.The dark side brings them to life again and again. I am the first person who is fearlessly diving into the ocean of terror to put an end of the dark side. I can take you in that dimension to fight with them. If you can prove yourself through powers will get a robust ability. </h6>
                    </div>
                </div>
    
                <div class="bg-transparent">
                    <h5 class=" blkgry p-3 subtitlefnt"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                </div>

                <div class="row Gp0m0">
                    <div class="col-9 p-0">
                        <router-view></router-view>
                    </div>
                    <div class="col-3 Gp0m0">
                        <router-link to="/game/typ9/p1"  class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="far fa-newspaper"></i><br>P1</router-link>
                        <router-link to="/game/typ9/p2" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"> <i class="fas fa-comments"></i><br>p2</router-link>
                        <router-link to="/game/typ9/p3" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="fab fa-buffer"></i><br>p3</router-link>
                        <router-link to="/game/typ9/p4" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="fab fa-buffer"></i><br>p4</router-link>
                        <router-link to="/game/typ9/p5" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="fas fa-edit"></i> <br>p5</router-link>
                        <router-link to="/game/typ9/p6" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8"><i class="fas fa-money-check-alt"></i><br>p6</router-link>
                        <router-link to="/game/typ9/p6" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8 disable"><i class="fas fa-money-check-alt"></i><br>Disable</router-link>
                        <router-link to="/game/typ9/p6" class="btn btn-lg p-1  btn-block text-danger  nBtn bgD8 disable"><i class="fas fa-money-check-alt"></i><br>Disable</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            t9nws:false,
        }
    }
}
</script>