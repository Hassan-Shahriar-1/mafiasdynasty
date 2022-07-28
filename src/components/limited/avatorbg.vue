<template>
    <div>
        <div class="blkred p-2 siz17">

        </div>

        <div class="row Gp0m0 blkgry m-1"  v-for="(abg,i) in avtrbg" :key="i">
                <div class="col-4 pr-0">
                    <div class="mt-4"><img  :src="require('/src/assets/img/item/'+abg.img)" class="card-img"></div>
                </div>
                <div class="col-8">
                    <h5 class="subtitlefnt"> <u style="text-underline-offset: 0.1em;">{{abg.ttl}}</u></h5> 
                    <h5 class="text-center">Jewels {{abg.jwls}}</h5>
                    <div class="row Gp0m0 my-2 ">
                        <div class="col-6 Gp0m0"> <button  type="button" class="nBtn mlr1 Anm-outln15si btn btn-lg button4 w-100"> <h6><strong>Buy</strong></h6></button></div> 
                        <div class="col-6 Gp0m0 "> <button type="button" class="nBtn   Anm-outln15si btn btn-lg button5 w-100"> <h6><strong>Gift</strong></h6></button> </div>
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
            avtrbg:[
                {
                    img:"1.gif",
                    ttl:"Avater bg title",
                    jwls:"75",    
                },
                  {
                    img:"1.gif",
                    ttl:"Avater bg title",
                    jwls:"75",    
                },
                  {
                    img:"1.gif",
                    ttl:"Avater bg title",
                    jwls:"75",    
                },
                  {
                    img:"1.gif",
                    ttl:"Avater bg title",
                    jwls:"75",    
                },
                  {
                    img:"1.gif",
                    ttl:"Avater bg title",
                    jwls:"75",    
                },
                  {
                    img:"1.gif",
                    ttl:"Avater bg title",
                    jwls:"75",    
                },
            ]
        }
    },
       beforeCreate(){
     /*  this.$mgo.gt('mp/limited/editiopn/bg',(rs)=>{
          console.log(rs);
          this.tmr=rs.data['sttm'];
          this.end=rs.data['endtm']; 
          console.log(this.tmr,'here is start timer');
          console.log(rs);
      }) */
    }
}
</script>