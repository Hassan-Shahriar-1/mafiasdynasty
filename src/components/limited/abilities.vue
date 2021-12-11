<template>
    <div>


        <div class="div tmibg  m-1" v-for="(abl, i) in ablts" :key="i">
			<h5 class="py-2">{{abl.ttl}}</h5>
            <div class="row Gp0m0 pb-3">
                <div class="col-4 text-center Gp0m0">
                    <div class="mt-4"><img  :src="require('/src/assets/img/bannar/'+abl.img)" class="card-img"></div>Epic</div>
                <div class="col-8">												 										 
                        <div class="row Gp0m0">  
                             <div class="col-12 Gp0m0 py-1"> <h5 class="py-2" style=" ">{{abl.typ}}</h5> </div> 
                            <div class="col  Gp0m0 blkgry"> <h5 class="text-center"> Attack   <br>{{abl.atk}}</h5> </div> 
                             <div class="col  Gp0m0 blkgry"> <h5 class="text-center"> Defense   <br>{{abl.dfnc}}</h5> </div>										</div>
                        <button type="button" style="margin-top:10%" class="nBtn button4 btn w-100  pull-right" ><h5 class=""><strong>   75 Jewels</strong></h5></button>							 
                </div>
            </div>
		</div>
        
    </div>
</template>


<script>
export default {
    data() {


        return{
            ablts:[

                {
                    img:"2.jpg",
                    ttl:"Thunder Blaster",
                    typ:"Offensive",
                    atk:"313",
                    dfnc:"222"
                },
                {
                    img:"2.jpg",
                    ttl:"Thunder Blaster",
                    typ:"Offensive",
                    atk:"313",
                    dfnc:"222"
                },
                {
                    img:"2.jpg",
                    ttl:"Thunder Blaster",
                    typ:"Offensive",
                    atk:"313",
                    dfnc:"222"
                },
                {
                    img:"2.jpg",
                    ttl:"Thunder Blaster",
                    typ:"Offensive",
                    atk:"313",
                    dfnc:"222"
                },
            ]
        }
        
    },
}
</script>