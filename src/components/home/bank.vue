<template>
<div class="tmibg rounded bnrbxsdo overflow-auto">
    <div style="margin-bottom:50px;">
        <div class="row Gp0m0 text-center ">
            <div class="col-2"></div>
            <div class="col-8">
                <img class="mt-2 card-img" src="../../assets/img/sections/bank.jpg" alt="">
            </div>
            <div class="col-2"></div>
        </div>
        <div class="row Gp0m0 py-2 my-2 ">
            <div class="container text-center">
                <h2 class="text-success btn-subtitle "> Cash Transaction </h2>
            </div>

            <div class="container text-center p-2">
                <h6 class="text-success siz20 "> Balance:$5127885445 </h6>
            </div>
            <div class="col-6 px-1 ">
                <h6 class="text-center"></h6> 
                    <div class="input-group mb-3">
                    <div class="input-group-prepend border-0">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="number" class="form-control border-0 p-1" placeholder="Withdraw">
                </div>
                <div class=" button4 siz15 btn-block pbtn text-center mt-3 nBtn nBbg"> withdraw</div>
            </div>
            <div class="col-6 px-1 ">
                <h6 class="text-center"></h6> 
                <div class="input-group mb-3">
                    <div class="input-group-prepend border-0">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="number" class="form-control border-0 p-1" placeholder="Deposite">
                    
                </div>
                <div class=" button5 siz15 btn-block pbtn text-center  mt-3 nBtn nBbg"> Deposite</div>
            </div>
        </div>


        <div class="row Gp0m0 py-2 my-2 bgscn">
            <div class="container text-center">
                <h2 class="text-danger">Recover Your loan </h2>
            </div>
            <div class="col-6 px-1">
                <h6 class="text-center"></h6> 
                <div class="input-group mb-3">
                    <div class="input-group-prepend border-0">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="number" class="form-control border-0"  placeholder="Credit">
                </div>
                <div class=" button4 siz15 btn-block pbtn text-center mt-3  nBtn NBbg"> Credit</div>
            </div>
            <div class="col-6 px-1">
                <h6 class="text-center"></h6> 
                <div class="input-group mb-3">
                    <div class="input-group-prepend border-0">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="number" class="form-control border-0" placeholder="Recovery">
                </div>
                <div class=" button5 siz15 btn-block pbtn text-center mt-3 nBtn NBbg"> Recover</div>
            </div>
        </div>
    </div>   
</div>
</template>

<script>
export default {
   
    data(){
        return{
             code: true,
        }
    },
// beforeCreate() {
//     alert('before created');
// },
// created() {
//     alert('created');
// },

// beforeMount() {
//     alert('before mount');
// },

// mounted() {
//     alert('mounted');
// },

// beforeUpdate() {
//     alert('beforeupdate');
// },

// updated() {
//     alert('updated');
// },
}
</script>