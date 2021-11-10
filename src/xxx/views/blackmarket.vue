<template>
            <div class="container Gp0m0 Mainbg ">
                <div class="StryCntnr">
                    
                   <tops></tops>
                 
                    

                    <div class="mrgnbtm">


                    <ul class="nav nav-tabs bMbg p-2 text-gray " id="myTab" role="tablist" style="margin-bottom: -3%;">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="about-tab" data-bs-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="true">About</a>

                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="wall-tab" data-bs-toggle="tab" href="#wall" role="tab" aria-controls="wall" aria-selected="false">Wall</a>

                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="trophy-tab" data-bs-toggle="tab" href="#trophy" role="tab" aria-controls="trophy" aria-selected="false">Trophy</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="ablities-tab" data-bs-toggle="tab" href="#ablities" role="tab" aria-controls="abilities" aria-selected="false">Ablitis</a>
                        </li>


                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
                            
                                        <!-- xcbd --> 
                                       

                                      
                                       <bmkitm v-for="(Munin, Ke) in Munins" :key="Ke" 
                                        :mImg="Munin.mImg" 
                                        :tl='Munin.tl'
                                        :tl2='Munin.tl2'
                                        :tl3='Munin.tl3'
                                        :tl4='Munin.tl4'
                                        :b1='Munin.b1'
                                        :b2='Munin.b2'></bmkitm>
                                    
                                       

                                        </div>

                                    </div>
                                </div>
                                  

                                 <!--gmfooter content start-->
                                 <foots></foots>
                                   
                                   
                                </div>
                            </div>
                             
                        <!-- </div>
                    </div>
                 </div> -->    
</template>


<script>
export default {
    data(){
        return{
             Munins:[

                       {
                           mImg:"/src/assets/img/item/Gold-bar.jpg",
                           tl:"Youga Master",
                           tl2:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  natus est debitis eius fuga aliquid, illum libero ut explicabo at enim! Quod animi quas possimus velit.",

                           b1:"Buy",
                           b2:"sell"
                        },
                        {
                           mImg:"/src/assets/img/item/Gold-bar.jpg",
                           tl:"Youga Master",
                           tl2:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  natus est debitis eius fuga aliquid, illum libero ut explicabo at enim! Quod animi quas possimus velit.",
                           
                           b1:"Buy",
                           b2:"sell"
                        },
                        {
                           mImg:"/src/assets/img/item/Gold-bar.jpg",
                           tl:"Youga Master",
                           tl2:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  natus est debitis eius fuga aliquid, illum libero ut explicabo at enim! Quod animi quas possimus velit.",
                           
                           b1:"Buy",
                           b2:"sell"
                        },
                        {
                           mImg:"/src/assets/img/item/Gold-bar.jpg",
                           tl:"Youga Master",
                           tl2:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  natus est debitis eius fuga aliquid, illum libero ut explicabo at enim! Quod animi quas possimus velit.",
                           
                           b1:"Buy",
                           b2:"sell"
                        },
                        {
                           mImg:"/src/assets/img/item/Gold-bar.jpg",
                           tl:"Youga Master",
                           tl2:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  natus est debitis eius fuga aliquid, illum libero ut explicabo at enim! Quod animi quas possimus velit.",
                           
                           b1:"Buy",
                           b2:"sell"
                        },
             ]
    }
}
}
</script>