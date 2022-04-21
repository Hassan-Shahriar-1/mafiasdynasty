<template>
    <div>

      <div class="blkred p-2 siz17">
      <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack('event ended')"
      :start-time="tmr"
      :end-time="end"
      :interval="1000"
      :start-label="'Until start:'"
      :end-label="' Time Left:'"
      label-position="begin"
      :end-text="'Event ended!'"
      :day-txt="'days'"
      :hour-txt="'hours'"
      :minutes-txt="'minutes'"
      :seconds-txt="'seconds'">
    </vue-countdown-timer>
    </div>
        <div class="card Gp0m0">
            <div class="card-header blkgry"><h2 class="titlefnt">Avater Shop <span> <i class="fas fa-info-circle siz25 float-right"></i></span></h2> </div>
            <div class="card-body Gp0m0">
                <div class="row Gp0m0">
                
                        <div class="card Gp0m0">
                            <div class="card-header blkgry"><h1 class="titlefnt Gp0m0 siz15">RED Female set of Dynasty</h1></div>
                            <div class="card-body Gp0m0">
                                <div class="row Gp0m0 pt-2">
                                    <div class="col-5 Gp0m0">
                                        <img class="card-img" src="../../assets/img/custom profile/01.jpg"  alt="">
                                        <h4 class="subtitlefnt">Gold 25 </h4>
                                            <div class="row Gp0m0 pt-2  ">
                                                <div class="col-12 px-1 mt-1"><div class="btn nBtn nBbg Anm-outln15si button4 px-1 siz15">Buy Now</div></div>
                                                <div class="col-12 px-1 mt-1"><div class="btn nBtn nBbg Anm-outln15si button6 mt-1 px-1 siz15">Gift Clan</div></div>
                                            </div>
                                    </div>

                                    <div class="col-7 px-1">
                                        <div class="btn-group rounded jaldi bw100 mb-2  w-100"  role="group" aria-label="..." >
                                            <div   class="btn nBtn tmibg Gp0m0 "><i class="fab fa-galactic-senate"></i> <br> <h4 class="siz10">Male</h4></div>
                                            <div  class="btn nBtn tmibg Gp0m0 "><i class="fas fa-dragon"></i> <br><h4 class="siz10">Female</h4></div> 
                                             <div   class="btn nBtn tmibg Gp0m0 "><i class="fab fa-galactic-senate"></i> <br> <h4 class="siz10">Male</h4></div>
                                            <div  class="btn nBtn tmibg Gp0m0 "><i class="fas fa-dragon"></i> <br><h4 class="siz10">Female</h4></div>                                           
                                        </div>
                                        <carousel :autoplay="true" :height="200" :dots="false" :nav="false" :items='1' :data="data"> 
                                            <div class="card Gp0m0 blkgry" v-for="(avtrsp, i) in avtrshop" :key="i" >
                                       
                                            <div class="card-header p-2 blkgry"><h2 class="titlefnt siz15">{{avtrsp.title}}</h2></div>
                                            <div class="card-body Gp0m0">
                                                <img class="card-img" style="height:180px;" :src="require('/src/assets/img/bannar/'+avtrsp.img)">
                                                <h4 class="subtitlefnt">Gold 25 </h4>
                                                <div class="row Gp0m0 mt-2">
                                                    <div class="col-6 Gp0m0"><div class="btn mr-4 nBtn nBbg Anm-outln15si button4">Buy</div></div>
                                                    <div class="col-6 Gp0m0"><div class="btn ml-2 nBtn nBbg Anm-outln15si button5">Gift</div></div>
                                                </div>
                                            </div>
                                            </div>
                                        </carousel>
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
import carousel from 'vue-owl-carousel'
export default {
  components: { carousel },
    data() {
        return{

               itm:[],
            abl:[],
            fml:[],
            avtst:[],
            bg:[],
            tmr:'',
            end:'',
    /*         avtr:[
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
              {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
                        {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
              {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            {
                mg:"01.jpg",
            },
            
            ], */

                      avtrshop:[
                 {
                     img:"1.jpg",
                     title:"Black Tanker 2"
                 },
                 {
                     img:"2.jpg",
                     title:"Black Tanker 2"
                 },
                 {
                     img:"3.jpg",
                     title:"Black Tanker 2"
                 },
                 {
                     img:"4.jpg",
                     title:"Black Tanker 2"
                 },
                 {
                     img:"5.jpg",
                     title:"Black Tanker 2"
                 },
                 {
                     img:"6.jpg",
                     title:"Black Tanker 2"
                 }
            
             ]
        }
        
    },
      beforeCreate(){
      this.$mgo.gt('mp/limited/editiopn/avt',(rs)=>{
          console.log(rs);
          this.tmr=rs.data['sttm'];
          this.end=rs.data['endtm'];
          console.log(this.tmr,'here is start timer');
          console.log(rs);
      })
    }
}
</script>