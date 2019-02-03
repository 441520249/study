<template>
    <div>
        <router-view></router-view>
        <div class="weui-tabbar">
            <router-link to="/wfooter/index" class="weui-tabbar__item weui-bar__item_on">
                <span style="display: inline-block;position: relative;">
                    <img src="../assets/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                    <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
                </span>
                <p class="weui-tabbar__label">首页</p>
            </router-link>
            <!-- 编程式导航 -->
            <a @click="toClassify" class="weui-tabbar__item">
                <img src="../assets/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">分类</p>
            </a>
            <!-- <router-link to="/wfooter/classify" class="weui-tabbar__item">
                <img src="../assets/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">分类</p>
            </router-link>-->
            <router-link to="/wfooter/shop" class="weui-tabbar__item">
                <span style="display: inline-block;position: relative;">
                    <img src="../assets/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                    <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
                </span>
                <p class="weui-tabbar__label">逛</p>
            </router-link>
            <router-link to="/shopcar" class="weui-tabbar__item">
                <img src="../assets/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">购物车</p>
            </router-link>
            <router-link to="/mine" class="weui-tabbar__item">
                <img :src="iconTabber" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">我的</p>
            </router-link>
        </div>
    </div>
</template>
<script>
//图片可以引用进来  /shopcar--/mine
import iconTabber from '../assets/icon_tabbar.png'
export default {
    data(){
        return {
            iconTabber
        };
    },
    // 编程式导航
    methods:{
        toClassify(){
            // this.$router.push('/wfooter/classify')
            // 根据命名路由来进行跳转
            // this.$router.push({name:'classify'})
            //编程式导航传参
            const userId = '123'
            this.$router.push({ name: 'classify', params: { userId }}) // -> /classify/123
            //this.$router.push({ path: `/classifys/${userId}` }) // -> /classify/123
        }
    }
}
</script>
<style scoped>
.weui-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
}
       
</style>
