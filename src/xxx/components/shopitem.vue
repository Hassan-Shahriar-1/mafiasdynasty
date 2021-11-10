<template>
    <div>

 <div class="row py-2 text-center Gp0m0">
     <h4 class='hr-sect jaldi'>lorems</h4>
    </div>

   <div class="row Gp0m0">
       <div class="col-4 Gp0m0 p-1" v-for="(sitm,i) in spitm" :key='i'>
           <div class="card blk btn nBtn nBbg p-2 jaldi Gp0m0">
               <div class="card-header Gp0m0 "><h6>{{sitm.mn1}}</h6></div>
               <div class="card-body Gp0m0 p-2"> <img class="card-img" :src="sitm.sim" alt=""></div>
               <div class="card-footer Gp0m0"><h6>{{sitm.mn2}}</h6></div>
           </div>
       </div>
       
   </div>
   </div>
</template>

<script>
export default {
    data(){
        return{
            spitm:[
                {
                    mn1:"75lipsum",
                    sim:"/src/assets/img/item/1.gif",
                    mn2:"20 Jewels"
                },
                 {
                    mn1:"75lipsum",
                    sim:"/src/assets/img/item/1.gif",
                    mn2:"20 Jewels"
                },
                 {
                    mn1:"75lipsum",
                    sim:"/src/assets/img/item/1.gif",
                    mn2:"20 Jewels"
                },
                 
            ]


        }
    }
}
</script>