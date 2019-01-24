// 路由配置

// 引入vue模块
import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 显式安装该模块
Vue.use(VueRouter)

// 引入index页面组件
import index from '../pages/index.vue'
import classify from '../pages/classify.vue'
import shop from '../pages/shop.vue'

//一级页面
import wfooter from "../pagesone/Wfooter.vue";

import mine from '../pagesone/mine.vue'
import shopcar from '../pagesone/shopcar.vue'

const routes = [
    // 如果url的路由为 /foo，进入Foo组件
    {
        path: '/wfooter',
        name: 'wfooter',
        component: wfooter,
        children: [{
                path: 'index',
                name: 'index',
                component: index
            },
            {
                path: 'classify',
                name: 'classify',
                component: classify
            },
            {
                path: 'shop',
                name: 'shop',
                component: shop
            },
        ]
    },

    {
        path: '/mine',
        name: 'mine',
        component: mine
    },
    {
        path: '/shopcar',
        name: 'shopcar',
        component: shopcar
    },

    // 重定向路由，比如刚进页面的时候，默认跳转的路由位置
    {
        path: '/',
        redirect: {
            name: 'index'
        }
    }
]

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default router;