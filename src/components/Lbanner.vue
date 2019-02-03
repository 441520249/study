<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    </ol>
    <div class="carousel-inner">
      <li><img src="../assets/banner3.jpg" class="d-block" style="width = 100px"></li>
      <li class="carousel-item" v-for="(item,index) in imgUrl" :key="index"><img class="d-block w-100" :src="item"/></li>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return {}
  },
  props: {
    imgUrl: {
      type: Array,
      default:()=>[]
    },
    height:{
      type: Number,
      default:300
    }
  },
  mounted(){
    console.log(this.imgUrl)
  },

};
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
//错误路径
// import './node_modules/bootstrap/dist/css/bootstrap.css';
// import './node_modules/bootstrap/dist/js/bootstrap.js';

</script>
<style scoped>

</style>