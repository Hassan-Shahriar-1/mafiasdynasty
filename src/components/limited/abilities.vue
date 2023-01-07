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
        :seconds-txt="'seconds'"
      >
      </vue-countdown-timer>
    </div>
    <!--   <div class="row Gp0m0">
      <div class="col-4 px-0" @click="offencive()">
        <div class="btn nBbg nBtn btn-block tmibg justify-content-center siz13">
          Offensive
        </div>
      </div>
      <div class="col-4 px-0" @click="difensive()">
        <div class="btn nBbg nBtn btn-block tmibg justify-content-center siz13">
          Difensive
        </div>
      </div>
      <div class="col-4 px-0" @click="movement()">
        <div class="btn nBbg nBtn btn-block tmibg justify-content-center siz13">
          Movement
        </div>
      </div>
    </div> -->
    <div class="div tmibg m-1" v-for="(abl, i) in ablts" :key="i">
      <h5 class="py-2 text-center"></h5>
      <div class="row Gp0m0 pb-3">
        <div class="col-4 text-center Gp0m0">
          <div class="mt-2">
            <img :src="src + abl.img" class="card-img" />
          </div>
          <h6 class="pt-1">Epic</h6>
        </div>
        <div class="col-8 p-1">
          <div class="row Gp0m0">
            <div class="col-12 Gp0m0 py-1">
              <h5 class="py-2 text-center">{{ abl.typ }}</h5>
            </div>
            <div class="col Gp0m0 dbgwbdr">
              <h6 class="text-center">Attack<br />{{ abl.atk }}</h6>
            </div>
            <div class="col Gp0m0 dbgwbdr">
              <h6 class="text-center">Defense<br />{{ abl.dfnc }}</h6>
            </div>
          </div>
          <button
            type="button"
            style="margin-top: 10%"
            class="nBtn button4 btn w-100 pull-right"
          >
            <h5 class=""><strong> 75 Jewels</strong></h5>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    ability: Array,
  },
  data() {
    return {
      src: "http://mafiasrival.com/item/",
      itm: [],
      abl: [],
      fml: [],
      avtst: [],
      bg: [],
      tmr: "",
      end: "",
      ablts: "",
    };
  },
  beforeCreate() {
    this.$mgo.gt("mp/limited/edition", (rs) => {
      console.log(rs);

      this.ablts = rs.data.ability.itms;
      this.tmr = rs.data.ability.sttm;
      this.end = rs.data.ability.endtm;
      console.log(this.ablts, "here is start timer");
      console.log(rs);
    });
  },
  /*  offencive(){
            if(this.value=='offensive'){
               document.getElementById('offensive').style.display="block"
            }
            else{
                document.getElementById('offensive').style.display="none"
            }
    },
    difensive(){
        if(this.value=='defencive'){
            document.getElementById('defencive').style.display="block"
        }
        else{
            document.getElementById('defencive').style.display="none"
        }
    },
    movement(){
    if(this.value=='movement'){
        document.getElementById('movement').style.display="block"
    }
    else{
        document.getElementById('movement').style.display="none"
    }
    } */
};
</script>