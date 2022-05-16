<template>
<div>
    <tops></tops>     
         <router-view id='Ingks' style="height:100%;" ></router-view>     
    <foots></foots>
</div>
</template>

<script>
export default ({  
    data(){
        return {
              
        }
    },
       
    mounted() {
     
    },
    beforeCreate() {     
       
       this.$gm.lgnchk(this);      
     // this.$mgo.temp('gspSktOnce').rmv();
        /* console.log(this.socket); */
    },   
    created(){   
    },
})
</script>



