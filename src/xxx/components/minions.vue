<template>
 
    
    <div class="container Gp0m0 my-1 py-1 bMbg jaldi">
 
            <div class="row Gp0m0">
                <div class="col-4 blkbg "><img class="card-img d-flex bordered" :src="mImg" alt=""><h5 class="text-white">{{ni}}</h5> </div>
                <div class="col-8 ">
                    <h6>{{ tl }}</h6>
                    <h6 style="word-break:break-all;">{{ tl2 }}</h6>
                    <h6 style="word-break:break-all;" class="text-success">{{ tl4 }}</h6>
                </div>
            </div>
            <div class="row Gp0m0"><h6 class="px-4">{{ tl3 }} </h6></div>
            <div class="row Gp0m0 px-0">

                <div class="col-4">
                    <h6></h6>
                    <select class=" form-control form-contrlo-sm text-dark text" name="" id="">
                        <option value="">Amount</option>
                        <option value="">5</option>
                        <option value="">10</option>
                        <option value="">15</option>
                        <option value="">20</option>
                    </select>
                </div>

                <div class=" col-4 pt-3"> <button class="btn btn-lg btn-block text-center button5 nBbg Gp0m0 py-1 nBtn">{{b1}} </button> 
                </div>
                <div class=" col-4 pt-3"> <button class="btn btn-lg btn-block text-center button4 nBbg Gp0m0 py-1 nBtn">{{b2}} </button> 
                </div>
            


            </div>
        </div>
 
 
</template>

<script> 

export default {
   name : 'minions',
   props: ['mImg','ni', 'tl', 'tl2','tl3','tl4','b1','b2'],  
}
</script>