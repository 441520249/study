<template>
  <div>
    <Lheader />
    <Xsearch></Xsearch>
    index
    <Wfooter></Wfooter>
  </div>
</template>
<script>
import Lheader from "../components/Lheader.vue";
import Xsearch from "../components/Xsearch.vue";

import Wfooter from "../pagesone/Wfooter.vue";

export default {
  components: {
    Lheader,
    Xsearch,
    Wfooter
  }
}
  
</script>
<style scoped>

</style>
