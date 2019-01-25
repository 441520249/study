<template>
<div class="box">
    <ul class="content">
        <li class="goodscontent" v-for="(goods,index) in goodslist" :key="index">
            <router-link to="/detail">
                <img class="goodsimg" :src="goods.deal_pic">
                <div class="goodscon">
                    <p v-text="goods.store_name"></p>
                    <div class="price">
                        <span  v-text="goods.original_price">¥199.00</span>
                        <span class="market-price">¥299.00</span>
                    </div>
                </div>
            </router-link>  
        </li>
    </ul>
</div>
</template>
<script>

export default {
    data(){
        return{
            goodslist:[]
        }
    },
    methods:{
        async getGoodslest(){
            let goodslistdata = await this.$axios.get(
                "http://localhost:3000/findgoods",{
                    params:{
                        page:1,
                        find:{},
                        qty:7
                    }
                }
            )
            // console.log(goodslistdata.data)
            this.goodslist = goodslistdata.data
        }
    },
      mounted() {
        this.getGoodslest();
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