<template>
  <div class="Gp0m0 texture1">
    <div class="mrgnbtm">
      <div class="px-2">
        <div class="alert alert-primary bg-danger text-white" role="alert">
          <h4 class="alert-heading titlefnt">Loot Info!</h4>
          <h6 class="dtlsfnt">
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </h6>
          <hr />
          <h6 class="mb-0 dtlsfnt">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </h6>
        </div>
      </div>

      <ul class="list-group w-100 rounded Gp0m0">
        <li
          class="list-group-item bMbg Gp0m0"
          v-for="(litm, i) in litms"
          :key="i"
        >
          <div class="container-fluid Gp0m0 blkgry">
            <div class="row Gp0m0">
              <div class="col-4 p-2">
                <img
                  class="card-img"
                  src="../../assets/img/item/1.gif"
                  alt=""
                />
              </div>
              <div class="col-8 p-2">
                <h4 class="subtitlefnt">{{ litm.nm }}</h4>
                <h6 class="dtlsfnt">{{ litm.dtls }}</h6>
              </div>
            </div>

            <div class="row Gp0m0">
              <div class="col-4 p-2">
                <select class="form-control text-dark" name="" id="">
                  <option value="">Amount</option>
                  <option value="">5</option>
                  <option value="">10</option>
                  <option value="">15</option>
                  <option value="">20</option>
                </select>
              </div>
              <div class="col-4 Gp0m0"></div>
              <div class="col-4 p-2">
                <div
                  class="btn nBbg ntbn nBtn text-center button4 siz15 btn-block"
                >
                  Loot Now
                </div>
              </div>
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
      litms: [
        {
          img: "1.gif",
          nm: "Youga Master",
          dtls: "Lorem ipsum dolor sit, natus est debitis eius fuga aliquid,  explicabo at enim! Quod animi quas possimus velit.",
        },
        {
          img: "1.gif",
          nm: "Youga Master",
          dtls: "Lorem ipsum dolor sit, natus est debitis eius fuga aliquid,  explicabo at enim! Quod animi quas possimus velit.",
        },
        {
          img: "1.gif",
          nm: "Youga Master",
          dtls: "Lorem ipsum dolor sit, natus est debitis eius fuga aliquid,  explicabo at enim! Quod animi quas possimus velit.",
        },
        {
          img: "1.gif",
          nm: "Youga Master",
          dtls: "Lorem ipsum dolor sit, natus est debitis eius fuga aliquid,  explicabo at enim! Quod animi quas possimus velit.",
        },
        {
          img: "1.gif",
          nm: "Youga Master",
          dtls: "Lorem ipsum dolor sit, natus est debitis eius fuga aliquid,  explicabo at enim! Quod animi quas possimus velit.",
        },
        {
          img: "1.gif",
          nm: "Youga Master",
          dtls: "Lorem ipsum dolor sit, natus est debitis eius fuga aliquid,  explicabo at enim! Quod animi quas possimus velit.",
        },
        {
          img: "1.gif",
          nm: "Youga Master",
          dtls: "Lorem ipsum dolor sit, natus est debitis eius fuga aliquid,  explicabo at enim! Quod animi quas possimus velit.",
        },
        {
          img: "1.gif",
          nm: "Youga Master",
          dtls: "Lorem ipsum dolor sit, natus est debitis eius fuga aliquid,  explicabo at enim! Quod animi quas possimus velit.",
        },
        {
          img: "1.gif",
          nm: "Youga Master",
          dtls: "Lorem ipsum dolor sit, natus est debitis eius fuga aliquid,  explicabo at enim! Quod animi quas possimus velit.",
        },
        {
          img: "1.gif",
          nm: "Youga Master",
          dtls: "Lorem ipsum dolor sit, natus est debitis eius fuga aliquid,  explicabo at enim! Quod animi quas possimus velit.",
        },
        {
          img: "1.gif",
          nm: "Youga Master",
          dtls: "Lorem ipsum dolor sit, natus est debitis eius fuga aliquid,  explicabo at enim! Quod animi quas possimus velit.",
        },
        {
          img: "1.gif",
          nm: "Youga Master",
          dtls: "Lorem ipsum dolor sit, natus est debitis eius fuga aliquid,  explicabo at enim! Quod animi quas possimus velit.",
        },
        {
          img: "1.gif",
          nm: "Youga Master",
          dtls: "Lorem ipsum dolor sit, natus est debitis eius fuga aliquid,  explicabo at enim! Quod animi quas possimus velit.",
        },
        {
          img: "1.gif",
          nm: "Youga Master",
          dtls: "Lorem ipsum dolor sit, natus est debitis eius fuga aliquid,  explicabo at enim! Quod animi quas possimus velit.",
        },
      ],
    };
  },
};
</script>