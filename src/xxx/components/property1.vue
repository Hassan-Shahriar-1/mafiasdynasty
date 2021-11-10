<template>
    <div class="bMbg mt-5 blk">

        <div class="row Gp0m0 rounded px-1 ">
            <div class="col-3 ">
            <img :src="ph.mg" class="card-img bdr3" alt="" style="margin-top:-40%;">
            </div>
            <div class="col-5 Gp0m0">

                <h6 class="text-danger" style="margin-top:-20%;">{{ph.heng}}</h6>
                <h6 class="text-left">{{ph.des}}</h6>
            </div>
            <div class="col-4 Gp0m0">     
                <div class="row Gp0m0 w-100 mlr3 ">
                <div class="col-4 Gp0m0">
                <div class="btn  button4 rounded  py-0 btn-block" @click="decrement()" ><i class="fas fa-folder-minus"></i></div>
                </div>
                <div class="col-4 Gp0m0">
                    <div class="bg-white rounded  text-bold" style="padding:6px ;">{{ph.opt}}</div>
                    </div>
            <div class="col-4 Gp0m0">                                       
        <div class="btn  button5  py-0  rounded btn-block" @click="increment()"><i class="fas fa-cart-plus"></i></div>
        </div>
         <div class="row Gp0m0 no-guttersb1px ">
        <div class="col-6 "><div class="btn Gp0m0  btn-block nBtn button5"><h6>{{ph.b1}}</h6></div></div>
        <div class="col-6 "> <div class="btn Gp0m0 btn-block nBtn blkred"><h6>{{ph.b2}}</h6></div></div>
        </div>
        </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{

               ph:{mg:"/src/assets/img/1.png",
                opt:0,
                heng:"upper the text",
                des:"Lorem ipsum dolor, sit  adipisci ipsam.",
                b1:"Buy",
                b2:"sell"



            }

        }
        
    },

    methods: {
          increment(){
            this.ph.opt=this.ph.opt+5;
        },
        decrement(){
            this.ph.opt=this.ph.opt-5;
        },
    },
}
</script>