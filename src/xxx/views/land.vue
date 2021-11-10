<template>
    <div class="bMbg">
        <tops></tops>
    <div class="py-4 bMsdo rounded">

        <div class="row Gp0m0 ">
         <div class="col-4 py-0">
             <img src="../assets/img/1.png"  class="card-img " alt="">
         </div>

         <div class="col-8 py-0 ">
             <h6 class="sizv20 text-left">Lorem Magni  Recusandae.</h6>
             <h6 class="sizv13 text-left">Lorem ipsum dolor sit amemolestiae vero manu janu nunu sit</h6>
         </div>
         </div>

         
         <div class="row Gp0m0 d-none">
             <div class="btn btn-lg btn-block nBtn button5 Gp0m0 py-1">buttonsingle</div>
         </div>

         <div class="row Gp0m0 d-none">
             <div class="col-6 Gp0m0 px-1"> <div class="btn btn-lg btn-block nBtn blkred Gp0m0 py-1">buttondbl</div></div>
             <div class="col-6 Gp0m0 px-1"> <div class="btn btn-lg btn-block nBtn blk Gp0m0 py-1">buttondbl</div></div>
         </div>

         <div class="row Gp0m0">

             <div class="col-4 Gp0m0 px-1"><div class="btn btn-lg btn-block nBtn blkred Gp0m0 py-1">button</div></div>
             <div class="col-4 Gp0m0 px-1"><div class="btn btn-lg btn-block nBtn blkppl2 Gp0m0 py-1">button</div></div>
             <div class="col-4 Gp0m0 px-1"><div class="btn btn-lg btn-block nBtn blkblue Gp0m0 py-1">button</div></div>
         </div>

         
        <div class="row Gp0m0">
            <div class="cardio">
  
  <div class="card_part card_part-one">
  </div>
  
   <!-- Photo 2 -->
  <div class="card_part card_part-two">

  </div>

  <!-- Photo 3 -->
  <div class="card_part card_part-three">
  </div>

  <!-- Photo 4 -->
  <div class="card_part card_part-four">
  </div>

</div>
</div>
    </div>
    <br>
<br>



<div class="slider">
  <div class="slide" id="slide-1"><img src="../assets/img/1.png"  class="card-img " alt=""></div>
  <div class="slide" id="slide-2"><img src="../assets/img/1.png"  class="card-img " alt=""></div>
  <div class="slide" id="slide-3"><img src="../assets/img/1.png"  class="card-img " alt=""></div>
  <div class="slide" id="slide-4"><img src="../assets//img/item/1.gif"  class="card-img " alt=""></div>
  <div class="slide" id="slide-5"><img src="../assets//img/item/1.gif"  class="card-img " alt=""></div>
  <div class="slide" id="slide-1"><img src="../assets//img/item/1.gif"  class="card-img " alt=""></div>
  <div class="slide" id="slide-2"><img src="../assets//img/item/1.gif"  class="card-img " alt=""></div>
  <div class="slide" id="slide-3"><img src="../assets//img/item/1.gif"  class="card-img " alt=""></div>
  <div class="slide" id="slide-4"><img src="../assets//img/item/1.gif"  class="card-img " alt=""></div>
  <div class="slide" id="slide-5"><img src="../assets/img/item/1.gif"  class="card-img " alt=""></div>
</div>
  
  <foots></foots>
    </div>
   
</template>

<style>


.cardio {
  position: relative;
  
  width: 530px;
  height: 200px;
  overflow: hidden;

  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

/*Light blue cover above the slide show*/
.cardio::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  z-index: 900;

  display: block;
  width: 530px;
  height: 100%;

  background-color: rgba(140, 22, 115, 0.2);
}

.card_part {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  
  transform: translateX( 700px );
  background-image: url( https://github.com/Flat-Pixels/assets_hosting/blob/master/picture_slides/1.jpg?raw=true );
  
  animation: opaqTransition 16s cubic-bezier(0, 0, 0, 0.97) infinite;
}


.card_part.card_part-two {
  z-index: 6;
  background-image: url( https://github.com/Flat-Pixels/assets_hosting/blob/master/picture_slides/2.jpg?raw=true );
  animation-delay: 4s;
}

.card_part.card_part-three {
  z-index: 5;
  background-image: url( https://github.com/Flat-Pixels/assets_hosting/blob/master/picture_slides/3.jpg?raw=true );
  animation-delay: 8s;
}

.card_part.card_part-four {
  z-index: 4;
  background-image: url( https://github.com/Flat-Pixels/assets_hosting/blob/master/picture_slides/4.jpg?raw=true );
  animation-delay: 12s;
}


@keyframes opaqTransition {
  3% { transform: translateX( 0 ); }
  25% { transform: translateX( 0 ); }
  28% { transform: translateX( -700px ); }
  100% { transform: translateX( -700px ); }
}
</style>