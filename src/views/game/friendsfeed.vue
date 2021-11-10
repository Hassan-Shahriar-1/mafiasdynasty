<template>
    <div>
        <div class="row py-2 text-center Gp0m0">
            <h4 class='hr-sect titlefnt'>Friends Feed</h4>
        </div>

        <div class="row Gp0m0 blkgry p-2 my-1" v-for="(ffed, i) in fed" :key="i">
            <div class="col-2 Gp0m0 "><img class="card-img bdr1" src="../../assets/img/item/1.gif" alt="">
            </div>
            <div class="col-10">
                 <h4 class=" subtitlefnt siz13 float-right ">10 min ago</h4>
                {{ffed.anm}} ipsum dolor sit amet consectetur adipisicing elit. Magni nisi doloribus  tempora veritatis! Atque quae fugit quasi  {{ffed.dnm}}.
                <div class="row Gp0m0">
                    <div class="col-6">
                        <div class="btn nBbg nBtn p-0 py-2 button6 btn-lg btn-block"><h4 class="siz15">Add to hitlist</h4></div>
                    </div>
                     <div class="col-6">
                        <div class="btn nBbg nBtn p-0 py-2 button4 btn-lg btn-block"><h4 class="siz15">Attack</h4></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
             <div class="btn nBtn nBbg btn-lg btn-block blkgry">Show more...</div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            fed:[
                {
                    anm:"Mea Ling",
                    dnm:"Flag Shipper"
                },

                 {
                    anm:"Mea Ling",
                    dnm:"Flag Shipper"
                },

                 {
                    anm:"Mea Ling",
                    dnm:"Flag Shipper"
                },
                 {
                    anm:"Mea Ling",
                    dnm:"Flag Shipper"
                },
                 {
                    anm:"Mea Ling",
                    dnm:"Flag Shipper"
                },
                 {
                    anm:"Mea Ling",
                    dnm:"Flag Shipper"
                },
                 {
                    anm:"Mea Ling",
                    dnm:"Flag Shipper"
                },
                 {
                    anm:"Mea Ling",
                    dnm:"Flag Shipper"
                },
                 {
                    anm:"Mea Ling",
                    dnm:"Flag Shipper"
                },
            ]
        }
    }
}
</script>