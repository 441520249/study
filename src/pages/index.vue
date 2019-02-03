<template>
  <div>
    <Lheader />
    <Wsearch></Wsearch>
    <Lbanner :imgUrl="bannerUrl" :height="bannerHeight"></Lbanner>
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
  data(){
    return {
      bannerUrl:["../assets/banner1.jpg","../assets/banner2.jpg","../assets/banner3.jpg","../assets/banner4.jpg","../assets/banner5.jpg"],
      bannerHeight:400
    }
  },
  destroyed() {
    // console.log("index88")
  },
}
 
</script>
<style scoped>

</style>
