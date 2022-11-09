<template>
  <div>
    <weapon
      v-for="(Munin, Ke) in Munins"
      :key="Ke"
      :mImg="Munin.mImg"
      :ni="Munin.ni"
      :tl="Munin.tl"
      :tl2="Munin.tl2"
      :tl3="Munin.tl3"
      :tl4="Munin.tl4"
      :b1="Munin.b1"
      :b2="Munin.b2"
    >
    </weapon>
  </div>
</template>


<script>
export default {
  data() {
    return {
      Munins: [
        {
          mImg: "/src/assets/img/1.png",
          ni: "10",
          tl: "Mininos",
          tl2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          tl3: "Increase Your blood level",
          tl4: "Produce 100 blood per hour",
          b1: "Buy",
          b2: "sell",
        },
        {
          mImg: "/src/assets/img/1.png",
          ni: "10",
          tl: "Mininos",
          tl2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          tl3: "Increase Your blood level",
          tl4: "Produce 100 blood per hour",
          b1: "Buy",
          b2: "sell",
        },
        {
          mImg: "/src/assets/img/1.png",
          ni: "10",
          tl: "Mininos",
          tl2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          tl3: "Increase Your blood level",
          tl4: "Produce 100 blood per hour",
          b1: "Buy",
          b2: "sell",
        },
        {
          mImg: "/src/assets/img/1.png",
          ni: "10",
          tl: "Mininos",
          tl2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          tl3: "Increase Your blood level",
          tl4: "Produce 100 blood per hour",
          b1: "Buy",
          b2: "sell",
        },
        {
          mImg: "/src/assets/img/1.png",
          ni: "10",
          tl: "Mininos",
          tl2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          tl3: "Increase Your blood level",
          tl4: "Produce 100 blood per hour",
          b1: "Buy",
          b2: "sell",
        },
      ],
    };
  },
};
</script>