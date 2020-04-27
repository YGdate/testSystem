import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

// lzy
import List from '../components/lzy/List'

Vue.use(VueRouter)

  const routes = [
   {
     //登录
     path: '/',
     component: Home,
     children:[
      {
        path: 'list',
        component: List
      }
     ]
   }

]


// 路由拦截
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
