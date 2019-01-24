<template>
  <div>
      <div id="browser-header">
        <span class="nav-btn iconfont"></span>
        <span class="logo" style="transform: rotateX(1800deg);"></span>
        <span class="search-btn iconfont"><a href="//search.m.yohobuy.com/search"></a></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>


<style scoped>
  #browser-header{
    width:100%;
    background-color:#323232;
    height: 45px;
    line-height: 45px;
    overflow: hidden;
    position: relative;
  }
  .iconfont {
    color: #fff;
  }
  .nav-btn{
    bottom: 0;
    left: 0;
    margin:0 20px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 20px;
    z-index: 2;
  }
  .logo{
    background: url(//cdn.yoho.cn/yohobuywap-node/img/yohologo02.4b84a9fb7d.png) no-repeat 50%;
    background-size: 100%;
    display: block;
    height: 45px;
    margin: 0 auto;
    width: 104px;
  }
  .search-btn{
    bottom: 10px;
    right: 0;
    margin:0 20px;
    position: absolute;
    width: 20px;
    z-index: 2;
  }
  .search-btn a{
    color: #fff;
    display: block;
    font-size: 20px;
    line-height: 20px;
  }

</style>
