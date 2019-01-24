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
      <div class="carousel-item active">
        <img class="d-block w-100" src="../assets/banner1.jpg">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/banner2.jpg">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/banner3.jpg">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/banner4.jpg">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/banner5.jpg">
      </div>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
//错误路径
// import './node_modules/bootstrap/dist/css/bootstrap.css';
// import './node_modules/bootstrap/dist/js/bootstrap.js';

export default {};
</script>
<style scoped>

</style>