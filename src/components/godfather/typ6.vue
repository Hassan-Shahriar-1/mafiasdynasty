<template>
    <div>
       <div class="row py-2 text-center Gp0m0"><h4 class="hr-sect jaldi">Collector</h4></div>
        <div class="card Gp0m0">
            <div class="card-header blkgry text-center"><h4 class="titlefnt">Fabrizio Carlos</h4></div>
            <div class="card-body Gp0m0">
                <div class="card">
                    <img class="card-img p-2" src="../../assets/img/bannar/1.jpg" alt="">
                    <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                        <h4 class="card-title">Bologna</h4>
                    </div>
                </div>
                    <h6 class="p-3">
                         Markus knows how to deal in the Dynasty. He can find anything according to 
                         his speech. He is a man of word. He only deals with Blood. He will get you what you will request to him.   
                    </h6>
                <div class="row Gp0m0">
                    <div class="col-12 py-2 text-center Gp0m0"><h4 class="hr-sect jaldi">Available Stuff</h4></div>
                    <div class="col-4 p-1"  v-for="(item,i) in items" :key="i">	
                        <div class="card bg-danger text-white    ">				
                            <h6 class="siz13 p-1 text-center">{{item.name}}</h6>
                            <img :src="require('/src/assets/img/item/'+item.img)" class="card-img p-2">
                            <div class="text-center p-1"><h6 class=" siz13 ">{{item.amount}} Blood </h6><br>
                                <button type="button" style="margin-top:-2%;" class="btn nBbg nBtn tmibg grysdo " ><h5 class="siz15"><strong> Collect</strong></h5></button>
                            </div>
                        </div>		
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{


            items:[
                {
                name:"Habibur Rahman",
                img:"1.gif",
                amount:"46,400 "

                },
                 {
                name:"Habibur Rahman",
                img:"1.gif",
                amount:"46,400 "

                },
                  {
                name:"Habibur Rahman",
                img:"1.gif",
                amount:"46,400 "

                },
                  {
                name:"Habibur Rahman",
                img:"1.gif",
                amount:"46,400 "

                },
                  {
                name:"Habibur Rahman",
                img:"1.gif",
                amount:"46,400 "

                },
                     {
                name:"Habibur Rahman",
                img:"1.gif",
                amount:"46,400 "

                },
                     {
                name:"Habibur Rahman",
                img:"1.gif",
                amount:"46,400 "

                },
                     {
                name:"Habibur Rahman",
                img:"1.gif",
                amount:"46,400 "

                },
                      {
                name:"Habibur Rahman",
                img:"1.gif",
                amount:"46,400 "

                },
                     {
                name:"Habibur Rahman",
                img:"1.gif",
                amount:"46,400 "

                },
                     {
                name:"Habibur Rahman",
                img:"1.gif",
                amount:"46,400 "

                },
                     {
                name:"Habibur Rahman",
                img:"1.gif",
                amount:"46,400 "

                },

            ]

        }
    }
}
</script>