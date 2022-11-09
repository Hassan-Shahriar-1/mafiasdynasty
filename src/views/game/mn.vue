<template>
  <div>
    <!-- SOURCE -->
    <div ref="printMe">
      <!-- <h1>Print me!</h1> -->
      <img src="../../assets/img/item/Gold-bar.jpg" alt="" />
    </div>
    <button @click="print()">hbtoyou</button>
    <!-- OUTPUT -->
    <img class="card-img" :src="output" />
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      output: null,
    };
  },

  mounted() {
    this.print();
  },

  methods: {
    async print() {
      const el = this.$refs.printMe;

      const options = {
        type: "dataURL",
      };
      this.output = await this.$html2canvas(el, options);
      console.log(this.output);
      console.log(options);
      console.log(el);
    },
  },
};
</script> 