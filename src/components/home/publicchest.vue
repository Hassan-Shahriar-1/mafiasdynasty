<template>
  <div>
    <div class="row Gp0m0" v-for="(ccard, i) in clancard" :key="i">
      <div class="col-3 p-1 Gp0m0">
        <img
          class="card-img border"
          :src="require('/src/assets/img/item/' + ccard.avtr)"
          alt=""
        />
      </div>
      <div class="col-9 p-0">
        <div class="card my-1 arrow tmibg2 p-2 bdr1">
          <div class="card-header blkgry Gp0m0">
            <div class="row Gp0m0 py-1">
              <div class="col-12">
                <h4 class="siz15">{{ ccard.name }}</h4>
              </div>
              <div class="col-12 Gp0m0">
                <p class="siz13 float-right px-2">1 day ago</p>
              </div>
            </div>
          </div>
          <div class="card-body py-1 Gp0m0 mt-2">
            <div class="row Gp0m0">
              <div class="col-4 p-0 vertical-center" @click="boxopen()">
                <img
                  class="card-img animated infinite pulse delay-2s mt-3"
                  :src="require('/src/assets/img/item/' + ccard.img)"
                  alt=""
                />
              </div>
              <div class="col-8">
                <h6 class="subdtlsfnt">{{ ccard.dtls }}</h6>
                <div
                  class="
                    btn
                    nBtn
                    nBbg
                    p-1
                    mb-3
                    button4
                    siz15
                    py-1
                    mt-1
                    text-center
                  "
                  @click="boxopen()"
                >
                  Open
                </div>
              </div>
            </div>
          </div>

          <div class="card-footer blkgry Gp0m0 py-2 px-0">
            <div class="row Gp0m0">
              <div class="col-4 px-1">
                <div class="btn siz15 nBtn btn-block blkd75">
                  <i class="fas fa-thumbs-up float-left"></i>
                  <h6>&nbsp;5</h6>
                </div>
              </div>
              <div class="col-4 px-1">
                <div class="btn siz15 nBtn btn-block blkd75">
                  <i class="far fa-comments float-left"></i>
                  <h6>&nbsp;0</h6>
                </div>
              </div>
              <div class="col-4 px-1">
                <div class="btn siz15 nBtn btn-block blkd75 py-1">
                  <i class="fas fa-share-alt-square siz20"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal area start -->
    <modal
      name="popup"
      :width="300"
      :height="500"
      @before-open="beforeOspen"
      class="mblr bdr p-1 rounded-2"
    >
      <div class="row Gp0m0 card blkgry" style="">
        <div class="card-header blkgry p-1">
          <h4 class="rounded-0 text-center w-100" style="position: sticky">
            Public Chest
            <span
              class="float-right"
              style="margin-right: 2%"
              @click="boxclose()"
              ><div class="crossbtn"><i class="fas fa-times"></i></div
            ></span>
          </h4>
        </div>
        <div
          class="card-body bg-transparent p-0"
          style="height: 450px; overflow: scroll"
        >
          <div class="w-100 p-1">
            <p class="text-center">Chose One from the list</p>

            <div class="row Gp0m0">
              <div
                class="col-4 p-1"
                v-for="(pchest, i) in publicchest"
                :key="i"
              >
                <div class="card p-1">
                  <img
                    class="card-img"
                    :src="require('/src/assets/img/item/' + pchest.img)"
                    alt=""
                  />
                  <div class="card-footer blkgry px-0 text-center">
                    <p class="titlefnt2 siz15">{{ pchest.name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <!-- Modal area End -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicchest: [
        {
          img: "1.gif",
          name: "Name amnd Amount",
        },
        {
          img: "1.gif",
          name: "Name amnd Amount",
        },
        {
          img: "1.gif",
          name: "Name amnd Amount",
        },
        {
          img: "1.gif",
          name: "Name amnd Amount",
        },
        {
          img: "1.gif",
          name: "Name amnd Amount",
        },
        {
          img: "1.gif",
          name: "Name amnd Amount",
        },
        {
          img: "1.gif",
          name: "Name amnd Amount",
        },
        {
          img: "1.gif",
          name: "Name amnd Amount",
        },
        {
          img: "1.gif",
          name: "Name amnd Amount",
        },
      ],
      clancard: [
        {
          avtr: "1.gif",
          name: "Habibur Rahman",
          type: "clan",
          time: "1 day ago",
          img: "chestClnShr.png",
          dtls: "Title Here to go Title Here to go",
        },
        {
          avtr: "1.gif",
          name: "Habibur Rahman",
          type: "clan",
          time: "1 day ago",
          img: "chestClnShr.png",
          dtls: "Title Here to go Title Here to go",
        },
        {
          avtr: "1.gif",
          name: "Habibur Rahman",
          type: "clan",
          time: "1 day ago",
          img: "chestClnShr.png",
          dtls: "Title Here to go Title Here to go",
        },
        {
          avtr: "1.gif",
          name: "Habibur Rahman",
          type: "clan",
          time: "1 day ago",
          img: "chestClnShr.png",
          dtls: "Title Here to go Title Here to go",
        },
      ],
    };
  },
  methods: {
    boxopen() {
      this.$modal.show("popup");
    },
    boxclose() {
      this.$modal.hide("popup");
    },
  },
};
</script>