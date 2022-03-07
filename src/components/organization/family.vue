<template>
    <div>
        <section class="clr7 jaldi rounded">
            <div v-for="(fary ,i) in Gfmlary" :key="i">
                            <div class="row Gp0m0 py-2 clr7   d-flex justify-content-center">
                                <h2 class="titlefnt">{{fary.gtl}}</h2>
                            </div>
                <div class="row Gp0m0 my-1 bMbg2 rounded-0 p-2">
                    <div class="col-8 Gp0m0">
                        <span> <i class="fas fa-home float-left text-white pt-1 siz20"></i></span>
                        <h4 class="subtitlefnt">{{fary.fbnk}} <br> </h4>
                        <h6 class="dtlsfnt">Storage&nbsp;:&nbsp;{{fary.strg}}</h6> 
                    </div>
                    <div class="col-4 Gp0m0 p-1">
                        <div class="btn btn-lg button5 py-1 nBtn "><h6 class=""> <span v-html='fary.fbicn'></span> {{fary.bvlu}} <br>{{fary.btxt}}</h6></div>
                    </div>
                </div>
                <div class="row Gp0m0 bMbg2 rounded-0 p-2">
                    <div class="col-12 Gp0m0">
                        <h4 class="subtitlefnt">  {{fary.ebnk}}</h4>
                        <h6  class="dtlsfnt"> Storage&nbsp;:&nbsp;{{fary.strg2}}</h6>
                    </div>
                </div>
                <div class="row Gp0m0 my-1 bMbg2 rounded-0 p-2">
                    <div class="col-5 Gp0m0">
                        <h4 class="subtitlefnt">{{fary.strm}}</h4>
                    </div>
                    <div class="col-4 Gp0m0"><div class="btn btn-lg p-1 rounded-0 btton5 mt-2 text-white mlr2">{{fary.dpst}}</div></div>
                    <div class="col-3 Gp0m0"><select name="" class="form-control mt-2">
                        <option>Select</option>
                        <option>$50</option>
                        <option>$100</option>
                        <option>$200</option>
                        <option>$300</option>
                        </select>
                    </div>
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
                            strg2:"000",
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