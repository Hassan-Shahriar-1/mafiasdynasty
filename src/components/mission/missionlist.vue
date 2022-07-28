<template>
<div class="mb-2">
    <div class="card-body p-0 tmibg">
        <div class="card blksdo">
            <img class="card-img img-fluid" style="height:130px;" src='../../assets/img/land/colombia.png' alt=""/>
            <div class="card-img-overlay">
                <h4 class="card-text titlefnt text-center">
                    {{msnlst.cpname}} <router-link to="missionintro"><span class="float-left"><i class="fas fa-arrow-circle-left siz25"></i></span></router-link>
                </h4>
                <h6 class="card-text subtitlefnt text-center">Subtitle here</h6>
            </div>
        </div>
    </div>

    <div class="card  m-2 bdr1" v-for="(mlst,i) in msnlst.mission" :key="i">
            <div class="card-header px-1 blkgry">
                <h4 class="titlefnt">{{mlst[0].tl}}</h4>
            </div>

        <div class="card-body p-1 blkd50">
            <div class="row no-gutters">
                <div class="col-6 "><h4 class="subtitlefnt siz20 pl-2">Requirments</h4> <br> <div class="bMbg3 bnrbxsdo  p-1 rounded mx-1"> <h6 class="dtlsfnt py-1"> <div class=" iC-rage incb1"></div>{{randomNumber}}</h6>   <h6 class="dtlsfnt  py-1"> <div class=" iC-rage incb1"></div>{{randomNumber}}</h6></div></div>
                <div class="col-6 "><h4 class="subtitlefnt siz20 pl-2">Rewards</h4> <br> <div class="bMbg3 bnrbxsdo   p-1 rounded mx-1"> <h6 class="dtlsfnt  py-1"> <div class=" iC-cash incb1"></div> {{randomNumber}}</h6>  <h6 class="dtlsfnt  py-1 "><div class=" iC-energy incb1"></div>{{randomNumber}}</h6></div></div>
            </div>
            <div class="row Gp0m0 mt-2">
                <div class="col-8 px-1">
                    <div class="progress n_bar-a w-100" style="height:10px;">
                        <div class="progress-bar clRBgreen bgD0 "  role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> 
                    </div>
                    <h6 class="text-left text-white">100% complete</h6>
                </div>
                <div class="col-4 px-1"><router-link :to="{name:'mission',params:{mid:i}}"><div class="btn  py-2 nBtn btn-block bgD8 btnbfnt sizv20">Do job</div></router-link></div>
            </div>
        </div>
    </div>
</div>   

</template>
<script>
export default ({
    props:['list'],
    data() {
        
        return{ 
            randomNumber:'',
            msnlst:'',
            itmsrc:'https://mafiasrival.com/item/'
                    
        }
    },

    methods:{
        domisson(mid){
            this.$mgo.gt('/domsn'+mid,(response)=>{
                console.log(response);
            })
        }
 
   },
   
   created() {
       // console.log(this.$route.params.list);
       this.msnlst=this.$route.params.list
      // console.log('data',this.msnlst)
   },

 

   
})
</script>
