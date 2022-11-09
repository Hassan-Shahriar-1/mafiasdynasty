/* This page is a threating page and a user can threat them (as it is a mafia game) this list will generate randomly, by clicking the threat button there will be a popup modal component 
 which is by vue.js modal component  and you can send customized threat. */

<!-- <template>
    <div class=" Gp0m0 smlttlfnt3 ptnbg ">
        <div class="container text-center trtbg   trt">
            <h5 class="dtlsfnt">Lorem ipsum dolor sit amet consectetur,Laborum harum fuga sequi laboriosam quidem! 
                Nulla voluptatibus voluptatum tenetur
                quasi, maiores dicta dolorum deleniti veritatis alias magni dolore magnam voluptate quidem.</h5> 
            <div class="btn btn-lg button4 nBtn nBbg jaldi center">Cntr Thread </div> 
        </div>        
    </div>
</template> -->
<template>
  <div class="mb-2">
    <h4 class="p-4 blkgry text-center titlefnt">Threat Someone</h4>

    <div class="row no-gutters w-100">
      <ul class="list-group w-100" v-for="(masrc, i) in mafia" :key="i">
        <li class="list-group-item blk50 p-1">
          <div class="row Gp0m0 rounded blkd75 p-2">
            <div class="col-2 Gp0m0">
              <img
                :src="require('../../assets/img/item/' + masrc.mfaimg)"
                class="card-img grnbdr rounded-circle"
                alt=""
              />
            </div>
            <div class="col-6">
              <h5 class="text-info titlefnt2 siz25">{{ masrc.mfattl }}</h5>
              <h6 class="subtitlefnt siz20">{{ masrc.mfades }}</h6>
            </div>
            <div class="col-4 p-1">
              <div
                @click="threatdialog()"
                class="button4 nBtn mt-2 border py-2 rounded"
              >
                <h6 class="text-center">
                  <i class="fas fa-theater-masks"></i>&nbsp;Threat
                </h6>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <modal
      name="dialog"
      :width="300"
      :isAutoHeight="true"
      @before-open="beforeOspen"
      class="mblr bdr p-1 rounded-2"
    >
      <div class="row Gp0m0 card blkgry">
        <div class="card-header tmibg2 p-1">
          <h4
            class="rounded-0 text-center py-1 w-100 titlefnt"
            style="position: sticky"
          >
            Enemy Name here
            <span
              class="float-right"
              style="margin-right: 2%"
              @click="removedialog()"
              ><div class="crossbtn"><i class="fas fa-times"></i></div
            ></span>
          </h4>
        </div>
        <div
          class="card-body bg-transparent p-0"
          style="height: 250px; overflow: scroll"
        >
          <div class="w-100 Gp0m0">
            <textarea
              name="Threaddialog"
              type="input"
              id=""
              placeholder="Type thread Message here"
              cols="30"
              rows="9"
              class="w-100 mx-auto text-red siz15 dtlsfnt p-2"
            ></textarea>
          </div>
          <div class="d-flex justify-content-center">
            <button
              class="btn btn-lg nBtn nBbg py-1 blkgry"
              @click="removedialog()"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mafia: [
        {
          mfaimg: "1.gif",
          mfattl: "Habibur",
          mfades: "Level",
        },
        {
          mfaimg: "1.gif",
          mfattl: "Habibur",
          mfades: "Level",
        },
        {
          mfaimg: "1.gif",
          mfattl: "Habibur",
          mfades: "Level",
        },
        {
          mfaimg: "1.gif",
          mfattl: "Habibur",
          mfades: "Level",
        },
        {
          mfaimg: "1.gif",
          mfattl: "Habibur",
          mfades: "Level",
        },
        {
          mfaimg: "1.gif",
          mfattl: "Habibur",
          mfades: "Level",
        },
        {
          mfaimg: "1.gif",
          mfattl: "Habibur",
          mfades: "Level",
        },
        {
          mfaimg: "1.gif",
          mfattl: "Habibur",
          mfades: "Level",
        },
      ],
    };
  },
  methods: {
    threatdialog() {
      this.$modal.show("dialog");
    },
    removedialog() {
      this.$modal.hide("dialog");
    },
  },
};
</script>