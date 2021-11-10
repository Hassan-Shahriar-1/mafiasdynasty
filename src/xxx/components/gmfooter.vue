<template>
     <div    @focus="handleFocus"
        @focusout="handleFocusOut"
        tabindex="0"
        >
                                    <section class="fixed-bottom Gp0m0"> 
 
                                          <div class="mInMenu smlttlfnt3  w-100  "   v-for="(ssb, i) in MmnDtlst.sb" :key="i"  v-show="btmenusStl[ssb.name]">

                                              <div class="row sMnMnubg text-center Gp0m0"   id='Habib1'>  
                                            
                                                 <div   v-for="(ssbY, bi) in ssb.ta" :key="bi" 
                                                  type="button" @click="bMcShw(ssbY.clk)" class="col-2 btn nBtn"><span v-html='ssbY.icn'></span><h6>{{ ssbY.nm }}</h6></div>  
                                             
                                        </div> 
                                        </div>

                                        <div class="row Gp0m0  btn-group bw100 sMnMnubg text-center rounded jaldi " role="group" aria-label="...">

                                         <div  v-for="(smn, i) in MmnDtlst.mn" :key="i" 
                                         type="button" @click="bMcShw(smn.clk)" class="btn nBtn Gp0m0  "><span v-html='smn.icn'></span><h6>{{ smn.nm }}</h6></div>  
                                        </div>

                                    </section>
                                    </div>
                                    
</template>
<script>
export default {   
    data(){
        return{
            btmenusStl:{
                home: false,
                Stats:false,
                Mission:false,
                Combat:false,
                Elder:false,
                Shop:false
            },
            MmnDtlst:{
                    mn:[
                         {
                            nm:"Home", 
                            icn:"<i class='fas fa-igloo'></i>",
                            clk:'home'
                        },
                        {
                            nm:"Stats", 
                            icn:"<i class='fas fa-hat-cowboy'></i>",
                            clk:'Stats'
                        },
                         {
                            nm:"Mission", 
                            icn:"<i class='fas fa-box'></i>",
                            clk:'Mission'
                        },
                         {
                            nm:"Combat", 
                            icn:"<i class='fas fa-user-secret'></i>",
                            clk:'Combat'
                        },
                         {
                            nm:"Elder", 
                            icn:"<i class='fas fa-book-reader'>",
                            clk:'Elder'
                        },
                         {
                            nm:"Shop", 
                            icn:"<i class='fas fa-store-alt'></i>",
                            clk:'Shop'
                        }
                    ],
                    sb:[
                         {
                             name:'home',
                             ta:[
                                        {
                                            nm:"Home", 
                                            icn:"<i class='fas fa-igloo'></i>",
                                            clk:'home'
                                        },
                                        {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        }
                                   
                                   
                                   
                                   
                                   
                                ]
                         },
                        {
                             name:'Stats',
                             ta:[
                                        {
                                            nm:"Home", 
                                            icn:"<i class='fas fa-igloo'></i>",
                                            clk:'home'
                                        },
                                        {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        }
                                   
                                   
                                   
                                   
                                   
                                ]
                         },
                         {
                             name:'Mission',
                             ta:[
                                        {
                                            nm:"Home", 
                                            icn:"<i class='fas fa-igloo'></i>",
                                            clk:'home'
                                        },
                                        {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        }
                                   
                                   
                                   
                                   
                                   
                                ]
                         },
                         {
                             name:'Combat',
                             ta:[
                                        {
                                            nm:"Home", 
                                            icn:"<i class='fas fa-igloo'></i>",
                                            clk:'home'
                                        },
                                        {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        }
                                   
                                   
                                   
                                   
                                   
                                ]
                         },
                         {
                             name:'Elder',
                             ta:[
                                        {
                                            nm:"Home", 
                                            icn:"<i class='fas fa-igloo'></i>",
                                            clk:'home'
                                        },
                                        {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        }
                                   
                                   
                                   
                                   
                                   
                                ]
                         },
                         {
                             name:'Shop',
                             ta:[
                                        {
                                            nm:"Home", 
                                            icn:"<i class='fas fa-igloo'></i>",
                                            clk:'home'
                                        },
                                        {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Home", 
                                            icn:"<i class='fas fa-igloo'></i>",
                                            clk:'home'
                                        },
                                        {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        },
                                         {
                                            nm:"Code", 
                                            icn:"<i class='fas fa-box'></i>",
                                            clk:'code'
                                        }
                                   
                                   
                                   
                                   
                                   
                                ]
                         },


                         
                    ]
            }
             
        }
    },
    methods:{
        bMcShw:function(sth){
              if(this.btmenusStl[sth] == true){ 
                    this.btmenusStl[sth] = false; 
                    return;
            }
            Object.keys(this.btmenusStl).forEach((value,) => {
               this.btmenusStl[value] = false;
            });  
 
            if(this.btmenusStl[sth] == false){ 
                this.btmenusStl[sth] = true;              
            }else{
                this.btmenusStl[sth] = false; 
            }  
            
        },
        handleFocus:function(){ 
        },
        handleFocusOut:function(){           
            Object.keys(this.btmenusStl).forEach((value,) => {
               this.btmenusStl[value] = false;
            });
        }

    }
   
    

}

</script>

