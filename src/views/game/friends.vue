<template>
  <div>
    <div class="bw100 w-100 rounded jaldi blkgry" role="group" aria-label="...">
      <div class="btn-group bw100 w-100 sizv13">
        <router-link
          to="mafias"
          tag="button"
          class="btn nBtn siz15 p-1 Gp0m0 blkgry"
        >
          <i class="fas fa-award"></i> <br />Mafias</router-link
        >
        <router-link
          to="invitemafia"
          tag="button"
          class="btn nBtn siz15 p-1 Gp0m0 blkgry"
          ><i class="fas fa-address-card"></i> <br />
          Invite mafias
        </router-link>
        <router-link
          to="invitefriends"
          tag="button"
          class="btn nBtn siz15 p-1 Gp0m0 blkgry"
          ><i class="fas fa-user-plus"></i><br />Invite friends</router-link
        >
        <router-link
          to="pending"
          tag="button"
          class="btn nBtn siz15 p-1 Gp0m0 blkgry"
          ><i class="fab fa-hornbill"></i> <br />pending</router-link
        >
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>