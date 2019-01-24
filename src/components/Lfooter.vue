<template>
  <div>
    <div class="footer-tab">
        <a class="tab-item current boys" href="//m.yohobuy.com/?go=1">
            <p class="iconfont tab-icon"></p>
            <p class="tab-name">首页</p>
        </a>
        <a class="tab-item " href="//m.yohobuy.com/cate">
            <p class="iconfont tab-icon"></p>
            <p class="tab-name">分类</p>
        </a>
        <a class="tab-item " id="guangUrl" href="//m.yohobuy.com/guang">
            <p class="iconfont tab-icon"></p>
            <p class="tab-name">逛</p>
        </a>
        <a class="tab-item " href="//m.yohobuy.com/cart/index/index" rel="nofollow">
            <p class="iconfont tab-icon"></p>
            <p class="tab-name">购物车</p>
        </a>
        <a class="tab-item " href="//m.yohobuy.com/home" rel="nofollow">
            <p class="iconfont tab-icon"></p>
            <p class="tab-name">我的</p>
        </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>


<style scoped>
    .footer-tab{
        background: #fff;
        border-top: 1px solid #b0b0b0;
        width:100%;
        height:50px;
        display:flex;
        position:fixed;
        bottom:0;
        justify-content: space-around;
        padding-top:10px;
    }
    .tab-icon{
        font-size:20px;
        line-height:20px;
    }
    .tab-name{
        font-size:8px;
        line-height:8px;
        margin-top:3px;
    }

       
</style>
