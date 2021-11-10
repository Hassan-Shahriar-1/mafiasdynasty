<template>
    <div class="container Gp0m0 my-1 py-1 bMbg">
                                <div class="row">
                                    <div class="col-4 "><img class="card-img d-flex" :src="mImg"> </div>
                                    <div class="col-8 ">
                                        <h6>{{tl}}</h6>
                                        <p>{{tl2}}
                                        </p>
                                    </div>
                                </div>

                                <div class="row Gp0m0 px-0">

                                    <div class="col-4">
                                        <h6></h6> <select class=" form-control text-dark" name="" id="">
                <option value="">Amount</option>
                <option value="">5</option>
                <option value="">10</option>
                <option value="">15</option>
                <option value="">20</option>
            </select></div>

                                    <div class=" col-3"> <div class="btn Gp0m0 px-3 py-1 btn-lg text-center button5 nBbg  nBtn">{{b1}}</div> 
                                    </div>
                                    <div class=" col-3"> <div class="btn btn-lg Gp0m0 px-3 py-1 text-center button4 nBbg  nBtn">{{b2}}</div> 
                                    </div>
                                    <div class="col-2"></div>


                                </div>
                            </div>
</template>

<script> 

export default {
   name : 'bmitm',
    props: ['mImg', 'tl', 'tl2','b1','b2'],
}
</script>