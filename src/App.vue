<template>
  <div id="app">
    <router-view></router-view>
  <!--在template使用-->
     <!--<Wloading />
     <Wsuccess />-->
  </div>
</template>

<script>
// 引用组件
// import Wloading from "./pagesone/Wloading.vue";
// import Wsuccess from "./pagesone/Wsuccess.vue";

export default {
  name: "app",
  components: {
    // 引用组件，在注册，然后在template使用
    // 注册组件
    // Wloading,
    // Wsuccess
  }
};
</script>

<style>
/*也可以在main.js引用全局样式 */

* {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
html,
body {
  overflow-x: hidden;
}
</style>
