<template>
<div>
    <tops></tops>     
         <router-view id='Ingks'  style="min-height:100vh;max-height:100%;"></router-view>     
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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // for chorme
    this.$gm.lgnchk(this);      
    // this.$mgo.temp('gspSktOnce').rmv();
    /* console.log(this.socket); */
    },   
    created(){   
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // for chorme
    },
})
</script>



