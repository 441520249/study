// 引入vue
import Vue from 'vue'
//引入根部APP组件
import App from './App.vue'

// 引入路由模块
import router from './config/router.js'
// 引入仓库
import store from './config/store.js'

// 引入全局样式
import './styles/common.css'
// 引入bootstrap样式
import 'bootstrap'
//引入 微信样式
import 'weui'


// 引入ajax库
import axios from 'axios'
// 把库挂载到原型链
Vue.prototype.$axios = axios
    // 引入jQuery库
import $ from 'jquery'
// 把库挂载到原型链
Vue.prototype.$ = $



Vue.config.productionTip = false


// Root容器
new Vue({
    render: h => h(App),
    // 挂载路由
    router,
    // 挂载仓库
    store
    // 把App根部组件挂载到#yohobuy的这个节点上
}).$mount('#yohobuy')