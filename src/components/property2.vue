<template>
  <div class="pt-2">
    <div class="row Gp0m0">
      <div class="col-6 Gp0m0">
        <div class="m-1 rounded pb-2 border bMsdo">
          <div class="row Gp0m0 rounded px-1">
            <div class="col-5 Gp0m0 p-2">
              <img
                :src="require('/src/assets/img/' + ph.mg)"
                class="card-img bdr3"
                alt=""
              />
            </div>
            <div class="col-7 Gp0m0 pt-2">
              <h6 class="text-danger">{{ ph.heng }}</h6>
              <h6 class="siz13 text-left">{{ ph.des }}</h6>
            </div>
          </div>
          <div class="row Gp0m0 pt-3">
            <div class="row Gp0m0 w-100 mlr3">
              <div class="col-4 Gp0m0 px-1">
                <div
                  class="btn button4 rounded py-1 btn-block"
                  @click="decrement()"
                >
                  <i class="fas fa-folder-minus"></i>
                </div>
              </div>
              <div class="col-4 Gp0m0">
                <div class="bg-white rounded text-bold" style="padding: 10px">
                  {{ ph.opt }}
                </div>
              </div>
              <div class="col-4 Gp0m0 px-1">
                <div
                  class="btn button5 py-1 rounded btn-block"
                  @click="increment()"
                >
                  <i class="fas fa-cart-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="row no-guttersb1px mlr3 pt-3">
            <div class="col-6">
              <div class="btn Gp0m0 p-1 py-2 btn-block nBtn button5">
                <h6>{{ ph.b1 }}</h6>
              </div>
            </div>
            <div class="col-6">
              <div class="btn Gp0m0 p-1 py-2 btn-block nBtn blkred">
                <h6>{{ ph.b2 }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 Gp0m0 rounded">
        <div class="m-1 rounded pb-2 border bMsdo">
          <div class="row Gp0m0 rounded px-1">
            <div class="col-5 Gp0m0 p-2">
              <img
                :src="require('/src/assets/img/' + ph.mg)"
                class="card-img bdr3"
                alt=""
              />
            </div>
            <div class="col-7 Gp0m0 pt-2">
              <h6 class="text-danger">{{ ph.heng }}</h6>
              <h6 class="siz13 text-left">{{ ph.des }}</h6>
            </div>
          </div>

          <div class="row Gp0m0 pt-3">
            <div class="row Gp0m0 w-100 mlr3">
              <div class="col-4 Gp0m0 px-1">
                <div
                  class="btn button4 btn-block rounded py-1"
                  @click="decrement1()"
                >
                  <i class="fas fa-folder-minus"></i>
                </div>
              </div>
              <div class="col-4 Gp0m0">
                <div class="bg-white rounded text-bold" style="padding: 10px">
                  {{ ph.opt1 }}
                </div>
              </div>
              <div class="col-4 Gp0m0 px-1">
                <div
                  class="btn button5 py-1 btn-block rounded"
                  @click="increment1()"
                >
                  <i class="fas fa-cart-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="row no-guttersb1px mlr3 pt-3">
            <div class="col-6">
              <div class="btn Gp0m0 p-1 py-2 btn-block nBtn button5">
                <h6>{{ ph.b1 }}</h6>
              </div>
            </div>
            <div class="col-6">
              <div class="btn Gp0m0 p-1 py-2 btn-block nBtn blkred">
                <h6>{{ ph.b2 }}</h6>
              </div>
            </div>
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
      ph: {
        mg: "1.png",
        opt: 0,
        opt1: 0,
        heng: "upper the text",
        des: "Lorem ipsum dolor, sit  adipisci ipsam.",
        b1: "Buy",
        b2: "sell",
      },
    };
  },

  methods: {
    increment() {
      this.ph.opt = this.ph.opt + 5;
    },
    decrement() {
      this.ph.opt = this.ph.opt - 5;
    },
    increment1() {
      this.ph.opt1 = this.ph.opt1 + 5;
    },
    decrement1() {
      this.ph.opt1 = this.ph.opt1 - 5;
    },
  },
};
</script>
 