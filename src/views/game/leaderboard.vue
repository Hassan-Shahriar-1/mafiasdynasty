<template>
    <div class="container Gp0m0 hbg">
        <div class="StryCntnr">
                <!-- body Content Start -->
            <div class="section">
                <div class="bw100 w-100  rounded jaldi blkgry" role="group" aria-label="...">
                    <div class="btn-group py-2  bw100 w-100  sizv13">
                        <div class="row Gp0m0 w-100 text-center">
                            <div class="col-4 text-center "><router-link to="friend" tag="button" class="  btn siz15 btn-block cbtn nBtn Gp0m0 blkgry rounded-circle"> <i class="fas fa-user-friends"></i> <br>Friends</router-link></div>
                            <div class="col-4 text-center"><router-link to="world" tag="button" class="  btn  siz15 btn-block cbtn nBtn Gp0m0 blkgry rounded-circle"><i class="fas fa-globe-europe"></i> <br> World </router-link></div>
                            <div class="col-4 text-center"><router-link to="syndicates" tag="button" class=" btn siz15 btn-block cbtn nBtn Gp0m0 blkgry rounded-circle"><i class="fab fa-gg-circle siz13 "></i><br>Syndicated</router-link></div>
                        </div>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div> 
</template>
<script>
export default{

}
</script>