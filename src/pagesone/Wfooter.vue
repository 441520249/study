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
            <router-link to="/wfooter/classify" class="weui-tabbar__item">
                <img src="../assets/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">分类</p>
            </router-link>
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
                <img src="../assets/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">我的</p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {

}
</script>


<style scoped>
.weui-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
}
       
</style>
