<template>
<div>

            <div class="row Gp0m0 text-center">
                <div class="col-2"></div>
                <div class="col-8">
                    <img class=" card-img" src="../../assets/img/sections/bank.jpg" alt="">
                </div>
                <div class="col-2"></div>

            </div>

            <div class="row Gp0m0 py-2 my-2 bMbg">
                <div class="container text-center">
                    <h2 class="text-success btn-subtitle bMbg"> Cash Transaction </h2>
                    
                </div>
                <div class="col-6 ">
                    <h6 class="text-center"></h6> 
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                        </div>
                        <input type="number" class="form-control" placeholder="Withdraw Cash">
                        
                    </div>
                    <div class=" button3 btn-block pbtn text-center mt-3 nBtn NBbg"> withdraw</div>
                </div>
                <div class="col-6 ">
                    <h6 class="text-center"></h6> 

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                        </div>
                        <input type="number" class="form-control" placeholder="Deposite cash">
                        
                    </div>
                    <div class=" button6 btn-block pbtn text-center  mt-3 nBtn NBbg"> Deposite</div>
                </div>

            </div>

            <div class="row Gp0m0 py-2 my-2 bgscn">
                <div class="container text-center">
                    <h2 class="text-danger">Recover Your lone </h2>
                    
                </div>
                <div class="col-6 ">
                    <h6 class="text-center"></h6> 

                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                        </div>
                        <input type="number" class="form-control"  placeholder=" Loan cash">
                        
                    </div>
                    <div class=" button4 btn-block pbtn text-center mt-3  nBtn NBbg"> Loan</div>
                </div>
                <div class="col-6 ">
                    <h6 class="text-center"></h6> 
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                        </div>
                        <input type="number" class="form-control" placeholder="Recover loan">
                        
                    </div>
                    <div class=" button5 btn-block pbtn text-center mt-3 nBtn NBbg"> Recover</div>
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