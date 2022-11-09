<template>
  <div>
    <div class="card Gp0m0">
      <div class="card-header blkgry">
        <h2 class="titlefntnew text-center">
          Avater Shop
          <span>
            <i
              @click="avaterinfo ^= true"
              class="fas fa-info-circle siz25 float-right"
            ></i
          ></span>
        </h2>
      </div>
      <div
        class="rounded siz15 p-1 blk50 m-1"
        style="border: 1px solid rgb(131 124 124)"
        v-show="avaterinfo"
      >
        All the Trophies that are achievable from the game are enlisted here.
        The dark ones are those Trophies that are still to be achieved and the
        highlighted ones are the Trophies that are already achieved.
      </div>
      <div class="card-body Gp0m0">
        <div class="row Gp0m0">
          <div class="col-9 Gp0m0" style="min-height: 100vh">
            <router-view></router-view>
          </div>

          <div class="col-3 Gp0m0 titlefntnew">
            <router-link
              :to="{ name: 'male' }"
              class="
                btn btn-lg
                p-2
                my-1
                btn-block
                text-secondary
                nBtn
                bgD8
                siz18
              "
              ><i class="siz25 fas fa-male"></i> <br />
              Male</router-link
            >
            <router-link
              :to="{ name: 'female' }"
              class="
                btn btn-lg
                p-2
                my-1
                btn-block
                text-secondary
                nBtn
                bgD8
                siz18
              "
            >
              <i class="siz25 fas fa-female"></i><br />
              Female</router-link
            >
            <router-link
              :to="{ name: 'background' }"
              class="
                btn btn-lg
                p-2
                my-1
                btn-block
                text-secondary
                nBtn
                bgD8
                siz18
              "
              ><i class="siz25 fas fa-image"></i><br />
              Back<br />ground</router-link
            >
            <router-link
              :to="{ name: 'familiars' }"
              class="
                btn btn-lg
                p-2
                my-1
                btn-block
                text-secondary
                nBtn
                bgD8
                siz18
              "
              ><i class="fab fa-affiliatetheme"></i> <br />
              Fimiliars</router-link
            >
            <router-link
              :to="{ name: 'fullset' }"
              class="
                btn btn-lg
                p-2
                my-1
                btn-block
                text-secondary
                nBtn
                bgD8
                siz18
              "
              ><i class="siz25 fas fa-images"></i> <br />Full Set</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avaterinfo: false,
    };
  },
};
</script>