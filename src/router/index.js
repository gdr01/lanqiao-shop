import { createRouter,createWebHashHistory } from "vue-router"
import '../style/iconfont/iconfont.css'
//声明路由映射关系  项目中所有的映射关系  都放在index.js
//此处方便起见，先把登录页面设置为首页
const routes = [
    {
       path : '/',
       name : 'Home',     
       component : () => import('../views/home/Home.vue'),
       meta : {
        title : '首页'
       }
    },
    {
        //路径
        path : '/Login',
        //组件的名字
        name : 'Login',
        //组件的具体映射路径
        component : ()=> import('../views/login/Login.vue'),
        meta : {
            title : '登录'
        },
        beforeEnter(to,from,next){
            const {isLogin} = localStorage
            console.log('进入login也没前isLogin',isLogin)
            if(isLogin){
                next({name:"Home"})
            }else{
                next()
            }
        }
    },
    {
        //路径
        path: '/register',
        name: 'Register',
        component: () => import('../views/register/Register.vue'),
        meta: {
            title: '注册'
        },
        beforeEnter(to, from, next) {
            const {isLogin} = localStorage
            if (isLogin) {
                next({name: "Home"})
            } else {
                next()
            }
        },
    },
    {
        //店铺列表路由
        path:'/shopList',
        name:'ShopList',
        component: ()=>import('../views/shopList/ShopList.vue'),
        meta:{
            title:"店铺列表"
        }
    },
    {
        //店铺详情路由
        //:id代表传递路径参数
        path: '/shop/:id',
        name: 'Shop',
        component: () => import('../views/shop/Shop.vue'),
        meta:{
          title:"店铺详情"
        }
      }
]

//封装好的路由器对象，供外部使用
const router = createRouter({
    //createWebHashHistory 路劲模
    //createWebHistory 路径模式不带#    http://localhost:8080/login 在生产环境中不能直接访问项目，需要nginx转发
    history : createWebHashHistory(),
    linkActiveClass:'active',
    routes
})

//加入后置守卫
router.afterEach((to)=>{
    //更新页面的标题 对跳转页面的title进行赋值
    document.title = to.meta.title
})

//使用前置守卫，校验用户登录状态
//在用户请求进入页面之前，判断用户是否登录，如果没有登录 跳转登录页面
router.beforeEach((to,from,next)=>{
    //from从哪来  to到哪去  next下一步
    //判断用户是否登录 isLogin是用户登录状态
    if (to.name!='Login'){
        const {isLogin} = localStorage
        console.log('isLogin=',isLogin)
        const {name} = to
        //请求的页面如果是登录注册，就放行
        const {isLoginOrRegister} = (name=="Login" || name=="Register");
        //如果用户登录成功，或者用户请求的是登录或注册页
        console.log('isLoginOrRegister=',isLoginOrRegister)
        if(isLogin || isLoginOrRegister){
            //放行
            next()
        }else{
            next({path:"/Login"})
        }
    }else {
        next()
    }
})

export default router
    