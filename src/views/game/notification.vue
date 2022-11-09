<template>
  <div class="container Gp0m0 jaldi">
    <div class="mrgnbtm">
      <div
        class="btn-group rounded jaldi bw100 px-1"
        role="group"
        aria-label="..."
      >
        <router-link
          to="/game/notification/news"
          tag="button"
          class="btn nBtn blkgry Gp0m0"
          ><i class="fas fa-newspaper"></i><br />
          <h4 class="siz20">News</h4>
          <span class="bg-danger rounded-circle bgpstn2">1</span></router-link
        >
        <router-link
          to="/game/notification/request"
          tag="button"
          class="btn nBtn blkgry Gp0m0"
          ><i class="fas fa-users"></i> <br />
          <h4 class="siz20">Request</h4>
          <span class="bg-danger rounded-circle bgpstn2">1</span></router-link
        >
        <router-link
          to="/game/notification/activity"
          tag="button"
          class="btn nBtn blkgry Gp0m0"
          ><i class="fas fa-skiing-nordic"></i> <br />
          <h4 class="siz20">Activity</h4>
          <span class="bg-danger rounded-circle bgpstn2">1</span></router-link
        >
        <router-link
          to="/game/notification/pchat"
          tag="button"
          class="btn nBtn blkgry Gp0m0"
          ><i class="fas fa-comments"></i> <br />
          <h4 class="siz20">chat</h4>
          <span class="bg-danger rounded-circle bgpstn2">1</span></router-link
        >
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>