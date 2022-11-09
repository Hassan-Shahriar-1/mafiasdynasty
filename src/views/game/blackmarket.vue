<template>
  <div>
    <div
      class="btn-group rounded jaldi bw100 mb-2"
      role="group"
      aria-label="..."
    >
      <router-link
        to="/game/blackmarket/buys"
        tag="a"
        class="btn nBtn blkgry Gp0m0"
        ><i class="fas fa-comments"></i> <br />
        <h4 class="siz20">Buy</h4></router-link
      >
      <router-link
        to="/game/blackmarket/sels"
        tag="a"
        class="btn nBtn blkgry Gp0m0"
        ><i class="fas fa-users"></i> <br />
        <h4 class="siz20">Sell</h4></router-link
      >
    </div>
    <div class="row Gp0m0">
      <router-view></router-view>
    </div>
  </div>
</template>