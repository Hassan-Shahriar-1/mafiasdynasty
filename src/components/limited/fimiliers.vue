<template>
    <div>



              <div class="blkred p-2">
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
        <h1>hi fimiliars</h1>

    <div class="row Gp0m0 blkgry my-2" v-for="(fmlr, i) in bimg" :key="i">	
		<div class="col-4"><img  :src="require('/src/assets/img/bannar/'+fmlr.img)"  class="card-img mt-4"></div> 
		<div class="col-8"> 
			<h5 class="b-h2" style="border-bottom:solid #fff 1px;">{{fmlr.fnm}}</h5>	
            <div class="col-12"> <h6 class="h6">Energy : 10</h6><h6 class="h6">Attack : {{fmlr.atk}}</h6><h6 class="h6">Defence : {{fmlr.dfnc}}</h6> <h6>Jewels {{fmlr.jwls}}</h6></div> 	
            <div class="row  Gp0m0 ">	
                        <div class="col-6 Gp0m0"> <button  type="button" class="nBtn mlr1 Anm-outln15si btn btn-lg button4 w-100"> <h6><strong>Buy</strong></h6></button></div> 
                        <div class="col-6 Gp0m0"> <button type="button" class="nBtn  btn Anm-outln15si btn-lg button5 w-100"> <h6><strong>Gift</strong></h6></button> </div>   	
            </div>
		</div> 							 
    </div>

    </div>
</template>

<script>
export default {
    data() {


        return{
                     itm:[],
            abl:[],
            fml:[],
            avtst:[],
            bg:[],
            tmr:'',
            end:'',

            bimg:[
                 {
                    img:"2.jpg",
                    fnm:"Sandra soraz",
                    atk:"5",
                    dfnc:"10",
                    jwls:"45"
                 }, {
                    img:"2.jpg",
                    fnm:"Sandra soraz",
                    atk:"5",
                    dfnc:"10",
                    jwls:"45"
                 }, {
                    img:"2.jpg",
                    fnm:"Sandra soraz",
                    atk:"5",
                    dfnc:"10",
                    jwls:"45"
                 }, {
                    img:"2.jpg",
                    fnm:"Sandra soraz",
                    atk:"5",
                    dfnc:"10",
                    jwls:"45"
                 },
             
               
            ]
        }
        
    },
       beforeCreate(){
      this.$mgo.gt('mp/limited/editiopn',(rs)=>{
          console.log(rs);
          this.tmr=rs.data['tmr'][0]['sttm'];
          this.end=rs.data['tmr'][0]['endtm']; 
          console.log(this.tmr,'here is start timer');
          console.log(rs);
      })
    }
}
</script>