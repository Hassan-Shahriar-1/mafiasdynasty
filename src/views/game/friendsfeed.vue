<template>
    <div class="mb-2">
        <div class="row py-2 text-center Gp0m0">
            <h4 class='hr-sect titlefnt'>Friends Feed</h4>
        </div>

        <div class="row Gp0m0 blkgry p-2  m-1" v-for="(ffed, i) in fed" :key="i">
            <div class="col-2 Gp0m0 "><img class="card-img bdr1" src="../../assets/img/item/1.gif" alt="">
            </div>
            <div class="col-10 pr-0">
                 <h4 class=" dtlsfnt siz15 float-right ">10 min ago</h4>
                <div class="titlefnt2 siz25 text-danger">{{ffed.anm}}</div> <div class="siz13 py-3 text-justify dtlsfnt" style="font-weight:100; word-spacing:normal;">Killed by <a href="#" class="siz15 subtitlefnt text-danger">Habibur Rahman</a> sit amet consectetur adipisicing elit. Magni nisi doloribus  tempora veritatis! Atque quae fugit quasi  {{ffed.dnm}}.</div>
                <div class="row Gp0m0">
                    <div class="col-6 p-1">
                        <div class="btn nBbg nBtn p-0 py-2 button6 btn-lg btn-block"><h4 class="siz15">Add to hitlist</h4></div>
                    </div>
                     <div class="col-6 p-1">
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