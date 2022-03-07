<template>
   <div class="row Gp0m0  overflow-scroll-y ">
      <ul class="list-group ">
         <li class="list-group-item tmibg3 my-1"  v-for="(act , i) in actvty" :key=i><h6 class="dtlsfnt">{{act.dtls}}</h6>
            <span @click="rmvactvty(act.und)" ><i class="fas fa-times-circle siz20 text-danger xbtnpstn" ></i></span>
         </li>
      </ul>
   </div>   
</template>

<style scoped>
   .xbtnpstn{
      position:absolute;
      right:3px;
      top:3px;
      }
</style>

<script>
export default {
    data() {
        return{ 
            hide: false,
            actvty:[
                {
                   und:1, dtls:"1 quibusdam repellat asperiores nostrum nulla, ipsum nisi officia perspiciatis aliquam veniam molestiae!"
                },
                {
                   und:2, dtls:"2 quibusdam repellat asperiores nostrum nulla, ipsum nisi officia perspiciatis aliquam veniam molestiae!"
                },
                {
                   und:3, dtls:"3 quibusdam repellat asperiores nostrum nulla, ipsum nisi officia perspiciatis aliquam veniam molestiae!"
                },
                {
                   und:4, dtls:"4 quibusdam repellat asperiores nostrum nulla, ipsum nisi officia perspiciatis aliquam veniam molestiae!"
                },
                {
                   und:5, dtls:"5 quibusdam repellat asperiores nostrum nulla, ipsum nisi officia perspiciatis aliquam veniam molestiae!"
                },
                {
                   und:6, dtls:"6 quibusdam repellat asperiores nostrum nulla, ipsum nisi officia perspiciatis aliquam veniam molestiae!"
                },
                {
                   und:7, dtls:"7 quibusdam repellat asperiores nostrum nulla, ipsum nisi officia perspiciatis aliquam veniam molestiae!"
                },
            ],            
        }
    },
    methods:{
         rmvactvty(gdt) { 
            this.actvty = this.actvty.filter(function(item) {
               if(item.und != gdt){  
                   return item !== gdt ;              
               }
            })
             //  this.actvty[gdt];
         },
    }
  
}
</script>