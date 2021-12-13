<template>
    <div>
        <div class="section  ptnbg">
            <div class="card">
                <div class="card-header p-0">
                    <div class="w-100 blkgry "><h2 class="text-center text-golden py-2 blk75 subtitlefnt ">Limited Edition</h2></div>
                </div>
                <div class="card-body p-0">
                    <div class="btn-group rounded jaldi bw100 mb-2 "  role="group" aria-label="..." >
                        <router-link :to="{ name: 'abilities'}"  class="btn nBtn tmibg Gp0m0 "><i class="fab fa-galactic-senate"></i> <br> <h4 class="siz10">Abilities</h4></router-link>
                        <router-link :to="{ name: 'fimiliers'}"  class="btn nBtn tmibg Gp0m0 "><i class="fas fa-dragon"></i> <br><h4 class="siz10">Familiers</h4></router-link>
                        <router-link :to="{ name: 'avater'}" class="btn nBtn tmibg Gp0m0 "><i class="fas fa-users fa"></i> <br><h4 class="siz10">Avater set</h4></router-link>
                        <router-link :to="{ name: 'avaterbg'}"  class="btn nBtn tmibg Gp0m0 "><i class="far fa-image"></i> <br><h4 class="siz10">Avater BG</h4></router-link>
                        
                    </div>
                    
                </div>
                 
            </div>
           
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
 <router-view></router-view>
  
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            itm:[],
            abl:[],
            fml:[],
            avtst:[],
            bg:[],
            tmr:'',
            end:''

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