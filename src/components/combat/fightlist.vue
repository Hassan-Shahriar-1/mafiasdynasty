
<template>
    <div>

        <div class="row blkgry Gp0m0">
            <div class="col-2 p-1"><img src="../../assets/img/item/1.gif" class="card-img rounded-circle vertical-center" alt=""></div>
            <div class="col-10">
                <h3 class="p-4 subtitlefnt">  Fight List({{flstnmbr}}) <h5>Bronze V</h5></h3>
            </div>
     </div>
        <div class="row no-gutters w-100">
            <ul class="list-group w-100" v-for="(masrc,i) in mbrlst" :key="i">
                <li class="list-group-item blk50 p-1 "> 
                    <div class="row Gp0m0  rounded blkd75 p-2">
                        <div class="col-2 Gp0m0"><img src="../../assets/img/item/1.gif"  class="card-img " alt=""></div>
                        <div class="col-8 px-1"> <h5 class="text-info titlefnt2 siz25">{{masrc.name}}</h5> 
                        <div class="row Gp0m0">
                            <div class="col-6 p-0">  <h6 class="titlefnt2 siz17">Cash: {{masrc.mcash}}</h6></div>
                            <div class="col-6 pl-2">  <h6 class="titlefnt2 siz17">Org: {{masrc.org}}</h6></div>
                            <div class="col-6 p-0">  <h6 class="titlefnt2 siz17">Level: {{masrc.lvl}}</h6></div>
                            <div class="col-6 pl-2">  <h6 class="titlefnt2 siz17">Rank: {{masrc.rank}}</h6></div>
                        </div>
                    </div>
                    <div class="col-2 p-1"> <router-link :to="{path:'/game/attack/'+masrc.id}"> <div class=" button4 nBtn mt-2 border py-2 rounded"><h6 class="text-center"><i class="fab fa-wolf-pack-battalion"></i></h6></div></router-link></div>
                        </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
 data(){
        return{

                 flstnmbr:163, 
                 mbrlst:Array,  
                 msg:'',
        }
    },

    beforeCreate() {
        this.$mgo.gt('/fight/list',(rs)=>{
            console.log(rs)
            if(rs.sts=='fghtlst'){
                this.mbrlst=(rs.list)
                console.log('list',this.mbrlst)
            }else{
                this.msg=rs.msg
            }
            
        })
    },
}
</script>