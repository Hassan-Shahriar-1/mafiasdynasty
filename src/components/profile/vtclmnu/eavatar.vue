<template>
    <div>
        <div class="card Gp0m0">
            <div class="card-header blkgry">
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
                    <div class="col-7 Gp0m0">
                        <div v-if="edt!=''">
                            <img  class="card-img " v-if="bdy!=''"  :src="bdy" alt="">
                            <div class="card-img-overlay Gp0m0" v-if="hr!=''"><img class="card-img" src="../../../assets/img/avatar/H2.png" alt=""></div>
                            <div class="card-img-overlay Gp0m0" v-if="pnt!=''"> <img class="card-img"  src="../../../assets/img/avatar/pant2.png" alt=""></div>
                            <div class="card-img-overlay Gp0m0" v-if="trs!=''"> <img class="card-img"  src="../../../assets/img/avatar/tops.png" alt=""></div>
                            <div class="card-img-overlay Gp0m0" v-if="she!=''"> <img class="card-img"  src="../../../assets/img/avatar/shocks.png" alt=""></div>  
                            <div class="card-img-overlay Gp0m0" v-if="otr!=''"> <img class="card-img"  src="../../../assets/img/avatar/cat.png" alt=""></div> 
                        </div>

                        <div v-else>
                            <img  class="card-img "   src="../../../assets/img/avatar/H2.png">                
                        </div>
                        <div class="btn nBbg nBtn btn-lg btn-block tmibg text-center"  @click="print()">Save</div>
                            <img class="card-img" :src="output">
                    </div>
                
                    <div class="col-5 Gp0m0 tmibg2">
                        <div class="card Gp0m0 ">
                            <div class="card-header Gp0m0"><h4 class="text-center blkgry">{{ title }}</h4></div>
                            <div class="card-body Gp0m0">
                                <div class="row Gp0m0"  style="height:320px; overflow:scroll;" v-if="chk!=''">
                                    <div class="col-6 Gp0m0 p-1 " v-for="(lst ,i) in list " :key="i" @click="vwavt(title,lst.img)"> <img  class="card-img border card-img-overlay Gp0m0" :src="lst.img" alt="" @click="vwavt(title,lst.img)"></div>
                                </div>
                                <div class="row Gp0m0"  style="height:440px; overflow:scroll;" v-else>
                                    <div class="col-6 Gp0m0 p-1 " v-for="(lst ,i) in list " :key="i" @click="vwavt(title,lst.img)"> <img  class="card-img border" :src="lst.img" alt=""></div>
                                    
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
export default {
    data() {
        return{
            list:[],
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
            output: null,
            bdy:'',
            famlr:'',
            pnt:'',
            trs:'',
            she:'',
            hr:'',
            otr:'',
            edt:'',
            info:false,
        }  
    },
    mounted() {
        this.bdy,this.famlr,this.pnt,this.trs,this.she,this.hr
        
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

        async print(){
      const el = this.$refs.printMe;
      // add option type to get the image version
      // if not provided the promise will return 
      // the canvas.
      const options = {
        type: 'dataURL'
      }
      this.output = await this.$html2canvas(el, options);
    },
  
 
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
        this.edt='edit',
        console.log(val,'ok',img)
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
    },
  
        setavt(img){
            console.log(img)
            this.$mgo.gp('avater/setavt',{file:img},(res)=>{
                console.log(res);
            })
        }

    }
}
</script>