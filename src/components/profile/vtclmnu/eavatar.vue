<template>
    <div>
        <div class="card Gp0m0">
            <div class="card-header blkgry">
                  <!--  <progress-bar bg-color="linear-gradient( #999, #000)" size="10" bar-border-radius="10" bar-color="linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgb(224, 5, 5 ,84)  55%, rgb(224 5 5) 100%)" ref="saha"  :val='0'  >
                  </progress-bar> -->
                     
                <h4 class="text-left subtitlefnt">
                    Customize Avater
                    <h4 class="float-right"><i class="fas fa-info-circle"  @click="info ^= true"></i></h4>
                </h4> 
            </div>
            <h6 class="p-1 px-1 dtlsfnt blk text-center" v-show="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio similique nulla aliquam,
                    amet asperiores nam minima odio iusto officiis 
                    voluptatem eveniet natus. Atque quidem, voluptate numquam laborum accusantium architecto?
            </h6>

            <div class="card-body pt-1 Gp0m0">

         
                <div class="bw100 w-100 rounded jaldi blkgry" role="group" aria-label="...">
                    <div class="btn-group  bw100 w-100  sizv13">
                        <div  tag="button" class="btn nBtn Gp0m0 blkgry" @click="bind('torso')">  <i class="fas fa-gopuram"></i> <br><h4 class="siz15">torso</h4></div>
                        <div  tag="button" class="btn nBtn Gp0m0 blkgry" @click="bind('shirt')"><i class="fas fa-sitemap"></i> <br> <h4 class="siz15">Shirt</h4> </div>
                        <div  tag="button" class="btn nBtn Gp0m0 blkgry" @click="bind('pant')"><i class="fas fa-trophy"></i><br><h4 class="siz15">Pant</h4></div>
                        <div  tag="button" class="btn nBtn Gp0m0 blkgry" @click="bind('head')"><i class="fas fa-glass-cheers"></i> <br><h4 class="siz15">Head</h4></div>
                        <div  tag="button" class="btn nBtn Gp0m0 blkgry" @click="bind('other')"><i class="fas fa-sitemap"></i> <br> <h4 class="siz15">Other</h4> </div>
                        <div  tag="button" class="btn nBtn Gp0m0 blkgry" @click="bind('body')"><i class="fas fa-trophy"></i><br><h4 class="siz15">Body</h4></div>
                        <div  tag="button" class="btn nBtn Gp0m0 blkgry" @click="bind('familiar')"><i class="fas fa-glass-cheers"></i> <br><h4 class="siz15">Familiars</h4></div>
                    </div>  
                </div>
                <div class="row Gp0m0">
                    <div class="col-7 Gp0m0" >
                        <div class="card" >
                            <div v-if="edt!=''" class="clsss"   style="background:rgba(207, 33, 33, 0.514)">
                                <img  class="card-img"  id="stream1" alt="" v-if="bdy!=''" :src="bdy">
                                <div class="Gp0m0 card-img-overlay "  v-if="hr!=''">  <img class="card-img" id="scream2" src="http://192.168.1.107:8080/img/cat.23708051.png" alt=""></div>
                                <div class="Gp0m0 card-img-overlay "  v-if="pnt!=''"> <img class="card-img" id="scream3" src="../../../assets/img/avatar/pant2.png" alt=""></div>
                                <div class="Gp0m0 card-img-overlay "  v-if="trs!=''"> <img class="card-img" id="scream4" src="../../../assets/img/avatar/tops.png" alt=""></div>
                                <div class="Gp0m0 card-img-overlay "  v-if="she!=''"> <img class="card-img" id="scream5" src="../../../assets/img/avatar/shocks.png" alt=""></div>  
                                <div class="Gp0m0 card-img-overlay "  v-if="otr!=''"> <img class="card-img" id="scream6" src="../../../assets/img/avatar/cat.png" alt=""></div> 
                            </div>
                            <div v-else>
                                <img class="card-img" src="../../../assets/img/avatar/H2.png">                
                            </div>
                        </div>
                        <div class="btn nBbg nBtn  btn-block tmibg text-center" style="z-index:+155;" @click="saveimg()">Save</div>
                                <!--   <img class="card-img " :src="output"> -->
                       <!--  <canvas id="alpha" class="my-2" width="236" height="500" style="border:1px solid #d3d3d3;"></canvas> -->
                    </div>       

                    <div class="col-5 Gp0m0 tmibg2">
                        <div class="card Gp0m0 ">
                            <div class="card-header Gp0m0"><h4 class="text-center blkgry">{{ title }}</h4></div>
                            <div class="card-body Gp0m0">
                                <div class="row Gp0m0"  style="height:420px; overflow:scroll;" v-if="chk!=''">
                                    <div class="col-6 Gp0m0 p-1 " v-for="(lst ,i) in list " :key="i" @click="vwavt(title,lst.img)">
                                         <img  class="card-img border card-img-overlay Gp0m0" :src="lst.img" alt="" @click="vwavt(title,lst.img)">
                                    </div>
                                </div>
                                <div class="row Gp0m0"  style="height:420px; overflow:scroll;" v-else>
                                    <div class="col-6 Gp0m0 p-1 " v-for="(lst ,i) in list " :key="i" @click="vwavt(title,lst.img)">
                                         <img  class="card-img border" :src="lst.img" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mergeImages from 'merge-images';



 

