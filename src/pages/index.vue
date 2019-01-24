<template>
  <div>
    <Lheader />
    <Xsearch></Xsearch>
    <Lbanner></Lbanner>
    index
    <Wfooter></Wfooter>
  </div>
</template>
<script>
import Lheader from "../components/Lheader.vue";
import Xsearch from "../components/Xsearch.vue";
import Lbanner from "../components/Lbanner.vue";

import Wfooter from "../pagesone/Wfooter.vue";

export default {
  components: {
    Lheader,
    Xsearch,
    Lbanner,
    Wfooter
  }
}
  
</script>
<style scoped>

</style>
