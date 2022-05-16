
<template>
<!--  <script src='assets/js/lib/jquery.fittext'></script> -->
  <div id="app" class="tbg"  >
    <div class="mainC">
       <div class="mainCp text-left">
            <router-view ></router-view> 
      </div>
    </div>
  </div>

  
</template>
<script>
//import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  created(){
     // alert(window.jq);
      window.jq.getScript('dist/js/jquery.fittext.js');
  },
}

</script>
<style scoped src="@/assets/css/allcss.css">

</style>
<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-bottom:60px;
/*   margin-bottom: auto; */
}

</style>

