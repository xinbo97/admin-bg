import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: './login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    }

]

/* 挂载路由导航守卫 */
// router.beforeEach((to, from, next) => {
/*
1. to代表将要访问的路径
2. from代表从那个路径过来的
3. next代表是一个函数,有两种表达方式
 next() 直接放行
 next('/home')代表强制跳转到指定路径页面
})
*/

const router = new VueRouter({
    routes
})
// 挂载路由导航守卫，防止用户在没有权限的情况下直接通过url访问到页面
router.beforeEach((to, from, next) => {
    // 如果用户访问登陆页，直接放行
    if (to.path === '/login') return next();
    // 从sessionStorage中获取保存的token
    const tokenStr = window.sessionStorage.getItem('token');
    // 没有token，强制跳转到登陆页
    if (!tokenStr) return next('/login');
    next()
})


export default router
