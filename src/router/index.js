import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Publisher from '../components/Publisher.vue'


// lzy
import List from '../components/lzy/List'

//发布者子页面
import Promulgator from '../components/publisher/Promulgator.vue'
import ReportStatistics from '../components/publisher/ReportStatistics.vue'
import ReportDetails from '../components/publisher/ReportDetails.vue'

Vue.use(VueRouter)

const routes = [{
  //题库录入
  path: '/',
  component: Home,
  children: [{
      path: 'list',
      component: List
    },

  ]
}, {
  //发布者
  path: '/publisher',
  component: Publisher,
  children: [{
    //发布者首页
    path: 'promulgator',
    component: Promulgator
  },
  {
    //报告统计
    path: 'reportStatistics',
    component: ReportStatistics
  },
   {
     //报告详情
     path: 'reportDetails',
     component: ReportDetails
   },
]
}]


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