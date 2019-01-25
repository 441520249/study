<template>
<div class="box">
    <div class="content">
        <div class="goodscontent">
            <img class="goodsimg" src="../assets/index_goods.webp"/>
            <div class="goodscon">
                <p>Hanes x karla The Original 纯白色T恤 试试地方第三方sdjhfjdsahfdshafdk和士大夫</p>
                <div class="price">
                    <span class="sale-price ">¥199.00</span>
                    <span class="market-price">¥299.00</span>
                </div>
            </div>
        </div>
        <div class="goodscontent">
            <img class="goodsimg" src="../assets/index_goods.webp"/>
            <div class="goodscon">
                <p>Hanes x karla The Original 纯白色T恤 试试地方第三方sdjhfjdsahfdshafdk和士大夫</p>
                <div class="price">
                    <span class="sale-price ">¥199.00</span>
                    <span class="market-price">¥299.00</span>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="goodscontent">
            <img class="goodsimg" src="../assets/index_goods.webp"/>
            <div class="goodscon">
                <p>Hanes x karla The Original 纯白色T恤 试试地方第三方sdjhfjdsahfdshafdk和士大夫</p>
                <div class="price">
                    <span class="sale-price ">¥199.00</span>
                    <span class="market-price">¥299.00</span>
                </div>
            </div>
        </div>
        <div class="goodscontent">
            <img class="goodsimg" src="../assets/index_goods.webp"/>
            <div class="goodscon">
                <p>Hanes x karla The Original 纯白色T恤 试试地方第三方sdjhfjdsahfdshafdk和士大夫</p>
                <div class="price">
                    <span class="sale-price ">¥199.00</span>
                    <span class="market-price">¥299.00</span>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  components: {

  },

}
  
</script>
<style scoped>
.box{
    padding-bottom:80px;
}
.content{
    display:flex;
    justify-content:space-around;
    margin-top:20px;
}
.goodscontent{
    width:46%;
}
.goodscontent .goodsimg{
     width:100%;
}
.goodscontent .goodscon{
     width:100%;
}
 .goodscon p{
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.price{
    white-space: nowrap;
}
.price .sale-price{
    color:red;
}
.price .market-price{
    color: #b0b0b0;
    font-size: 12px;
    text-decoration: line-through;
    margin-left:4px;
}
</style>