<template>
<div class="box">
<div @click="getGoodslist" class="weui-cell__bd">查看更多</div>
    <ul class="content">
        <li class="goodscontent" v-for="(goods,index) in goodslist" :key="index">
            <router-link to="/detail">
                <img class="goodsimg" :src="goods.deal_pic">
                <div class="goodscon">
                    <p v-text="goods.store_name"></p>
                    <div class="price">
                        <span  v-text="goods.original_price"></span>
                        <span class="market-price">¥299.00</span>
                    </div>
                </div>
            </router-link>  
        </li>
    </ul>
    <div @click="getGoodslist" class="weui-cell__bd">查看更多</div>
</div>
</template>
<script>

export default {
    data(){
        return{
            goodslist:[],
            currentPage: 0
        }
    },
    methods:{
        //获取数据的方法,运用axios
        async getGoodslist(){
            // await this.$store.commit("setLoadingIsShow", true);
            let goodslistdata = await this.$axios.get(
                "http://localhost:3000/findgoods",{
                    params:{
                        page: this.currentPage,
                        find:{},
                        qty:4
                    }
                }
            )
            // console.log(goodslistdata.data)
            this.goodslist = this.goodslist.concat(goodslistdata.data);
            this.currentPage++;
            // await this.$store.commit("setLoadingIsShow", false);
        },
        scrollEvent() {
            window.onscroll = () => {
                //变量scrollTop是滚动条滚动时，距离顶部的距离
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
                //变量windowHeight是可视区的高度
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight; 
                //变量scrollHeight是滚动条的总高度
                var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; 
                //滚动条到底部的条件
                let target = parseInt((scrollHeight - windowHeight) * 1);
                scrollTop = parseInt(scrollTop);
                if (scrollTop === target) {
                this.getGoodslist();
                }
                // console.log(
                //   "距顶部" +
                //     scrollTop.toFixed(0) +
                //     "可视区高度" +
                //     windowHeight +
                //     "滚动条总高度" +
                //     scrollHeight +
                //     this.loading
                // );
            };
        }
    },
     mounted() {
        //触发获取数据getGoodslist()的方法
        //在生命周期created后触发
        this.getGoodslist();
        this.scrollEvent();
    },
    components: {

    },
    destroyed() {

    },
}
</script>
<style scoped>
.box{
    padding-bottom:80px;
}
.weui-cell__bd{
    background-color:pink;
}
.content{
  
}
.goodscontent{
    display:inline-block;
    width:44%;
    margin-left:4%;
    margin-top:20px;
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