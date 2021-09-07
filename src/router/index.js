// 路由模配置
import Vue from "vue"
import VueRouter from "vue-router"
import Msite from "@/pages/Msite/Msite";
import Order from "@/pages/Order/Order";
import profile from "@/pages/Profile/profile";
import Search from "@/pages/Search/Search";
import login from "@/pages/login/login"

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)
const routes = [{
        path: "/",
        redirect: "/msite"
    },
    {
        path: "/msite",
        component: Msite,
        meta:{
            showFooter: true
        }
    }, {
        path: "/search",
        component: Search,
        meta:{
            showFooter: true
        }
    }, {
        path: "/order",
        component: Order,
        meta:{
            showFooter: true
        }
    }, {
        path: "/profile",
        component: profile,
        meta:{
            showFooter: true
        }
    },{
        path:"/login",
        component: login
    }
]

const router = new VueRouter({
    //挂载路由
    routes,
    mode:"history"
})

export default router

