<template>
          <div class="m-0 ptnbg" style="overflow: hidden;height:100vh; margin-bottom:-60px!important;">
                  <!-- <div class="lgnFromIcn mt-3 ">
                      <div class="row justify-content-sm-center">
                          <div class="col-12"> <img src="../assets/img/logo.png" class='img-thumbnail'></div>
                      </div>
                  </div> -->

              <!-- <div class="row Gp0m0">
                  <div class="col-12 text-center mt-5" >              
                  <svg class="text-center ml-5" viewBox="0 0 300 300" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                      <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                     
                      <stop offset="0%" stop-color="hsl(11,1%,15%)" />
                       <stop offset="100%" stop-color="hsl(1,95%,35%)" />
                      </linearGradient>
                      <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                  
                      <stop offset="0%" stop-color="hsl(11,1%,15%)" />
                        <stop offset="100%" stop-color="hsl(1,95%,35%)" />
                      </linearGradient>
                  </defs>
                  <circle class="pl__ring" cx="100" cy="100" r="82" fill="none" stroke="url(#pl-grad1)" stroke-width="36" stroke-dasharray="0 257 1 257" stroke-dashoffset="0.01" stroke-linecap="round" transform="rotate(-90,100,100)" />
                  <line class="pl__ball" stroke="url(#pl-grad2)" x1="100" y1="18" x2="100.01" y2="182" stroke-width="36" stroke-dasharray="1 165" stroke-linecap="round" />
                  </svg>
                  </div>
              </div>
              <h4 class="text-center mt-2"> Loading <span class=" pl-2 loading-dots">•</span></h4> -->
                
            <div class="fixed-bottom mrgtp95 px-4">
                <div class="row Gp0m0" style="margin-bottom:15%;">
                  <div class="col-12">
                       <h5 class="siz20 text-center">Loading <span class=" pl-2 loading-dots">•</span></h5>
                    <div class="progress n_bar-a" style="height:18px;">
                        <div class="progress-bar mv-value clRBrd bgD0" id="itmBr" style="width: 100%;">
                        </div>
                    </div>
                    </div>
                </div>
              <div class="row  Gp0m0 text-center">
                <div class="col-4 px-0"><a href="https://mafiasrival.com/" class="btn-lg button6 nBtn d-block"><i class="fab fa-firefox-browser"></i></a></div>
                <div class="col-4 px-0"><a href="https://www.facebook.com/mafiasrivalgame" class="btn-lg button3 nBtn d-block"><i class="fab fa-facebook"></i></a></div>
                <div class="col-4 px-0"><router-link to="/gmail"><a href="#" class="btn-lg button7 nBtn d-block"><i class="far fa-envelope"></i></a></router-link></div>
              </div>
          </div>
       </div>

</template>

<style>
.mrgtp95 {
margin-bottom:5%; 
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



.loading-dots {
  color: rgba(255,2555,255,0);
  animation-name: loading-dots-animation;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes loading-dots-animation {
  0% {
    text-shadow: -0.5em 0 0 rgba(255,2555,255,.6), 0em 0 0 rgba(255,2555,255,.2), 0.5em 0 0 rgba(255,2555,255,.2);
  }
   20% {
    text-shadow: -0.5em 0 0 rgba(255,2555,255,1), 0em 0 0 rgba(255,2555,255,.6), 0.5em 0 0 rgba(255,2555,255,.2);
  }
  40% {
    text-shadow: -0.5em 0 0 rgba(255,2555,255,.6), 0em 0 0 rgba(255,2555,255,1), 0.5em 0 0 rgba(255,2555,255,0.6);
  }
  60% {
    text-shadow: -0.5em 0 0 rgba(255,2555,255,.2), 0em 0 0 rgba(255,2555,255,.6), 0.5em 0 0 rgba(255,2555,255,1);
  }
  80% {
    text-shadow: -0.5em 0 0 rgba(255,2555,255,.2), 0em 0 0 rgba(255,2555,255,.2), 0.5em 0 0 rgba(255,2555,255,.6);
  }
  100% {
    text-shadow: -0.5em 0 0 rgba(255,2555,255,.6), 0em 0 0 rgba(255,2555,255,.2), 0.5em 0 0 rgba(255,2555,255,.2);
  }
}
</style>
<script>
export default{
}
</script>