export default {
    data() {
        return{
            progress: 'progress-bar',
            clRBrd: 'clRBrd',
            bgD0: 'bgD0',
            output: null,
            list:[],
            additionalImages:Array,
            torso:[],
            shoe:[],
            pant:[],
            head:[],
            othr:[],
            body:[],
            fmlr:[],
            title:'',
            chk:'',
            userProfilePic:[],
            bdy:'',
            famlr:'',
            pnt:'',
            trs:'',
            she:'',
            hr:'',
            otr:'',
            edt:'',
            info:false,
            imglist:[],
            mergelst:[],
        }  
    },
    mounted:function() {
        this.bdy,this.famlr,this.pnt,this.trs,this.she,this.hr,this.vall

        
    },

    updated(){
        this.vall
    },
    beforeCreate(){
        this.$mgo.gt('avater/set',(res)=>{
            console.log(res);
             if(res.sts=='ok'){
                res.data.forEach((dt)=>{
                    if(dt.typ=='torso'){
                        this.torso.push(dt)
                    }else if(dt.typ=='pant'){
                        this.pant.push(dt)
                    }else if(dt.typ=='head'){
                        this.head.push(dt)
                    }else if(dt.typ=='other'){
                        this.othr.push(dt)
                    }else if(dt.typ=='fmlr'){
                        this.fmlr.push(dt)
                    }else if(dt.typ=='shoe'){
                        this.shoe.push(dt)
                    }
                    else {
                        this.shirt.push(dt)
                    }
                })
                res.bdys.forEach((dt)=>{
                    this.body.push(dt)
                })
            } 
            if(res.sts=='bdy'){
                this.body=res.bdy
            }
        })
        this.list=this.torso
        
    },
    created() {
        this.bind('torso')
        this.list=this.torso
        console.log('created',this.torso)
        console.log('why')
    },

    methods:{
        

 
        bind(val){
            
            
            
            this.title=val;
            if(val=='torso'){
                this.chk=''
                this.list=this.torso
            }else if(val=='pant'){
                this.chk=''
                this.list=this.pant
            }else if(val=='head'){
                this.chk=''
                this.list=this.head
            }else if(val=='other'){
                this.chk=''
                this.list=this.othr
            }else if(val=='familiar'){
                this.chk=''
                this.list=this.fmlr
            }else if(val=='shoe'){
                this.chk=''
                this.list=this.shoe
            }else{
                this.chk='body'
                this.list=this.body
            } 
            
        },

        vwavt(val,img){

            this.imglist[val]=img
            this.edt='edit'
            
            if(val=='body'){
                this.bdy=img
            }else if(val=='pant'){
                this.pnt=img
            }else if(val=='head'){
                this.hr=img
            }else if(val=='shoe'){
                    this.she=img
            }else if(val=='familiar'){
                this.famlr=img
            }else if(val=='torso'){
                this.trs=img
            }else{
                this.otr=img
            }
            console.log('img here ',this.imglist)
        },
        /* Avater customization methods start */
/* hasdgh(){
     const getContext = () => document.getElementById('my-canvas').getContext('2d');
// It's better to use async image loading.
const loadImage = url => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`load ${url} fail`));
    img.src = url;
    console.log('this is uma',img.src)
  });
};
// Here, I created a function to draw image.
const depict = options => {
  const ctx = getContext();
  // And this is the key to this solution
  // Always remember to make a copy of original object, then it just works :)
  const myOptions = Object.assign({}, options);
  return loadImage(myOptions.uri).then(img => {
    ctx.drawImage(img, myOptions.x, myOptions.y, myOptions.sw, myOptions.sh);
  });
};
const imgs = [
  { uri: 'https://mafiasrival.com/avater/body/bdy1.png',  },
  { uri: 'http://192.168.1.107:8080/img/H2.b7170cf4.png',  },
  { uri: 'http://192.168.1.107:8080/img/tops.1f16861a.png',  },
  { uri: 'http://192.168.1.107:8080/img/shocks.2de2c037.png',  },
  { uri: 'http://192.168.1.107:8080/img/pant2.ed6c4fd6.png',  },
  { uri: 'http://192.168.1.107:8080/img/cat.23708051.png', x: 0, y:  0, sw: 236, sh: 500 },
];
console.log('this is final source',this.image)
imgs.forEach(depict);
},
  mt() {
        // Break All
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
       const image = [
  { uri: 'https://mafiasrival.com/avater/body/bdy1.png'},
  { uri: 'https://mafiasrival.com/avater/body/bdy1.png' },
  { uri: 'https://mafiasrival.com/avater/body/bdy1.png' },
  { uri: 'https://mafiasrival.com/avater/body/bdy1.png' },
  { uri: 'https://mafiasrival.com/avater/body/bdy1.png' },
  { uri: 'https://mafiasrival.com/avater/body/bdy1.png' },
];
         let img2 = document.getElementById("scream2");
        let img3 = document.getElementById("scream3");
        let img4 = document.getElementById("scream4");
        let img5 = document.getElementById("scream5");
        let img6 = document.getElementById("scream6"); 
            ctx.drawImage(image, 0, 0,c.width, c.height);
            console.log('image here',image) 
             ctx.drawImage(image, 0, 0,c.width, c.height)  
            const anchor = document.createElement('a')
            anchor.href = image.toDataURL()
            anchor.sendPhoto = this.image.src
            anchor.click()
            console.log('aanchor here',anchor)
            console.log('image here',image)       
}, */
        /* Avater customization methods End */
        main(){
            var canvas=document.getElementById("alpha");
            var ctx=canvas.getContext("2d");
            var imageObj1 = new Image();
            var imageObj2 = new Image();
            var imageObj3 = new Image();
            imageObj1.src = "http://192.168.1.107:8080/img/H2.b7170cf4.png"
            imageObj1.onload = function() {
            ctx.drawImage(imageObj1, 0, 0, 236, 500);
            imageObj2.src = "https://mafiasrival.com/avater/body/bdy1.png";
            imageObj2.onload = function() {
                ctx.drawImage(imageObj2, 0, 0, 236, 500);
                imageObj3.src = "http://192.168.1.107:8080/img/tops.1f16861a.png";
            imageObj3.onload = function() {
                ctx.drawImage(imageObj3, 0, 0, 236, 500);

                var img = canvas.toDataURL("image/png");
                document.write('<img src="' + img + '" width="328" height="526"/>');
                console.log('shdfh',this.img)
            }
            }
            };
        },

        saveimg(){
            Object.keys(this.imglist
            ).forEach((val)=>{
                this.mergelst.push({'src':this.imglist[val],x:0,y:0})
            })
                 let imageToSave = new Image();
                imageToSave.crossOrigin="anonymous"
                 mergeImages(this.mergelst).then((b64)=>{
                    console.log(b64)
                 })
                /* .then((img)=>{
                    img.write('out.png', () => console.log('done'));
                }); */
        },
        setavt(img){
            console.log(img)
            this.$mgo.gp('avater/setavt',{file:img},(res)=>{
                console.log(res);
            })
        },
    }
}
</script>