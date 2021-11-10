<template>
    <div class="container Gp0m0 my-1 py-1 blkgry">
        <div class="row no-gutters">
            <div class="col-4 "><img class="card-img d-flex" style="height:80%;" :src="require('/src/assets/img/item/'+mImg)"> </div>
            <div class="col-8 px-2 ">
                <h6 class="subtitlefnt">{{tl}}</h6>
                <p class="dtlsfnt" style="text-align:justify">{{tl2}}
                </p>
            </div>
        </div>

        <div class="row Gp0m0 px-0">
            <div class="col-4 Gp0m0">
                <select class=" form-control text-dark" name="" id="">
                        <option value="">Amount</option>
                        <option value="">5</option>
                        <option value="">10</option>
                        <option value="">15</option>
                        <option value="">20</option>
                </select>
            </div>
            <div class="col-1"></div>
            <div class=" col-6"> <div class="btn Gp0m0 px-3 py-0 btn-lg btn-block text-center button4 nBbg  nBtn siz20">{{b}}</div> 
            </div>
            
            <div class="col-1"></div>
        </div>
    </div>
</template>

<script> 

export default {
  
    props: ['mImg', 'tl', 'tl2','b'],
}
</script>