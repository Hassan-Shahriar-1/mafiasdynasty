function CnvImgMvrLrRt(cnvSrs, url, mXwsiz, htImp){
    var imgTag = new Image();
    var canvads = document.getElementById(cnvSrs); 
    var ctx = canvads.getContext("2d"),  x = 0, y = 0,mvrX = 0, lstsix, strtsz=mvrX, Imgw, Anmtr,dir = 'rt', cw = canvads.width;
    var speed = 1; 
    //canvads.width = mXwsiz;
    imgTag.onload = animateBgnr;
    imgTag.src = url;   

    function animateBgnr() {
        Imgw =  imgTag.width; 
        lstsix = cw-Imgw; 
        ctx.drawImage(imgTag, strtsz, y);  
        animate();
    }
    function animate() {
        ctx.clearRect(0, 0, canvads.width, canvads.height);
        x += mvrX;
        if(x<=lstsix){       
            if(lstsix<0){     
                dir = 'lft';
            }else{                       
                dir = 'rt';
            }
        }
        if(dir=='rt'){
            mvrX = -speed;
            
        }
    
        if(dir=='lft'){
            mvrX = +speed;
            if(x>=strtsz){
                dir='rt';
            }
        }          
        if(htImp!=undefined){
            ctx.drawImage(imgTag, x, y, imgTag.width, canvads.height);
        }else{
            ctx.drawImage(imgTag, x, y);
        }

       

        Anmtr = requestAnimationFrame(animate);
    }

}
CnvImgMvrLrRt('ocanvas', "https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg", '530');

//CnvImgMvrLrRt('ocanvasiufgb', "img/nice_illustration-wallpaper-3840x2160.jpg", '532');












 
$( window ).ready(resIzers).resize(resIzers);
function resIzers(){
    if($('.mainC').width() < 532){
        $('.mainCp').width('100%'); 
        $('canvas').width($('.mainC').width());
    }else{
        $('.mainCp').css('max-width','532px').css('width','532px');
        $('canvas').css('max-width','532px').css('width','532px');
    }
}  






/// stop cancelAnimationFrame(Anmtr);
 

/* 
function animate() {
  ctx.clearRect(0, 0, canvads.width, canvads.height);  // clear canvas
  ctx.drawImage(imgTag, x, y);                       // draw image at current position
  x -= incrb;
 
  if (x > lmtr){ 
     var  lmtr = -imgTag.width+canvads.width;
      requestAnimationFrame(animate);
      console.log(x, lmtr);
   }   // loop
  // var inLrb = lmtr+incrb;
   if (x == inLrb){ 
       
       console.log('time to revers');
       incrb = -4;       
   }
   //if (x < canvads.width){ 
   /*  inLrb = +lmtr;
   if (x == inLrb){
    lmtr = -imgTag.width+canvads.width;
     console.log(x, lmtr);
     incrb = 4; 
   } */
  // console.log('imlrd = '+inLrb);
// } */
 