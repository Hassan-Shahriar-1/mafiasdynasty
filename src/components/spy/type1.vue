<template>
    <div> 
        <div class="row m-0  py-3">
            <div class="col-3 p-0" @click="$router.go(-1)"> <button class="float-left p-1 nBtn tmibg "><i class="fas fa-arrow-left"></i>Back</button> </div>
            <div class="col-9 p-0">
                    <h4 class="text-center titlefnt">Hi I am demo center</h4>
            </div>
        </div>

        <div class="row Gp0m0">
            <ul class="list-group w-100" v-for="(masrc,i) in mafia" :key="i">
                <li class="list-group-item blk50 p-1 "> 
                    <div class="row Gp0m0  rounded blkd75 p-2">
                       
                        <div class="col-8 px-2"> <h6 class="text-info subtitlefnt siz15">{{masrc.mfattl}}</h6> <h6 class="subtitlefnt siz20">{{masrc.mfades}}</h6></div>
                        <div class="col-4 "  @click="show()"> <div class=" button4 nBtn mt-2 border py-2 rounded"><h6 class="text-center"><i class="fas fa-plus-square"></i>&nbsp;Grab!</h6></div></div>
                    </div>
                </li>
            </ul>
        </div>


        
        <modal name="spytyp1" :width='300'   :isAutoHeight="true" @before-open="beforeOspen" class="mblr bdr p-1 rounded-2">

                <div class="card blkgry" style="width:300px;">
                    <div class="card-header tmibg2 p-1">
                    <h4 class=" rounded-0 text-center py-1 w-100 " style="position:sticky;">Grab This things
                        <span class="float-right" style="margin-right:2%;"  @click="hide();"><div class="crossbtn"><i class="fas fa-times " ></i></div></span></h4>
                    </div>
                    <div class="card-body bg-transparent p-0"  style="height:250px; overflow:scroll;">
                        <div class="w-100  Gp0m0" >   

                            <h6 class="text-center dtlsfnt mt-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus 
                                veniam deleniti error accusantium, distinctio sint alias! Error fugit
                                 ducimus suscipit nisi. Officia fuga ad dolor aspernatur nam architecto asperiores quis.
                            </h6>
                        </div>
                    </div>
                </div>
        </modal> 
    </div>
</template>

<script>
export default {
 data(){
        return{
                 mafia:[
                        {
                           
                           mfattl:'Habibur loga agfsch jhasfdcb aufsc jf asfcvacf asfcdga fasfcjfg dfascg',
                           
                        },
                         {
                           
                           mfattl:'Habibur loga agfsch jhasfdcb aufsc jf asfcvacf asfcdga fasfcjfg dfascg',
                           
                        },
                         {
                           
                           mfattl:'Habibur loga agfsch jhasfdcb aufsc jf asfcvacf asfcdga fasfcjfg dfascg',
                           
                        },
                         {
                           
                           mfattl:'Habibur loga agfsch jhasfdcb aufsc jf asfcvacf asfcdga fasfcjfg dfascg',
                           
                        },
                         {
                           
                           mfattl:'Habibur loga agfsch jhasfdcb aufsc jf asfcvacf asfcdga fasfcjfg dfascg',
                           
                        },
                         {
                           
                           mfattl:'Habibur loga agfsch jhasfdcb aufsc jf asfcvacf asfcdga fasfcjfg dfascg',
                           
                        }
                    ]

            }
    },
    methods:{

             beforeOspen(){
            setTimeout(()=>{ 
                 window.jq('.v--modal').height(window.jq('#gtmhyHt').outerHeight());
            }, 10);
        },
          show () {
            this.$modal.show('spytyp1');            
        },
        hide () {
            this.$modal.hide('spytyp1');
        }
    }
}
</script>