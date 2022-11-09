<template>
  <div>
    <div class="row bMbg5 border p-2 rounded Gp0m0 jaldi" section="profilepage">
      <div class="row Gp0m0 text-inline-block">
        <h5>"[501 Elite] SoulSlasherz", level 344 Mogul</h5>
        <h6 class="jaldi">&nbsp;&nbsp;Report Abusive Behavior <br /></h6>
      </div>

      <div class="row">
        <div class="col-7">
          <div class="mb-3 text-center text-dark">
            <select name="" id="" class="w-100 border-0 form-control">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
          </div>
        </div>
        <div class="col-5 Gp0m0">
          <div class="btn btn-lg blkgu nBtn nBbg Gp0m0 p-1">Change Title</div>
        </div>
      </div>

      <div class="row Gp0m0">
        <h5>You have</h5>
        <h5 class="text-success">&nbsp;283</h5>
        <h5>experience points to your next level</h5>
      </div>
      <div class="row Gp0m0">
        <h4 class="">Share your Profile:</h4>
      </div>

      <ul class="list-group w-100 jaldi text-white">
        <li
          v-for="(smn, i) in MmnDtlst.mn"
          :key="i"
          class="list-group-item bMbg4 border py-1 w-100 Gp0m0"
        >
          <div class="row Gp0m0">
            <div class="col-2 Gp0m0 px-1">
              <img
                :src="require('/src/assets/img/' + smn.clk)"
                class="card-img"
                alt=""
              />
            </div>
            <div class="col-3">
              <h5>{{ smn.nm }}</h5>
            </div>
            <div class="col-7">
              <h5 style="word-break: break-all">{{ smn.icn }}</h5>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      MmnDtlst: {
        mn: [
          {
            clk: "1.png",
            nm: "habib",
            mu: "pare",
            icn: "naaaaaaaaaaaaaaa",
          },
          {
            clk: "1.png",
            nm: "habib",
            mu: "pare",
            icn: "naaaaaaaaaaaaaaaaaaaaaa",
          },
          {
            clk: "1.png",
            nm: "habib",
            mu: "pare",
            icn: "naaaaaaaaaaaaaaaaaaaaaa",
          },
          {
            clk: "1.png",
            nm: "habib",
            mu: "pare",
            icn: "naaaaaaaaaaaaaaaaaaaaaa",
          },
          {
            clk: "1.png",
            nm: "habib",
            mu: "pare",
            icn: "naaaaaaaaaaaaaaaaaaaaaa",
          },
          {
            clk: "1.png",
            nm: "habib",
            mu: "pare",
            icn: "naaaaaaaaaaaaaaaaaaaaaa",
          },
        ],
      },
    };
  },
};
</script>