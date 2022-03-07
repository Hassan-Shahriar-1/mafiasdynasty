<template>
    <div>
        <div class="row py-2 text-center Gp0m0 bdr1  " style="color:#b5b0b0!important">
            <h4 class='hr-sect titlefnt'>Free Gifts to Clans</h4>
             <h6 class="text-center blkd75 p-2">You can Gift any single Item to 500 clan members once in every 5 hours.</h6>
        </div>
        <div class="row Gp0m0 " style="color:#b5b0b0!important">
            <h6 class="text-center p-2 blkd75 w-100 ">
                Chose any item to gift and tap on the member whom you want to send.
            </h6>

            <div class="card mt-2  border-1">
                <div class="card-header blkgry rounded-0 w-100"><h4 class="titlefnt text-center">Chose Items</h4></div>
                <div class="card-body p-1">
                <div class="row Gp0m0">
                    <div class="col-4 G0m0 p-1" v-for="(gft, i) in gftlst" :key="i">
                        <div class="card blkd75 text-white">
                            <h6 class="siz20 p-1 text-center subtitlefnt">{{gft.name}}</h6>
                            <img class="card-img p-2" src="../../assets/img/item/1.gif" alt="Card image cap">
                            <div class="text-center blkd75 p-2">
                                <button type="button" class="btn nBbg nBtn tmibg grysdo" style="margin-top: -2%;">
                                <h5 class="siz18"><strong> Collect</strong></h5></button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

            <div class="row Gp0m0 tmibg pb-2 py-2">
        <div class="col-2 Gp0m0 p-2">
        <img src="../../assets/img/item/1.gif" alt="threat image" class="card-img bdr1">
        </div> 

        <div class="col-8 Gp0m0">
          <h6 class="dtlsfnt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel sequi perspiciatis. 
        </h6>
        </div>

           <div class="col-2 Gp0m0 p-2">
        <img src="../../assets/img/item/1.gif" alt="threat image" class="card-img bdr1">
        </div> 


        <div class="col-6"> 
            <h6 class="mt-2 dtlsfnt">
              <i class="fas fa-clock">10hour 25 min ago</i>
            </h6>
        </div>
        
        <div class="col-3 px-2">
          <div class="btn p-1 nBtn nBbg siz15 btn-block button5">Ignore</div>
        </div>

        <div class="col-3 px-2">
          <div class="btn p-1 nBtn nBbg siz15 btn-block button4">Accept</div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            gftlst:[
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
                {   
                    name:"Habibur", img:""
                },
               
            ]
        }
    }
}
</script>