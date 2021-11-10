<template>
    <div>
        <div class="card">
            <orgcomp></orgcomp>
            <div class="card-header blkgry p-1 clr7">
                <h4 class=" rounded-0 text-center py-1 w-100 subtitlefnt  " style="position:sticky;">Create Organization</h4>
            </div> 
            <div class="card-body Gp0m0 p-3 bMbg  dtlsfnt" style="height:200px;">
                <div class="w-100 ">
                    <div class="form-group">
                        <input type="text" class="form-control siz20" v-model="gnm"  placeholder="Organization Name">
                    </div> 

                    <select class="form-select grnd75 text-light   py-2 pl-3 w-100 siz20" v-model="gtyp">
                        <option value="" class="text-light">Chose Organization type</option>
                        <option value="1">Public</option>
                        <option value="2">Private</option>
                        <option value="3">Secret</option>
                    </select>  

                    <div class="text-center">
                        <button  class="btn nBtn btn-lg text-white mt-1  siz20 blkbggreen" @click="crtgng()">Create Organization</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{ 
              gnm:'',
              gtyp:'',
        }
    },
          methods:{
          /* @click="gngcrt^=true" */
          crtgng:function(){
              
               this.axios.post('/gang/create', {'name':this.gnm,'type':this.gtyp},).then(response=>{
                 console.log(response);
                  if(response.gnnm =='dont have a gang'){
                      this.cln = response.msg; 
                      this.socket.emit('notification',this.cln)
                      console.log(response)
                  }
                  else{
                      this.cln=response.msg
                }
            })
        },
    }
}
</script>