<template>
  <div class="container Gp0m0">
    <div class="StryCntnr">
      <div class="section">
        <div
          class="bw100 w-100 rounded jaldi blkgry"
          role="group"
          aria-label="..."
        >
          <div class="btn-group bw100 w-100 sizv13">
            <router-link
              to="general"
              tag="button"
              class="btn nBtn Gp0m0 blkgry"
            >
              <i class="fas fa-braille"></i> <br />General</router-link
            >
            <router-link
              to="purchasing"
              tag="button"
              class="btn nBtn Gp0m0 blkgry"
              ><i class="fas fa-shopping-bag"></i> <br />
              Purchasing
            </router-link>
            <router-link
              to="gameplay"
              tag="button"
              class="btn nBtn Gp0m0 blkgry"
              ><i class="fas fa-gamepad"></i><br />Gameplay</router-link
            >
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>
