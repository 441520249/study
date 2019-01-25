<template>
  <div>
    <Lheader />
    <Xsearch></Xsearch>
    <Lbanner></Lbanner>
    <Lindexgoods></Lindexgoods>
    <Wfooter></Wfooter>
  </div>
</template>
<script>
import Lheader from "../components/Lheader.vue";
import Xsearch from "../components/Xsearch.vue";
import Lbanner from "../components/Lbanner.vue";
import Lindexgoods from "../components/Lindexgoods.vue";
import Wfooter from "../pagesone/Wfooter.vue";

export default {
  components: {
    Lheader,
    Xsearch,
    Lbanner,
    Lindexgoods,
    Wfooter
  },
  destroyed() {
    // console.log("index88")
  },
}
  
</script>
<style scoped>

</style>
