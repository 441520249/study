// 路由配置


// 引入vue模块
import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 显式安装该模块
Vue.use(VueRouter)


// 引入wfooter页面下的组件
import Index from '../pages/Index.vue'
import Classify from '../pages/Classify.vue'
import Shop from '../pages/Shop.vue'


//一级页面
//底部路由 底部组件
import Wfooter from "../pagesone/Wfooter.vue";
import Mine from '../pagesone/Mine.vue'
import Shopcar from '../pagesone/Shopcar.vue'
//详情页路由 详情页组件
import Detail from '../pagesone/Detail.vue'
import Login from '../pagesone/Login.vue'


// 配置路由
const routes = [
    // 如果url的路由为 /wfooter，进入Wfooter组件
    {
        path: '/wfooter',
        // 路由命名，方便跳转
        name: 'wfooter',
        component: Wfooter,
        children: [{
                // 嵌套路由里面的path要删掉/
                path: 'index',
                name: 'index',
                component: Index
            },
            {
                path: 'classify',
                name: 'classify',
                component: Classify
            },
            {
                path: 'shop',
                name: 'shop',
                component: Shop
            },
        ]
    },

    {
        path: '/mine',
        name: 'mine',
        component: Mine
    },
    {
        path: '/shopcar',
        name: 'shopcar',
        component: Shopcar
    },
    {
        path: '/detail/:id/:name',
        name: 'detail',
        component: Detail
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    // 重定向路由，比如刚进页面的时候，默认跳转的路由位置
    {
        path: '/',
        redirect: {
            name: 'index'
        }
    }
]


//实例该路由配置
const router = new VueRouter({
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         return { x: 0, y: 0 }
    //     }
    // }
})



router.beforeEach((to, from, next) => {
    //3秒后进入页面
    // setTimeout(() => {
    //     next()
    // }, 3000)

    //模拟登陆验证token
    let token = localStorage.getItem("token");
    // 如果token是123456的话进去目标页面，否则返回'/sign'页面
    if (token == 123456 || to.path == '/login') {
        next()
            // console.log(to.path, from)
    } else {
        // console.log(to.path, from)
        // 如果失败跳转登录页面
        router.push({
                name: "login"
            })
            // console.log('登录失败')
    }
})




export default router;