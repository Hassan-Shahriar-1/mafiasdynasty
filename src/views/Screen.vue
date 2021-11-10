<template>
  <div class="mainC">
      <div class="mainCp ptnbg ">
          <div class="signup-form m-0">
                  <div class="lgnFromIcn mt-3 ">
                      <div class="row justify-content-sm-center">
                          <div class="col-12"> <img src="../assets/img/logo.png" class='img-thumbnail'></div>
                      </div>
                  </div>
              <div class="text-center" style="margin-left:130px; margin-top:100px;">              
              <svg class="pl" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                  <stop offset="0%" stop-color="hsl(9,90%,55%)" />
                  <stop offset="100%" stop-color="hsl(223,90%,55%)" />
                  </linearGradient>
                  <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="hsl(3,90%,55%)" />
                  <stop offset="100%" stop-color="hsl(223,90%,55%)" />
                  </linearGradient>
              </defs>
              <circle class="pl__ring" cx="100" cy="100" r="82" fill="none" stroke="url(#pl-grad1)" stroke-width="36" stroke-dasharray="0 257 1 257" stroke-dashoffset="0.01" stroke-linecap="round" transform="rotate(-90,100,100)" />
              <line class="pl__ball" stroke="url(#pl-grad2)" x1="100" y1="18" x2="100.01" y2="182" stroke-width="36" stroke-dasharray="1 165" stroke-linecap="round" />
              </svg>
              </div>
              <h4 class="text-center mt-2"> Loading...</h4>
                
            <div class="footer mrgtp95">
                <div class="row Gp0m0 ">
                    <div class="progress n_bar-a  mv-value " style="height:20px;">
                        <div class="progress-bar clRBrd bgD0" id="itmBr" style="width: 100%;">
                            <h5>Loading...</h5>
                        </div>
                    </div>
                </div>
            </div>
        <div class="row  Gp0m0 text-center fixed-bottom mb-5">
          <div class="col-4 px-0"><a href="#" class="btn-lg button6 nBtn d-block"><i class="fab fa-firefox-browser"></i></a></div>
          <div class="col-4 px-0"><a href="#" class="btn-lg button3 nBtn d-block"><i class="fab fa-facebook"></i></a></div>
          <div class="col-4 px-0"><a href="#" class="btn-lg button7 nBtn d-block"><i class="fas fa-headset"></i></a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.mrgtp95 {
  
margin-top:95%;
}


.pl {
  display: block;
  width: 6.25em;
  height: 6.25em;
}
.pl__ring, .pl__ball {
  animation: ring 2s ease-out infinite;
}
.pl__ball {
  animation-name: ball;
}

/* Dark theme  */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: hsl(var(--hue),10%,10%);
    --fg: hsl(var(--hue),10%,90%);
  }
}

/* Animation */
@keyframes ring {
  from {
    stroke-dasharray: 0 257 0 0 1 0 0 258;
  }
  25% {
    stroke-dasharray: 0 0 0 0 257 0 258 0;
  }
  50%, to {
    stroke-dasharray: 0 0 0 0 0 515 0 0;
  }
}
@keyframes ball {
  from, 50% {
    animation-timing-function: ease-in;
    stroke-dashoffset: 1;
  }
  64% {
    animation-timing-function: ease-in;
    stroke-dashoffset: -109;
  }
  78% {
    animation-timing-function: ease-in;
    stroke-dashoffset: -145;
  }
  92% {
    animation-timing-function: ease-in;
    stroke-dashoffset: -157;
  }
  57%, 71%, 85%, 99%, to {
    animation-timing-function: ease-out;
    stroke-dashoffset: -163;
  }
}


</style>
<script>
export default{
  
 


}
</script>