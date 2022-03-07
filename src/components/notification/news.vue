<template>
  <div class="ptnbg">

<!-- thread section start -->
    <div class="row Gp0m0 tmibg pb-2">
        <div class="col-3 Gp0m0 p-2">
        <img src="../../assets/img/item/1.gif" alt="threat image" class="card-img">
        </div> 

        <div class="col-9 Gp0m0">
          <h4 class="subtitlefnt">Habibur Rahman(Threat)</h4>

          <h6 class="dtlsfnt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel sequi perspiciatis. 
        </h6>
        </div>

        <div class="col-6"> 
            <h6 class="mt-2 dtlsfnt">
              <i class="fas fa-clock">10hour 25 min ago</i>
            </h6>
        </div>
        
        <div class="col-3 px-2">
          <div class="btn p-1 nBtn nBbg siz15 btn-block button5">Ignore</div>
        </div>

        <div class="col-3 px-2">
          <div class="btn p-1 nBtn nBbg siz15 btn-block button4">Attack</div>
        </div>
    </div>
<!-- thread section end -->
    <div class="row Gp0m0 tmibg p-1 my-2" v-for="(ndta, i) in Nwsdta" :key="i">
      <div class="col-8 p-1">
        <div class="d-flex">
          <img
            class="bd-placeholder-img flex-shrink-0 rounded"
            width="40"
            height="40"
            :src="require('/src/assets/img/' + ndta.nwimg)"
          />
          <h6 class="ml-1 pb-1 mb-0 lh-sm">
            <strong class="d-block text-danger"
              ><h4 class="subtitlefnt">{{ ndta.nusrnm }}</h4></strong
            >
            <h6 class="dtlsfnt">
              {{ ndta.ndtls }}
            </h6>
          </h6>
        </div>
      </div>
      <div class="col-4 p-1">
        <div class="mlr2">
          <div class="btn nBtn p-1 mt-1 btn-block dtlsfnt">
            {{ ndta.nb1 }}
          </div>
        </div>
      </div>
      <div class="col-6 Gp0m0 p-1">
        <h6 class="mt-2 dtlsfnt">
          <i class="fas fa-clock">{{ ndta.tm }}</i>
        </h6>
      </div>

      <div class="col-3 Gp0m0 p-1">
        <div class="mlr1">
          <div class="btn-block button5 nBtn btnpdng text-center nBtn dtlsfnt">
            {{ ndta.nb2 }}
          </div>
        </div>
      </div>
      <div class="col-3 Gp0m0 p-1">
        <div class="mlr1">
          <div class="btn-block button4 nBtn btnpdng text-center nBtn dtlsfnt">
            {{ ndta.nb3 }}
          </div>
        </div>
      </div>
    </div>

    <div class="row Gp0m0 tmibg">
      <div class="col-12 text-center pb-2">
        <div class="btn nBtn btn-lg btn-block">Load More...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Nwsdta: [
        {
          nwimg: "1.png",
          nusrnm: "Username",
          ndtls: " lorem lipsum is a discription here and this will fix later",
          nb1: "button1",
          nb2: "Yes",
          nb3: "No",
          tm: "10:45:30 pm",
        },
        {
          nwimg: "1.png",
          nusrnm: "Username",
          ndtls: " lorem lipsum is a discription here and this will fix later",
          nb1: "button1",
          nb2: "Yes",
          nb3: "No",
          tm: "10:45:30 pm",
        },
        {
          nwimg: "1.png",
          nusrnm: "Username",
          ndtls: " lorem lipsum is a discription here and this will fix later",
          nb1: "button1",
          nb2: "Yes",
          nb3: "No",
          tm: "10:45:30 pm",
        },
        {
          nwimg: "1.png",
          nusrnm: "Username",
          ndtls: " lorem lipsum is a discription here and this will fix later",
          nb1: "button1",
          nb2: "Yes",
          nb3: "No",
          tm: "10:45:30 pm",
        },
      ],
    };
  },
};
</script>
