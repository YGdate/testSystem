import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

// lzy
import List from '../components/lzy/List'
import Write from '../components/lzy/Write'
import Single from '../components/lzy/Single'
import More from '../components/lzy/More'
import Log from '../components/lzy/Log'
// lzy function
import Dxuan from '../components/lzy/fun-page/Dxuan'
import Dwgc from '../components/lzy/fun-page/Dwgc'
import Duoxuan from '../components/lzy/fun-page/Duoxuan'
import Bdx from '../components/lzy/fun-page/Bdx'
import Zuowen from '../components/lzy/fun-page/Zuowen'
import Panduan from '../components/lzy/fun-page/Panduan'
import Fanyi from '../components/lzy/fun-page/Fanyi'
import Tiankong from '../components/lzy/fun-page/Tiankong'
import Xuanci from '../components/lzy/fun-page/Xuanci'
import Ydlj from '../components/lzy/fun-page/Ydlj'
import Wxtk from '../components/lzy/fun-page/Wxtk'
import Qxw from '../components/lzy/fun-page/Qxw'

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
      },
      {
        path: 'write',
        component: Write,
        children: [
          {
            path: 'single',
            component: Single
          },
          {
            path: 'more',
            component: More
          }
        ]
      },
      {
        path: 'dxuan',
        component: Dxuan
      },
      {
        path: 'panduan',
        component: Panduan
      },
      {
        path: 'duoxuan',
        component: Duoxuan
      },
      {
        path: 'fanyi',
        component: Fanyi
      },
      {
        path: 'bdx',
        component: Bdx
      },
      {
        path: 'xuanci',
        component: Xuanci
      },
      {
        path: 'wxtk',
        component: Wxtk
      },
      {
        path: 'ydlj',
        component: Ydlj
      },
      {
        path: 'qxw',
        component: Qxw
      },
      {
        path: 'tiankong',
        component: Tiankong
      },
      {
        path: 'zuowen',
        component: Zuowen
      },
      {
        path: 'dwgc',
        component: Dwgc
      },
      {
        path: 'log',
        component: Log
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
