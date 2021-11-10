<template>
    <div>
        <div class="section ">
            <div class="card">
                <div class="card-header p-0">
                    <div class="w-100 blkgry "><h2 class="text-center text-golden py-2 blk75 subtitlefnt ">Limited Edition</h2></div>
                </div>
                <div class="card-body p-0">
                    <div class="btn-group rounded jaldi bw100 mb-2 "  role="group" aria-label="..." >
                        <div   class="btn nBtn tmibg Gp0m0 "><i class="fab fa-galactic-senate"></i> <br> <h4 class="siz10">Abilities</h4></div>
                        <div  class="btn nBtn tmibg Gp0m0 "><i class="fas fa-dragon"></i> <br><h4 class="siz10">Familiers</h4></div>
                        <div class="btn nBtn tmibg Gp0m0 "><i class="fas fa-users fa"></i> <br><h4 class="siz10">Avater set</h4></div>
                        <div   class="btn nBtn tmibg Gp0m0 "><i class="far fa-image"></i> <br><h4 class="siz10">Avater BG</h4></div>
                    </div>
                </div>
            </div>

            <div class="row py-2 text-center Gp0m0"><h4 class="hr-sect jaldi">Agora Shop</h4></div>
            <div class="ptnbg blksdo p-2 m-2">
                <div class="w-100 px-2"><h6 class="dtlsfnt">Lvero suscipit mollitia praesentium sint facilis assumenda.</h6></div>
                <div class="row no-gutters ">
                    <div class="col-4 p-2"><img src="../../assets/img/item/1.gif" class="card-img" alt=""> <h6 class="pl-1 dtlsfnt">ashdahs</h6></div>
                    <div class="col-4 p-2"><img src="../../assets/img/item/1.gif" class="card-img" alt=""> <h6 class="pl-1 dtlsfnt">ashdahs</h6></div>
                    <div class="col-4 p-2"><img src="../../assets/img/item/1.gif" class="card-img" alt=""> <h6 class="pl-1 dtlsfnt">ashdahs</h6></div>
                    <div class="btn nBtn btn-lg btn-block Gbtn"><h6 class="text-gold">200 Gold</h6></div>
                </div>
            </div>

            <div class="ptnbg blksdo p-2 m-2">
                <div class="w-100 px-2"><h6 class="dtlsfnt">Lvero suscipit mollitia praesentium sint facilis assumenda.</h6></div>
                <div class="row no-gutters ">
                    <div class="col-4 p-2"><img src="../../assets/img/item/1.gif" class="card-img" alt=""> <h6 class="pl-1 dtlsfnt">ashdahs</h6></div>
                    <div class="col-4 p-2"><img src="../../assets/img/item/1.gif" class="card-img" alt=""> <h6 class="pl-1 dtlsfnt">ashdahs</h6></div>
                    <div class="col-4 p-2"><img src="../../assets/img/item/1.gif" class="card-img" alt=""> <h6 class="pl-1 dtlsfnt">ashdahs</h6></div>
                    <div class="btn nBtn btn-lg btn-block  Gbtn"><h6 class="text-gold">200 Gold</h6></div>
                </div>
            </div>

            <div class="row py-2 text-center Gp0m0"><h4 class="hr-sect jaldi">Agora Shop</h4></div>
            <div class="ptnbg blksdo p-2 m-2">
                <div class="w-100 px-2"><h6 class="dtlsfnt">Lvero suscipit mollitia praesentium sint facilis assumenda.</h6></div>
                <div class="row no-gutters ">
                    <div class="col-4 p-2"><img src="../../assets/img/item/1.gif" class="card-img" alt=""> <h6 class="pl-1 dtlsfnt">ashdahs</h6></div>
                    <div class="col-4 p-2"><img src="../../assets/img/item/1.gif" class="card-img" alt=""> <h6 class="pl-1 dtlsfnt">ashdahs</h6></div>
                    <div class="col-4 p-2"><img src="../../assets/img/item/1.gif" class="card-img" alt=""> <h6 class="pl-1 dtlsfnt">ashdahs</h6></div>
                    <div class="btn nBtn btn-lg btn-block Gbtn"><h6 class="text-gold">200 Gold</h6></div>
                </div>
            </div>

            <div class="ptnbg blksdo p-2 m-2">
                <div class="w-100 px-2"><h6 class="dtlsfnt">Lvero suscipit mollitia praesentium sint facilis assumenda.</h6></div>
                <div class="row no-gutters ">
                    <div class="col-4 p-2"><img src="../../assets/img/item/1.gif" class="card-img" alt=""> <h6 class="pl-1 dtlsfnt">ashdahs</h6></div>
                    <div class="col-4 p-2"><img src="../../assets/img/item/1.gif" class="card-img" alt=""> <h6 class="pl-1 dtlsfnt">ashdahs</h6></div>
                    <div class="col-4 p-2"><img src="../../assets/img/item/1.gif" class="card-img" alt=""> <h6 class="pl-1 dtlsfnt">ashdahs</h6></div>
                    <div class="btn nBtn btn-lg btn-block Gbtn"><h6 class="text-gold">200 Gold</h6></div>
                </div>
            </div>
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
        }
    },
    beforeCreate(){
      this.$mgo.gt('mp/limited/editiopn',(rs)=>{
          console.log(rs);
      })
    }
}
</script>