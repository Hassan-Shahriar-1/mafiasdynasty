<template>

   <div class="container Gp0m0 Mainbg ">
         <div class="StryCntnr">              
            <bmitm v-for="(Munin, Ke) in Munins" :key="Ke" 
               :mImg="Munin.mImg" 
               :tl='Munin.tl'
               :tl2='Munin.tl2'
               :b='Munin.b'>
               </bmitm>
         </div>
   </div>                 
</template>

<script>
export default {
    data(){
        return{
             Munins:[
                       {
                           mImg:"Gold-bar.png",
                           tl:"Youga Master",
                           tl2:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  natus est debitis eius fuga aliquid, illum libero ut explicabo at enim! Quod animi quas possimus velit.",

                           b:"Sell"
                        },
                        {
                           mImg:"Gold-bar.png",
                           tl:"Youga Master",
                           tl2:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  natus est debitis eius fuga aliquid, illum libero ut explicabo at enim! Quod animi quas possimus velit.",
                           
                           b:"Sell"
                        },
                        {
                           mImg:"Gold-bar.png",
                           tl:"Youga Master",
                           tl2:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  natus est debitis eius fuga aliquid, illum libero ut explicabo at enim! Quod animi quas possimus velit.",
                           
                           b:"Sell"
                        },
                        {
                           mImg:"Gold-bar.png",
                           tl:"Youga Master",
                           tl2:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  natus est debitis eius fuga aliquid, illum libero ut explicabo at enim! Quod animi quas possimus velit.",
                           
                           b:"Sell"
                        },
                        {
                           mImg:"Gold-bar.png",
                           tl:"Youga Master",
                           tl2:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  natus est debitis eius fuga aliquid, illum libero ut explicabo at enim! Quod animi quas possimus velit.",
                           
                           b:"Sell"
                        },
             ]
    }
}
}
</script>