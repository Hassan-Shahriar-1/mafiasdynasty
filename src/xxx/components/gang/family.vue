<template>
     <div>
         <section class="blk jaldi">

             <div v-for="(fary ,i) in Gfmlary" :key="i">
                            <div class="row Gp0m0 bMbg d-flex justify-content-center">
                                <h2 >{{fary.gtl}}</h2>
                            </div>
                            

                            <div class="row Gp0m0 bMbg">
                                <div class="col-9 Gp0m0">
                               <span> <i class="fas fa-home float-left text-white pl-3 pt-2 siz20"></i></span>
                               <h3>{{fary.fbnk}} <br> </h3>
                               <p>{{fary.strg}}</p> 
                                </div>

                                <div class="col-3 Gp0m0">
                                    <div class="btn btn-lg blkred"><h6 class=""> <span v-html='fary.fbicn'></span> {{fary.bvlu}} <br>{{fary.btxt}}</h6></div>
                                </div>

                            </div>

                            <div class="row Gp0m0 bMbg">
                                <div class="col-12">

                                    <h3 > {{fary.ebnk}}</h3>
                            <br>
                            <p >{{fary.strg}}</p>
                                </div>
                            </div>

                            <div class="row Gp0m0 bMbg">
                                <div class="col-6">
                                    <h3>{{fary.strm}}</h3>
                                </div>

                                <div class="col-4"><div class="btn btn-lg blkred text-white">{{fary.dpst}}</div></div>
                                <div class="col-2 Gp0m0"><select name="" class="form-control mt-3">
                                    <option>Select</option>
                                    <option>$50</option>
                                    <option>$100</option>
                                    <option>$200</option>
                                    <option>$300</option>
                                    </select></div>
                            </div>

                            <div class="row Gp0m0 bMbg">

                                <h2></h2>
                           

                            </div>
                            </div>
                        </section>
     </div>
</template>

<script>
export default {
    data() {
            
            
            return{

                Gfmlary:[

                        {
                            gtl:"Family Casel",
                            fbnk:"Family Blood bank",
                            strg:"00",
                            ebnk:"Elves Blood Bank ",
                            fbicn:"<i class='fas fa-burn text-danger'></i>",
                            bvlu:"350,000",
                            btxt:"Contribute",
                            dpst:"Deposite",
                            strm:"Store Room",
                            ecmbr:"Elders Chember"

                        }
                ]

                
            }
    },
}
</script>