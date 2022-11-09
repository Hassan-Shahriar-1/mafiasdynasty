<template>
  <div>
    <!-- <div class="btn-group rounded jaldi bw100"  role="group" aria-label="...">
                <router-link to="/game/weaponshop/weapon" tag="button"  class="btn nBtn blkgry Gp0m0 "><i class="fas fa-comments"></i><br> Weapon</router-link>
                <router-link to="/game/weaponshop/ctgry2" tag="button"  class="btn nBtn blkgry Gp0m0 "><i class="fas fa-users"></i><br>ctgry2</router-link>
                <router-link to="/game/weaponshop/ctgry3" tag="button"  class="btn nBtn blkgry Gp0m0 "><i class="fas fa-users"></i><br>ctgry3</router-link>
               <router-link to="/game/weaponshop/ctgry4" tag="button"   class="btn nBtn blkgry Gp0m0"><i class="fas fa-sign-out-alt"></i><br>ctgry4</router-link>
      </div> -->
    <div class="section no-gutters">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>