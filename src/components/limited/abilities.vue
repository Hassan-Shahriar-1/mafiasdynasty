<template>
    <div>


      <div class="blkred p-2 siz15">
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

        <div class="div tmibg  m-1" v-for="(abl, i) in ablts" :key="i">
			<h5 class="py-2 text-center"></h5>
            <div class="row Gp0m0 pb-3">
                <div class="col-4 text-center Gp0m0">
                    <div class="mt-2"><img  :src="src+abl.img"  class="card-img"></div><h6 class="pt-1">Epic</h6></div>


                  
                <div class="col-8 p-1">												 										 
                        <div class="row Gp0m0">  
                            <div class="col-12 Gp0m0 py-1"> <h5 class="py-2 text-center " style=" "></h5> </div> 
                            <div class="col Gp0m0 dbgwbdr"> <h6 class="text-center"> Attack   <br></h6> </div> 
                            <div class="col Gp0m0 dbgwbdr"> <h6 class="text-center"> Defense   <br></h6> </div>
                        </div>
                        <button type="button" style="margin-top:10%" class="nBtn button4 btn w-100  pull-right" ><h5 class=""><strong>   75 Jewels</strong></h5></button>							 
                </div>
            </div>
		</div>
        
    </div>
</template>


<script>
export default {
    props:{
        ability:Array
    },
    data() {

        return{
            src:'https://mafiasrival.com/ability/',
             itm:[],
            abl:[],
            fml:[],
            avtst:[],
            bg:[],
            tmr:'',
            end:'',
            ablts:''
        }
        
    },
  created() {
    this.ablts=this.$props['ability'].itms
    this.tmr=this.$props['ability'].sttm
    this.end=this.$props['ability'].endtm
   
  },
}
</script>