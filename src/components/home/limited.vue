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
    
}
</script>