<template>
  <div>
    <Lheader />
    <Wsearch></Wsearch>
    <Lbanner></Lbanner>
    <Lindexgoods></Lindexgoods>

  </div>
</template>
<script>
import Lheader from "../components/Lheader.vue";
import Wsearch from "../components/Wsearch.vue";
import Lbanner from "../components/Lbanner.vue";
import Lindexgoods from "../components/Lindexgoods.vue";

export default {
  components: {
    Lheader,
    Wsearch,
    Lbanner,
    Lindexgoods
  },
  destroyed() {
    // console.log("index88")
  },
}
 
</script>
<style scoped>

</style>
